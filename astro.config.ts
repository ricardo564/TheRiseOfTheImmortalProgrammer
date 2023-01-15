import { defineConfig } from 'astro/config'
import { VitePWA } from 'vite-plugin-pwa'
import { pwaOptions } from '/src/configs/pwa'
import { vueOptions } from '/src/configs/vue'

import vue from '@astrojs/vue'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
  vite: {
    plugins: [VitePWA(pwaOptions)],
  },
  integrations: [vue(vueOptions), tailwind(), image(), mdx(), sitemap()],
})
