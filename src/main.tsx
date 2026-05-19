import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import { Auth0ErrorHandler } from "./components/Auth0ErrorHandler.tsx";
import "./index.css";

// Access Vite-defined production values if available (they will be available in production builds)
const PROD_AUTH0_DOMAIN = (window as any).__PRODUCTION_AUTH0_DOMAIN__ || 'dev-t6olnxyxupee6ey5.us.auth0.com';
const PROD_AUTH0_CLIENT_ID = (window as any).__PRODUCTION_AUTH0_CLIENT_ID__ || 'P4IZsvXtaTcEddvPiAKUpqIYauzyqkE4';
const PROD_AUTH0_AUDIENCE = (window as any).__PRODUCTION_AUTH0_AUDIENCE__ || 'https://dev-t6olnxyxupee6ey5.us.auth0.com/api/v2/';
const PROD_AUTH0_CALLBACK_URL = (window as any).__PRODUCTION_AUTH0_CALLBACK_URL__ || 'https://eruditio-excel.vercel.app/callback';

// Determine if we're in a production environment
const isProduction = window.location.hostname.includes('vercel.app') || 
                    window.location.hostname === 'eruditio-excel.vercel.app';

// Use environment variables if available, production values if in production, or fall back to hardcoded values
const domain = isProduction ? PROD_AUTH0_DOMAIN : (import.meta.env.VITE_AUTH0_DOMAIN || PROD_AUTH0_DOMAIN);
const clientId = isProduction ? PROD_AUTH0_CLIENT_ID : (import.meta.env.VITE_AUTH0_CLIENT_ID || PROD_AUTH0_CLIENT_ID);
const audience = isProduction ? PROD_AUTH0_AUDIENCE : (import.meta.env.VITE_AUTH0_AUDIENCE || PROD_AUTH0_AUDIENCE);

// Determine the appropriate redirect URI
let redirectUri;

// For production site
if (isProduction) {
  redirectUri = PROD_AUTH0_CALLBACK_URL;
  console.log('Detected production environment, setting Auth0 redirect to:', redirectUri);
} 
// For environment variable (development)
else if (import.meta.env.VITE_AUTH0_REDIRECT_URI) {
  redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;
  console.log('Using environment variable for Auth0 redirect:', redirectUri);
} 
// Fallback to current origin
else {
  redirectUri = `${window.location.origin}/callback`;
  console.log('Using dynamic origin for Auth0 redirect:', redirectUri);
}

// For logging purposes in development
console.log('Auth0 Config:', { domain, clientId, redirectUri });

// Custom onRedirectCallback function to handle errors
const onRedirectCallback = (appState: any) => {
  console.log('Auth0 redirect callback executed', appState);
  
  // Check if we have code and state in URL (direct callback access)
  const params = new URLSearchParams(window.location.search);
  if (params.has('code') && params.has('state')) {
    console.log('Auth0 callback parameters detected in URL');
  }
  
  // Try to navigate to the intended route or home
  const returnTo = appState?.returnTo || '/';
  window.location.href = returnTo;
};

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: redirectUri,
      audience: audience,
      scope: "openid profile email"
    }}
    cacheLocation="localstorage"
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    onRedirectCallback={onRedirectCallback}
  >
    <Auth0ErrorHandler>
      <App />
    </Auth0ErrorHandler>
  </Auth0Provider>
);
