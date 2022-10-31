// noinspection JSUnusedGlobalSymbols
export async function get({ request }) {
	//const handledLanguages = ['fr', 'en', 'de', 'jp'];
	const handledLanguages = ['fr', 'en'];
	const browser_languages = request.headers.get('accept-language').split(';');
	for (let i = 0; i < browser_languages.length; i++) {
		const lang_code = browser_languages[i].split(',')[1];
		if (handledLanguages.includes(lang_code)) {
			console.log(lang_code);
			return {
				status: 302,
				headers: {
					location: `/${lang_code}`
				}
			};
		}
	}
	return {
		status: 302,
		headers: {
			location: 'en'
		}
	};
}
