import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { getBase } from './scripts/getBase'

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [vue(), UnoCSS()],
})
