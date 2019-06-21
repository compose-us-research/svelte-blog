<script>
  export let anchor = null;
</script>

<style>
  .section {
    --color-section-text: var(--color-palette-gray);
    --color-section-top: #f2f5f2;
    --color-section-bottom: #fafcfa;

    align-items: center;
    background: linear-gradient(
      180deg,
      var(--color-section-top),
      var(--color-section-bottom)
    );
    box-sizing: border-box;
    color: var(--color-section-text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 75px 5% 5%;
    width: 100%;
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
  }
</style>

<section {...anchor ? { id: anchor } : {}} class="section">
  <div class="content">
    <slot />
  </div>
</section>
