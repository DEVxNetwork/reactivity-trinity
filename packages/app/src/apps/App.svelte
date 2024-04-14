<script lang="ts">
    import { SvelteCounter, ReactCounter, VueCounter, ReactInSvelte, VueInSvelte } from "../lib"

	const count = 3
</script>

<h2>Svelte: </h2>

<ReactInSvelte Component={ReactCounter} props={{ count }}  />
<VueInSvelte Component={VueCounter} props={{ count }}  />
<SvelteCounter {count} />
