<script>
    import lang from "../lang/fr.json"
    import Title from "../components/Title.svelte";
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    import Skills from "../components/Skills.svelte";
    import Qualities from "../components/Qualities.svelte";
    import Languages from "../components/Languages.svelte";
    import Contact from "../components/Contact.svelte";
    import Legal from "../components/Legal.svelte";
</script>

<Title first_name={lang.first_name} last_name={lang.last_name} description={lang.description}/>
<Profile title={lang.profile.title} content={lang.profile.content}/>
<Experience title={lang.experience.title} content={lang.experience.content}/>

<Education title={lang.education.title} content={lang.education.content}/>
<Skills title={lang.skills.title} content={lang.skills.content}/>
<Qualities title={lang.qualities.title} content={lang.qualities.content}/>
<Languages title={lang.languages.title} content={lang.languages.content}/>
<Contact title={lang.contact.title} content={lang.contact.content}/>
<Legal/>