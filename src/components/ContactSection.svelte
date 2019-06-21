<script>
  import ActionBox from "./ActionBox.svelte";
  import Box from "./Box.svelte";
  import Section from "./Section.svelte";
</script>

<style>
  .action-boxes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .action-boxes a {
    min-width: 200px;
  }
</style>

<Section anchor="contact">
  <h2>Kontakt</h2>
  <h3>Wir sind ein Remote Team</h3>
  <p>
    Das heißt wir arbeiten dort, wo es Sinn macht: Bei Euch vor Ort, in
    Coworking Spaces oder von daheim. Das funktioniert weil wir an die
    Eigenverantwortlichkeit eines jeden bei uns glauben und es die Technologie
    mittlerweile erlaubt.
  </p>
  <div class="action-boxes">
    <ActionBox>
      <a href="tel:+4987120667080">Kontaktiert uns unter: 0871-20667080</a>
    </ActionBox>
    <ActionBox>
      <a href="mailto:hello@compose.us">per Mail an: hello@compose.us</a>
    </ActionBox>
  </div>
</Section>
