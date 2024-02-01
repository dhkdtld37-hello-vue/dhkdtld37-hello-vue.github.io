<script setup>
import { ref, onUpdated, onMounted, onBeforeUpdate } from 'vue'
const count = ref(0)
onUpdated(() => {
  console.log('onUpdated', document.getElementById('count').textContent)
})
onMounted(() => {
  console.log('onMounted', document.getElementById('count').textContent)
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', document.getElementById('count').textContent)
})
</script>

<template>
 <button id="count" @click="count++">{{ '^^${count}^^' }}</button>
</template>

