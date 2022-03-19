<script>

	export let title;
	export let content;

	function goToPageTop(){
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
</script>

<div class='container'></div>

<footer>
		<img src='/img/logo/favicon.svg' height='128px' width='128px' alt='logo' on:click={goToPageTop}>
	<div class='aligner'>
		<h2>{title}</h2>
		{#each content as element}
		<p>{element}</p>
			{/each}
	</div>
</footer>

<style>
    footer {
        box-shadow: rgba(0, 0, 0, 0.35) 3px 3px 8px 2px;
        bottom: calc(15px);
        color: white;
        background: black;
				padding: 1em 2em;
				display: flex;
				justify-content: center;
				width: calc(100% - 2em - 2em);
    }
		.aligner{
				max-width: 400px;
		}
		img{
				padding: 4em 4em 4em 2em ;
		}
		@media (max-width: 500px) {
				img{
						display: none;
				}
    }
</style>
