import { db, isFirebaseConfigured } from '@/config/firebase';
import { collection, doc, getDoc, getDocs, setDoc, query, where, updateDoc, deleteDoc } from 'firebase/firestore';
import { User, UserStatus, UserRole } from '@/types/user';

// Default super admin account
const SUPER_ADMIN_EMAIL = 'andresnell29@gmail.com';

// Collection name for users
const USERS_COLLECTION = 'users';

// Constants for retry logic
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Initialize super admin user if not exists
const initializeSuperAdmin = async (): Promise<void> => {
  // Skip if Firebase isn't properly configured
  if (!isFirebaseConfigured()) {
    console.warn('Skipping super admin initialization - Firebase not properly configured');
    return;
  }
  
  try {
    const superAdminRef = doc(db, USERS_COLLECTION, SUPER_ADMIN_EMAIL);
    const superAdminSnap = await getDoc(superAdminRef);
    
    if (!superAdminSnap.exists()) {
      const superAdminData: User = {
        id: SUPER_ADMIN_EMAIL, // Use email as ID for consistency with document ID
        email: SUPER_ADMIN_EMAIL,
        name: 'Andre Snell',
        status: 'active',
        progress: 100,
        lastLogin: new Date().toISOString(),
        completedModules: ['Excel Fundamentals', 'Data Analysis', 'Advanced Excel', 'VBA'],
        role: 'super_admin',
        createdAt: new Date().toISOString()
      };
      
      await setDoc(superAdminRef, superAdminData);
      console.log('Super admin user initialized in Firestore');
    }
  } catch (error) {
    console.error('Failed to initialize super admin:', error);
    // Non-blocking error - we can continue without super admin initialization
  }
};

// Call the initialization function
initializeSuperAdmin().catch(error => {
  console.error('Error initializing super admin user:', error);
});

/**
 * Get all users from Firestore with retry logic
 */
