<script setup lang="ts">
	import { ref } from 'vue'
	const { count: startCount = 0, }: { count?: number } = defineProps(['count'])
	const count = ref(startCount)
</script>

<template>
    <button type="button" @click="count++">Vues: {{ count }}</button>
</template>
