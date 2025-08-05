/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_AUDIENCE?: string;
  readonly VITE_AUTH0_REDIRECT_URI?: string;
  // Add other environment variables as needed
  [key: string]: string | undefined;
}
