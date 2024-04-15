<script setup lang="ts">
import {
	VueCounter,
	SvelteInVue,
	SvelteCounter,
	ReactInVue,
	ReactCounter,
} from "../lib"

let count = 2
</script>

<template>
	<h2>Vue:</h2>
	<ReactInVue :Component="ReactCounter" :props="{ count }" />
	<VueCounter :count="count" />
	<SvelteInVue :Component="SvelteCounter" :props="{ count }" />
</template>
