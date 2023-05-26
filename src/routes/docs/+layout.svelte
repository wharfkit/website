<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "./Sidebar.svelte"
  export let data: LayoutData
  const { sections } = data
</script>

<main>
  <Sidebar {sections} />

  <slot />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-xl);
  }

  @media (max-width: 768px) {
    main {
      grid-template-columns: 1fr;
    }
  }
</style>
