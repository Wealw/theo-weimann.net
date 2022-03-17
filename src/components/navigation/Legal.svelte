<script>
	export let title;
	export let content;
</script>

<div class='container'></div>

<footer>
	<img src='/img/logo/favicon.svg' height='128px' width='128px' alt='logo'>
	<div class='aligner'>
		<h2>{title}</h2>
		<p>{content}</p>
	</div>
</footer>

<style>
    footer {
        box-shadow: rgba(0, 0, 0, 0.35) 3px 3px 8px 2px;
        bottom: calc(15px);
        color: white;
        background: black;
				padding: 1em 0;
				display: flex;
				justify-content: center;
    }
		.aligner{
				max-width: 400px;
		}
</style>
