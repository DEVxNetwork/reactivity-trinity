import { ReactCounter, SvelteCounter, VueCounter, wrapSvelteInReact, wrapVueInReact } from "../lib"

const WrappedSvelteCounter = wrapSvelteInReact(SvelteCounter)
const WrappedVueCounter = wrapVueInReact(VueCounter)

function App() {
	const count = 1
	
  return (
    <>
		<h2>React:</h2>
		<ReactCounter count={count} />
		<WrappedVueCounter count={count} />
		<WrappedSvelteCounter count={count} />
    </>
  )
}

export default App
