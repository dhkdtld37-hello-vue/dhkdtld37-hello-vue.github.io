<script setup>
import { ref } from 'vue'

const awesome = ref(true)
</script>

<template>
  <button @click="awesome = !awesome">toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😂 </h1>
  <h4 v-if="awesome">TURE</h4>
  <h4 v-show="awesome">TRUE</h4>
</template>


