// Firebase Connection Test Script
// Run this with: npm run dev and check the browser console

import { db, auth, isFirebaseConfigured } from './src/config/firebase.ts';
import { collection, getDocs } from 'firebase/firestore';

// Test Firebase connection in the browser console

console.log('🔥 Firebase Connection Test Starting...\n');

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Test 1: Check environment variables
console.log('📋 Test 1: Environment Variables Check');
console.log('=====================================');
const requiredVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN', 
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
];

let missingVars = [];
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (!value || value === 'your-project-id' || value.includes('missing')) {
    console.log(`❌ ${varName}: MISSING or invalid`);
    missingVars.push(varName);
  } else {
    console.log(`✅ ${varName}: ${value.substring(0, 10)}...`);
  }
});

if (missingVars.length > 0) {
  console.log(`\n❌ Missing ${missingVars.length} required environment variables`);
  console.log('Please set these in your .env file or environment:\n');
  missingVars.forEach(varName => console.log(`  ${varName}=your_value_here`));
  process.exit(1);
}

console.log('\n✅ All environment variables are set!\n');

// Test 2: Initialize Firebase
console.log('🚀 Test 2: Firebase Initialization');
console.log('==================================');

let app, db, auth;

try {
  app = initializeApp(firebaseConfig);
  console.log('✅ Firebase app initialized successfully');
  
  db = getFirestore(app);
  console.log('✅ Firestore initialized successfully');
  
  auth = getAuth(app);
  console.log('✅ Auth initialized successfully');
  
} catch (error) {
  console.log('❌ Firebase initialization failed:', error.message);
  process.exit(1);
}

// Test 3: Test Firestore Connection
console.log('\n🗄️  Test 3: Firestore Connection Test');
console.log('====================================');

try {
  // Try to read from a collection (this will test permissions and connection)
  const usersRef = collection(db, 'users');
  const snapshot = await getDocs(usersRef);
  
  console.log(`✅ Firestore connection successful!`);
  console.log(`📊 Found ${snapshot.size} documents in 'users' collection`);
  
  if (snapshot.size > 0) {
    console.log('📋 Sample user data:');
    snapshot.docs.slice(0, 3).forEach((doc, index) => {
      const data = doc.data();
      console.log(`   ${index + 1}. ${data.email || 'No email'} (${data.role || 'No role'})`);
    });
  }
  
} catch (error) {
  console.log('❌ Firestore connection failed:', error.message);
  
  if (error.code === 'permission-denied') {
    console.log('💡 This might be due to Firestore security rules. Check your rules in the Firebase console.');
  } else if (error.code === 'unavailable') {
    console.log('💡 Firebase service might be temporarily unavailable. Try again in a moment.');
  }
}

// Test 4: Test Auth Configuration
console.log('\n🔐 Test 4: Auth Configuration Test');
console.log('=================================');

try {
  console.log(`✅ Auth domain: ${auth.config.authDomain}`);
  console.log(`✅ Auth project: ${auth.config.apiKey ? 'API key configured' : 'No API key'}`);
  console.log('✅ Auth service is ready for authentication');
} catch (error) {
  console.log('❌ Auth configuration error:', error.message);
}

console.log('\n🎉 Firebase connection test completed!');
console.log('\nNext steps:');
console.log('1. If you see any errors above, fix the configuration issues');
console.log('2. Test authentication by logging into your app');
console.log('3. Check the Firebase console for any security rule issues');
