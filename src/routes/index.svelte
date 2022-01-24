<script>
    import * as fs from "fs";

    let lang_file = "./src/lang/en.json"
    let lang_raw = fs.readFileSync(lang_file).toString()
    let lang = JSON.parse(lang_raw)
</script>

<h1>{lang.first_name} {lang.last_name}</h1>
<span>{lang.description}</span>

<h2>{lang.profile.title}</h2>
<p>{lang.profile.content}</p>

<h2>{lang.experience.title}</h2>
{#each lang.experience.content as experience}
    <h3>{experience.title}</h3>
    <p>{experience.company}</p>
    <p>{experience.type}</p>
    <p>{experience.date}</p>
{/each}

<h2>{lang.education.title}</h2>
{#each lang.education.content as education}
    <h3>{education.degree}</h3>
    <p>{education.school}</p>
    <p>{education.date}</p>
{/each}

<h2>{lang.skills.title}</h2>
<ul>
    {#each lang.skills.content as skill}
        <li>{skill}</li>
        {/each}
</ul>

<h2>{lang.qualities.title}</h2>
<ul>
    {#each lang.qualities.content as quality}
        <li>{quality}</li>
    {/each}
</ul>

<h2>{lang.languages.title}</h2>
<ul>
    {#each lang.languages.content as language}
        <li>{language.lang} {language.level}</li>
    {/each}
</ul>

<h2>{lang.contact.title}</h2>
{#each lang.contact.content as contact}
    {contact.lang} {contact.level}
{/each}
