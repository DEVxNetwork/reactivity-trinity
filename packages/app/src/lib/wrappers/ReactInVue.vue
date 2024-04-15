<script setup lang="ts">
import { ref, onMounted } from "vue"
import { createElement, type FunctionComponent } from "react"
import { render as renderReactElement, unmountComponentAtNode } from "react-dom"

const element = ref<HTMLDivElement | undefined>()

const { Component, props } = defineProps<{
	Component: FunctionComponent
	props?: Record<string, any>
}>()

onMounted(() => {
	renderReactElement(createElement(Component, props), element.value)

	return () => {
		if (element.value) unmountComponentAtNode(element.value)
	}
})
</script>

<template>
	<span ref="element" />
</template>
