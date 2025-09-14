import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import animate from 'tailwindcss-animate'
import path from "path"

export default defineConfig({
  plugins: [react(),tailwindcss({
    plugins:[animate],
  })],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  }
})



