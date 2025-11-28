import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces (VPN compatible)
    port: 3000,
    strictPort: false,
    hmr: {
      clientPort: 3000,
    },
    watch: {
      usePolling: true, // Better compatibility with VPN/network drives
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
});
