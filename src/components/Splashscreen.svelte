<script>
  import Logo from "./Logo.svelte";
  import Section from "./Section.svelte";

  export let slogan;
</script>

<style>
  .root {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
    flex-direction: column;
    height: calc(84vh);
  }

  img {
    margin-bottom: 1.5em;
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
    display: flex;
    flex-flow: column;
  }

  .slogan p {
    margin-bottom: 1em;
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

  @media (max-width: 800px) {
    .scroller div {
      margin: 0.5em;
    }

    .slogan {
      align-content: space-between;
    }

    .slogan p {
      text-align: left;
      font-size: 0.9em;
    }
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
     {slogan}
    </div>

    <div class="scroller">
      <div>scroll down</div>
      <div class="chevron" />
    </div>
  </div>
</Section>
