<script lang="ts">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  let input: HTMLInputElement
  let query = ""

  function handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value
    dispatch("queryChange", query)
  }

  function handleClear() {
    query = ""
    dispatch("queryChange", query)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "/") {
      event.preventDefault()
      input?.focus()
    }

    if (event.key === "Escape") {
      if (query) {
        event.preventDefault()
        handleClear()
        return
      }

      event.preventDefault()
      input?.blur()
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="wrapper">
  <input
    type="text"
    bind:this={input}
    bind:value={query}
    placeholder="Filter articles by title"
    on:input={handleInput} />
  {#if !query}
    <div class="icon">/</div>
  {/if}
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
</div>

<style>
  .wrapper {
    position: relative;
    margin-block-start: var(--space-s);
    margin-block-end: var(--space-m);
  }

  input {
    width: 100%;
    padding-inline: var(--space-m);
    height: var(--space-xl);
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    background-color: var(--theme-surface2);
    color: var(--theme-text1);
    outline: none;
    position: relative;
  }

  input:focus {
    box-shadow: 0 0 0 2px var(--theme-text3);
  }

  input::placeholder {
    color: var(--theme-text1);
    font-style: italic;
    opacity: 0.6;
  }

  .icon {
    --_icon-color: var(--theme-text1);
    font-size: var(--fs--1);
    position: absolute;
    display: grid;
    place-items: center;
    width: 2em;
    height: 2em;
    right: var(--space-2xs);
    top: 50%;
    transform: translateY(-50%);
    color: var(--_icon-color);
    pointer-events: none;
    border: 1px solid var(--_icon-color);
    border-radius: 6px;
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    .icon {
      display: none;
    }
  }

  button {
    position: absolute;
    padding: 0;
    padding-inline: var(--space-m);
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button svg {
    opacity: 0.5;
  }

  button:focus-visible svg {
    box-shadow: 0 0 0 2px var(--theme-text3);
  }
</style>
