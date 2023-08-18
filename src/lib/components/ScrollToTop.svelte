<script lang="ts">
  import { scrollToTop } from "$lib/utils"
</script>

<button on:click={scrollToTop}>
  <span class="visually-hidden">Scroll to top</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
</button>

<style>
  button {
    position: sticky;
    top: calc(100vh - 56px - var(--space-l));
    color: var(--theme-text-heading);
    align-self: flex-end;
    border-radius: 50%;
    width: var(--space-2xl);
    height: var(--space-2xl);
    display: grid;
    place-items: center;
    opacity: 0.3;
    transition: opacity 300ms;
  }

  button:hover {
    opacity: 1;
    cursor: pointer;
    background-color: var(--theme-surface2);
  }

  button:active svg {
    scale: 0.95;
  }
</style>
