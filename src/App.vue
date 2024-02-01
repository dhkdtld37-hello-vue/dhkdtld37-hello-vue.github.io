<script setup>
import { ref } from 'vue'

import team from "@/assets/2018WorldCup.json"

const teams = ref(team)

</script>

<template>
  <div>
	<h2>2018 WORLD CUP TEAM</h2>
	<ul>
	  <li v-for="item in teams">
		{{ item.name }} - {{ item.id }}
		<img :src="item.flag" alt="Team Flag" style="max-width: 100px; max-height: 100px;">
	  </li>
	</ul>

  </div>
</template>

