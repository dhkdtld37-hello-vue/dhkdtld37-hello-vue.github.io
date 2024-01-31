<script setup>
import { ref } from 'vue'
const message = ref({name: "KIM", age: 29})
const name = "KIM"
</script>

<template>
  <h1>{{ message }} </h1>
</template>
