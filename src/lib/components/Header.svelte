<script>
  // your script goes here
</script>

<header class="center">
  <a class="logo" href="/">
    <img src="/images/wharf-logo.svg" alt="wharf logo" />
    <img src="/images/wharf-wordmark.svg" alt="wharf wordmark" />
  </a>
  <nav class="cluster">
    <!-- <a href="/progress">Progress</a>
    <a href="/about">Our process</a> -->
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: var(--s2);
  }

  .logo {
    display: inline-flex;
    gap: var(--s-1);
    justify-content: flex-start;
    align-items: center;
  }

  nav {
    justify-content: flex-end;
    align-items: center;
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
