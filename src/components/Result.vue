<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'
import { useIconStore } from '../stores/iconStore'
import IconPanel from './IconPanel.vue'

const iconStore = useIconStore()

const color = ref<[string, string]>([
  'black',
  'blue',
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
</script>

<template>
  <div class="">
    <div class="">
      Result
    </div>
    <div class="mb-2 flex gap-4">
      <IconPanel v-if="iconStore.firstIcon" :icon="iconStore.firstIcon" />
      <IconPanel v-if="iconStore.secondIcon" :icon="iconStore.secondIcon" />
    </div>
    <div class="rounded size-60 ring ring-gray-300 relative">
      <Icon :class="classes[0]" :color="color[0]" :icon="icons[0]" />
      <Icon :class="classes[1]" :color="color[1]" :icon="icons[1]" />
    </div>
  </div>
</template>
