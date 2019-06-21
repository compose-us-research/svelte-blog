<script>
  import Person from "./Person.svelte";
  import Section from "./Section.svelte";
</script>

<style>
  .person-grid {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .person-grid :global(.person) {
    margin: 25px;
    max-width: 300px;
  }
</style>

<Section>
  <h2>Über uns</h2>

  <div class="person-grid">
    <Person
      name="Jörn"
      roles={['Programmieren', 'Unternehmens&shy;entwicklung', 'Netzwerken']}
      skills={['Programmieren generell', 'Hilfreiche Skripte (kleine Programme) zur Optimierung von Arbeitsabläufen', 'Genaue Analyse der Problemstellung']} />
    <Person
      name="Udo"
      roles={['Programmieren', 'Technische Infrastruktur', 'Unternehmens&shy;kultur']}
      skills={['Pragmatische Lösungen', 'Lernt gern und schnell', 'Große Probleme in kleine, iterativ zu bearbeitenden Teile herunterbrechen']} />
    <Person
      name="Tina"
      roles={['Produkt Management', 'Schnittstelle IT und restliche Welt', 'Marketing / Vertrieb']}
      skills={['Digitale Geschäftsmodelle & Start-ups', 'Marketing und Vertrieb', 'Entscheidungen unter Unsicherheit treffen']} />
    <Person
      name="Philip"
      roles={['Programmieren', 'Netzwerken', 'Entrepreneurship']}
      skills={['Programmieren generell', 'Multimedia Producer (Video&shy;/&shy;Sound)', 'Story Telling']} />
  </div>
</Section>
