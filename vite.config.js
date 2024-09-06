import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
  },
  build: {
    outDir: 'dist',  // This is the default, but you can change it if needed
  },
})
