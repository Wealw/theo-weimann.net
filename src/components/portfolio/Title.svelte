<script>
	import Blinking from '../graphics/Blinking.svelte';
	import TypeWriter from '../graphics/TypeWriter.svelte';

	export let lang;
</script>

<div class='container'>
	<div class='sub-container'>
		<h1>
			<span class='line'>
				<span class='text'>{lang.first_name}</span>
				<img src='/img/decoration/dot_matrix.svg' height='37px' width='155.39px' alt='point matrix'>
			</span>
			<span class='line'>
				<span class='text'>{lang.last_name}</span>
				<Blinking>_</Blinking>
			</span>
		</h1>
		<p>
			<TypeWriter content='{lang.description}' />
		</p>
	</div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 65vh;
        margin: auto;
    }


    .sub-container {
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }

    img {
        height: 37px;
    }

    h1 {
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 800;
        margin-bottom: 8px;
        letter-spacing: 8px;
        display: grid;
    }

    .line {
        display: inline-flex;
        align-items: center;
        width: 100%;
        height: 1em;
        padding-bottom: 8px;;
    }

    .text {
        padding-right: 8px;
    }

    p {
        font-weight: 500;
        color: #575756;
        min-height: 1em;
    }
</style>
