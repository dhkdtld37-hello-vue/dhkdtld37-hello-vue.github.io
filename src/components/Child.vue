<script setup>
const props = defineProps({
	pocketMoney: String
})
</script>

<template>
	<h2>{{ pocketMoney || '용돈이 아직 전달되지 않았습니다!' }}</h2>
</template>
