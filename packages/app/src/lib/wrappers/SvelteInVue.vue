<script setup lang="ts">
import { ref, onMounted } from "vue"
import {
	type ComponentType,
	type SvelteComponent,
	mount,
	unmount,
} from "svelte"

const element = ref<HTMLDivElement>()

const { Component, props } = defineProps<{
	Component: ComponentType<SvelteComponent>
	props?: Record<string, any>
}>()

onMounted(() => {
	const component = mount(Component, {
		props,
		target: element.value,
	})

	return () => unmount(component)
})
</script>

<template>
	<span ref="element"></span>
</template>
