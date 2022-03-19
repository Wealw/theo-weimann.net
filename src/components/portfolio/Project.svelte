<script>
	export let lang;
</script>

<article>
	<h3 style='grid-area: title'>{lang.title}</h3>

	<p style='grid-area: text'>
		<img alt={lang.title} id='image' src={lang.image}>
		{lang.content}
	</p>
	<div class='links'>
		{#if lang.link_realisation}
			<a class='links-button' href={lang.link_realisation} target='_blank' rel='noopener noreferrer'>
				<img class='links-image' src='/img/icons/link-solid.svg' alt=''>
			</a>
		{/if}
		<a class='links-button' href={lang.link_sources} rel='noopener noreferrer' target='_blank'>
			<img alt='' class='links-image' src='/img/icons/code-pull-request-solid.svg'>
		</a>
	</div>


</article>

<style>
    article {
        display: grid;
        grid-template-areas: "title" "text" "links";
        grid-template-rows: auto auto auto;
        grid-template-columns: auto;
        grid-column-gap: 1.5em;
        padding-bottom: 1.5em;
    }

    #image {
        height: 6em;
        padding: 1em;
        aspect-ratio: 1;
        float: left;
        margin: 0 1.5em 1.5em 0;
        box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 8px 1px;
        border-radius: 4px;
        transition: border-radius .1s ease-in-out, transform .1s ease-in-out;
    }

    #image:hover {
        border-radius: 0;
        transform: scale(1.1);
    }


    .links {
				float: right;
				margin-left: auto;
        display: flex;
        flex-direction: row;
        bottom: 0;
    }

    .links-button {
        padding: 0.5em 1.5em;
        margin-left: 1em;
        height: 1em;
        box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 8px 1px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

		.links-button:hover{
				background-color: #b90b64;
				fill: black;
		}

    .links-image {
        height: 1em;
    }
</style>