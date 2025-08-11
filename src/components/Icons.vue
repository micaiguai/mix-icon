<script setup lang="ts">
import type { IconMeta } from '../types'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'
import { useIconStore } from '../stores/iconStore'

const props = defineProps<{
  icons: IconMeta[]
  index: number
}>()

const iconStore = useIconStore()

const isMore = ref(false)

const icons = computed(() => {
  return props.icons.slice(0, isMore.value ? props.icons.length : 20)
})

function setIcon(icon: IconMeta) {
  if (props.index === 0) {
    iconStore.setFirstIcon(icon)
  }
  else if (props.index === 1) {
    iconStore.setSecondIcon(icon)
  }
}
</script>

<template>
  <div v-for="icon in icons" :key="icon.icon">
    <Icon :icon="`${icon.meta.id}:${icon.icon}`" @click="setIcon(icon)" />
  </div>
  <div class="flex w-full">
    <button v-if="!isMore" class="text-xs px-1 rounded cursor-pointer ring ring-gray-300" @click="isMore = true">
      Load more
    </button>
  </div>
</template>
