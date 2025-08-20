<script setup lang="ts">
import type { IconifyJSON } from 'iconify-icon'
import type { CollectionMeta, IconMeta, Search } from '../types'
import { addCollection } from 'iconify-icon'
import { computed, ref } from 'vue'
import { getBase } from '../../scripts/getBase'
import Icons from './Icons.vue'

const props = defineProps<{
  id: string
  index: number
  search: Search
}>()

const base = getBase()

const collection = ref<IconifyJSON>()
const meta = ref<CollectionMeta>()

async function getCollectionInfo(id: string) {
  collection.value = await fetch(`${base}/collections/${id}.json`)
    .then(res => res.json())
  if (!collection.value) {
    return
  }
  addCollection(collection.value)
}

async function getMeta(id: string) {
  meta.value = await fetch(`${base}/collections/${id}-meta.json`)
    .then(res => res.json())
}

const icons = computed(() => {
  if (!meta.value) {
    return
  }
  return meta.value.icons
    .map(icon => ({
      icon,
      meta: meta.value,
    }))
    .filter((icon) => {
      if (!props.search.query)
        return true
      return icon.icon.includes(props.search.query)
    })
})

getCollectionInfo(props.id)
getMeta(props.id)
</script>

<template>
  <div class="">
    {{ props.id }}
    <div class="text-xs mb-2">
      {{ meta?.license?.title }}
    </div>
    <div v-if="icons !== undefined" class="flex flex-wrap gap-2">
      <Icons
        :index="props.index"
        :icons="icons as IconMeta[]"
      />
    </div>
  </div>
</template>
