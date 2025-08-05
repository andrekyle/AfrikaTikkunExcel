import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import * as userService from '@/services/firebaseUserService';

const Callback = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [processingComplete, setProcessingComplete] = useState(false);
  
  // Handle direct navigation to callback URL with code parameter
  useEffect(() => {
    // Check if we've been redirected directly to the callback URL with a code
    if (window.location.search.includes('code=') && !isAuthenticated && !isLoading) {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');
      
      if (code && state) {
        console.log('Direct callback URL access detected with code parameter');
        // This helps Auth0 complete the authentication flow when accessed directly
        try {
          loginWithRedirect({
            authorizationParams: {
              // This preserves the original request
              redirect_uri: window.location.origin + '/callback'
            }
          });
        } catch (error) {
          console.error('Error handling direct callback access:', error);
          // If it fails, redirect to home
          navigate('/');
        }
      }
    }
  }, [isLoading, isAuthenticated, loginWithRedirect, navigate]);
  
  useEffect(() => {
    // Create an async function inside useEffect
    const handleAuthentication = async () => {
      // If authentication is complete (not loading) and successful (authenticated)
      if (!isLoading && isAuthenticated && user?.email && !processingComplete) {
        console.log('Processing Auth0 callback for user:', user.email, 'Environment:', window.location.hostname);
        
      try {
        // Process user in Firebase
        const processUser = async () => {
          try {
            // Process user login to ensure they're added to Firebase
            const updatedUser = await userService.processUserLogin({
              email: user.email,
              name: user.name || user.nickname || user.email.split('@')[0]
            });
            
            console.log('User processed and saved to Firebase:', updatedUser.email);
            
            // Verify the user was added by fetching from Firebase
            const allUsers = await userService.getUsers();
            const userExists = allUsers.some(u => u.email === user.email);
            console.log(`User exists in Firebase: ${userExists}, Total users: ${allUsers.length}`);
            
            return userExists;
          } catch (error) {
            console.error('Error processing user in Firebase:', error);
            // Log additional information to help debug production issues
            console.error('User data:', user?.email);
            console.error('Environment:', window.location.origin);
            console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
            return false;
          }
        };
        
        // First attempt
        const success = await processUser();
        
        // If not successful, try again after a short delay (failsafe)
        if (!success) {
          setTimeout(async () => {
            console.log('Retry processing user in Firebase...');
            await processUser();
          }, 1500); // Increased timeout for production environments
        }
        
        // Mark processing as complete to prevent multiple executions
        setProcessingComplete(true);
        
        // Redirect to home page or dashboard
        console.log('Auth completed successfully, redirecting to home page');
        navigate("/");
      } catch (error) {
        console.error('Error in Auth0 callback flow:', error);
        console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
        console.error('Authentication state:', { isAuthenticated, isLoading, hasUser: !!user });
        // Even if there's an error, try to redirect
        navigate("/");
      }
    }
    
    // If there's an error or authentication failed
    if (!isLoading && !isAuthenticated && !error) {
      navigate("/");
    }
    };
    
    // Call our async function
    handleAuthentication();
    
  }, [isAuthenticated, isLoading, error, navigate, user, processingComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold mb-2">Finishing Login</h2>
        <p className="text-muted-foreground">Please wait while we complete your authentication...</p>
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            <p className="font-medium">Error: {error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Callback;
