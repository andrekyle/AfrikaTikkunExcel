import { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A component that only renders its children if the user is authenticated
 * Otherwise, it displays a login prompt
 */
const ProtectedRoute = ({ children, fallback }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-6 border rounded-lg bg-secondary/30">
        <div className="animate-pulse flex space-x-2">
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="flex flex-col justify-center items-center p-6 border rounded-lg bg-secondary/20 space-y-4">
        <p className="text-center text-muted-foreground">
          You need to be logged in to access this content
        </p>
        <Button 
          onClick={() => loginWithRedirect()}
          className="bg-excel-green hover:bg-excel-green/90"
          data-auth-login
        >
          Log In to Access
        </Button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
