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
  :global([data-theme="light"]) {
    --_theme-stt-background: var(--seafoam-mint);
    --_theme-stt-foreground: var(--wharf-blue);
  }

  :global([data-theme="dark"]) {
    --_theme-stt-background: var(--footer-background);
    --_theme-stt-foreground: white;
  }

  button {
    position: fixed;
    bottom: var(--space-l);
    right: var(--space-l);
    color: var(--theme-text-heading);
    border-radius: 50%;
    width: var(--space-2xl);
    height: var(--space-2xl);
    display: grid;
    place-items: center;
    opacity: 0.3;
    transition: opacity 300ms;
  }

  button::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--_theme-stt-background);
    opacity: 0;
    transition: opacity 300ms;
    z-index: -1;
  }

  button:hover {
    opacity: 1;
    cursor: pointer;
    color: var(--_theme-stt-foreground);
  }

  button:hover::after {
    opacity: 1;
  }

  button:active {
    scale: 0.95;
    transition: scale 200ms;
  }
</style>
