import { ReactNode, useEffect, useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import * as userService from '@/services/firebaseUserService';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

// Cache for permission results to avoid redundant checks
const permissionCache = new Map<string, { isAdmin: boolean; isSuperAdmin: boolean; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface AdminRouteProps {
  children: ReactNode;
  superAdminOnly?: boolean;
}

/**
 * A component that only renders its children if the user is authenticated
 * and has admin privileges
 */
const AdminRoute = ({ children, superAdminOnly = false }: AdminRouteProps) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean | null>(null);
  const [isCheckingPermissions, setIsCheckingPermissions] = useState(true);
  const hasCheckedRef = useRef(false);
  
  useEffect(() => {
    const checkUserPermissions = async () => {
      if (!user?.email) {
        setIsCheckingPermissions(false);
        return;
      }

      // Check cache first
      const cached = permissionCache.get(user.email);
      const now = Date.now();
      
      if (cached && (now - cached.timestamp) < CACHE_DURATION) {
        console.log('📋 Using cached permissions for:', user.email);
        setIsSuperAdmin(cached.isSuperAdmin);
        setIsAdmin(cached.isAdmin);
        setIsCheckingPermissions(false);
        return;
      }

      console.log('🔍 Checking admin permissions for:', user.email);
      setIsCheckingPermissions(true);
      
      try {
        // Check if user is a super admin (synchronous)
        const superAdminCheck = userService.isSuperAdmin(user.email);
        console.log('🔑 Super admin check result:', superAdminCheck);
        setIsSuperAdmin(superAdminCheck);
        
        // Process user login and check admin status
        console.log('👤 Processing user login and checking admin status...');
        
        // Run both operations in parallel for better performance
        const [, adminCheck] = await Promise.all([
          userService.processUserLogin({
            email: user.email,
            name: user.name || user.nickname || user.email.split('@')[0]
          }),
          userService.isAdmin(user.email)
        ]);
        
        console.log('✅ User login processed and admin check complete:', adminCheck);
        setIsAdmin(adminCheck);
        
        // Cache the results
        permissionCache.set(user.email, {
          isAdmin: adminCheck,
          isSuperAdmin: superAdminCheck,
          timestamp: now
        });
        
      } catch (error) {
        console.error('❌ Error checking admin permissions:', error);
        // If super admin, allow access even if Firebase fails
        const superAdminCheck = userService.isSuperAdmin(user.email);
        if (superAdminCheck) {
          console.log('🚀 Allowing super admin access despite Firebase error');
          setIsAdmin(true);
          setIsSuperAdmin(true);
        } else {
          setIsAdmin(false);
          setIsSuperAdmin(false);
        }
      } finally {
        setIsCheckingPermissions(false);
        hasCheckedRef.current = true;
      }
    };
    
    // Only check permissions once per user session
    if (!hasCheckedRef.current) {
      checkUserPermissions();
    }
  }, [user?.email]); // Only depend on email, not the entire user object

  if (isLoading || isCheckingPermissions || isAdmin === null) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex space-x-2">
          <div className="h-3 w-3 bg-primary rounded-full"></div>
          <div className="h-3 w-3 bg-primary rounded-full"></div>
          <div className="h-3 w-3 bg-primary rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (superAdminOnly && !isSuperAdmin) {
    return (
      <Card className="max-w-md mx-auto my-20 p-6 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">Super Admin Access Required</h2>
        <p className="text-muted-foreground mb-6">
          Sorry, this area is restricted to Super Administrators only.
        </p>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </Card>
    );
  }

  if (!isAdmin) {
    return (
      <Card className="max-w-md mx-auto my-20 p-6 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">Admin Access Required</h2>
        <p className="text-muted-foreground mb-6">
          You don't have permission to access the admin dashboard.
        </p>
        <Button onClick={() => window.location.href = "/"}>Return to Homepage</Button>
      </Card>
    );
  }

  return <>{children}</>;
};

export default AdminRoute;
