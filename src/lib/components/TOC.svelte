<script lang="ts">
  import { page } from "$app/stores"
  import { activeTocSection } from "$lib/stores"
  import { scrollToTop } from "../utils"
  export let headings: HeadingNode[]

  const GITHUB_EDIT_URL = `https://github.com/wharfkit/website/blob/dev` + $page.data.doc.source
</script>

<nav aria-label="Table of Contents" class="toc">
  <header>
    <button on:click={scrollToTop}>
      <span>{$page.data.title}</span>
    </button>
  </header>
  <menu>
    {#each headings as heading}
      <li>
        <a
          href={`#${heading.id}`}
          class:active={$activeTocSection === heading.id}
          on:click={() => ($activeTocSection = heading.id || "")}
          style={heading.elName === "H3" ? "padding-inline-start: var(--space-2xs);" : ""}>
          {heading.text}
        </a>
      </li>
    {/each}
  </menu>
  <a href={GITHUB_EDIT_URL} class="edit button" data-type="secondary">Edit this page</a>
</nav>

<style>
  nav {
    font-family: var(--ff-heading);
    margin-block-start: var(--space-l);
    border-radius: var(--border-radius);
    position: sticky;
    top: var(--space-l);
  }

  nav header {
    display: flex;
    align-items: center;
    height: var(--space-xl);
    padding-inline: var(--space-m);
    background-color: var(--theme-surface2);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  header button {
    padding: 0;
    cursor: pointer;
    flex: 1;
    text-align: left;
  }

  header button span {
    font-size: var(--fs--1);
    font-weight: 600;
    color: var(--theme-text-heading);
    text-decoration: none;
  }

  menu {
    list-style: none;
    padding-inline: var(--space-m);
    padding-block-end: var(--space-s);
    background-color: var(--theme-surface2);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  li > a {
    display: block;
    text-decoration: none;
    color: var(--theme-text1);
    font-weight: 400;
    font-size: var(--fs--1);
    line-height: 1.5em;
    padding-block: var(--space-2xs);
  }

  a:hover,
  header button:hover span {
    text-decoration: underline;
  }

  a.active {
    color: var(--theme-text-heading);
    font-weight: 600;
  }

  .edit.button {
    margin-top: var(--space-s);
    position: sticky;
    top: var(--space-l);
    font-size: var(--fs--1);
    text-decoration: none;
    /* font-weight: 500; */
    --button-text: var(--theme-text-heading);
    /* z-index: -1; */
  }
</style>
