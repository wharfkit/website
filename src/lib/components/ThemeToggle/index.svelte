<script context="module" lang="ts">
  import { browser } from "$app/environment"
  import { persisted } from "svelte-local-storage-store"

  const value = browser
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : "light"

  export const theme = persisted("theme", value)

  theme.subscribe(($theme) => {
    if (!browser) return
    document.body.setAttribute("data-theme", $theme || "")
  })
</script>

<script lang="ts">
  import { get } from "svelte/store"

  let themeToggleInput: HTMLInputElement
  let checked: boolean = get(theme) === "light"

  const toggleChange = () => {
    const value = themeToggleInput.checked ? "light" : "dark"
    theme.set(value)
  }
</script>

<label>
  <input
    type="checkbox"
    bind:this={themeToggleInput}
    bind:checked
    on:change={toggleChange}
    class="visually-hidden" />
  <div class="icon">
    {#if checked}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-sun"
        ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
          d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path
          d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
    {/if}
  </div>
  <span>{checked ? "Light" : "Dark"}</span>
</label>

<style>
  label {
    color: var(--theme-text1);
    display: flex;
    align-items: center;
    gap: var(--space-2xs);
    cursor: pointer;
    user-select: none;
    font-size: var(--fs--1);
  }

  .icon {
    height: auto;
    width: 2ch;
  }
</style>
