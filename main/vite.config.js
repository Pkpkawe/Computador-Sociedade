import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Computador-Sociedade/',
  server: {
    port: 3000,
  },
  plugins: [react()],
})