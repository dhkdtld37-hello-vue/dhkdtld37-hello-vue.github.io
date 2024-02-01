<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <span>Multiline Message is : </span>
  <p style="white-sapce: pre-line;">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>

