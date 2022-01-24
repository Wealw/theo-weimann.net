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
    {#each content as education}
        <h3>{education.degree}</h3>
        <p>{education.school}</p>
        <p>{education.date}</p>
    {/each}
</div>