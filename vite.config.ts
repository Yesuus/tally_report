import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tally_report/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
    },
  },
})
