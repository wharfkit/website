<script lang="ts">
  import HeaderLogo from "./Logo.svelte"
  import MenuToggle from "./MenuToggle.svelte"
  import { page } from "$app/stores"
  import MegaMenuItem from "./MegaMenuItem.svelte"

  let innerWidth: number
  let menu: HTMLDetailsElement
  let kitsMenu: HTMLDetailsElement
  
  $: section = $page.url.pathname
  $: isMobile = innerWidth <= 768
  $: isMenuOpen = isMobile ? false : true

  function closeNav() {
    if (isMobile) {
      menu.removeAttribute("open")
      isMenuOpen = false
    }
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }

  function closeDetails() {
    kitsMenu?.removeAttribute("open")
  }

  function handleDismiss(e) {
    if (!kitsMenu?.contains(e.target)) {
      closeDetails()
    }
  }

</script>

<svelte:window bind:innerWidth />
<svelte:document on:click={handleDismiss} />

<header>
  <nav>
    <div class="left">
      <a href="/">
        <HeaderLogo />
      </a>
    </div>

    <!-- TODO: fix flash of open menu on mobile -->
    <details class="menu" bind:this={menu} open={!isMobile}>
      <MenuToggle {isMenuOpen} onClick={toggleMenu} />

      <menu>
        <li>
          <details class="kits-menu" bind:this={kitsMenu}>
            <summary><span class="nav-item">Kits<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span></summary>
            <ul>
              <MegaMenuItem {section} title="Starter Kit" href="/kits" onClick={closeDetails} />
              <MegaMenuItem
                {section}
                title="Session Kit"
                href="/kits/session"
                onClick={closeDetails} />
              <MegaMenuItem
                {section}
                title="Contract Kit"
                href="/kits/contract"
                onClick={closeDetails} />
              <MegaMenuItem
                {section}
                title="Account Kit"
                href="/kits/account"
                onClick={closeDetails} />
            </ul>
          </details>
        </li>

        <li class:active={new RegExp("/docs").test(section)}>
          <a href="/docs" on:click={closeNav}><span class="nav-item">Documentation</span></a>
        </li>
        <li class:active={new RegExp("/blog").test(section)}>
          <a href="/blog" on:click={closeNav}><span class="nav-item">Blog</span></a>
        </li>
        <li class:active={new RegExp("/brand").test(section)}>
          <a href="/brand" on:click={closeNav}><span class="nav-item">Brand</span></a>
        </li>
        <li class:active={new RegExp("/about").test(section)}>
          <a href="/about" on:click={closeNav}><span class="nav-item">About</span></a>
        </li>
      </menu>
    </details>

    <div class="right">
      <a class="button" href="https://github.com/wharfkit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
          ><path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path
            d="M9 18c-4.51 2-5-2-7-2" /></svg>
        <span>Github</span>
      </a>
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
    width: 100%;
  }

  nav {
    --_nav-radius: 24px;
    --_nav-item-radius: 12px;
    flex: 1;
    max-inline-size: var(--max-inline-size);
    background: var(--header-background, var(--theme-header-background));
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: var(--space-l);
    border-radius: var(--_nav-radius);
    position: relative;
  }

  .left {
    padding-inline-start: var(--space-m);
    display: inline-flex;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-s);
  }

  nav menu {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    gap: var(--space-2xs);
    list-style: none;
    padding-inline: 0;
    height: 100%;
  }

  menu li {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: var(--fs-0);
    /* padding-inline: var(--space-xs); */
    font-family: var(--ff-heading);
    color: var(--header-text-color, var(--theme-header-text));
    min-width: fit-content;
  }

  menu li a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
  }

  menu li span {
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3xs);
    padding-inline: var(--space-xs);
    padding-block: var(--space-2xs);
  }

  svg {
    flex-shrink: 0;
  }

  .kits-menu span {
    padding-inline-end: var(--space-2xs);
  }

  .kits-menu svg {
    transform: rotate(0deg);
    width: 1em;
    height: 1em;
    transition: transform 80ms ease;
  }
  .kits-menu[open] svg {
    transform: rotate(90deg);
  }

  menu li:is(:hover, :focus) .nav-item,
  menu li details[open] .nav-item {
    border-radius: var(--_nav-item-radius);
    background: var(--nav-background-color, var(--theme-nav-item-hover));
  }

  menu details,
  menu summary {
    height: 100%;
    display: flex;
    align-items: center;
  }

  summary {
    cursor: pointer;
    user-select: none;
  }

  .kits-menu ul {
    position: absolute;
    top: 100%;
    margin-top: var(--space-2xs);
    left: 0;
    right: 0;
    padding: var(--space-s);
    border-radius: var(--_nav-radius);
    inline-size: 100%;
    max-inline-size: var(--max-inline-size);
    list-style: none;
    justify-content: space-between;
    align-items: center;
    background: var(--nav-background-color, var(--theme-nav-item-hover));
    z-index: 999;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    gap: var(--space-s);
  }

  a.button {
    padding-inline-start: 2.75rem;
    padding-inline-end: 3rem;
    margin-inline: var(--space-2xs);
    margin-block: var(--space-2xs);
    font-family: var(--ff-body);
    font-size: var(--fs-0);
  }

  @media (max-width: 768px) {
    nav {
      --header-height: fit-content;
      position: relative;
      grid-template-columns: 1fr auto;
      gap: 0;
      padding-block: var(--space-2xs);
      padding-inline: var(--space-2xs);
    }

    .left {
      padding-inline-start: var(--space-2xs);
    }

    nav menu {
      position: absolute;
      top: calc(100% + var(--space-2xs));
      background: var(--nav-background-color, var(--theme-nav-background));
      padding: var(--space-s);
      border-radius: 24px;
      width: 100%;
      left: 0;
      right: 0;
      height: auto;
      z-index: 999;
      display: flex;
      flex-direction: column;
      gap: var(--space-s);
    }

    menu li {
      /* border: 2px solid var(--nav-border-color, var(--color-accent-100)); */
      border-radius: var(--border-radius, var(--space-2xs));
      border-radius: 16px;
      position: relative;
    }

    details,
    summary {
      height: 100%;
    }

    details {
      display: inline-flex;
      justify-content: flex-end;
    }

    li :is(details, span, a, summary) {
      width: 100%;
    }

    li :is(a, summary) {
      display: block;
      padding-block: var(--space-2xs);
    }

    .kits-menu[open] {
      background: var(--nav-background-color, var(--theme-nav-item-hover));
      border-radius: var(--_nav-item-radius);
    }

    .kits-menu ul {
      position: relative;
      grid-template-columns: 1fr 1fr;
    }

    .navHidden nav a {
      color: var(--header-background, var(--swell-mist));
    }

    .right {
      display: none;
    }
  }
</style>
