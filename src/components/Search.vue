<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" type="text" class="p-2 rounded ring-1 ring-gray-300 focus:outline-none">
</template>