export const getUsers = async (): Promise<User[]> => {
  // Check if Firebase is properly configured
  if (!isFirebaseConfigured()) {
    console.warn('Firebase not properly configured. Cannot get users.');
    return [];
  }
  
  let retries = 0;
  
  while (retries <= MAX_RETRIES) {
    try {
      const usersCollection = collection(db, USERS_COLLECTION);
      const querySnapshot = await getDocs(usersCollection);
      
      const users: User[] = [];
      console.log(`📊 Processing ${querySnapshot.size} documents from Firestore`);
      
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        // Skip deleted users
        if (userData.status === 'deleted') {
          console.log(`🗑️ Skipping deleted user: ${userData.email}`);
          return;
        }
        
        // Ensure the id field matches the document ID (email) for consistent linking
        const userWithCorrectId = {
          ...userData,
          id: doc.id // Use the Firestore document ID (which is the email)
        };
        console.log(`👤 Found user: ${userWithCorrectId.email} (${userWithCorrectId.name}) - Status: ${userWithCorrectId.status} - ID: ${userWithCorrectId.id}`);
        users.push(userWithCorrectId);
      });
      
      if (users.length === 0) {
        console.log('❌ No users found in Firestore or collection is empty');
      } else {
        console.log(`✅ Retrieved ${users.length} users from Firestore:`, users.map(u => u.email));
      }
      
      return users;
    } catch (error) {
      console.error(`Error getting users from Firestore (attempt ${retries + 1}):`, error);
      retries++;
      
      if (retries <= MAX_RETRIES) {
        // Wait before retrying
        console.log(`Retrying in ${RETRY_DELAY}ms...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      }
    }
  }
  
  console.warn('Max retries reached when getting users from Firestore');
  return [];
};

/**
 * Get a user by email
 */
export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  try {
    const userRef = doc(db, USERS_COLLECTION, email);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data() as User;
    }
    
    return undefined;
  } catch (error) {
    console.error(`Error getting user by email ${email}:`, error);
    return undefined;
  }
};

/**
 * Add or update a user
 */
export const saveUser = async (userData: Partial<User> & { email: string }): Promise<User> => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userData.email);
    const userSnap = await getDoc(userRef);
    
    let updatedUser: User;
    
    if (userSnap.exists()) {
      // Update existing user
      const existingUser = userSnap.data() as User;
      updatedUser = {
        ...existingUser,
        ...userData,
        lastLogin: new Date().toISOString()
      };
    } else {
      // Create new user
      updatedUser = {
        id: userData.email, // Use email as ID to match Firestore document ID
        email: userData.email,
        name: userData.name || userData.email.split('@')[0],
        status: userData.status || 'pending',
        progress: userData.progress || 0,
        lastLogin: new Date().toISOString(),
        completedModules: userData.completedModules || [],
        role: userData.role || 'user',
        createdAt: new Date().toISOString()
      };
    }
    
    await setDoc(userRef, updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error saving user to Firestore:', error);
    throw error;
  }
};

/**
 * Update user status
 */
export const updateUserStatus = async (email: string, status: UserStatus): Promise<User | undefined> => {
  try {
    const userRef = doc(db, USERS_COLLECTION, email);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) return undefined;
    
    const userData = userSnap.data() as User;
    const updatedUser = {
      ...userData,
      status
    };
    
    await updateDoc(userRef, { status });
    return updatedUser;
  } catch (error) {
    console.error(`Error updating status for user ${email}:`, error);
    return undefined;
  }
};

/**
 * Update user progress
 */
export const updateUserProgress = async (
  email: string,
  newProgress: number | ((currentProgress: number) => number),
  moduleCompleted?: string
): Promise<User | undefined> => {
  try {
    const userRef = doc(db, USERS_COLLECTION, email);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) return undefined;
    
    const userData = userSnap.data() as User;
    const currentProgress = userData.progress;
    
    // Calculate new progress value
    const progressValue = typeof newProgress === 'function'
      ? newProgress(currentProgress)
      : newProgress;
      
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(100, Math.max(0, progressValue));
    
    // Add completed module if provided and not already in the list
    let completedModules = [...(userData.completedModules || [])];
    if (moduleCompleted && !completedModules.includes(moduleCompleted)) {
      completedModules.push(moduleCompleted);
    }
    
    const updates: Partial<User> = {
      progress: clampedProgress,
      completedModules
    };
    
    await updateDoc(userRef, updates);
    
    return {
      ...userData,
      ...updates
    };
  } catch (error) {
    console.error(`Error updating progress for user ${email}:`, error);
    return undefined;
  }
};

/**
 * Check if a user is a super admin
 */
export const isSuperAdmin = (email?: string): boolean => {
  if (!email) return false;
  return email === SUPER_ADMIN_EMAIL;
};

/**
 * Check if a user is any kind of admin
 */
export const isAdmin = async (email?: string): Promise<boolean> => {
  if (!email) return false;
  if (isSuperAdmin(email)) return true;
  
  const user = await getUserByEmail(email);
  return user?.role === 'admin' || user?.role === 'super_admin';
};

/**
 * Process user login - update last login and create user if needed
 * This function includes robust error handling to prevent Auth0 login failures
 */
export const processUserLogin = async (userData: { email: string, name?: string }): Promise<User> => {
  // Check if Firebase is properly configured
  if (!isFirebaseConfigured()) {
    console.warn('Firebase not properly configured. Using fallback user data for:', userData.email);
    // Return a memory-only user object to prevent Auth0 login failures
    // This allows the login flow to continue even if Firebase is misconfigured
    return {
      id: userData.email, // Use email as ID consistently
      email: userData.email,
      name: userData.name || userData.email.split('@')[0],
      status: 'active', // Default to active to allow login
      progress: 0,
      lastLogin: new Date().toISOString(),
      completedModules: [],
      role: isSuperAdmin(userData.email) ? 'super_admin' : 'user',
      createdAt: new Date().toISOString()
    };
  }
  
  // Add retry logic for Firestore operations
  let retries = 0;
  
  while (retries <= MAX_RETRIES) {
    try {
      console.log('🔍 Checking if user exists:', userData.email);
      const existingUser = await getUserByEmail(userData.email);
      
      if (existingUser) {
        console.log('✅ Existing user found, updating last login:', userData.email);
        // Update last login time
        return saveUser({
          ...existingUser,
          lastLogin: new Date().toISOString()
        });
      }
      
      console.log('🆕 Creating new user:', userData.email);
      // Determine if user should be auto-approved
      const autoApprove = isSuperAdmin(userData.email);
      console.log('🔑 Auto-approve status:', autoApprove, 'for', userData.email);
      
      // Create new user
      const newUser: Partial<User> & { email: string } = {
        email: userData.email,
        name: userData.name || userData.email.split('@')[0],
        status: autoApprove ? 'active' as UserStatus : 'pending' as UserStatus,
        progress: 0,
        completedModules: [] as string[],
        role: isSuperAdmin(userData.email) ? 'super_admin' as UserRole : 'user' as UserRole
      };
      
      console.log('💾 Saving new user to Firestore:', newUser);
      const savedUser = await saveUser(newUser);
      console.log('✅ New user saved successfully:', savedUser.email);
      return savedUser;
    } catch (error) {
      console.error(`Error processing user login (attempt ${retries + 1}):`, error);
      retries++;
      
      if (retries <= MAX_RETRIES) {
        console.log(`Retrying user login process in ${RETRY_DELAY}ms...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      }
    }
  }
  
  // If all retries fail, return a memory-only user object to prevent Auth0 login failures
  console.warn('All Firebase retries failed. Using fallback user data for:', userData.email);
  return {
    id: userData.email, // Use email as ID consistently
    email: userData.email,
    name: userData.name || userData.email.split('@')[0],
    status: 'active', // Default to active to allow login
    progress: 0,
    lastLogin: new Date().toISOString(),
    completedModules: [],
    role: isSuperAdmin(userData.email) ? 'super_admin' : 'user',
    createdAt: new Date().toISOString()
  };
};

