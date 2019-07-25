<script>
  import {onMount} from 'svelte';
  import AboutSection from "../components/AboutSection.svelte";
  import ActionBox from "../components/ActionBox.svelte";
  import Box from "../components/Box.svelte";
  import ContactSection from "../components/ContactSection.svelte";
  import PartnerSection from "../components/PartnerSection.svelte";
  import Section from "../components/Section.svelte";
  import Splashscreen from "../components/Splashscreen.svelte";
  import TeamSection from "../components/TeamSection.svelte";
  import TechnologySection from "../components/TechnologySection.svelte";

  let slogan = 'loading..';

  onMount(async () => {
    const response = await fetch('./content/splash-screen.md');
    const blob = await response.blob();
    const slogan = blob.text();
  });
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
