import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator, FirebaseStorage } from "firebase/storage";

// Check for environment variables and provide better debug info
if (!import.meta.env.VITE_FIREBASE_PROJECT_ID || 
    import.meta.env.VITE_FIREBASE_PROJECT_ID === 'your-project-id') {
  console.warn('⚠️ Firebase project ID not properly configured! Please set the VITE_FIREBASE_PROJECT_ID env variable.');
}

// Your web app's Firebase configuration with better error handling
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'missing-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'missing-auth-domain',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'missing-project-id',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'missing-storage-bucket',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'missing-sender-id',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'missing-app-id',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'missing-measurement-id'
};

// Log Firebase configuration status for debugging
console.log(`Firebase config status: projectId=${firebaseConfig.projectId}`, 
           `(${firebaseConfig.projectId !== 'missing-project-id' ? 'OK' : 'MISSING'})`);

// Development vs Production detection
const isDevelopment = import.meta.env.DEV || 
                      window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';

// Initialize Firebase with better error handling
let app, db, auth;
let storage: FirebaseStorage;

try {
  // Log attempt to initialize Firebase
  console.log('Initializing Firebase with config:', 
    { projectId: firebaseConfig.projectId, authDomain: firebaseConfig.authDomain });
  
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
  
  // Use emulator in development if needed
  if (isDevelopment && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Connected to Firebase emulators');
  }
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  
  // Create fallback instances to prevent app from crashing completely
  // These won't work but at least the app won't crash with null references
  if (!app) {
    console.warn('Using fallback Firebase app instance');
    app = initializeApp({
      apiKey: 'demo-key',
      authDomain: 'demo-app.firebaseapp.com',
      projectId: 'demo-project',
    });
  }
  
  if (!db) db = getFirestore(app);
  if (!auth) auth = getAuth(app);
  if (!storage) storage = getStorage(app);
}

// Export Firebase instances
export { app, db, auth, storage };

// Export a utility to check if Firebase is properly configured
export const isFirebaseConfigured = () => {
  return firebaseConfig.projectId !== 'missing-project-id' && 
         firebaseConfig.apiKey !== 'missing-api-key';
};
