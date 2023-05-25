<script lang="ts">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  let query = ""

  function handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value
    dispatch("queryChange", query)
  }

  function handleClear() {
    query = ""
    dispatch("queryChange", query)
  }
</script>

<input type="text" bind:value={query} placeholder="Filter..." on:input={handleInput} />
{#if query}
  <button type="button" on:click={handleClear}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-x">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </button>
{/if}

<style>
  input {
    padding-inline: 1.5rem;
    padding-block: 0.75rem;
    border: none;
    border-radius: 26px;
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    background-color: var(--theme-surface2);
    outline: none;
  }

  input:focus {
    box-shadow: 0 0 0 2px var(--theme-text3);
  }

  input::placeholder {
    font-style: italic;
    color: var(--theme-text3);
  }
</style>
