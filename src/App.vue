<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)


// function that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => console.log('The initial count is ${count.value}.'))
</script>

<template>
  <button @click="increment">Count is : {{ count > 10 ? "크다": "작다" }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>

