<script>
	import PointMatrix from '../graphics/PointMatrix.svelte';
	import Blinking from '../graphics/Blinking.svelte';

	export let first_name;
	export let last_name;
	export let description;
</script>

<div class="container">
	<div class="sub-container">
		<h1>
			<span class="line">
				<span class="text">{first_name}</span>
				<PointMatrix size={10} color="#B80765" />
			</span><br />
			<span class="line">
				<span class="text">{last_name}</span>
				<Blinking>_</Blinking>
			</span>
		</h1>
		<p>{description}</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 65vh;
	}

	.sub-container {
		display: flex;
		flex-direction: column;
	}

	h1 {
		text-transform: uppercase;
		font-size: 64px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.line {
		display: inline-flex;
		width: 100%;
		height: 1em;
	}

	.text {
		padding-right: 8px;
	}

	p {
		font-weight: 200;
		color: darkgray;
	}
</style>
