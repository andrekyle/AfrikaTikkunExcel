// Test user registration script
// Copy and paste this into browser console at http://localhost:8080

const testUserRegistration = async () => {
  try {
    console.log('🧪 Testing user registration process...');
    
    // Import the user service
    const userService = await import('./src/services/firebaseUserService.ts');
    
    // Test data for a new user
    const testUserData = {
      email: 'testuser@gmail.com',
      name: 'Test User'
    };
    
    console.log('📝 Testing with user data:', testUserData);
    
    // Test the processUserLogin function
    console.log('🔄 Calling processUserLogin...');
    const result = await userService.processUserLogin(testUserData);
    
    console.log('✅ User registration result:', result);
    
    // Verify the user was added
    console.log('🔍 Verifying user was added to database...');
    const allUsers = await userService.getUsers();
    const userExists = allUsers.some(u => u.email === testUserData.email);
    
    console.log(`👤 User exists in database: ${userExists}`);
    console.log(`📊 Total users in database: ${allUsers.length}`);
    console.log('📧 All user emails:', allUsers.map(u => u.email));
    
    return {
      registrationResult: result,
      userExists,
      totalUsers: allUsers.length,
      allUsers: allUsers.map(u => ({ email: u.email, status: u.status, role: u.role }))
    };
    
  } catch (error) {
    console.error('❌ Error testing user registration:', error);
    console.error('🔧 Error details:', error.message);
    return { error: error.message };
  }
};

// Run the test
testUserRegistration();
