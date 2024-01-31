<script setup>
import category from "@/assets/category.json"
const categories = category
</script>

<template>
  <li v-for="(item, index) in categories">
	{{ item.name }} - {{ item.code }} - {{ index }}
  </li>
</template>

