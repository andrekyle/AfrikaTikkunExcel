import { db, storage } from '@/config/firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  UploadTaskSnapshot,
} from 'firebase/storage';

export type CourseId = 'excel-fundamentals' | 'advanced-excel' | 'excel-vba-ai';

export const COURSES: { id: CourseId; label: string }[] = [
  { id: 'excel-fundamentals', label: 'Excel Fundamentals' },
  { id: 'advanced-excel', label: 'Advanced Excel' },
  { id: 'excel-vba-ai', label: 'Excel VBA & AI' },
];

export interface CourseResource {
  id: string;
  courseId: CourseId;
  fileName: string;
  storagePath: string;
  downloadURL: string;
  sizeBytes: number;
  contentType: string;
  uploadedBy: string;
  uploadedAt: Date;
  description?: string;
}

const COLLECTION = 'courseResources';

const sanitizeFileName = (name: string) =>
  name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 200);

export const uploadResource = (
  courseId: CourseId,
  file: File,
  uploadedBy: string,
  description: string | undefined,
  onProgress?: (pct: number) => void
): Promise<CourseResource> => {
  return new Promise((resolve, reject) => {
    const safeName = sanitizeFileName(file.name);
    const path = `course-resources/${courseId}/${Date.now()}_${safeName}`;
    const ref = storageRef(storage, path);
    const task = uploadBytesResumable(ref, file, { contentType: file.type });

    task.on(
      'state_changed',
      (snap: UploadTaskSnapshot) => {
        const pct = snap.totalBytes
          ? (snap.bytesTransferred / snap.totalBytes) * 100
          : 0;
        onProgress?.(pct);
      },
      (err) => reject(err),
      async () => {
        try {
          const downloadURL = await getDownloadURL(task.snapshot.ref);
          const docRef = await addDoc(collection(db, COLLECTION), {
            courseId,
            fileName: file.name,
            storagePath: path,
            downloadURL,
            sizeBytes: file.size,
            contentType: file.type || 'application/octet-stream',
            uploadedBy,
            uploadedAt: serverTimestamp(),
            description: description ?? '',
          });
          resolve({
            id: docRef.id,
            courseId,
            fileName: file.name,
            storagePath: path,
            downloadURL,
            sizeBytes: file.size,
            contentType: file.type || 'application/octet-stream',
            uploadedBy,
            uploadedAt: new Date(),
            description,
          });
        } catch (e) {
          reject(e);
        }
      }
    );
  });
};

export const listResources = async (courseId: CourseId): Promise<CourseResource[]> => {
  const q = query(
    collection(db, COLLECTION),
    where('courseId', '==', courseId),
    orderBy('uploadedAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data() as Omit<CourseResource, 'id' | 'uploadedAt'> & {
      uploadedAt?: Timestamp;
    };
    return {
      id: d.id,
      ...data,
      uploadedAt: data.uploadedAt?.toDate?.() ?? new Date(),
    } as CourseResource;
  });
};

export const deleteResource = async (
  id: string,
  storagePath: string
): Promise<void> => {
  try {
    await deleteObject(storageRef(storage, storagePath));
  } catch (e) {
    // If object missing, still remove the metadata doc.
    console.warn('Storage delete failed (continuing):', e);
  }
  await deleteDoc(doc(db, COLLECTION, id));
};

export const formatBytes = (bytes: number): string => {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(n >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
};
