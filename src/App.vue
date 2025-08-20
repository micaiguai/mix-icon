<script lang="ts" setup>
import { useFavicon } from '@vueuse/core'
import iconImg from '../assets/icon.png'
import Collections from './components/Collections.vue'
import Header from './components/Header.vue'
import Result from './components/Result.vue'

useFavicon(iconImg)
</script>

<template>
  <div class="text-sm text-gray-600 flex flex-col of-hidden h-dvh">
    <div class="p-2 flex gap-2 of-hidden">
      <div class="rounded flex flex-shrink-0 flex-grow-2 flex-basis-[calc(200%/3-0.5rem)] ring ring-gray-300">
        <Collections class="border-r border-r-gray-300 flex-shrink-0 flex-grow-1 flex-basis-1/2 h-full" :index="0" />
        <Collections class="flex-shrink-0 flex-grow-1 flex-basis-1/2 h-full" :index="1" />
      </div>
      <div class="flex flex-shrink-0 flex-grow-1 flex-basis-[calc(100%/3-0.5rem)] flex-col h-full">
        <Header class="mb-2" />
        <Result />
      </div>
    </div>
  </div>
</template>
