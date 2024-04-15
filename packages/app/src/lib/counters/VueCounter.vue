<script setup lang="ts">
import { ref } from "vue"
const { count: startCount = 0, onCount }: { count?: number; onCount(count: number):void  } = defineProps(["count", "onCount"])
const count = ref(startCount)
</script>

<template>
	<button type="button" @click="count++">Vues: {{ count }}</button>
</template>
