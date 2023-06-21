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

  article :global(> *) {
    margin-block-start: var(--space-l);
  }

  article :global(h1) {
    line-height: var(--space-xl);
    margin-block-start: var(--space-s);
  }

  article :global(h2) {
    margin-block-start: var(--space-3xl);
  }

  article :global(h3) {
    margin-block-start: var(--space-2xl);
  }

  article :global(h4) {
    margin-block-start: var(--space-xl);
  }

  article :global(h5) {
    margin-block-start: var(--space-xl);
  }

  article :global(h6) {
    margin-block-start: var(--space-xl);
  }

  /* Tighten headers directly following h2 */

  article :global(h2 + :is(h3, h4, h5, h6)) {
    margin-block-start: var(--space-l);
  }

  /* Tighten content following a subheader */

  article :global(h3 + *) {
    margin-block-start: var(--space-m);
  }

  article :global(h4 + *) {
    margin-block-start: var(--space-s);
  }

  article :global(:is(h5, h6) + *) {
    margin-block-start: var(--space-xs);
  }

  article :global(li:not(:first-child)) {
    margin-block-start: var(--space-3xs);
  }

  article :global(:is(ul, ol)) {
    margin-block-start: var(--space-m);
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
