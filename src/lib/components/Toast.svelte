<script lang="ts">
  import { fly } from "svelte/transition"
  export let text: string
</script>

<div class="toast" transition:fly={{ y: 20 }}>{text}</div>

<style>
  .toast {
    position: fixed;
    bottom: 0;
    left: 50%;
    translate: -50% -50%;
    opacity: 75%;
    color: white;
    background-color: var(--wharf-blue);
    border-radius: var(--s1);
    padding-inline: var(--s1);
    padding-block: var(--s0);
  }
</style>
