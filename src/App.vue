<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1); const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch (
	`https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

// 1.
// fetchData()

// function get() {
//   todoId.value++
//   fetchData()
// }

// 2.
// fetchData()

// 2-2
watch(todoId, fetchData())

function get() {
  todoId.value++
  fetchData()
}

</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="get" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

