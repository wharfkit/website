<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let placeholder = "Filter articles by title"

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

  function handleArrowUp() {
    const activeElement = document.activeElement as HTMLAnchorElement

    // check if active is in the sidebar
    if (!activeElement?.closest(".sidebar")) {
      return
    }

    let prev: HTMLAnchorElement | HTMLInputElement | null | undefined = undefined

    // if the active element is an article
    if (activeElement?.closest(".articles")) {
      // select the previous article
      prev = activeElement?.parentElement?.previousElementSibling?.querySelector("a")
      // if no previous article, select the section title
      if (!prev) {
        prev = activeElement?.closest(".section")?.querySelector("a")
      }
      // if the active element is a section title
    } else if (activeElement?.matches(".sidebar-subtitle")) {
      // select the last article in the previous section
      prev = activeElement?.parentElement?.previousElementSibling
        ?.querySelector(".articles")
        ?.lastElementChild?.querySelector("a")
      // if no previous section, reselect the filter input
      if (!prev) {
        prev = document.querySelector("#filter") as HTMLInputElement
      }
    }

    // check if prev is not the sidebar title
    if (prev && !prev.matches(".sidebar-title a")) {
      prev.focus()
    }
  }

  function handleArrowDown() {
    const active = document.activeElement as HTMLAnchorElement

    // check if active is in the sidebar
    if (!active?.closest(".sidebar")) {
      return
    }

    const firstArticleOfSection = active?.nextElementSibling?.querySelector("a")
    const nextArticle = active?.parentElement?.nextElementSibling?.querySelector("a")
    const nextSection =
      active?.parentElement?.parentElement?.parentElement?.nextElementSibling?.querySelector("a")

    // focus next anchor element in the sidebar
    const next = firstArticleOfSection ?? nextArticle ?? nextSection

    if (next) {
      next.focus()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "/") {
      event.preventDefault()
      input?.focus()
    }

    if (input?.matches(":focus")) {
      if (event.key === "Escape") {
        if (query) {
          event.preventDefault()
          handleClear()
          return
        } else {
          event.preventDefault()
          input?.blur()
          return
        }
      }
    }

    if (query) {
      if (event.key === "ArrowDown") {
        event.preventDefault()
        handleArrowDown()
        return
      }

      if (event.key === "ArrowUp") {
        event.preventDefault()
        handleArrowUp()
        return
      }
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<search>
  <input
    id="filter"
    type="text"
    bind:this={input}
    bind:value={query}
    {placeholder}
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
</search>

<style>
  search {
    display: block;
    position: relative;
    margin-block-start: var(--space-s);
  }

  input {
    width: 100%;
    padding-inline: var(--space-m);
    height: var(--space-xl);
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    background-color: var(--input-background-color, var(--theme-surface2));
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
    right: 0;
    right: var(--space-xs);
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
  }

  button svg {
    opacity: 0.5;
  }
</style>
