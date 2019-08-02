<script>
  import Logo from "./Logo.svelte";
  export let segment;
</script>

<style>
  nav {
    background-color: var(--navigation-background);
    box-sizing: border-box;
    color: var(--navigation-text-color);
    display: flex;
    justify-content: space-between;
    padding: 10px 25px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }

  .menu {
    align-items: center;
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

  a .selected {
    text-decoration: underline;
  }

  @media (max-width: 950px) {
    .menu {
      justify-content: flex-end;
    }

    .menu a {
      display: none;
    }
  }
</style>

<nav>
  <a href="/">
    <Logo />
  </a>
  <div class="menu">
    <a class={segment === '' ? 'selected' : ''} href="/#top">Unser Angebot</a>
    <a class={segment === 'about' ? 'selected' : ''} href="/#about">Über uns</a>
    <a class={segment === 'partner' ? 'selected' : ''} href="/#partner">
      Partner
    </a>
    <a class={segment === 'contact' ? 'selected' : ''} href="/#contact">
      Kontakt
    </a>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!--<a
      rel="prefetch"
      class="blog {segment === 'blog' ? 'selected' : ''}"
      href="blog">
      Blog
    </a>-->
    <a
      rel="prefetch"
      class={segment === 'imprint' ? 'selected' : ''}
      href="/imprint">
      Impressum
    </a>
  </div>
</nav>
