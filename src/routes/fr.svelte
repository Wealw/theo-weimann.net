<script>
    import lang from "../lang/fr.json"
    import Header from "../components/navigation/Header.svelte";
    import Title from "../components/cv/Title.svelte";
    import Profile from "../components/cv/Profile.svelte";
    import Experience from "../components/cv/Experience.svelte";
    import Education from "../components/cv/Education.svelte";
    import Skills from "../components/cv/Skills.svelte";
    import Qualities from "../components/cv/Qualities.svelte";
    import Languages from "../components/cv/Languages.svelte";
    import Contact from "../components/cv/Contact.svelte";
    import Legal from "../components/navigation/Legal.svelte";

</script>


<Header/>
<main>
    <Title first_name={lang.first_name} last_name={lang.last_name} description={lang.description}/>
    <Profile title={lang.profile.title} content={lang.profile.content}/>
    <Experience title={lang.experience.title} content={lang.experience.content}/>
    <Education title={lang.education.title} content={lang.education.content}/>
    <Skills title={lang.skills.title} content={lang.skills.content}/>
    <Qualities title={lang.qualities.title} content={lang.qualities.content}/>
    <Languages title={lang.languages.title} content={lang.languages.content}/>
    <Contact title={lang.contact.title} content={lang.contact.content}/>
</main>
<Legal/>