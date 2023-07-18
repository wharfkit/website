<script lang="ts">
  export let isMenuOpen: boolean
  export let onClick: () => void
</script>

<summary class="menuToggle" on:click={onClick}>
  <span class="visually-hidden">{isMenuOpen ? "Close" : "Open"}</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    {#if isMenuOpen}
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    {:else}
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    {/if}
  </svg>
</summary>

<style>
  .menuToggle {
    display: grid;
    place-items: center;
    cursor: pointer;
    background: var(--nav-toggle-color, var(--theme-nav-toggle-background));
    color: var(--header-text-color, var(--theme-nav-toggle-foreground));
    padding: var(--space-xs);
    /* margin: var(--space-2xs); */
    border-radius: 16px;
  }

  @media (min-width: 769px) {
    .menuToggle {
      display: none;
    }
  }
</style>
