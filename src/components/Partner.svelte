<script>
  export let link;
  export let logo;
  export let name;
</script>

<style>
  .partner {
    align-items: center;
    display: flex;
    height: 200px;
    margin: 0 20px;
  }

  .logo {
    display: block;
    max-height: 200px;
    max-width: 300px;
  }
</style>

<div class="partner">
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img class="logo" src={logo} alt={name} />
  </a>
</div>
