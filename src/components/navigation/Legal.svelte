<script>
    export let title
    export let content
</script>

<div class="container" />

<style>
    footer{
        position: fixed;
        bottom: calc(15px);
    }
	h2 {
		text-transform: uppercase;
	}
    .floater{
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        bottom: 0;
        height: 15px;
        width: 100%;
    }
    .grab{
        width: 4em;
        height: 7px;
        background-color: black;
        border-radius: 10px;
    }
</style>

<footer>
    <div class="floater">
        <span class="grab"></span>
    </div>
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
</footer>
