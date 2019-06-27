<script context="module">
  import Box from "../../components/Box.svelte";
  import Section from "../../components/Section.svelte";

  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  export let posts;
</script>

<style>
  .posts a:hover {
    text-decoration: none;
  }
  .posts p {
    color: var(--color-text);
  }
  .posts .tags {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 -10px;
    padding: 0;
  }
  .posts .tags li {
    box-shadow: 0 0 2px var(--color-text);
    padding: 5px;
    margin: 10px;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Section anchor="blog">
  <h1>Neuigkeiten</h1>

  <div class="posts">
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <a rel="prefetch" href="blog/{post.slug}">
        <Box>
          <h2>{post.title}</h2>
          <div class="meta">
            {new Date(post.publishedAt).toLocaleDateString()} von {post.author}
          </div>
          <p>{post.description}</p>
          <ul class="tags">
            {#each post.tags || [] as tag}
              <li>{tag}</li>
            {/each}
          </ul>
        </Box>
      </a>
    {/each}
  </div>
</Section>
