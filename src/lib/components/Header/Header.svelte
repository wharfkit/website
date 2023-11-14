<script lang="ts">
  import HeaderLogo from "./Logo.svelte"
  import MenuToggle from "./MenuToggle.svelte"
  import { page } from "$app/stores"
  import MegaMenuItem from "./MegaMenuItem.svelte"
  import ThemeToggle from "../ThemeToggle.svelte"

  let innerWidth: number
  let menuWrapper: HTMLDetailsElement
  let menu: HTMLMenuElement
  let kitsMenu: HTMLDetailsElement

  $: section = $page.url.pathname
  $: isMobile = innerWidth <= 768
  $: isTablet = innerWidth > 768 && innerWidth <= 1024
  $: isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = menuWrapper.open
    menu.style.display = "flex"
  }

  function closeNav() {
    if (isMobile) {
      menuWrapper.removeAttribute("open")
    }
    kitsMenu.removeAttribute("open")
  }

  function handleDismiss(e) {
    // closes whole nav on mobile if click is outside of menu
    if (isMobile && !menuWrapper.contains(e.target)) {
      closeNav()
    }

    // closes kits dropdown on desktop if click is outside of dropdown
    if (!isMobile && !kitsMenu.contains(e.target)) {
      closeNav()
    }
  }
</script>

<svelte:window bind:innerWidth />
<svelte:document on:click={handleDismiss} />

<header>
  <nav>
    <div class="left">
      <a href="/">
        <HeaderLogo collapsed={isTablet} />
      </a>
    </div>

    <div class="right small">
      <div class="mobile-only">
        <ThemeToggle />
      </div>

      <details class="menu" open={!isMobile} bind:this={menuWrapper} on:toggle={toggleMenu}>
        <MenuToggle {isMenuOpen} />
        <menu bind:this={menu}>
          <li>
            <details class="kits-menu" bind:this={kitsMenu}>
              <summary>
                <span class="nav-item"
                  >Kits
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </summary>
              <ul>
                <MegaMenuItem {section} title="Overview" href="/kits" onClick={closeNav} />
                <MegaMenuItem
                  {section}
                  title="Session Kit"
                  href="/kits/session"
                  onClick={closeNav} />
                <MegaMenuItem
                  {section}
                  title="Contract Kit"
                  href="/kits/contract"
                  onClick={closeNav} />
                <MegaMenuItem
                  {section}
                  title="Account Kit"
                  href="/kits/account"
                  onClick={closeNav} />
              </ul>
            </details>
          </li>

          <li class:active={new RegExp("/docs").test(section)}>
            <a href="/docs" on:click={closeNav}><span class="nav-item">Documentation</span></a>
          </li>
          <li class:active={new RegExp("/guides").test(section)}>
            <a href="/guides" on:click={closeNav}><span class="nav-item">Guides</span></a>
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
    </div>

    <div class="right large">
      <ThemeToggle />
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
          aria-label="Github Icon"
          ><path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path
            d="M9 18c-4.51 2-5-2-7-2" /></svg>
        <span>Github</span>
      </a>
    </div>
  </nav>
</header>

<style>
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
    gap: var(--space-m);
    border-radius: var(--_nav-radius);
    position: relative;
  }

  .left {
    padding-inline-start: var(--space-m);
    display: inline-flex;
  }

  .left a {
    /* width: 146px; */
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav menu {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    gap: var(--space-3xs);
    list-style: none;
    padding-inline: 0;
    height: 100%;

    transition: gap 200ms ease;
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
    padding-inline: var(--space-2xs);
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
    transition: transform 120ms ease;
  }
  .kits-menu[open] svg {
    transform: rotate(-180deg);
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

  .right .button {
    padding-inline-start: var(--space-s);
    padding-inline-end: var(--space-s);
    margin-inline: var(--space-2xs);
    margin-block: var(--space-2xs);
    font-family: var(--ff-body);
    font-size: var(--fs-0);

    transition: all 200ms ease;
  }

  .right .button svg {
    /* Visually align icon to center */
    translate: 2px 0;
  }

  .right .button span {
    overflow: hidden;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    opacity: 0;
    translate: -2rem 0;
    transition: opacity 800ms ease, translate 500ms ease;
  }

  @media (prefers-reduced-motion: no-preference) and (min-width: 768px) and (max-width: 1000px) {
    menu li {
      transition: 200ms;
    }
  }

  @media (min-width: 1024px) {
    nav menu {
      /* gap: var(--space-2xs); */
    }

    menu li span {
      /* padding-inline: var(--space-xs); */
    }

    .right .button {
      padding-inline-start: var(--space-l);
      padding-inline-end: var(--space-l);
    }

    .right .button svg {
      translate: 0;
    }

    .right .button span {
      position: relative;
      width: auto;
      white-space: normal;
      overflow: visible;
      opacity: 1;
      translate: 0 0;
    }
  }

  /* Mobile nav */
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
      display: none;
      flex-direction: column;
      gap: var(--space-xs);
    }

    menu li {
      /* border: 2px solid var(--nav-border-color, var(--color-accent-100)); */
      border-radius: var(--border-radius, var(--space-2xs));
      border-radius: 16px;
      position: relative;
    }

    menu li span {
      padding-inline: var(--space-s);
      /* padding-block: var(--space-xs); */
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

    .right.large {
      display: none;
    }

    .right.small .mobile-only {
      display: flex;
    }
  }
</style>
