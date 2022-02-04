// noinspection JSUnusedGlobalSymbols
export async function get({ request }) {
	let handledLanguages = ['fr', 'en', 'de', 'jp'];
	let browser_languages = request.headers.get('accept-language').split(';');
	for (let i = 0; i < browser_languages.length; i++) {
		let lang_code = browser_languages[i].split(',')[1];
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
