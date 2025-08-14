<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import Collections from './components/Collections.vue'
import Result from './components/Result.vue'
</script>

<template>
  <div class="flex flex-col of-hidden h-dvh">
    <div class="text-gray-600 pr-2 text-right right-2 top-4 fixed">
      <a href="https://github.com/micaiguai/mix-icon.git">
        <Icon class="cursor-pointer" icon="tdesign:logo-github-filled" />
      </a>
    </div>
    <div class="text-gray-600 p-2 flex flex-1 gap-4 of-hidden">
      <div class="p-2 rounded h-full max-w-80 ring ring-gray-300 of-x-hidden of-y-scroll">
        <Collections :index="0" />
      </div>
      <div class="p-2 rounded h-full max-w-80 ring ring-gray-300 of-x-hidden of-y-scroll">
        <Collections :index="1" />
      </div>
      <div class="p-2 rounded flex-1 h-full min-w-80 ring ring-gray-300 of-x-hidden of-y-scroll">
        <Result />
      </div>
    </div>
  </div>
</template>
