import React, { useState, useEffect } from 'react';
import { db, auth, isFirebaseConfigured } from '@/config/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TestResult {
  name: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  details?: string;
}

const FirebaseTest: React.FC = () => {
  const [tests, setTests] = useState<TestResult[]>([
    { name: 'Configuration Check', status: 'pending', message: 'Checking Firebase configuration...' },
    { name: 'Firestore Connection', status: 'pending', message: 'Testing Firestore connection...' },
    { name: 'Read Test', status: 'pending', message: 'Testing read permissions...' },
    { name: 'Write Test', status: 'pending', message: 'Testing write permissions...' },
    { name: 'Delete Test', status: 'pending', message: 'Testing delete permissions...' }
  ]);

  const updateTest = (index: number, status: TestResult['status'], message: string, details?: string) => {
    setTests(prev => prev.map((test, i) => 
      i === index ? { ...test, status, message, details } : test
    ));
  };

  const runTests = async () => {
    // Reset all tests
    setTests(prev => prev.map(test => ({ ...test, status: 'pending' })));

    try {
      // Test 1: Configuration Check
      if (isFirebaseConfigured()) {
        updateTest(0, 'success', 'Firebase configuration is valid');
      } else {
        updateTest(0, 'error', 'Firebase configuration is missing or invalid', 
          'Check your environment variables in .env file');
        return;
      }

      // Test 2: Firestore Connection
      try {
        const testCollection = collection(db, 'connection-test');
        updateTest(1, 'success', 'Firestore connection established');
      } catch (error) {
        updateTest(1, 'error', 'Failed to connect to Firestore', 
          error instanceof Error ? error.message : 'Unknown error');
        return;
      }

      // Test 3: Read Test
      try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);
        updateTest(2, 'success', `Read test successful - Found ${snapshot.size} users`);
      } catch (error) {
        updateTest(2, 'error', 'Read test failed', 
          error instanceof Error ? error.message : 'Unknown error');
      }

      // Test 4: Write Test
      try {
        const testDocRef = doc(db, 'connection-test', 'test-doc');
        await setDoc(testDocRef, {
          timestamp: new Date(),
          test: 'Firebase connection test',
          status: 'success'
        });
        updateTest(3, 'success', 'Write test successful');
      } catch (error) {
        updateTest(3, 'error', 'Write test failed', 
          error instanceof Error ? error.message : 'Unknown error');
      }

      // Test 5: Delete Test
      try {
        const testDocRef = doc(db, 'connection-test', 'test-doc');
        await deleteDoc(testDocRef);
        updateTest(4, 'success', 'Delete test successful');
      } catch (error) {
        updateTest(4, 'error', 'Delete test failed', 
          error instanceof Error ? error.message : 'Unknown error');
      }

    } catch (error) {
      console.error('Firebase test error:', error);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  const getStatusBadge = (status: TestResult['status']) => {
    switch (status) {
      case 'success':
        return <Badge variant="default" className="bg-green-500">✅ Pass</Badge>;
      case 'error':
        return <Badge variant="destructive">❌ Fail</Badge>;
      case 'pending':
        return <Badge variant="secondary">⏳ Running</Badge>;
    }
  };

  const overallStatus = tests.every(test => test.status === 'success') ? 'success' :
                       tests.some(test => test.status === 'error') ? 'error' : 'pending';

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          🔥 Firebase Connection Test
          <Button onClick={runTests} variant="outline" size="sm">
            Rerun Tests
          </Button>
        </CardTitle>
        <div className="flex items-center gap-2">
          <span>Overall Status:</span>
          {getStatusBadge(overallStatus)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tests.map((test, index) => (
            <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{test.name}</span>
                  {getStatusBadge(test.status)}
                </div>
                <p className="text-sm text-muted-foreground">{test.message}</p>
                {test.details && (
                  <p className="text-xs text-red-600 mt-1 bg-red-50 p-2 rounded">
                    {test.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium mb-2">Environment Info:</h4>
          <div className="text-sm space-y-1">
            <p>• Environment: {import.meta.env.DEV ? 'Development' : 'Production'}</p>
            <p>• Hostname: {window.location.hostname}</p>
            <p>• Auth Domain: {auth.config?.authDomain || 'Not configured'}</p>
            <p>• Project ID: {import.meta.env.VITE_FIREBASE_PROJECT_ID || 'Not set'}</p>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          <p>💡 If tests fail, check:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Environment variables are set correctly</li>
            <li>Firebase project exists and is active</li>
            <li>Firestore security rules allow read/write access</li>
            <li>Network connection is stable</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FirebaseTest;
