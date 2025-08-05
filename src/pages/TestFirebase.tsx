import React from 'react';
import FirebaseTest from '@/components/FirebaseTest';

const TestFirebase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Firebase Connection Test
          </h1>
          <p className="text-gray-600">
            This page tests your Firebase configuration and connection
          </p>
        </div>
        
        <FirebaseTest />
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestFirebase;
