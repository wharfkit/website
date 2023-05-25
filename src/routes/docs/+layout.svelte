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
    grid-template-columns: 2fr 10fr;
    gap: var(--space-xl);
  }
</style>
