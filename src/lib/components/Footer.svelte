<script lang="ts">
  import data from "$lib/footerData"
  import { capitalize } from "../utils"
  import logo from "$lib/assets/logos/Wharf_logo_bright_vector_no_bg_svgfix.svg"
  import darkLogo from "$lib/assets/logos/Wharf_logo_dark_vector_no_bg_svgfix.svg"
  import ThemeToggle from "./ThemeToggle.svelte"
</script>

<footer>
  <nav class="">
    <img class="logo light" src={logo} alt="Wharf logo" width="100%" height="auto" />
    <img class="logo dark" src={darkLogo} alt="Wharf logo" width="100%" height="auto" />
    {#each data as section}
      <div class="box">
        <h3>{capitalize(section.title)}</h3>
        <ul>
          {#each section.items as { name, href }}
            <li><a {href}>{capitalize(name)}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
    <div class="box">
      <h3>Theme</h3>
      <ThemeToggle />
    </div>
  </nav>
</footer>

<style>
  :global([data-theme="light"]) {
    --theme-footer-background: white;
    --theme-footer-text: black;
  }

  :global([data-theme="dark"]) {
    --theme-footer-background: hsl(var(--hue-wharf) 21% 10%);
    --theme-footer-text: white;
  }

  :global([data-theme="dark"]) .logo.light {
    display: none;
  }

  :global([data-theme="light"]) .logo.dark {
    display: none;
  }

  footer {
    background: var(--footer-background, var(--theme-footer-background));
    margin-block-start: var(--space-xl);
  }

  nav {
    max-inline-size: var(--max-inline-size);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    padding-inline: var(--space-s);
    padding-block: var(--space-xl);
  }

  img {
    max-width: 60px;
    flex-basis: 5rem;
    grid-row: 1 / 4;
    grid-column: 1 / 3;
    margin: var(--space-s);
  }

  div.box {
    padding: var(--space-s);
    inline-size: max-content;
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    line-height: 2em;
  }

  h3 {
    font-family: var(--ff-heading);
    font-weight: 600;
    font-size: var(--fs-1);
    color: var(--footer-text-color, var(--theme-footer-text));
    opacity: 0.5;
    white-space: nowrap;
  }

  a {
    display: block;
    height: 100%;
    color: var(--footer-text-color, var(--theme-footer-text));
    text-decoration: none;
    font-weight: 400;
    font-size: var(--fs--1);
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    img {
      grid-column: 1 / 2;
    }
    nav {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1060px) {
    img {
      grid-column: 1 / 2;
    }
    nav {
      grid-template-columns: repeat(8, 1fr);
    }
  }
</style>
