<script lang="ts">
  import type { PageData } from "./$types"
  import TOC from "./TOC.svelte"

  export let data: PageData

  $: ({ title, headings } = data.doc)
</script>

<main>
  <article>
    {@html data.doc.content}
  </article>

  <!-- Only render the TOC if there are more than 2 headings -->
  {#if headings.length}
    <aside>
      <TOC {headings} {title} />
    </aside>
  {/if}
</main>

<style>
  main {
    margin-inline: revert;
    display: grid;
    grid-template-columns: 1fr 25ch;
    column-gap: var(--space-xl);
  }

  @media (max-width: 1024px) {
    main {
      grid-template-columns: 1fr;
      gap: 0;
    }

    aside {
      display: none;
    }
  }

  article :global(*) {
    margin: revert;
  }

  article :global(h1) {
    font-size: var(--fs-3);
    font-family: var(--ff-heading);
    font-weight: 600;
    margin-block-start: var(--space-s);
  }

  article :global(h2) {
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  article :global(h3) {
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  article :global(h4) {
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  article :global(h5) {
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  article :global(p) {
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    font-weight: 400;
    color: var(--theme-text-body);
  }

  article :global(blockquote) {
    font-size: var(--fs-0);
    border-radius: var(--border-radius);
  }

  article :global(img) {
    border-radius: var(--border-radius);
    max-width: 100%;
    margin-inline: auto;
  }

  article :global(tbody tr:nth-child(odd)) {
    background-color: var(--color-secondary-50);
    border-radius: var(--border-radius);
  }

  article :global(table) {
    width: 100%;
    table-layout: fixed;
  }
</style>
