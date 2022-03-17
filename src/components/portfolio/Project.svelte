<script>
	export let lang;
</script>

<section>
	<h2 id='projects'><span class='number'>02.</span> {lang.title}</h2>
	{#each lang.content as project}
		<article>
			<h3>{project.title}</h3>
			<div>
				<img id='image' src={project.image} alt={project.title}>
				<p>{project.content}</p>
			</div>
			<div class='links'>
				{#if project.link_realisation}
					<a class='links-button' href={project.link_realisation} target='_blank' rel='noopener noreferrer'>
						<img class='links-image' src='/img/icons/link-solid.svg' alt=''>
					</a>
				{/if}
				<a class='links-button' href={project.link_sources} target='_blank' rel='noopener noreferrer'>
					<img class='links-image' src='/img/icons/code-pull-request-solid.svg' alt=''>
				</a>
			</div>
		</article>
	{/each}
</section>
<style>
    section {
        justify-content: left;
        width: 100%;
        padding-bottom: 4.5em;
    }

    h2 {
        text-transform: uppercase;
    }

    .number {
        color: #b90b64;
    }

    #image {
        height: 64px;
        aspect-ratio: 1;
        float: left;
        margin: 0 0.5em 0.5em 0;
        box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 8px 1px;
        border-radius: 4px;
    }

		article{
        padding-bottom: 1.5em;
		}

    .links {
        display: flex;
        flex-direction: row;
        bottom: 0;
    }

    .links-button {
        padding: 0.25em 1em;
        margin-left: 1em;
        height: 1em;
        box-shadow: rgba(0, 0, 0, 0.35) 1px 1px 8px 1px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .links-image {
        height: 1em;
    }
</style>