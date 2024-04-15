<script lang="ts" generics="P extends {}">
	import { createElement, type FunctionComponent } from "react"
	import {
		render as renderReactElement,
		unmountComponentAtNode,
	} from "react-dom"

	const {
		Component,
		props,
	}: {
		Component: FunctionComponent<P>
		props?: P
	} = $props()

	let element: HTMLDivElement | undefined

	$effect(() => {
		renderReactElement(createElement(Component, props), element!)

		return () => {
			if (element) unmountComponentAtNode(element)
		}
	})
</script>

<span bind:this={element} />
