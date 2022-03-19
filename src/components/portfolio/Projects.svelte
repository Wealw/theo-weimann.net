<script>
	import Project from './Project.svelte';

	export let lang;
</script>

<section>
	<h2 id='projects'><span class='number'>02.</span> {lang.title}</h2>
	{#each lang.content as element}
		<Project lang={element}/>
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
</style>