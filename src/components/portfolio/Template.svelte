<script>
	import Social from '../navigation/Social.svelte';

	export let lang;
	//export let theme;
	import Header from '../../components/navigation/Header.svelte';
	import Title from '../../components/portfolio/Title.svelte';
	import Contact from '../../components/portfolio/Contact.svelte';
	import Legal from '../../components/navigation/Legal.svelte';
	import Presentation from '../../components/portfolio/Presentation.svelte';
	import Projects from './Projects.svelte';
</script>

<Header lang={lang} />
<main>
	<Title lang={lang.home} />
	<Presentation lang={lang.profile} />
	<!--<Projects lang={lang.project}/>-->
	<!--<Contact lang={lang.contact}/>-->
</main>
<Social/>
<Legal title={lang.legal.title} content={lang.legal.content} />


<style>
    main {
        overflow: revert;
        display: flex;
        margin: auto;
        padding: 2em;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 660px;
    }
</style>