<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "./Sidebar.svelte"
  export let data: LayoutData
  const { sections } = data
</script>

<svelte:head>
  <style>
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      background: linear-gradient(
        180deg,
        #494e62 0%,
        #7be7ce 4rem,
        #b2f2e1 5.25rem,
        #f4faf4 7rem,
        #ffffff 8.75rem
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: #262936;
      background-image: linear-gradient(
        180deg,
        #7BE7CE 0%,
        #494E62 5.25rem,
        #262936 7rem,
        #151720 8.75rem

      );
    }
  </style>
</svelte:head>

<div class="page">
  <Sidebar {sections} />

  <slot />
</div>

<style>
  .page {
    inline-size: min(100%, var(--max-inline-size));
    margin-inline: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-xl);
  }

  @media (max-width: 768px) {
    .page {
      grid-template-columns: 1fr;
    }
  }
</style>
