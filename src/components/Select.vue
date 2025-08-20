<script setup lang="ts">
import { hideAllPoppers, Dropdown as VDropdown } from 'floating-vue'
import { useIconStore } from '../stores/iconStore'

const model = defineModel<string>()

const iconStore = useIconStore()

function onClick(license: string) {
  model.value = license
  hideAllPoppers()
}
</script>

<template>
  <VDropdown>
    <!-- This will be the popover target (for the events and position) -->
    <button class="p-2 rounded cursor-pointer ring ring-gray-300 hover:bg-gray-100">
      {{ model || 'license' }}
    </button>
    <!-- This will be the content of the popover -->
    <template #popper>
      <div class="text-sm">
        <div v-for="license in iconStore.licenses" :key="license" class="p-2 border-b border-b-gray-300 cursor-pointer hover:bg-gray-100" @click="onClick(license)">
          {{ license }}
        </div>
      </div>
    </template>
  </VDropdown>
</template>
