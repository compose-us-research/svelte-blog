<script>
  import cn from "classnames";
  // import { onMount } from "svelte";

  // onMount((...args) => {
  //   console.log({ args });
  // });

  let clazz;
  export { clazz as class };
</script>

<style>
  .box {
    --color-shadow: rgba(0, 0, 0, 0.5);
    --margin-size: var(--box-margin);
    --padding-size: var(--box-padding);
    --scale-factor: 1.2;
    --shadow-size: 5px;
    --transition-time: 0.1s;

    background-color: var(--color-palette-white);
    box-sizing: border-box;
    box-shadow: 0 0 var(--shadow-size) var(--color-shadow);
    display: flex;
    flex-direction: column;
    margin: var(--margin-size);
    padding: var(--padding-size);
    transition: transform var(--transition-time),
      box-shadow var(--transition-time);
  }

  .box:hover {
    box-shadow: 0 0 (var(--shadow-size) * var(--scale-factor))
      var(--color-shadow);
    transform: scale(var(--scale-factor));
  }
</style>

<div class="box">
  <slot />
</div>
