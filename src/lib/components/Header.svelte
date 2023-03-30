<script lang="ts">
  import logo from "$lib/assets/logos/Wharf-logo-horizontal.svg"
  import darkLogo from "$lib/assets/logos/Wharf-logo-horizontal-dark.svg"
  import { page } from "$app/stores"

  $: section = $page.url.pathname

  let navItems = [
    // { name: "Wharf", href: "#" },
    // { name: "Kits", href: "#" },
    // { name: "Learn", href: "#" },
    // { name: "Documentation", href: "#" },
    { name: "Blog", href: "/blog" },
    { name: "Brand", href: "/brand" },
  ]

  let isNavOpen = false

  function closeNav() {
    isNavOpen = false
  }

  function toggleNav() {
    isNavOpen = !isNavOpen
  }
</script>

<header class:navHidden={!isNavOpen}>
  <div class="left">
    <a href="/">
      <picture>
        <!-- <source srcset={darkLogo} type="image/svg+xml" media="(prefers-color-scheme: dark)" /> -->
        <img src={logo} alt="wharf logo" width="203" />
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

  <nav>
    <ul>
      {#each navItems as { name, href }}
        <li>
          <a {href} class:active={new RegExp(href).test(section)} on:click={closeNav}>
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <a class="button" href="https://github.com/wharfkit">Github</a>
</header>

<style>
  header {
    /* --header-background-color: var(--wharf-blue); */
    /* --header-text-color: white; */
    background: var(--header-background-color, transparent);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: var(--space-l);
    margin-block: var(--space-m);
    border-radius: var(--space-m);
  }

  .navToggle {
    display: none;
  }

  nav ul {
    display: flex;
    justify-content: center;
    gap: var(--space-l);
    list-style: none;
    padding-inline: 0;
  }

  nav a {
    font-family: var(--ff-heading);
    color: var(--header-text-color, var(--wharf-blue));
    text-decoration: none;
    padding-block: var(--space-3xs);
    border-radius: var(--space-xs);
    font-size: var(--fs-0);
    position: relative;
  }

  nav a::after {
    content: "";
    background-color: var(--color-secondary-700);
    opacity: 0;
    position: absolute;
    height: 4px;
    inset: 0;
    top: auto;
    border-radius: inherit;
    transition: opacity 200ms ease-out;
  }

  nav a:is(:hover, :focus-visible)::after {
    opacity: 50%;
  }
  nav a:is(.active)::after {
    opacity: 70%;
  }

  nav a:is(:active)::after {
    opacity: 100%;
  }

  a.button {
    justify-self: end;
    padding-inline: var(--space-xl);
    margin: var(--space-s);
  }

  @media (max-width: 768px) {
    header {
      --nav-background-color: var(--color-primary-900);
      position: relative;
      grid-template-columns: 1fr;
    }

    header .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-l);
    }

    .navToggle {
      display: grid;
      place-items: center;
      cursor: pointer;
      background: var(--nav-background-color, var(--swell-mist));
      padding: var(--space-s);
      margin: var(--space-xs);
      border-radius: 50%;
      aspect-ratio: 1;
      position: relative;
      color: var(--header-text-color, var(--wharf-blue));
      filter: url("#goo");
    }

    nav {
      position: absolute;
      top: calc(100% + var(--space-2xs));
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--space-m);
      background: var(--nav-background-color, var(--swell-mist));
      padding: var(--space-l);
      border-radius: var(--border-radius, var(--space-s));
      width: 100%;
      z-index: 999;
      transform: scaleY(1) translateY(0);
      transform-origin: top right;

      transition: transform 200ms;
      transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }

    nav ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
    }

    .navHidden nav {
      transform: scaleY(0) translateY(0);
    }
    .navHidden nav a {
      color: var(--header-background-color, var(--swell-mist));
    }

    a.button {
      display: none;
    }
  }
</style>
