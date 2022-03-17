<script>
	import { onMount } from 'svelte';

	let section;
	export let content;

	let i = 0;
	let speed = 50;

	function typeWriter() {
		if (i < content.length) {
			section.innerHTML += content.charAt(i);
			i++;
			setTimeout(typeWriter, speed + (Math.random() * 40 - 20));
		}
	}

	onMount(() => {
		typeWriter();
	});


</script>


<span bind:this={section}></span>