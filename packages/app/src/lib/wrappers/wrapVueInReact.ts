import {
	useEffect,
	createElement,
	useRef,
	useState,
	type ReactHTML,
} from "react"
import { createApp, type Component } from "vue"

type Data = Record<string, unknown>

export const wrapVueInReact = <T extends HTMLElement>(component: Component) => {
	return (props: Data) => {
		const containerRef = useRef<T | null>(null)
		const [isMounted, setIsMounted] = useState(false)
		const propsRef = useRef(props)

		useEffect(() => {
			if (!isMounted) {
				setIsMounted(true)
				return
			}

			const app = createApp(component, props)
			app.mount(containerRef.current!)

			return () => app.unmount()
		}, [isMounted, propsRef])

		return createElement("span", { ref: containerRef })
	}
}
