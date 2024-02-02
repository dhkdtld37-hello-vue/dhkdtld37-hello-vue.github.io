<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])

const ButtonL = () => {
  show.value = !show.value
}

const AddL = () => {
 list.value.push(list.value.length + 1)
}

const RemoveL = () => {
  list.value.pop()
}

const ReverseL = () => {
  list.value.reverse()
}

</script>

<template>
  <button @click="ButtonL">List 렌더링 ON / OFF </button>
  <button @click="AddL">List 추가 </button>
  <button @click="RemoveL">List 제거 </button>
  <button @click="ReverseL">List 뒤집기 </button>

  <ul v-if="show">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List in not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>

