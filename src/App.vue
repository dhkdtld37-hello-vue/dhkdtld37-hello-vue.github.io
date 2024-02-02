<script setup>
import { ref } from 'vue'
import team from "@/assets/2018WorldCup.json"

const teams = team

</script>

<template>
  <div>
	<ul v-for="item in teams">
	  <li v-if="item.name.toLowerCase().includes('k')"> 
		 {{ item.name }} - {{ item.id }}
                <img :src="item.flag" alt="Team Flag" style="max-width: 100px; max-height: 100px;">
          </li>
        </ul>
  </div>
</template>

