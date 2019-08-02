<script>
  import AboutSection from "../components/AboutSection.svelte";
  import ContactSection from "../components/ContactSection.svelte";
  import PartnerSection from "../components/PartnerSection.svelte";
  import Splashscreen from "../components/Splashscreen.svelte";
  import TeamSection from "../components/TeamSection.svelte";
  import TechnologySection from "../components/TechnologySection.svelte";

  import showdown from "showdown";
  const showdownConverter = new showdown.Converter();

  const sloganContent = require("../../content/splash-screen.md");
  const slogan = showdownConverter.makeHtml(sloganContent);
  // const slogan = 'loading...';
</script>

<style>
  @media (min-width: 480px) {
    :global(h1) {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>compose.us GmbH</title>
</svelte:head>


<Splashscreen slogan={slogan} />

<AboutSection />

<TechnologySection />

<TeamSection />

<PartnerSection />

<ContactSection />
