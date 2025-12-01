import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        headers: {
          // Cache static assets aggressively
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            // Ensure stable chunk names for better caching
            assetFileNames: 'assets/[name].[hash].[ext]',
            chunkFileNames: 'assets/[name].[hash].js',
            entryFileNames: 'assets/[name].[hash].js',
          },
        },
      },
      // Optimize dependencies for better caching
      optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion'],
      },
    };
});
