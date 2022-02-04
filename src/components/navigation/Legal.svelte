<script>
	export let title;
	export let content;
</script>

<div class="container" />

<footer>
	<div class="floater">
		<span class="grab" />
	</div>
	<div>
		<h2>{title}</h2>
		<p>{content}</p>
	</div>
</footer>

<style>
	footer {
		position: fixed;
		bottom: calc(15px);
	}
	.floater {
		display: flex;
		justify-content: center;
		align-items: center;
		position: sticky;
		bottom: 0;
		height: 15px;
		width: 100%;
	}
	.grab {
		width: 4em;
		height: 7px;
		background-color: black;
		border-radius: 10px;
	}
</style>
