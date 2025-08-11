<script lang="ts" setup>
import Collections from './components/Collections.vue'
import Result from './components/Result.vue'
</script>

<template>
  <div class="text-gray-600 p-2 p-2 flex gap-4 of-hidden h-dvh">
    <div class="p-2 rounded h-full min-w-80 ring ring-gray-300 of-x-hidden of-y-scroll">
      <Collections :index="0" />
    </div>
    <div class="p-2 rounded h-full min-w-80 ring ring-gray-300 of-x-hidden of-y-scroll">
      <Collections :index="1" />
    </div>
    <div class="p-2 rounded h-full min-w-80 ring ring-gray-300 of-x-hidden of-y-scroll">
      <Result />
    </div>
  </div>
</template>
