<script lang="ts">
	export let href;
	export let lang;
	export let num;

	function goTo() : void{
		let instance = document.getElementById(href);
		let y = instance.getBoundingClientRect().top + window.scrollY - 64 - 32;
		window.scrollTo({top: y, behavior: 'smooth'})
	}
</script>

<a on:click={goTo}><span class='number'>{num}.</span> {lang}</a>
<style>
    a {
        height: 4em;
				text-decoration: none;
				color: inherit;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 0 0 2em;
    }
    a:hover{
        cursor: pointer;
				text-decoration: underline;
    }

    .number {
        color: #b90b64;
    }
</style>