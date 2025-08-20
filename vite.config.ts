import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { getBase } from './scripts/getBase'

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      dts: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
    }),
  ],
})
