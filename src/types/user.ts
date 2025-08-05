export type UserStatus = 'active' | 'pending' | 'blocked' | 'deleted';
export type UserRole = 'user' | 'admin' | 'super_admin';

export interface User {
  id: string;
  email: string;
  name: string;
  status: UserStatus;
  progress: number;
  lastLogin: string | null;
  completedModules: string[];
  role: UserRole;
  createdAt: string;
}

export interface UserProgress {
  userId: string;
  moduleId: string;
  progress: number;
  completed: boolean;
  lastUpdated: string;
}

export interface UserModuleAttempt {
  userId: string;
  moduleId: string;
  startedAt: string;
  completedAt?: string;
  score?: number;
  timeSpent?: number; // in seconds
}
