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
    <ul>
        {#each content as skill}
            <li>{skill}</li>
        {/each}
    </ul>
</div>