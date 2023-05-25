<script lang="ts">
  import type { LayoutData } from "./$types"
  import TOC from "./TOC.svelte"

  export let data: LayoutData
</script>

<div class="grid">
  <article>
    <slot />
  </article>

  <TOC html={data.PostContent} />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 8fr 3fr;
    gap: var(--space-xl);
  }

  article :global(h1) {
    font-size: var(--fs-3);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    /* margin-block-start: var(--s2); */
    margin-block-end: var(--space-m);
    position: relative;
  }

  article :global(h2) {
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-xs);
    position: relative;
  }

  article :global(h3) {
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-s);
    position: relative;
  }

  article :global(p) {
    margin-block: var(--space-xs);
  }

  article :global(blockquote) {
    font-size: var(--fs-0);
    margin-block: var(--space-m);
    border-radius: var(--border-radius);
  }
</style>
