<script>
  import ActionBox from "../components/ActionBox.svelte";
  import Box from "../components/Box.svelte";
  import Section from "../components/Section.svelte";
</script>

<style>
  section {
    padding: 25px;
  }
  p {
    margin-bottom: 25px;
  }
</style>

<svelte:head>
  <title>compose.us GmbH - Impressum</title>
</svelte:head>

<Section anchor="imprint">
  <h2>Impressum</h2>

  <section class="legal">
    <h3>Rechtliche Angaben</h3>
    <p>
      compose.us GmbH
      <br />
      Goethestr. 46
      <br />
      84032 Landshut
    </p>
    <p>
      Vertreten durch:
      <br />
      Geschäftsführer: Jörn Bernhardt
    </p>
    <p>
      Kontakt: Telefon: +49 1522 - 2893 769
      <br />
      E-Mail: hello@compose.us
    </p>
    <p>
      Registereintrag: Amtsgericht Landshut: HRB 11217
      <br />
      Umsatzsteuer: USt-IdNr: DE318188138
    </p>
  </section>
  <section id="privacy">
    <h3>Datenschutz</h3>
    <p>
      Diese Webseite verwendet
      <strong>keine</strong>
      Cookies.
    </p>
    <p>
      Diese Seite wird bei{' '}
      <a
        href="https://pages.github.com/"
        target="_blank"
        rel="noopener noreferrer">
        Github Pages
      </a>
      gehostet. Die Github Datenschutzerklärung ist
      <a
        href="https://help.github.com/articles/github-privacy-statement/"
        target="_blank"
        rel="noopener noreferrer">
        hier
      </a>
      zu finden.
    </p>
    <p>
      Sofern Ihr mit uns in Kontakt tretet, werden Eure Anfrage und angegebenen
      Kontaktinformationen zur Bearbeitung Eures Anliegens gespeichert. Eine
      automatisierte Datenverarbeitung oder Profilerstellung mithilfe Eurer
      Angaben wird nicht durchgeführt.
    </p>
  </section>
  <section id="licenses">
    <h3>Lizenzen und Danksagung</h3>
    <p>
      Die in dieser Webseite eingesetzten Schriften PT Sans, PT Sans Narrow, PT
      Sans Caption, PT Serif und PT Serif Caption stehen unter der
      <a href="http://scripts.sil.org/OFL">SIL Open Font License, 1.1</a>
      .
    </p>
  </section>
</Section>
