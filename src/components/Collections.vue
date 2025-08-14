<script setup lang="ts">
import type { CollectionInfo, IconMeta } from '../types'
import { computed, ref } from 'vue'
import collectionsInfo from '../data/collections-info.json'
import { useIconStore } from '../stores/iconStore'
import Collection from './Collection.vue'
import CollectionDetail from './CollectionDetail.vue'
import Icons from './Icons.vue'
import Search from './Search.vue'

const props = defineProps<{
  index: number
}>()

const iconStore = useIconStore()

const collections = ref<CollectionInfo[]>(collectionsInfo as any as CollectionInfo[])
const activeId = ref<string>('')
const search = ref<string>('')
const icons = computed<IconMeta[]>(() => {
  const icons: IconMeta[] = []
  iconStore.collectionMetas.forEach((meta) => {
    if (meta.id.includes(search.value)) {
      icons.push(...meta.icons.map(icon => ({
        meta,
        icon,
      })))
      return
    }
    meta.icons.forEach((icon) => {
      if (icon.includes(search.value)) {
        icons.push({
          meta,
          icon,
        })
      }
    })
  })
  return icons
})
const state = computed(() => {
  if (activeId.value)
    return 'detail'
  if (search.value)
    return 'search'
  return 'list'
})

function setActive(id: string) {
  activeId.value = id
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <div v-if="state === 'detail' && !!activeId" class="text-gray-300 w-full cursor-pointer" @click="setActive('')">
      cd ..
    </div>
    <Search v-model="search" class="w-full" />
    <div
      v-for="collection in collections"
      v-show="state === 'list' && !activeId"
      :key="collection.id"
      class="p-2 rounded cursor-pointer ring ring-gray-300 hover:bg-gray-100"
    >
      <Collection :id="collection.id" @click="setActive(collection.id)" />
    </div>
    <CollectionDetail v-if="state === 'detail' && !!activeId" :id="activeId" :search="search" :index="props.index" class="" />
    <Icons v-if="state === 'search'" :index="props.index" :icons="icons" />
  </div>
</template>
