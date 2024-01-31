<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggleAwesome(v) {
  awesome.value = !v
}

function isAwesome() {
  return awesome.value
}


</script>

<template>
  <button @click="toggleAwesome(awesome)">toggle</button>

  <h1 v-if="isAwesome()">Vue is awesome!</h1>
  <h1 v-else>Oh no 😂 </h1>

  <h4 v-if="isAwesome">v-if TURE</h4>
  <h4 v-show="isAwesome()">v-show TURE</h4>
</template>

