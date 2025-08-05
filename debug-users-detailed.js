// Enhanced user debugging script
// Copy and paste this into browser console at http://localhost:8080/test-firebase

const debugUsersDetailed = async () => {
  try {
    console.log('🔍 Starting detailed user debug...');
    
    // Import Firebase modules
    const { db } = await import('./src/config/firebase.ts');
    const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
    
    console.log('📡 Firebase connection established');
    
    // Get users collection
    const usersCollection = collection(db, 'users');
    const usersQuery = query(usersCollection, orderBy('email'));
    
    console.log('📋 Querying users collection...');
    const querySnapshot = await getDocs(usersQuery);
    
    console.log(`📊 Total documents found: ${querySnapshot.size}`);
    
    if (querySnapshot.size === 0) {
      console.log('❌ No users found in Firestore database');
      console.log('🔧 This could mean:');
      console.log('   - No users have registered yet');
      console.log('   - Firebase connection issues');
      console.log('   - Wrong collection name');
      return;
    }
    
    // Process each user
    const users = [];
    querySnapshot.forEach((doc, index) => {
      const userData = doc.data();
      const docId = doc.id;
      
      console.log(`\n👤 User ${index + 1}:`);
      console.log(`   Document ID: ${docId}`);
      console.log(`   Email: ${userData.email}`);
      console.log(`   Name: ${userData.name}`);
      console.log(`   Status: ${userData.status}`);
      console.log(`   Role: ${userData.role}`);
      console.log(`   Created: ${userData.createdAt}`);
      console.log(`   Last Login: ${userData.lastLogin}`);
      console.log(`   Progress: ${userData.progress}`);
      console.log(`   Completed Modules: ${userData.completedModules?.length || 0}`);
      
      users.push({
        docId,
        email: userData.email,
        name: userData.name,
        status: userData.status,
        role: userData.role
      });
    });
    
    console.log(`\n✅ Summary: Found ${users.length} users`);
    console.log('📧 Email addresses:', users.map(u => u.email));
    console.log('📊 User statuses:', users.map(u => `${u.email}: ${u.status}`));
    console.log('🔑 User roles:', users.map(u => `${u.email}: ${u.role}`));
    
    // Test if admin dashboard would show these users
    const activeUsers = users.filter(u => u.status === 'active');
    const pendingUsers = users.filter(u => u.status === 'pending');
    
    console.log(`\n🟢 Active users (should show in dashboard): ${activeUsers.length}`);
    activeUsers.forEach(u => console.log(`   ✅ ${u.email} (${u.role})`));
    
    console.log(`\n🟡 Pending users (might be hidden): ${pendingUsers.length}`);
    pendingUsers.forEach(u => console.log(`   ⏳ ${u.email} (${u.role})`));
    
    return users;
    
  } catch (error) {
    console.error('❌ Error debugging users:', error);
    console.error('🔧 Error details:', error.message);
  }
};

// Run the debug
debugUsersDetailed();
