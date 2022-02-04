<script>
	import { lang } from '../lang/fr.ts';
	import Header from '../components/navigation/Header.svelte';
	import Title from '../components/cv/Title.svelte';
	import Contact from '../components/cv/Contact.svelte';
	import Legal from '../components/navigation/Legal.svelte';
</script>

<Header />
<main>
	<Title first_name={lang.first_name} last_name={lang.last_name} description={lang.description} />
	<Contact />
</main>
<div style="height: 70vh"></div>
<Legal title={lang.legal.title} content={lang.legal.content} />
