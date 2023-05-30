<script lang="ts">
  import logo from "$lib/assets/logos/Wharf-logo-horizontal.svg"
  import darkLogo from "$lib/assets/logos/Wharf-logo-horizontal-dark.svg"
  import { page } from "$app/stores"

  $: section = $page.url.pathname

  let navItems = [
    // { name: "Wharf", href: "#" },
    { name: "Kits", href: "/kits" },
    // { name: "Learn", href: "#" },
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Brand", href: "/brand" },
    // { name: "theme", href: "/theme" },
  ]

  let isNavOpen = false

  function closeNav() {
    isNavOpen = false
  }

  function toggleNav() {
    isNavOpen = !isNavOpen
  }
</script>

<header>
  <nav class:navHidden={!isNavOpen}>
    <div class="left">
      <a href="/">
        <picture>
          <!-- TODO: fix shrinking svg before mobile breakpoints -->
          <!-- <source srcset={darkLogo} type="image/svg+xml" media="(prefers-color-scheme: dark)" /> -->
          <img src={logo} alt="wharf logo" width="146" />
        </picture>
      </a>
      <button class="navToggle close" on:click={toggleNav}>
        <span class="visually-hidden">{isNavOpen ? "Close" : "Open"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          {#if isNavOpen}
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          {:else}
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
          {/if}
        </svg>
      </button>
    </div>

    <menu>
      {#each navItems as { name, href }}
        <li>
          <a {href} class:active={new RegExp(href).test(section)} on:click={closeNav}>
            {name}
          </a>
        </li>
      {/each}
    </menu>

    <div class="right">
      <a class="button" href="https://github.com/wharfkit">Github</a>
    </div>
  </nav>
</header>

<style>
  :global([data-theme="light"]) {
    --theme-header-background: white;
    --theme-header-text: var(--wharf-blue);
    --theme-nav-toggle-background: var(--reef-turquoise);
    --theme-nav-toggle-foreground: var(--theme-header-text);
    --theme-nav-background: white;
    --theme-nav-item-hover: var(--swell-mist);
  }

  :global([data-theme="dark"]) {
    --theme-header-background: var(--wharf-blue);
    --theme-header-text: white;
    --theme-nav-toggle-background: var(--reef-turquoise);
    --theme-nav-toggle-foreground: var(--wharf-blue);
    --theme-nav-background: var(--wharf-blue);
    --theme-nav-item-hover: var(--color-primary-800);
  }

  header {
    display: flex;
    justify-content: center;
    padding-inline: var(--page-padding-inline);
  }

  nav {
    flex: 1;
    max-inline-size: var(--max-inline-size);
    background: var(--header-background, var(--theme-header-background));
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: var(--space-l);
    margin-block: var(--space-s);
    border-radius: var(--space-m);
    /* height: var(--header-height, var(--space-2xl)); */
  }

  .left {
    padding-inline-start: var(--space-2xs);
  }

  .navToggle {
    display: none;
  }

  nav menu {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-inline: 0;
  }

  menu a {
    font-family: var(--ff-heading);
    color: var(--header-text-color, var(--theme-header-text));
    text-decoration: none;
    padding-block: var(--space-xs);
    padding-inline: var(--space-xs);
    border-radius: var(--space-xs);
    font-size: var(--fs-0);
  }

  menu a:is(:hover, :focus) {
    background: var(--nav-background-color, var(--theme-nav-background));
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-s);
  }

  a.button {
    justify-self: end;
    padding-inline: var(--space-xl);
    margin-inline: var(--space-2xs);
    font-family: var(--ff-body);
  }

  @media (max-width: 768px) {
    nav {
      --header-height: fit-content;
      position: relative;
      grid-template-columns: 1fr;
      gap: 0;
    }

    nav .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-l);
    }

    .navToggle {
      display: grid;
      place-items: center;
      cursor: pointer;
      background: var(--nav-toggle-color, var(--theme-nav-toggle-background));
      color: var(--header-text-color, var(--theme-nav-toggle-foreground));
      padding: var(--space-s);
      margin: var(--space-xs);
      border-radius: var(--border-radius, 12px);
      aspect-ratio: 1;
      position: relative;
    }

    nav menu {
      position: absolute;
      top: calc(100% + var(--space-2xs));
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--space-m);
      background: var(--nav-background-color, var(--theme-nav-background));
      padding: var(--space-s);
      border-radius: var(--border-radius, var(--space-s));
      width: 100%;
      z-index: 999;
      transform: scaleY(1) translateY(0);
      transform-origin: top right;

      transition: transform 200ms;
      transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      flex-direction: column;
      gap: var(--space-s);
    }

    li {
      /* border: 2px solid var(--nav-border-color, var(--color-accent-100)); */
      border-radius: var(--border-radius, var(--space-2xs));
    }

    li a {
      display: block;
      padding-block: var(--space-2xs);
    }

    li a:is(:hover, :focus) {
      background: var(--nav-background-color, var(--theme-nav-item-hover));
    }

    li a:is(:active) {
      background: var(--header-background, white);
    }

    .navHidden menu {
      transform: scaleY(0) translateY(0);
    }
    .navHidden nav a {
      color: var(--header-background, var(--swell-mist));
    }

    a.button {
      display: none;
    }
  }
</style>
