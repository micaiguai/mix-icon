<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { snapdom } from '@zumer/snapdom'
import { computed, ref } from 'vue'
import { useIconStore } from '../stores/iconStore'
import IconPanel from './IconPanel.vue'

const iconStore = useIconStore()

const color = ref<[string, string]>([
  'black',
  '#317AC6',
])
const classes = computed<[string, string]>(() => [
  `absolute left-0 top-0 text-60 text-[${color.value[0]}]`,
  `absolute left-36 top-36 text-20 text-[${color.value[1]}]`,
])

const icons = computed(() => {
  return [
    `${iconStore.firstIcon?.meta.id}:${iconStore.firstIcon?.icon}`,
    `${iconStore.secondIcon?.meta.id}:${iconStore.secondIcon?.icon}`,
  ]
})

const iconRef = ref<HTMLDivElement | null>(null)

async function downloadPng() {
  if (!iconRef.value)
    return
  const result = await snapdom(iconRef.value)
  result.download()
}
</script>

<template>
  <div class="">
    <div class="mb-2 flex gap-4">
      <IconPanel v-if="iconStore.firstIcon" v-model:color="color[0]" :icon="iconStore.firstIcon" />
      <IconPanel v-if="iconStore.secondIcon" v-model:color="color[1]" :icon="iconStore.secondIcon" />
    </div>
    <div class="mb-2 p-2 rounded ring ring-gray-300">
      <div class="text-sm mb-2">
        Result
      </div>
      <div class="w-fit ring">
        <div ref="iconRef" class="size-60 relative">
          <Icon :class="classes[0]" :color="color[0]" :icon="icons[0]" />
          <Icon :class="classes[1]" :color="color[1]" :icon="icons[1]" />
        </div>
      </div>
    </div>
    <div class="">
      <button class="px-2 rounded cursor-pointer ring ring-gray-300" @click="downloadPng">
        download png
      </button>
    </div>
  </div>
</template>
