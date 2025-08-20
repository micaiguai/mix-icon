<script setup lang="ts">
import type { CollectionInfo, IconMeta, Search as SearchType } from '../types'
import { computed, ref } from 'vue'
import collectionsInfo from '../data/collections-info.json'
import { useIconStore } from '../stores/iconStore'
import CollectionDetail from './CollectionDetail.vue'
import CollectionPreview from './CollectionPreview.vue'
import Icons from './Icons.vue'
import Search from './Search.vue'

const props = defineProps<{
  index: number
}>()

const iconStore = useIconStore()

const collections = ref<CollectionInfo[]>(collectionsInfo as any as CollectionInfo[])
const activeId = ref<string>('')
const search = ref<SearchType>({
  query: '',
  license: '',
})
const icons = computed<IconMeta[]>(() => {
  const icons: IconMeta[] = []
  iconStore.collectionMetas.forEach((meta) => {
    const isLicenseMatch = search.value.license ? meta.license?.title === search.value.license : true
    if (meta.id.includes(search.value.query) && isLicenseMatch) {
      icons.push(...meta.icons.map(icon => ({
        meta,
        icon,
      })))
      return
    }
    meta.icons.forEach((icon) => {
      if (icon.includes(search.value.query) && isLicenseMatch) {
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
  if (search.value.query)
    return 'search'
  return 'list'
})

function setActive(id: string) {
  activeId.value = id
}
</script>

<template>
  <div class="flex flex-col">
    <div class="p-2 pb-0 w-full">
      <div
        v-if="state === 'detail' && !!activeId"
        class="text-gray-300 mb-2 w-full cursor-pointer hover-text-gray-600"
        @click="setActive('')"
      >
        cd ..
      </div>
      <Search
        v-model:license="search.license"
        v-model="search.query"
        class="w-full"
        :show-license="state !== 'detail'"
      />
    </div>
    <div class="p-2 flex-1 of-y-scroll">
      <div
        v-for="collection in collections"
        v-show="state === 'list' && !activeId"
        :key="collection.id"
      >
        <CollectionPreview
          :id="collection.id"
          class="mb-2 w-full"
          @click="setActive(collection.id)"
        />
      </div>
      <CollectionDetail v-if="state === 'detail' && !!activeId" :id="activeId" :search="search" :index="props.index" class="" />
      <Icons
        v-if="state === 'search'"
        :index="props.index"
        :icons="icons"
      />
    </div>
  </div>
</template>
