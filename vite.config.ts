import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON == "true" ? './' : ".",
  plugins: [
    vue(),
    Pages({
      pagesDir: 'src/pages',
      extensions: ['vue'],
      exclude: ["**/components/*.vue"],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src/',
    },
  }
})
