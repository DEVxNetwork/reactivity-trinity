import {
	useEffect,
	createElement,
	useRef,
	useState,
	type ReactHTML,
} from "react"
import {
	mount,
	unmount,
	type ComponentType,
	type SvelteComponent,
	type ComponentProps,
} from "svelte"

// https://github.com/pngwn/svelte-adapter/blob/master/react.js

export const wrapSvelteInReact =
	<Comp extends SvelteComponent, T extends HTMLElement>(
		Component: ComponentType<Comp>,
		type: keyof ReactHTML = "span",
	) =>
	(props: ComponentProps<Comp>) => {
		const containerRef = useRef<T | null>(null)
		const [isMounted, setIsMounted] = useState(false)
		const propsRef = useRef(props)

		useEffect(() => {
			if (!isMounted) {
				setIsMounted(true)
				return
			}
			
			const component = mount(Component, {
				target: containerRef.current!,
				props: propsRef.current,
			})

			return () => unmount(component)
		}, [isMounted, propsRef])

		return createElement(type, { ref: containerRef })
	}
