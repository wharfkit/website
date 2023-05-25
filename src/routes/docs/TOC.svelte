<script lang="ts">
  import type { HeadingNode } from "$lib/types"

  export let headings: HeadingNode[] = []
</script>

<nav class="toc">
  <div>
    <header class="toc">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-bookmark"
        ><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
      <p>Table of Contents</p>
    </header>
    <ul>
      {#each headings as heading}
        <li>
          <a href={`#${heading.id}`}>{heading.text}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    /* min-width: max-content; */
    font-family: var(--ff-heading);
  }
  nav > div {
    background-color: var(--theme-surface2);
    border-radius: var(--border-radius);
    padding-block: var(--space-s);
    padding-inline: var(--space-l);
  }

  nav header {
    display: flex;
    align-items: center;
    margin-block-end: var(--space-m);
  }

  nav header svg {
    margin-inline-end: var(--space-xs);
    width: 16px;
  }

  nav header p {
    font-size: var(--fs-0);
    font-weight: 600;
  }

  ul {
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
