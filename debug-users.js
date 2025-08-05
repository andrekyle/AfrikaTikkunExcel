// Debug script to check users in Firestore
console.log('🔍 Debugging Firestore users...');

// This script should be run in the browser console on your app
// Go to http://localhost:8082/test-firebase and run this in the console:

const debugUsers = async () => {
  try {
    // Import Firebase functions (these should be available in your app)
    const { db } = await import('./src/config/firebase.ts');
    const { collection, getDocs } = await import('firebase/firestore');
    
    console.log('📊 Fetching all users from Firestore...');
    
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollection);
    
    console.log(`📈 Total documents in users collection: ${querySnapshot.size}`);
    
    const users = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      console.log(`👤 User found:`, {
        id: doc.id,
        email: userData.email,
        name: userData.name,
        role: userData.role,
        status: userData.status,
        createdAt: userData.createdAt,
        lastLoginAt: userData.lastLoginAt
      });
      users.push({ id: doc.id, ...userData });
    });
    
    console.log(`✅ Total users retrieved: ${users.length}`);
    return users;
    
  } catch (error) {
    console.error('❌ Error fetching users:', error);
  }
};

// Call the function
debugUsers();
