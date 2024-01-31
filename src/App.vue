<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(1)


// function that mutate state and trigger updates
function increment() {
  count.value = count.value + 1
}

// lifecycle hooks
onMounted(() => {
  console.log('The initial count is ${count.value}.')
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>

