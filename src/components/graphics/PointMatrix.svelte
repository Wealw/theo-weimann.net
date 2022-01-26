<script lang="ts">
    export let size = 3
    export let color = "#000000"

    let x_size
    let y_size

    let grid_cssVarStyles

    let grid_styles = {
        'display': 'grid',
        'grid-gap': size + 'px',
        'grid-template-columns': 'repeat(auto-fill, ' + size + 'px)',
        'grid-template-rows': 'repeat(auto-fill, ' + size + 'px)',
    }

    let dot_styles = {
        'background-color': color,
        'height': size + 'px',
        'width': size + 'px',
        'border-radius': size + 'px',
    }

    $: grid_cssVarStyles = Object.entries(grid_styles)
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
    $: dot_cssVarStyles = Object.entries(dot_styles)
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        justify-content: center;
        align-content: center;
        overflow: hidden;
    }
</style>

<div bind:clientWidth={x_size} bind:clientHeight={y_size} style="{grid_cssVarStyles}">
    {#each {length: ~~(((x_size/size)+1)/2)} as x}
        {#each {length: ~~(((y_size/size)+1)/2)} as y}
            <i class="dot" style="{dot_cssVarStyles}"></i>
        {/each}
    {/each}
</div>


