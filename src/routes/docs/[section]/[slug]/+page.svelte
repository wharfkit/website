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

  article {
    /* background: linear-gradient(#faa 1px, transparent 1px); */
    background-size: 100% var(--space-l);
    margin-block-end: var(--space-4xl);
  }

  article :global(> *) {
    margin-block-start: var(--space-l);
    line-height: var(--space-l);
  }

  article :global(h1) {
    font-size: var(--fs-4);
    line-height: var(--space-xl);
    margin-block-start: var(--space-s);
  }

  article :global(h2) {
    font-size: var(--fs-3);
    margin-block-start: var(--space-4xl);
  }

  article :global(h3) {
    font-size: var(--fs-2);
    margin-block-start: var(--space-3xl);
  }

  article :global(h4) {
    font-size: var(--fs-1);
    margin-block-start: var(--space-2xl);
  }

  article :global(h5) {
    font-size: var(--fs-0);
    margin-block-start: var(--space-xl);
  }

  article :global(h6) {
    font-size: var(--fs--1);
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

  article :global(p) {
    font-size: var(--fs-0);
  }

  article :global(li:not(:first-child)) {
    margin-block-start: var(--space-3xs);
  }

  article :global(:is(ul, ol)) {
    margin-block-start: var(--space-m);
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
