import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Serve CDN-hosted Lovable assets in local dev (they are only served by
    // the deployed preview/published app otherwise).
    proxy: {
      "/__l5e/assets-v1": {
        target: "https://id-preview--03195ae7-9e20-41fd-8808-5a6503939b3a.lovable.app",
        changeOrigin: true,
      },
    },
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
}));
