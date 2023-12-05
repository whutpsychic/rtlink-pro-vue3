import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '$': fileURLToPath(new URL('./lib', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8013,
    open: true,
  }
})
