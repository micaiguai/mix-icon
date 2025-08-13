<script setup lang="ts">
import type { IconifyJSON } from 'iconify-icon'
import type { CollectionMeta } from '../types'
import { Icon } from '@iconify/vue'
import { addCollection } from 'iconify-icon'
import { computed, ref } from 'vue'
import { useIconStore } from '../stores/iconStore'

const props = defineProps<{
  id: string
}>()

const collection = ref<IconifyJSON>()
const meta = ref<CollectionMeta>()
const iconStore = useIconStore()

const nineIcons = computed(() => {
  if (!meta.value)
    return []
  return meta.value.icons.slice(0, 6)
})

async function getCollectionInfo(id: string) {
  collection.value = await fetch(`/collections/${id}.json`)
    .then(res => res.json())
  if (!collection.value) {
    return
  }
  addCollection(collection.value)
}

async function getMeta(id: string) {
  meta.value = await fetch(`/collections/${id}-meta.json`)
    .then(res => res.json())
  if (!meta.value)
    return
  iconStore.setCollectionMetas([...iconStore.collectionMetas, meta.value])
}

getCollectionInfo(props.id)
getMeta(props.id)
</script>

<template>
  <div class="min-w-72">
    {{ props.id }}
    <div class="text-xs mb-2">
      {{ meta?.license?.title }}
    </div>
    <div class="flex gap-2">
      <div v-for="icon in nineIcons" :key="icon">
        <Icon :icon="`${props.id}:${icon}`" />
      </div>
    </div>
  </div>
</template>
