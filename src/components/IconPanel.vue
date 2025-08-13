<script setup lang="ts">
import type { IconMeta } from '../types'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps<{
  icon: IconMeta
}>()

const color = ref<string>()
</script>

<template>
  <div class="p-4 rounded flex flex-col gap-4 ring ring-gray-300 items-start justify-center">
    <div class="">
      First Icon: <Icon :icon="`${props.icon.meta.id}:${props.icon.icon}`" />
      license: {{ props.icon.meta.license?.title }}
    </div>
    <div class="">
      First Color: <input v-model="color" class="rounded ring ring-gray-300" type="text">
    </div>
  </div>
</template>
