import { User, UserStatus } from '@/types/user';

// Default super admin account
const SUPER_ADMIN_EMAIL = 'andresnell29@gmail.com';

// Local storage keys
export const USERS_STORAGE_KEY = 'excel_training_users';

// Initial users including the super admin
const initialUsers: User[] = [
  {
    id: 'admin-1',
    email: SUPER_ADMIN_EMAIL,
    name: 'Andre Snell',
    status: 'active',
    progress: 100,
    lastLogin: new Date().toISOString(),
    completedModules: ['Excel Fundamentals', 'Data Analysis', 'Advanced Excel', 'VBA'],
    role: 'super_admin',
    createdAt: new Date().toISOString()
  }
];

/**
 * Get all users from storage
 */
export const getUsers = (): User[] => {
  try {
    const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
    if (!usersJson) {
      // Initialize with default users
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
      return initialUsers;
    }
    return JSON.parse(usersJson);
  } catch (error) {
    console.error('Error getting users from storage:', error);
    return initialUsers;
  }
};

/**
 * Save users to storage
 */
export const saveUsers = (users: User[]): void => {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users to storage:', error);
  }
};

/**
 * Get a user by email
 */
export const getUserByEmail = (email: string): User | undefined => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

/**
 * Add or update a user
 */
export const saveUser = (userData: Partial<User> & { email: string }): User => {
  const users = getUsers();
  const existingUserIndex = users.findIndex(u => u.email === userData.email);
  
  let updatedUser: User;
  
  if (existingUserIndex >= 0) {
    // Update existing user
    updatedUser = {
      ...users[existingUserIndex],
      ...userData,
      lastLogin: new Date().toISOString()
    };
    users[existingUserIndex] = updatedUser;
  } else {
    // Create new user
    updatedUser = {
      id: `user-${Date.now()}`,
      email: userData.email,
      name: userData.name || userData.email.split('@')[0],
      status: userData.status || 'pending',
      progress: userData.progress || 0,
      lastLogin: new Date().toISOString(),
      completedModules: userData.completedModules || [],
      role: userData.role || 'user',
      createdAt: new Date().toISOString()
    };
    users.push(updatedUser);
  }
  
  saveUsers(users);
  return updatedUser;
};

/**
 * Update user status
 */
export const updateUserStatus = (email: string, status: UserStatus): User | undefined => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  
  if (userIndex === -1) return undefined;
  
  users[userIndex] = {
    ...users[userIndex],
    status
  };
  
  saveUsers(users);
  return users[userIndex];
};

/**
 * Update user progress
 */
export const updateUserProgress = (
  email: string, 
  newProgress: number | ((currentProgress: number) => number),
  moduleCompleted?: string
): User | undefined => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  
  if (userIndex === -1) return undefined;
  
  const currentUser = users[userIndex];
  const currentProgress = currentUser.progress;
  
  // Calculate new progress value
  const progressValue = typeof newProgress === 'function' 
    ? newProgress(currentProgress)
    : newProgress;
    
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progressValue));
  
  // Add completed module if provided and not already in the list
  let completedModules = [...currentUser.completedModules];
  if (moduleCompleted && !completedModules.includes(moduleCompleted)) {
    completedModules.push(moduleCompleted);
  }
  
  users[userIndex] = {
    ...currentUser,
    progress: clampedProgress,
    completedModules
  };
  
  saveUsers(users);
  return users[userIndex];
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
export const isAdmin = (email?: string): boolean => {
  if (!email) return false;
  if (isSuperAdmin(email)) return true;
  
  const user = getUserByEmail(email);
  return user?.role === 'admin' || user?.role === 'super_admin';
};

/**
 * Process user login - update last login and create user if needed
 */
export const processUserLogin = (userData: { email: string, name?: string }): User => {
  const existingUser = getUserByEmail(userData.email);
  
  if (existingUser) {
    // Update last login time
    return saveUser({
      ...existingUser,
      lastLogin: new Date().toISOString()
    });
  }
  
  // Determine if user should be auto-approved
  const autoApprove = isSuperAdmin(userData.email);
  
  // Create new user
  return saveUser({
    email: userData.email,
    name: userData.name || userData.email.split('@')[0],
    status: autoApprove ? 'active' : 'pending',
    progress: 0,
    completedModules: [],
    role: isSuperAdmin(userData.email) ? 'super_admin' : 'user'
  });
};
