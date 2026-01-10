<!-- .vitepress/components/SolidWrapper.vue -->
<template>
  <div ref="container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { render } from 'solid-js/web'

const props = defineProps({
  component: {
    type: Function,
    required: true
  }
})

const container = ref(null)
let dispose = null

onMounted(() => {
  if (container.value) {
    dispose = render(() => props.component(), container.value)
  }
})

onUnmounted(() => {
  dispose?.()
})
</script>