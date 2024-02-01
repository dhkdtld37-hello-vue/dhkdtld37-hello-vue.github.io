<script setup>
function say(message) {
  alert(message)
}

</script>

<template>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
</template>

