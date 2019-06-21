<script>
  export let active;
  export let label;
  export let menuItem = false;
  export let onPointerEnter;
  export let onPointerLeave;
</script>

<style>
  .technology-item {
    color: var(--color-text);
    padding: 5px 15px;
    opacity: 0.5;
  }

  .technology-item.menu-item {
    padding: 5px 0;
  }

  .active {
    color: var(--color-palette-green);
    opacity: 1;
  }

  @media (max-width: 800px) {
    .technology-item.menu-item {
      padding: 5px 15px;
    }
  }
</style>

<li
  class="technology-item {active ? 'active' : ''}
  {menuItem ? 'menu-item' : ''}"
  on:pointerenter={onPointerEnter}
  on:pointerleave={onPointerLeave}>
   {label}
</li>
