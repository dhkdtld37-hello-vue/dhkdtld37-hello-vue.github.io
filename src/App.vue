<script setup>
import { ref } from 'vue'

const author = ref({
  name: 'John Doe',
  books: [1, 2, 3]
})
</script>

<template>
  <p>Has pulished books:</p>
  <span>{{ author.books.length > 2 ? 'Yes' : 'No' }}</span>
</template>

