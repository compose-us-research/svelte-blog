<script>
  import Logo from "./Logo.svelte";
  export let segment;
</script>

<style>
  nav {
    background-color: var(--navigation-background);
    box-sizing: border-box;
    color: var(--navigation-text-color);
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding: 10px 25px;
    position: sticky;
    width: 100%;
  }

  .menu {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    font-family: var(--font-family-header);
    justify-content: space-between;
  }

  a {
    color: var(--navigation-link-color);
    margin: 0 10px;
    text-decoration: none;
  }

  a.selected {
    text-decoration: underline;
  }

  .menu {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    .menu {
      justify-content: flex-end;
    }

    .menu a {
      display: none;
    }

    /* .menu a.blog {
      display: block;
    } */
  }
</style>

<nav class="navigation-main">
  <a href="/">
    <Logo />
  </a>
  <div class="menu">
    <a class={segment === '' ? 'selected' : ''} href="/">Unser Angebot</a>
    <a class={segment === 'about' ? 'selected' : ''} href="/#about">Über uns</a>
    <a class={segment === 'contact' ? 'selected' : ''} href="/#contact">
      Kontakt
    </a>
    <a class={segment === 'partner' ? 'selected' : ''} href="/#partner">
      Partner
    </a>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <a
      rel="prefetch"
      class="blog {segment === 'blog' ? 'selected' : ''}"
      href="blog">
      Blog
    </a> -->
    <a
      rel="prefetch"
      class={segment === 'imprint' ? 'selected' : ''}
      href="/imprint">
      Impressum
    </a>
  </div>
</nav>
