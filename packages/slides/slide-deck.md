# Reactivity Trinity: React, Vue, Svelte in Harmony

---

## Hi

I'm AJ

Generally : I write code
Now : I'm playing sudoku with reactive frontend frameworks

---

## What?

* We will be embedding svelte/react/vue apps into one another

--- 

## Why?

* Using a component from a framework that differs from your main code base
* Incremental migration between frameworks
* Micro frontend collaboration

--- 

## No, really why?

* Itching
* Sudoku

--- 

## The Wrapping Melody

* the wrapper is a component in the host framework
* takes as props
	*  (1) component of the foreign framework
	*  (2) props to pass to the embedded component when mounted
* creates and gains a reference to a dom element
* mounts the embedded component
* dismount the embedded component when the wrapper dismounts

---

## React in Svelte

```svelte
<script lang="ts" generics="P extends {}">
	import { createElement, type FunctionComponent } from "react"
	import { render as renderReactElement, unmountComponentAtNode} from "react-dom"

	const { Component, props, }: { 
		Component: FunctionComponent<P>
		props?: P
	} = $props()

	let element: HTMLDivElement | undefined

	$effect(() => {
		renderReactElement(createElement(Component, props), element!)

		return () => {
			if (element) 
				unmountComponentAtNode(element)
		}
	})
</script>

<span bind:this={element} />
```

---


## Svelte in React

```ts
import { useEffect, createElement, useRef, useState } from "react"
import { mount, unmount, type ComponentType, type SvelteComponent, type ComponentProps} from "svelte"

export const wrapSvelteInReact = <Comp extends SvelteComponent,>(Component: ComponentType<Comp>) => {
	return  (props: ComponentProps<Comp>) => {
		const elementRef = useRef<HTMLSpanElement | null>(null)
		const [isMounted, setIsMounted] = useState(false)
		const propsRef = useRef(props)

		useEffect(() => {
			if (!isMounted) {
				setIsMounted(true)
				return
			}

			const component = mount(Component, {
				target: elementRef.current!,
				props: propsRef.current,
			})

			return () => unmount(component)
		}, [isMounted, propsRef])

		return createElement("span", { ref: elementRef })
	}
}
```

---

# Demo

----

# Session Opportunities 

* rerendering foreign components when the props change
* passing context to foreign components from the host
* refine types

----

# Questions

--- 


# Credits 

- marp - https://marp.app
- pngwn - https://github.com/pngwn/svelte-adapter
