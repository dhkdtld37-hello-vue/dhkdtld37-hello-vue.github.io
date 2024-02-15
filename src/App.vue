<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])

</script>

<template>
  <button @click="show = !show">List 렌더링 ON / OFF </button>
  <button @click="list.push(list.length + 1)">List 추가 </button>
  <button @click="list.pop()">List 제거 </button>
  <button @click="list.reverse()">List 뒤집기 </button>

  <ul v-if="show">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List in not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>
