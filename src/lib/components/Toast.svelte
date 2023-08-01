<script lang="ts">
  import { fly } from "svelte/transition"
  export let text: string
</script>

<div class="toast" transition:fly|global={{ y: 20 }}>{text}</div>

<style>
  .toast {
    position: fixed;
    bottom: 0;
    left: 50%;
    translate: -50% -50%;
    opacity: 75%;
    color: white;
    background-color: var(--wharf-blue);
    border-radius: var(--space-m);
    padding-inline: var(--space-m);
    padding-block: var(--space-s);
  }
</style>