/**
 * Delete a single user by email
 */
export const deleteUser = async (email: string): Promise<void> => {
  // Check if Firebase is properly configured
  if (!isFirebaseConfigured()) {
    console.warn('Firebase not properly configured. Cannot delete user.');
    throw new Error('Firebase not configured');
  }
  
  // Prevent deletion of super admin
  if (isSuperAdmin(email)) {
    throw new Error('Cannot delete super admin user');
  }
  
  try {
    const userRef = doc(db, USERS_COLLECTION, email);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      throw new Error('User not found');
    }
    
    // Mark user as deleted instead of completely removing the document
    // This preserves data integrity and allows for potential recovery
    await updateDoc(userRef, {
      status: 'deleted',
      deletedAt: new Date().toISOString()
    });
    
    console.log(`🗑️ User marked as deleted: ${email}`);
  } catch (error) {
    console.error(`Error deleting user ${email}:`, error);
    throw error;
  }
};

/**
 * Permanently remove a user document from Firebase (use with caution)
 */
export const permanentlyDeleteUser = async (email: string): Promise<void> => {
  // Check if Firebase is properly configured
  if (!isFirebaseConfigured()) {
    console.warn('Firebase not properly configured. Cannot permanently delete user.');
    throw new Error('Firebase not configured');
  }
  
  // Prevent deletion of super admin
  if (isSuperAdmin(email)) {
    throw new Error('Cannot delete super admin user');
  }
  
  try {
    const userRef = doc(db, USERS_COLLECTION, email);
    await deleteDoc(userRef);
    console.log(`🗑️ User permanently deleted: ${email}`);
  } catch (error) {
    console.error(`Error permanently deleting user ${email}:`, error);
    throw error;
  }
};

/**
 * Delete all users except the super admin
 */
export const resetAllUsers = async (): Promise<void> => {
  try {
    const usersCollection = collection(db, USERS_COLLECTION);
    const querySnapshot = await getDocs(query(usersCollection, where('role', '!=', 'super_admin')));
    
    const deletePromises = querySnapshot.docs.map(async (userDoc) => {
      await setDoc(userDoc.ref, { deleted: true }, { merge: true });
    });
    
    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error resetting users in Firestore:', error);
    throw error;
  }
};
