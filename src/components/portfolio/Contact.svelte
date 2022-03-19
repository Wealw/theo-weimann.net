<script lang='ts'>
	export let lang;
	let name = '';
	let email = '';
	let message = '';

	let hasError = false;
	let isFormSubmitted = false;
	let submitted = false;

	function handleSubmit() {
		isFormSubmitted = true;
	}
</script>

<section>
	<h2 id='contact'><span class='number'>03.</span> {lang.title}</h2>
	{#if (!isFormSubmitted)}
		<form id='contact_form' on:submit|preventDefault={handleSubmit}>
			<label for='name'>{lang.content.name} :</label>
			<input id='name' pattern='.+' type='text' bind:value={name} class:empty="{name === ''}" required>
			<label for='email'>{lang.content.email} :</label>
			<input id='email' pattern='.+@.+\..+' type='email' bind:value={email} class:empty="{email === ''}" required>
			<label for='message'>{lang.content.message} :</label>
			<textarea id='message' bind:value={message} class:empty="{message === ''}" required></textarea>
			<button type='submit'>{lang.content.submit}</button>
		</form>
	{:else }
		<p>{lang.content.success}</p>
	{/if}
</section>


<style>
    section {
        scroll-margin-top: 4em;
        width: 100%;
        padding-bottom: 6em;
    }

    h2 {
        text-transform: uppercase;
    }

    .number {
        color: #b90b64;
    }

    form {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    label {
        padding-bottom: 0.5em;
    }

    textarea, input {
        min-width: calc(100% - 2em - 4px);
        max-width: calc(100% - 2em - 4px);
        padding: 0.75em 1em;
        margin-bottom: 1em;
    		border-radius: 0.5em;
				border: #575756 solid 1px;
		}

    textarea {
        min-height: 6em;
    }
		
    .empty {
        border-color: #000000 !important;
    }

    input:invalid {
        border-color: #EE3D65;
    }

		button{
				border-radius: 0.5em;
        border: #575756 solid 1px;
				background-color: #b90b64;
        padding: 0.75em 1em;
		}
</style>
