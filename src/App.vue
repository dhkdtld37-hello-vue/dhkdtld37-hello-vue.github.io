<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref({
	cnt: 0,
	name: "kim",
})

// function that mutate state and trigger updates
function increment() {
  count.value.cnt = count.value.cnt + 1
  count.value.name = count.value.name.split('').reverse().join('')
}

// lifecycle hooks
onMounted(() => console.log(`The initial count is ${count.value}.`))
</script>

<template>
  <button @click="increment" class="custom-button">
    Count is : {{ count.cnt }} {{ count.name }}
  </button>
</template>

<style scoped>
button.custom-button {
  font-weight: bold;
  font-size: 16px; /* 크기 조정 */
  color: white; /* 글자색 */
  background-color: #4caf50; /* 배경색 */
  padding: 10px 20px; /* 내부 여백 */
}
</style>
