<script lang="ts" context="module">
	type Data = Record<string, unknown>
</script>

<script lang="ts" generics="P extends Data">
	import { createApp, type Component as VueComponent } from "vue"

	const {
		Component,
		props,
	}: {
		Component: VueComponent<P>
		props?: P
	} = $props()
	let element: HTMLSpanElement | undefined

	$effect(() => {
		const app = createApp(Component, props)

		app.mount(element!)

		return () => app.unmount()
	})
</script>

<span bind:this={element} />
