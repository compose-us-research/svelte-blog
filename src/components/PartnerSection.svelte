<script>
  import ActionBox from "./ActionBox.svelte";
  import Box from "./Box.svelte";
  import Partner from "./Partner.svelte";
  import Section from "./Section.svelte";
</script>

<style>
  .partner-grid {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 -20px;
  }
</style>

<Section anchor="partner">
  <h2>Partner</h2>

  <div class="partner-grid">
    <Partner
      link="https://www.gruenderzentrum-digitalisierung-niederbayern.de/"
      logo="/images/partners/gdn_logo.png"
      name="Gründerzentrum Digitalisierung Niederbayern" />
    <Partner
      link="https://www.innkubator.de/"
      logo="/images/partners/innkubator_logo.png"
      name="INN.Kubator" />
    <Partner
      link="https://www.startupschool.org/companies/vki-fHGba2Z5rA"
      logo="/images/partners/yc_sus.png"
      name="YC StartupSchool" />
  </div>
</Section>
