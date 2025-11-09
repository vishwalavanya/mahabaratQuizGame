import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ this line ensures your assets load correctly on Vercel or Netlify
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
