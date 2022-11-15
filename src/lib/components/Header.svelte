<script>
  // your script goes here
</script>

<header class="cluster">
  <a class="logo | cluster" href="/">
    <img src="/images/wharf-logo.svg" alt="wharf logo" />
    <img src="/images/wharf-wordmark.svg" alt="wharf wordmark" />
  </a>
  <nav class="">
    <a href="/progress">Progress</a>
    <a href="/about">Our process</a>
  </nav>
</header>

<style>
  header {
    --justify-content: space-between;
    --align-items: center;
    padding-block: var(--s2);
  }

  .logo {
    --justify-content: flex-start;
  }

  nav {
    --justify-content: flex-start;
    /* --gap: rem; */
  }

  nav a {
    color: var(--wharf-blue);
    text-decoration: none;
    padding-inline: 1em;
    padding-block: 0.5em;
    border-radius: var(--s-1);
    font-size: var(--fs-400);
  }

  nav a:hover {
    background-color: var(--swell-mist);
  }
</style>
