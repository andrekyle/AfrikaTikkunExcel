import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle, User, Settings, Globe } from 'lucide-react';

const Auth0Test = () => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    loginWithRedirect, 
    logout,
    getAccessTokenSilently,
    error
  } = useAuth0();

  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const [tokenError, setTokenError] = React.useState<string | null>(null);

  // Test getting access token
  const testAccessToken = async () => {
    try {
      setTokenError(null);
      const token = await getAccessTokenSilently();
      setAccessToken(token ? 'Token retrieved successfully' : 'No token received');
      console.log('🔑 Access token test:', token ? 'SUCCESS' : 'FAILED');
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setTokenError(errorMsg);
      console.error('❌ Access token error:', error);
    }
  };

  // Get Auth0 configuration from environment
  const auth0Config = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    callbackUrl: import.meta.env.VITE_AUTH0_REDIRECT_URI,
    environment: window.location.hostname === 'localhost' ? 'Development' : 'Production'
  };

  const StatusIcon = ({ status }: { status: 'success' | 'error' | 'warning' }) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const ConfigStatus = ({ label, value, isValid }: { label: string, value: string | undefined, isValid: boolean }) => (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center gap-2">
        <StatusIcon status={isValid ? 'success' : 'error'} />
        <span className="font-medium">{label}</span>
      </div>
      <Badge variant={isValid ? 'default' : 'destructive'}>
        {value ? (value.length > 20 ? `${value.substring(0, 20)}...` : value) : 'Missing'}
      </Badge>
    </div>
  );

  if (isLoading) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Auth0 Configuration Test
          </CardTitle>
          <CardDescription>Testing Auth0 setup and authentication flow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2">Loading Auth0...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Configuration Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Auth0 Configuration Status
          </CardTitle>
          <CardDescription>Environment variables and configuration check</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <ConfigStatus 
              label="Auth0 Domain" 
              value={auth0Config.domain} 
              isValid={!!auth0Config.domain} 
            />
            <ConfigStatus 
              label="Client ID" 
              value={auth0Config.clientId} 
              isValid={!!auth0Config.clientId} 
            />
            <ConfigStatus 
              label="Callback URL" 
              value={auth0Config.callbackUrl} 
              isValid={!!auth0Config.callbackUrl} 
            />
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Environment</span>
              </div>
              <Badge variant="outline">{auth0Config.environment}</Badge>
            </div>
          </div>

          {error && (
            <div className="p-4 border border-red-200 rounded-lg bg-red-50">
              <div className="flex items-center gap-2 text-red-700">
                <XCircle className="w-5 h-5" />
                <span className="font-medium">Auth0 Error</span>
              </div>
              <p className="text-red-600 mt-1">{error.message}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Authentication Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-6 h-6" />
            Authentication Status
          </CardTitle>
          <CardDescription>Current user authentication state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <StatusIcon status={isAuthenticated ? 'success' : 'error'} />
            <span className="font-medium">
              {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
            </span>
          </div>

          {isAuthenticated && user ? (
            <div className="space-y-3 p-4 border rounded-lg bg-green-50">
              <h4 className="font-medium text-green-800">User Information:</h4>
              <div className="grid gap-2 text-sm">
                <div><strong>Email:</strong> {user.email}</div>
                <div><strong>Name:</strong> {user.name || 'Not provided'}</div>
                <div><strong>Nickname:</strong> {user.nickname || 'Not provided'}</div>
                <div><strong>Email Verified:</strong> {user.email_verified ? 'Yes' : 'No'}</div>
                <div><strong>Last Updated:</strong> {user.updated_at}</div>
                <div><strong>User ID:</strong> {user.sub}</div>
              </div>
            </div>
          ) : (
            <div className="p-4 border rounded-lg bg-gray-50">
              <p className="text-gray-600">No user information available. Please log in to test authentication.</p>
            </div>
          )}

          <div className="flex gap-2">
            {!isAuthenticated ? (
              <Button onClick={() => loginWithRedirect()}>
                Test Login
              </Button>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Test Logout
              </Button>
            )}
            
            {isAuthenticated && (
              <Button variant="secondary" onClick={testAccessToken}>
                Test Access Token
              </Button>
            )}
          </div>

          {accessToken && (
            <div className="p-3 border rounded-lg bg-green-50">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">Access Token Test</span>
              </div>
              <p className="text-green-600 text-sm mt-1">{accessToken}</p>
            </div>
          )}

          {tokenError && (
            <div className="p-3 border border-red-200 rounded-lg bg-red-50">
              <div className="flex items-center gap-2 text-red-700">
                <XCircle className="w-4 h-4" />
                <span className="font-medium">Access Token Error</span>
              </div>
              <p className="text-red-600 text-sm mt-1">{tokenError}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Debug Information */}
      <Card>
        <CardHeader>
          <CardTitle>Debug Information</CardTitle>
          <CardDescription>Technical details for troubleshooting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm font-mono bg-gray-100 p-4 rounded-lg">
            <div><strong>Current URL:</strong> {window.location.href}</div>
            <div><strong>Origin:</strong> {window.location.origin}</div>
            <div><strong>Hostname:</strong> {window.location.hostname}</div>
            <div><strong>Is Loading:</strong> {isLoading.toString()}</div>
            <div><strong>Is Authenticated:</strong> {isAuthenticated.toString()}</div>
            <div><strong>Has Error:</strong> {(!!error).toString()}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth0Test;
