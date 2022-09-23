import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo_list-projeto_01_ignite/",
  plugins: [react()]
})
