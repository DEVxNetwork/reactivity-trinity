import { useState } from "react"

export default function ReactCounter({
	count: startCount = 0,
}: {
	count?: number
}) {
	const [count, setCount] = useState(startCount)

	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			Reacts: {count}
		</button>
	)
}
