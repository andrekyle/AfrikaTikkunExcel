import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

interface Auth0ErrorHandlerProps {
  children: React.ReactNode;
}

export const Auth0ErrorHandler: React.FC<Auth0ErrorHandlerProps> = ({ children }) => {
  const { error } = useAuth0();

  useEffect(() => {
    if (error) {
      console.error('Auth0 Error:', error);
      
      // You can implement more sophisticated error handling here:
      // - Show toast notifications
      // - Log to external services
      // - Redirect to error page
      // - etc.
      
      // Example: Show a user-friendly message based on error type
      if (error.message.includes('login_required')) {
        console.log('User needs to log in');
      } else if (error.message.includes('consent_required')) {
        console.log('User consent required');
      } else {
        console.log('General Auth0 error occurred');
      }
    }
  }, [error]);

  return <>{children}</>;
};
