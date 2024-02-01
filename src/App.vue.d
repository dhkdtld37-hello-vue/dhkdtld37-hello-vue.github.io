<script setup>
import { reactive, computed, ref } from 'vue'

const author = ref({
  name: 'John Doe',
  books: [1, 2, 3]
})

// a computed ref
const publishedBooksMessage = computed(() => {return author.value.books.length > 2 ? 'Yes' : 'No' })
</script>

<template>
  <p>Has pulished books : </p>
  <span>{{ publishedBooksMessage }}</span>
</template>

