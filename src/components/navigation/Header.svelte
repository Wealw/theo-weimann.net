<script>
	import { onMount } from 'svelte';

	let scroll_state = 0;
	import HeaderButton from './HeaderButton.svelte';

	export let lang

	onMount(async () => {
		// noinspection JSValidateTypes
		scroll_state = window.scrollY;
		document.addEventListener('scroll', () => {
			// noinspection JSValidateTypes,JSCheckFunctionSignatures
			scroll_state = window.scrollY;
		});
	});

	function goOnTop(){
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}
</script>

<header class:on_top={scroll_state !== 0}>
		<img src='img/logo/favicon.svg' alt='logo' on:click={goOnTop}>
	<ul>
		<li><HeaderButton href="about" lang={lang.profile.title}/></li>
		<li><HeaderButton href="projects" lang={lang.project.title}/></li>
		<li><HeaderButton href="contact" lang={lang.contact.title}/></li>
	</ul>
</header>

<style>
    header {
        position: sticky;
        display: flex;
        justify-content: space-between;
        height: 4em;
        top: 0;
        background-color: inherit;
        z-index: 9999;
        padding: 1em 0;
        transition: padding 200ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: rgba(0, 0, 0, 0) 0 0 0;
    }

    img {
        margin: 0 8px;
        padding: 0.5em;
        height: 3em;
        width: 3em;
    }

    .on_top {
        transition: padding 200ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
        padding: 0 0.5em;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.10), 0 1px 10px 0 rgba(0, 0, 0, 0.18);
    }

    ul {
        display: flex;
        flex-direction: row;
        height: 4em;
        margin: 0;
        padding: 0 1em;
        list-style-type: none;
    }

    @media (max-width: 800px) {
        ul {
            visibility: hidden;
        }
    }
</style>
