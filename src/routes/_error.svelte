<script>
  export let status;
  export let error;
  export let segment = "_error";

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
  }

  p {
    margin: 1em auto;
  }

  .error {
    padding-top: 4.4em;
    text-align: center;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="error">
  <h1>{status}</h1>
  <p>{error.message}</p>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
