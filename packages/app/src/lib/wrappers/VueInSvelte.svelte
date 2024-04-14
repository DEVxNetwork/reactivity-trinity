<script lang="ts" context="module">
	type Data = Record<string, unknown>
</script>

<script lang="ts" generics="P extends Data">
	 import { createApp, type Component as VueComponent } from 'vue'

  const { Component, props, 
	  type = "span" 
  }: { 
	  Component: VueComponent<P>
	   props?: P 
	   type?: string
   } = $props()
  let element: HTMLDivElement | undefined

  $effect(() => {
    const app = createApp(Component, props)

	app.mount(element!)

	return () => app.unmount()
  })
</script>

<svelte:element this={type} bind:this={element} /> 
