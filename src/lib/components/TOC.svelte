<script lang="ts">
  import { activeTocSection } from "$lib/stores"
  export let section: string
  export let title: string
  export let headings: HeadingNode[]

  const GITHUB_EDIT_URL = `https://github.com/wharfkit/website/edit/master/src/lib/docs/${section}/${title}.md`
</script>

<nav aria-label="Table of Contents" class="toc">
  <header>
    <p>
      <a href="#top">{title}</a>
    </p>
  </header>
  <menu>
    {#each headings as heading}
      <li>
        <a
          href={`#${heading.id}`}
          class:active={$activeTocSection === heading.id}
          on:click={() => ($activeTocSection = heading.id)}
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

  nav header a {
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

  a:hover {
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
