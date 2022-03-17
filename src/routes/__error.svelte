<script context="module">
	let message
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		message = status + " - " + error.message
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import Header from '../components/navigation/Header.svelte';

	export let title;
</script>

<Header/>
<h1>{title}</h1>