<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "./Sidebar.svelte"
  export let data: LayoutData
  const { sections } = data
</script>

<div>
  <Sidebar {sections} />

  <slot />
</div>

<style>
  div {
    inline-size: min(100%, var(--max-inline-size));
    margin-inline: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-xl);
  }

  @media (max-width: 768px) {
    div {
      grid-template-columns: 1fr;
    }
  }
</style>
