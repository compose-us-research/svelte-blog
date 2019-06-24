<script>
  import Logo from "./Logo.svelte";
  import Section from "./Section.svelte";
</script>

<style>
  .root {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 2em;
    position: relative;
    text-align: center;
    flex-direction: column;
    height: calc(80vh);
  }

  img {
    height: auto;
    width: 90%;
  }

  .chevron {
    animation: scroll-down;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border-left: 0.6em solid var(--color-section-text);
    border-bottom: 0.6em solid var(--color-section-text);
    border-radius: 0.3em;
    height: 1.5em;
    transform: rotate(-45deg);
    width: 1.5em;
  }

  .slogan {
    margin-top: 3em;
    max-width: 30em;
  }

  .scroller {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
  }

  .scroller div {
    margin: 1em;
    font-size: 10pt;
  }

  @keyframes scroll-down {
    0%,
    100% {
      transform: translateY(-1em) rotate(-45deg);
    }
    50% {
      transform: translateY(2em) rotate(-45deg);
    }
  }
</style>

<Section anchor="top">
  <div class="root">
    <img src="/images/compose-us-black.svg" alt="compose.us" />
    <div class="slogan">
      <h2>Unser Angebot</h2>
      <p>
        Digitale Transformation bedeutet für uns, dass sich Prozesse
        <strong>grundlegend und exponentiell ändern,</strong>
        weil
        <strong>Daten nutzbar</strong>
        gemacht werden können.
      </p>
    </div>
    <div class="scroller">
      <div>scroll down</div>
      <div class="chevron" />
    </div>
  </div>
</Section>
