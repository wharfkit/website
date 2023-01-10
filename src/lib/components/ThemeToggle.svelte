<script lang="ts">
  import { onMount } from "svelte"

  onMount(() => {
    const switcher = document.querySelector("#theme-switcher")
    const doc = document.firstElementChild

    switcher.addEventListener("input", (e) => setTheme(e.target.value))

    const setTheme = (theme) => doc.setAttribute("color-scheme", theme)
  })
</script>

<form id="theme-switcher">
  <div>
    <input checked type="radio" id="auto" name="theme" value="auto" />
    <label for="auto">Auto</label>
  </div>
  <div>
    <input type="radio" id="light" name="theme" value="light" />
    <label for="light">Light</label>
  </div>
  <div>
    <input type="radio" id="dark" name="theme" value="dark" />
    <label for="dark">Dark</label>
  </div>
</form>

<style>
  form {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
