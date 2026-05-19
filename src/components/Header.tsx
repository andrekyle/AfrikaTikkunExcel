import { Button } from "@/components/ui/button";
import { BookOpen, Menu, User, LogOut, ShieldAlert } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import * as userService from '@/services/firebaseUserService';

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const [isSuperAdmin, setIsSuperAdmin] = React.useState(false);
  
  React.useEffect(() => {
    const processUser = async () => {
      if (user?.email) {
        try {
          // Process user login to ensure they're added to Firebase
          await userService.processUserLogin({
            email: user.email,
            name: user.name || user.nickname || user.email.split('@')[0]
          });
          console.log('User processed in Header:', user.email);
          
          // Check if super admin
          setIsSuperAdmin(userService.isSuperAdmin(user.email));
        } catch (error) {
          console.error('Error processing user in Header:', error);
          // Still check super admin status even if Firebase fails
          setIsSuperAdmin(userService.isSuperAdmin(user.email));
        }
      } else {
        setIsSuperAdmin(false);
      }
    };
    
    processUser();
  }, [user]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-br from-background via-secondary/30 to-accent/10 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center mt-[5px]">
              <div className="safari-svg-fix" style={{
                height: '3.5rem',
                width: 'auto',
                display: 'flex',
                alignItems: 'center'
              }}>
                <img 
                  src="/images/logoeru.png" 
                  alt="Eruditio" 
                  className="h-full w-auto" 
                  style={{
                    maxHeight: '100%',
                    objectFit: 'contain',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center'
                  }}
                />
              </div>
            </a>
          </div>
        </div>

        {/* Navigation links removed and moved to Hero component */}

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="hidden md:flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-border bg-muted">
                  {user?.picture ? (
                    <img src={user.picture} alt={user.name || 'User'} className="h-full w-full object-cover" />
                  ) : (
                    <User className="h-full w-full p-1 text-muted-foreground" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground">{user?.name || user?.email}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden md:flex" 
                onClick={() => {
                  // First clear any local user state
                  localStorage.removeItem('excel_training_current_user');
                  
                  // Then perform Auth0 logout
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin
                    },
                    openUrl: false
                  }).then(() => {
                    // Reload the page to reset the Auth0 state
                    // Ensure the URL format matches what's configured in Auth0
                    window.location.href = window.location.origin + '/';
                  });
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
              {isSuperAdmin && (
                <Button
                  variant="default"
                  size="sm"
                  className="hidden md:flex bg-amber-600 hover:bg-amber-700"
                  asChild
                >
                  <Link to="/admin">
                    <ShieldAlert className="h-4 w-4 mr-2" />
                    Admin
                  </Link>
                </Button>
              )}
            </>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center px-4 py-2 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 border border-slate-300 shadow-sm" 
              onClick={() => loginWithRedirect({ 
                authorizationParams: {
                  connection: "google-oauth2"
                }
              })}
              disabled={isLoading}
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                </g>
              </svg>
              {isLoading ? "Loading..." : "Sign in with Google"}
            </Button>
          )}
          {!isAuthenticated && (
            <Button 
              variant="hero" 
              size="sm" 
              onClick={() => loginWithRedirect({ 
                authorizationParams: {
                  connection: "google-oauth2"
                }
              })}
            >
              Get Started
            </Button>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;