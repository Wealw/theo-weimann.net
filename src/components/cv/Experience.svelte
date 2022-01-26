<script>
    export let title
    export let content
</script>

<style>
    h2{
        text-transform: uppercase;
    }
</style>

<div class="container">
    <h2>{title}</h2>
    {#each content as experience}
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
        <p>{experience.type}</p>
        <p>{experience.date}</p>
    {/each}
</div>