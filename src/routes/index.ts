// noinspection JSUnusedGlobalSymbols
export async function get(event) {
    let handledLanguages = ["fr", "en", "de", "jp"]
    let browser_languages = event.locals.languages.split(';')
    for (let i = 0; i < browser_languages.length; i++) {
        let lang_code = browser_languages[i].split(',')[1]
        if (handledLanguages.includes(lang_code)) {
            console.log(lang_code)
            return {
                status: 302,
                headers: {
                    location: `/${lang_code}`
                }
            }
        }
    }
    return {
        status: 302,
        headers: {
            location: 'en'
        }
    }
}