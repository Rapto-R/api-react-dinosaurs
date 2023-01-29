import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Rapto-R.github.io/api-react-dinosaurs/",
  plugins: [react()],
})
