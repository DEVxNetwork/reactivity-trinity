import { useEffect, createElement, useRef, useState } from "react"
import {
	mount,
	unmount,
	type ComponentType,
	type SvelteComponent,
	type ComponentProps,
} from "svelte"

// https://github.com/pngwn/svelte-adapter/blob/master/react.js

export const wrapSvelteInReact = <Comp extends SvelteComponent>(
	Component: ComponentType<Comp>,
) => {
	return (props: ComponentProps<Comp>) => {
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
