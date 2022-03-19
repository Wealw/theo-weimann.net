<script lang="ts">
	export let lang
</script>

<section>
	<h2 id='about'><span class='number'>01.</span> {lang.title}</h2>
	<div class='container'>
		<div class='text'>
			{#each lang.content as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<img src='/img/photo/theo.webp' alt='Photo'>
	</div>
</section>


<style>
    section {
        scroll-margin-top: 4em;
				width: 100%;
				padding-bottom: 6em;
    }

    h2 {
        text-transform: uppercase;
    }

    .container {
        display: flex;
        align-items: center;
    }
		@media (max-width: 800px) {
				.container{
						flex-direction: column-reverse;
				}
				img{
						margin: 0;
				}
    }


    img {
        height: 128px;
        aspect-ratio: 1;
        box-shadow: rgba(0, 0, 0, 0.35) 3px 3px 8px 2px;
        border-radius: 4px;
        float: right;
				margin: 2em;
				transition: border-radius  .1s ease-in-out , transform .1s ease-in-out;
    }

    img:hover{
				border-radius: 0;
				transform: scale(1.1);
    }

    p {
        text-align: justify;
    }

    .number {
        color: #b90b64;
    }


</style>