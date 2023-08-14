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
  <div class="icons">
    <!-- Moon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
    <!-- Sun -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-sun"
      ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
        d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path
        d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
  </div>
  <span class="visually-hidden">{checked ? "Light" : "Dark"}</span>
</label>

<style>
  label {
    display: flex;
    justify-content: center;
    color: var(--theme-text1);
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    align-self: stretch;
    /* border: 1px solid green; */
    width: 48px;
    position: relative;
  }

  label::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      var(--header-background) 0%,
      transparent 30%,
      transparent 70%,
      var(--header-background) 100%
    );
  }

  .icons {
    /* border: 1px solid red; */
    height: 200%;
    width: 20px;
    display: grid;
  }

  .lucide {
    height: 100%;
  }

  label:active .icons {
    /* Moon Bounce */
    transform: translateY(5%);
    transition: transform 100ms ease-in;
  }

  body[data-theme="light"] label:active .icons {
    /* Sun Bounce */
    transform: translateY(-55%);
  }

  label .icons {
    /* Sunset */
    transform: translateY(0);
    transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275); /* easeOutBack */
  }

  body[data-theme="light"] label .icons {
    /* Sunrise */
    transform: translateY(-50%);
  }
</style>
