<script>
  import ActionBox from "./ActionBox.svelte";
  import Box from "./Box.svelte";
  import Section from "./Section.svelte";
</script>

<style>
  div.boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 -25px;
  }

  div.boxes > :global(.box) {
    align-items: flex-start;
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: auto;
    justify-content: center;
    width: 240px;
  }

  div.boxes img {
    align-self: center;
    justify-self: center;
    max-width: 100%;
  }

  .action-boxes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .action-boxes a {
    min-width: 200px;
  }

  .action-boxes :global(.action-box) {
    justify-self: center;
  }
</style>

<Section>
  <div class="boxes">
    <Box>
      <img src="/images/about-create.png" alt="Bau digitaler Produkte" />
      <p>
        Wir bauen digitale Produkte
        <strong>mit und für Euch.</strong>
      </p>
    </Box>
    <Box>
      <img src="/images/about-todastic.png" alt="Produktmehrwert" />
      <p>
        Wir möchten
        <strong>mit unseren Produkten Mehrwert schaffen.</strong>
      </p>
    </Box>
    <Box>
      <img src="/images/about-work.png" alt="Partner" />
      <p>
        Wir sind Menschen,
        <strong>die Euch helfen,</strong>
        Tools zu verwenden, die Eure Arbeit angenehmer machen.
      </p>
    </Box>
  </div>
  <div class="action-boxes">
    <ActionBox href="tel:0871-20667080">
      Kontaktiert uns unter 0871-20667080
    </ActionBox>
    <ActionBox
      href="mailto:hello@compose.us?subject={encodeURIComponent('Anfrage via Website')}&body={encodeURIComponent('Hallo zusammen,\n\n\nViele Grüße\n')}">
      Oder per Mail an: hello@compose.us
    </ActionBox>
  </div>
</Section>
