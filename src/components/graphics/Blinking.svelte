<script>
	import { onMount } from 'svelte';

	let status = true;
	onMount(() => {
		setInterval(function () {
			status = !status;
		}, 750);
	});
</script>

<div class:hidden={status}>
	<slot />
</div>

<style>
	.hidden {
		visibility: hidden;
	}
</style>
