<script lang="ts">
	const { count: startCount = 0 }: { count?: number } = $props()
	let count = $state(startCount)
</script>

<button type="button" onclick={() => count++}>Sveltes: {count}</button>
