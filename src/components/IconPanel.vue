<script setup lang="ts">
import type { IconMeta } from '../types'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps<{
  icon: IconMeta
}>()
const color = defineModel<string>('color')

const name = computed(() => `${props.icon.meta.id}:${props.icon.icon}`)
</script>

<template>
  <div class="p-2 rounded flex flex-col gap-4 ring ring-gray-300 items-start justify-center">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        icon: <Icon :icon="name" />
      </div>
      <div class="">
        name: {{ name }}
      </div>
      <div class="">
        license: {{ props.icon.meta.license?.title }}
      </div>
      <div class="">
        First Color: <input v-model="color" class="px-2 rounded ring ring-gray-300" type="text">
      </div>
    </div>
  </div>
</template>
