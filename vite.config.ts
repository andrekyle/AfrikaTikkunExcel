import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    // Generate a _redirects file for Netlify/Vercel to handle SPA routing
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure environment variables are correctly processed
    // This is important for Auth0 configuration in production
    assetsInlineLimit: 4096,
    sourcemap: true,
  },
  // Define environment variables that should always be available in production
  define: {
    '__PRODUCTION_AUTH0_DOMAIN__': JSON.stringify('dev-t6olnxyxupee6ey5.us.auth0.com'),
    '__PRODUCTION_AUTH0_CLIENT_ID__': JSON.stringify('P4IZsvXtaTcEddvPiAKUpqIYauzyqkE4'),
    '__PRODUCTION_AUTH0_CALLBACK_URL__': JSON.stringify('https://afrikatikkunexcel.vercel.app/callback'),
    '__PRODUCTION_AUTH0_AUDIENCE__': JSON.stringify('https://dev-t6olnxyxupee6ey5.us.auth0.com/api/v2/'),
  },
}));
