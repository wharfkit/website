<script lang="ts">
  import data from "$lib/footerData"
  import { capitalize } from "../utils"
  import logo from "$lib/assets/logos/Wharf-logo-vertical.svg"
  import ThemeToggle from "./ThemeToggle.svelte"
</script>

<nav class="">
  <img src={logo} alt="Wharf logo" width="100%" height="auto" />
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

<style>
  nav {
    max-inline-size: var(--max-inline-size);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    padding: var(--space-s);
  }

  img {
    max-width: 60px;
    flex-basis: 5rem;
    grid-row: 1 / 3;
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
    font-size: var(--fs-0);
    color: var(--color-neutral-500);
    color: var(--theme-text3);
    white-space: nowrap;
  }

  a {
    display: block;
    height: 100%;
    color: #000;
    color: var(--theme-text1);
    text-decoration: none;
    font-weight: 400;
    font-size: var(--fs--1);
  }

  a:hover {
    color: var(--color-neutral-500);
    color: var(--theme-text3);
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
      grid-template-columns: repeat(7, 1fr);
    }
  }
</style>
