<script>
  import Box from "./Box.svelte";

  export let image;
  export let name;
  export let roles;
  export let skills;
</script>

<style>
  .person {
    display: grid;
    grid-template-areas:
      "name   name"
      "image  roles"
      "skills skills";
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 2fr;
    font-size: 12pt;
  }
  .person .name {
    grid-area: name;
  }
  .person .image {
    grid-area: image;
    width: 90%;
    height: auto;
    margin-bottom: 1em;
    border-radius: 50%;
  }
  .person .roles {
    grid-area: roles;
  }
  .person .skills {
    grid-area: skills;
  }

  @media (max-width: 400px) {
    .person {
      grid-template-areas:
        "name"
        "image"
        "roles"
        "skills";
      grid-template-columns: auto;
    }

    .person .image {
      width: 100%;
      height: auto;
    }

    .person .skills {
      margin-top: 1em;
    }
  }
</style>

<Box>
  <div class="person">
    <h2 class="name">{name}</h2>
    <img class="image" src={image} alt={name} />
    <div class="roles">
      <h3>Rolle</h3>
      <ul>
        {#each roles as role}
          <li>
            {@html role}
          </li>
        {/each}
      </ul>
    </div>
    <div class="skills">
      <h3>Fähigkeiten</h3>
      <ul>
        {#each skills as skill}
          <li>
            {@html skill}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</Box>
