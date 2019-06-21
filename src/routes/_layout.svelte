<script>
  import NavigationMain from "../components/NavigationMain.svelte";
  import FooterMain from "../components/FooterMain.svelte";

  export let segment;
</script>

<style>
  :root {
    /* typography */
    --font-family-caption: "PT Sans Caption", sans-serif;
    --font-family-header: "PT Sans Narrow", sans-serif;
    --font-family-regular: "PT Sans", sans-serif;
    --font-family-monospace: "PT Mono", monospace;

    --font-size-regular: 14px;

    --font-weight-regular: 400;
    --font-weight-strong: 600;

    --default-line-height: 1.2;

    /* colors */
    --color-palette-white: #fff;
    --color-palette-gray: #888;
    --color-palette-black: #000;
    --color-palette-green: #3ab53a;
    --color-palette-red: #d0021b;
    --color-palette-blue: #2a21d3;

    --color-background: var(--color-palette-white);
    --color-text: var(--color-palette-black);
    --color-notice: rgba(0, 0, 0, 0.6);
    --color-emphasize: var(--color-palette-green);

    --color-box-background: var(--color-palette-white);
    --color-box-heading: var(--color-palette-green);
    --color-box-text: rgba(0, 0, 0, 0.6);

    --navigation-background: rgba(0, 0, 0, 0.8);
    --navigation-text-color: var(--color-palette-white);
    --navigation-link-color: rgba(255, 255, 255, 0.8);

    /* default-scale-factor */
    --scale-factor: 1.1;

    /* spacing */
    --box-padding: 15px;
    --box-margin: 25px;

    /* z-index */
    --stacking-global: default-text;
  }

  :global(html),
  :global(body),
  :global(#sapper) {
    height: 100%;
  }

  .root {
    display: grid;
    grid-template-areas:
      "navigation"
      "content"
      "footer";
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  main {
    box-sizing: border-box;

    height: 100%;
    width: 100%;
  }
</style>

<div class="root">
  <NavigationMain {segment} />

  <main>
    <slot />
  </main>

  <FooterMain />
</div>
