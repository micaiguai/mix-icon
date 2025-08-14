import type { IconMeta } from '../types'
import { loadIcon } from '@iconify/vue'

async function getSvg(icon: IconMeta) {
  const svg = await loadIcon(icon.icon)
  return svg
}
