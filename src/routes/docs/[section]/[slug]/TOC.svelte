<script lang="ts">
  import type { HeadingNode } from "$lib/types"

  export let headings: HeadingNode[] = []
  export let title: string
</script>

<nav aria-label="Table of Contents" class="toc">
  <header>
    <p>{title}</p>
  </header>
  <menu>
    {#each headings as heading}
      <li>
        <a href={`#${heading.id}`}>{heading.text}</a>
      </li>
    {/each}
  </menu>
</nav>

<style>
  nav {
    font-family: var(--ff-heading);
    background-color: var(--theme-surface2);
    border-radius: var(--border-radius);
    padding-block: var(--space-m);
    padding-inline: var(--space-m);
    margin-block-start: var(--space-s);
    position: sticky;
    top: var(--space-l);
  }

  nav header {
    display: flex;
    align-items: center;
    margin-block-end: var(--space-m);
  }

  nav header p {
    font-size: var(--fs-0);
    font-weight: 600;
  }

  menu {
    list-style: none;
    padding-inline-start: 0;
  }

  a {
    display: block;
    text-decoration: none;
    color: var(--theme-text1);
    font-weight: 400;
    line-height: 1.5em;
    padding-block: var(--space-2xs);
  }

  a:hover {
    text-decoration: underline;
  }
</style>
