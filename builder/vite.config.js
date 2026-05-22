import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
      '/design-system': 'http://localhost:3001'
    }
  },
  build: {
    outDir: '../builder-app',
    emptyOutDir: true
  },
  base: '/design-tickets/builder-app/'
})
