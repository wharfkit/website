<script lang="ts">
  import type { PageData } from "./$types"
  export let data: PageData
</script>

<article id="article">
  {@html data.doc.content}
</article>

<style>
  article :global(> *) {
    margin-block-start: var(--space-m);
  }

  article :global(h1) {
    line-height: var(--space-xl);
    margin-block-start: var(--space-s);
  }

  article :global(:is(h2, h3)) {
    margin-block-start: var(--space-xl);
    scroll-margin-top: var(--space-l);
  }

  article :global(h3) {
    scroll-margin-top: var(--space-m);
  }

  article :global(:is(h4, h5, h6)) {
    margin-block-start: var(--space-l);
  }

  /* Tighten headers directly following h1, h2 */

  article :global(:is(h1, h2) + :is(h2, h3, h4, h5, h6)) {
    margin-block-start: var(--space-m);
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

  article :global(::target > h2) {
    margin-block-start: var(--space-2xl);
  }
</style>
