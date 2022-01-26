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
        {#each content as language}
            <li>{language.lang} {language.level}</li>
        {/each}
    </ul>
</div>