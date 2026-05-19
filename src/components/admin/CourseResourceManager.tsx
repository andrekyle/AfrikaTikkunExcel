import { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Trash2, File as FileIcon, Loader2, Download } from 'lucide-react';
import {
  COURSES,
  CourseId,
  CourseResource,
  deleteResource,
  formatBytes,
  listResources,
  uploadResource,
} from '@/services/courseResourceService';

const MAX_BYTES = 25 * 1024 * 1024; // 25 MB

export default function CourseResourceManager() {
  const { user } = useAuth0();
  const { toast } = useToast();
  const [courseId, setCourseId] = useState<CourseId>('excel-fundamentals');
  const [resources, setResources] = useState<CourseResource[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = async (id: CourseId) => {
    setLoading(true);
    try {
      const items = await listResources(id);
      setResources(items);
    } catch (e) {
      console.error(e);
      toast({ title: 'Error', description: 'Could not load files.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(courseId); }, [courseId]);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        if (file.size > MAX_BYTES) {
          toast({
            title: 'File too large',
            description: `${file.name} exceeds 25 MB limit.`,
            variant: 'destructive',
          });
          continue;
        }
        setProgress(0);
        await uploadResource(
          courseId,
          file,
          user?.email ?? 'unknown',
          description || undefined,
          (p) => setProgress(p)
        );
        toast({ title: 'Uploaded', description: file.name });
      }
      setDescription('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      await refresh(courseId);
    } catch (e) {
      console.error(e);
      toast({ title: 'Upload failed', description: String(e), variant: 'destructive' });
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const handleDelete = async (r: CourseResource) => {
    if (!confirm(`Delete "${r.fileName}"? This cannot be undone.`)) return;
    try {
      await deleteResource(r.id, r.storagePath);
      toast({ title: 'Deleted', description: r.fileName });
      await refresh(courseId);
    } catch (e) {
      console.error(e);
      toast({ title: 'Delete failed', description: String(e), variant: 'destructive' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Files</CardTitle>
        <CardDescription>
          Upload course materials for students. Files appear on the corresponding course page.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid sm:grid-cols-3 gap-2">
          {COURSES.map((c) => (
            <Button
              key={c.id}
              variant={courseId === c.id ? 'default' : 'outline'}
              onClick={() => setCourseId(c.id)}
            >
              {c.label}
            </Button>
          ))}
        </div>

        <div className="border rounded-lg p-4 space-y-3 bg-muted/30">
          <div className="space-y-2">
            <Label htmlFor="file-desc">Description (optional)</Label>
            <Input
              id="file-desc"
              placeholder="e.g. Week 1 practice workbook"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file-input">Files (max 25 MB each)</Label>
            <Input
              id="file-input"
              ref={fileInputRef}
              type="file"
              multiple
              disabled={uploading}
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>
          {uploading && (
            <div className="space-y-1">
              <Progress value={progress} />
              <p className="text-xs text-muted-foreground">
                Uploading… {progress.toFixed(0)}%
              </p>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Files for {COURSES.find((c) => c.id === courseId)?.label} ({resources.length})
          </h3>
          {loading ? (
            <div className="flex justify-center py-6">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          ) : resources.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No files uploaded yet.
            </p>
          ) : (
            <ul className="divide-y border rounded-lg">
              {resources.map((r) => (
                <li key={r.id} className="flex items-center gap-3 p-3">
                  <FileIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{r.fileName}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatBytes(r.sizeBytes)} ·{' '}
                      {r.uploadedAt instanceof Date
                        ? r.uploadedAt.toLocaleDateString()
                        : ''}
                      {r.description ? ` · ${r.description}` : ''}
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href={r.downloadURL} target="_blank" rel="noreferrer" download>
                      <Download className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(r)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
