import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Make sure you have this
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // Add this to ensure React works properly
    tailwindcss(),
  ],
})
