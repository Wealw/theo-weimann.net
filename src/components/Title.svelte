<script>
    export let first_name
    export let last_name
    export let description
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 65vh;
    }
    h1{
            text-transform: uppercase;
    }
</style>

<div class="container">
        <h1>{first_name}{last_name}


        </h1>
        <p>{description}</p>
</div>