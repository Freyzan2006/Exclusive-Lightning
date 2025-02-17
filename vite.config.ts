import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite';
import path from 'path';

//  tailwindcss()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],


  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@componentsUI': path.resolve(__dirname, 'src/components/ui'),
      '@componentsUX': path.resolve(__dirname, 'src/components/ux'),
      '@componentsLayout': path.resolve(__dirname, 'src/components/layout'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@routers': path.resolve(__dirname, 'src/routers'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,       
  }
});
