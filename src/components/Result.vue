<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'
import { useIconStore } from '../stores/iconStore'

const iconStore = useIconStore()

const color = ref<[string, string]>([
  '',
  '',
])
const classes = ref<[string, string]>([
  'absolute left-0 top-0 text-60 text-black',
  'absolute left-36 top-36 text-20 text-blue-500',
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
    <div class="">
      First Icon: <Icon :icon="icons[0]" />
      license: {{ iconStore.firstIcon?.meta.license?.title }}
    </div>
    <div class="">
      First Color: <input class="rounded ring ring-gray-300" type="text">
    </div>
    <div class="">
      Second Icon: <Icon :icon="icons[1]" />
      license: {{ iconStore.secondIcon?.meta.license?.title }}
    </div>
    <div class="">
      Second Color: <input class="rounded ring ring-gray-300" type="text">
    </div>
    <div class="size-60 ring ring-gray-300 relative">
      <Icon :class="classes[0]" :color="color[0]" :icon="icons[0]" />
      <Icon :class="classes[1]" :color="color[1]" :icon="icons[1]" />
    </div>
  </div>
</template>
