<script lang="ts">
  import data from "$lib/footerData"
  import { capitalize } from "$lib/utils/general"
  import ThemeToggle from "./ThemeToggle.svelte"
  import * as Header from "./Header"
</script>

<footer>
  <nav>
    <menu>
      {#each data as section}
        <li class="box">
          <h3>
            {#if section.href}
              <a href={section.href}>{capitalize(section.title)}</a>
            {:else}
              {capitalize(section.title)}
            {/if}
          </h3>
          <ul>
            {#each section.items as { name, href }}
              <li class="item"><a {href}>{capitalize(name)}</a></li>
            {/each}
          </ul>
        </li>
      {/each}
      <li class="box">
        <h3>Theme</h3>
        <ThemeToggle />
      </li>
    </menu>
    <div class="bottom">
      <a href="/">
        <Header.Logo />
      </a>
      <p>
        Wharf is an open source project sponsored by the
        <a href="https://antelope.io/">Antelope Coalition</a>
      </p>
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

  footer {
    background: var(--footer-background, var(--theme-footer-background));
    padding-inline: var(--page-padding-inline);
    padding-block: var(--space-m);
  }

  nav {
    max-inline-size: var(--max-inline-size);
    margin-inline: auto;
  }

  menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    row-gap: var(--space-m);
  }

  li.box {
    padding: 0;
    inline-size: max-content;
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
  }

  ul,
  menu {
    list-style: none;
    padding: 0;
  }

  menu,
  .bottom {
    padding: var(--space-m);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-m);
  }

  .bottom p {
    color: var(--footer-text-color, var(--theme-footer-text));
    opacity: 0.5;
    font-size: var(--fs--1);
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
    text-decoration: none;
    color: var(--footer-text-color, var(--theme-footer-text));
  }

  .item a {
    display: block;
    height: 100%;
    font-weight: 400;
    font-size: var(--fs--1);
  }

  li a:hover {
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    menu {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1060px) {
    menu {
      grid-template-columns: repeat(7, 1fr);
    }
  }
</style>
