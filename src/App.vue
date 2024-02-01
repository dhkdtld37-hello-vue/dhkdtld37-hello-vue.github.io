<script setup>
import { ref } from 'vue'
import Child from './components/Child.vue'

const pocketMoney = ref('부모 컴포넌트로부터 <🎟>을 전달받았어요!')
</script>

<template>
  <Child :pocketMoney="pocketMoney" />
</template>
