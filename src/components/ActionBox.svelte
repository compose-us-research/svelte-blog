<script>
  export let className;
  export let href;
</script>

<style>
  .action-box {
    --color-shadow: rgba(0, 0, 0, 0.5);
    --margin-size: var(--box-margin);
    --padding-size: var(--box-padding);
    --scale-factor: 1.2;
    --shadow-size: 5px;
    --transition-time: 0.1s;

    background-color: var(--color-palette-green);
    border-radius: 5px;
    box-shadow: 0 0 var(--shadow-size) var(--color-shadow);
    color: var(--color-palette-white);
    display: inline-block;
    justify-self: center;
    margin: var(--margin-size);
    padding: var(--padding-size);
    text-align: center;
    transition: transform var(--transition-time),
      box-shadow var(--transition-time);
  }

  .action-box :global(a) {
    color: var(--color-palette-white);
  }

  .action-box:hover {
    box-shadow: 0 0 (var(--shadow-size) * var(--scale-factor))
      var(--color-shadow);
    transform: scale(var(--scale-factor));
  }
</style>

<a {href} class="action-box">
  <slot />
</a>
