<script lang="ts">
  import type { DocumentationArticle, HeadingNode } from "$lib/types"

  export let doc: DocumentationArticle

  const { title, headings } = doc
</script>

<nav aria-label="Table of Contents" class="toc">
  <header>
    <p>
      <a href="#article">{title}</a>
    </p>
  </header>
  <menu>
    {#each headings as heading}
      <li>
        <a
          href={`#${heading.id}`}
          style={heading.elName === "H3" ? "padding-inline-start: var(--space-xs);" : ""}>
          <!-- {heading.elName} -->
          {heading.text}
        </a>
      </li>
    {/each}
  </menu>
</nav>

<style>
  nav {
    font-family: var(--ff-heading);
    background-color: var(--theme-surface2);
    border-radius: var(--border-radius);
    padding-block: var(--space-s);
    margin-block-start: var(--space-s);
    position: sticky;
    top: var(--space-l);
  }

  nav header {
    display: flex;
    align-items: center;
    height: var(--space-xl);
    padding-inline: var(--space-m);
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
</style>
