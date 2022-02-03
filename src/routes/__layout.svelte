<!--suppress ALL -->
<script>
</script>

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;800&display=swap');

	:global(body) {
		font-family: 'Open-sans', sans-serif;
		margin: 0;
		width: 100%;
	}

	:global(#svelte) {
		background-color: #ffffff;
	}

	:global(::-webkit-scrollbar) {
		width: 7px;
		background-color: transparent;
	}

	:global(::-webkit-scrollbar-thumb) {
		box-shadow: inset rgba(0, 0, 0, 0.35) 3px 3px 8px;
		background-color: #b90b64;
		border-radius: 10px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
	}
</style>
