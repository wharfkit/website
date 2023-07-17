<script lang="ts">
  import type { PageData } from "./$types"
  import Updates from "./updates.md"

  export let data: PageData
</script>

<main>
  <h1>Documentation</h1>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem numquam deserunt laborum
    quod, laudantium fuga iusto vitae pariatur at distinctio accusamus error magni corrupti ipsa
    provident eaque itaque. Aperiam?
  </p>
  <hr />

  <Updates />
</main>

<style>
  h1 {
    font-size: var(--fs-4);
    line-height: var(--space-xl);
    margin-block-end: var(--space-s);
  }
  p {
    line-height: var(--space-l);
  }

  main :global(h2) {
    font-size: var(--fs-3);
    line-height: var(--space-xl);
    margin-block-start: var(--space-l);
    margin-block-end: var(--space-m);
  }

  main :global(h3) {
    font-size: var(--fs-1);
    color: var(--theme-text-heading);
    font-weight: 500;

    margin-block-start: var(--space-m);
    margin-block-end: var(--space-2xs);
  }

  main :global(ul) {
    list-style-position: inside;
    padding-inline-start: 0;
  }

  main :global(ul > li) {
    line-height: var(--space-l);
    /* margin-block-end: var(--space-l); */
  }
</style>
