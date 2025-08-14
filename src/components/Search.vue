<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel<string>()

const input = ref('')

function doSearch() {
  model.value = input.value.trim()
}
</script>

<template>
  <div class="flex gap-2 items-center" @keydown.enter="doSearch">
    <input
      v-model="input"
      type="text"
      class="p-2 rounded flex-1 ring-1 ring-gray-300 focus:outline-none"
    >
    <button class="p-2 rounded ring ring-gray-300" @click="doSearch">
      search
    </button>
  </div>
</template>
