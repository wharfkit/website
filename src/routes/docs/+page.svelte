<script lang="ts">
  import Updates from "./updates.md"
</script>

<main>
  <h1>Documentation</h1>

  <p>
    Welcome to Wharf's documentation, where you can find instructions on how to use the Session Kit. 
    Documentation for all three kits is currently a work in progress, but check back soon for instructions on the Contract and Account Kits. 
    Please reach out through the <a href="https://t.me/wharfkit">Wharf Telegram channel</a> if you have any specific documentation requests. 
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
  }
</style>
