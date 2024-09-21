import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
      proxy: mode === 'development' ? {
        '/graphql': {
          target: 'http://localhost:3001',  // Use local server in development
          secure: false,
          changeOrigin: true,
        }
      } : undefined,  // No proxy for production
    },
    define: {
      'process.env.GRAPHQL_URI': mode === 'development'
        ? JSON.stringify('http://localhost:3001/graphql')  // Local development URI
        : JSON.stringify('https://book-search-engine-ei85.onrender.com/graphql'), // Deployed URI
    },
  };
});