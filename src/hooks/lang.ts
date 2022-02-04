let handledLanguages = ['fr', 'en', 'de', 'jp'];

export async function handleLanguageAccessibility({ event, resolve }): Promise<Response> {
	const response = await resolve(event);
	let uri = event.url.pathname;
	for (let i = 0; i < handledLanguages.length; i++) {
		if (uri.startsWith(`/${handledLanguages[i]}`)) {
			const body = await response.text();
			return new Response(
				body.replace('<html lang="en">', `<html lang="${handledLanguages[i]}">`),
				response
			);
		}
	}
	return response;
}
