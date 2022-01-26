<script>
    import {onMount} from 'svelte'

    let status
    let element

    onMount(() => {
        setInterval(function () {
            element.style.visibility = (element.style.visibility === 'hidden' ? '' : 'hidden');
        }, 750)
    });


</script>

<div bind:this={element}>
    <slot/>
</div>