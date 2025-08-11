import type { CollectionMeta, IconMeta } from '../types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIconStore = defineStore('iconStore', () => {
  const firstIcon = ref<IconMeta>()
  const secondIcon = ref<IconMeta>()
  const collectionMetas = ref<CollectionMeta[]>([])

  return {
    firstIcon,
    secondIcon,
    collectionMetas,
    setCollectionMetas(metas: CollectionMeta[]) {
      collectionMetas.value = metas
    },
    setFirstIcon(icon: IconMeta) {
      firstIcon.value = icon
    },
    setSecondIcon(icon: IconMeta) {
      secondIcon.value = icon
    },
  }
})
