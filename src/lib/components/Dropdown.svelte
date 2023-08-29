<script lang="ts">
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"

  // $: sort = $page.url.searchParams.get("sort")

  const options = [
    { value: "desc", label: "Newest" },
    { value: "asc", label: "Oldest" },
  ]

  let selected = options[0]

  const changeSort = () => {
    const url = new URL($page.url)
    // const limit = Number(url.searchParams.get("limit"))
    url.searchParams.set("sort", String(selected.value))
    goto(url, { noScroll: true })
  }
</script>

<select
  bind:value={selected}
  on:change={changeSort}
  name="sort"
  id="select-sort"
  class="sidebar-subtitle">
  {#each options as option}
    <option value={option}>
      {option.label}
    </option>
  {/each}
</select>

<style>
  select {
    width: 100%;
    margin-inline: var(--space-m);
    padding-inline: 0;
    border: none;
    border-radius: var(--space-s);
    background-color: transparent;
    font-size: var(--fs--1);
    font-weight: 400;
    color: var(--theme-text-heading);
    cursor: pointer;
    margin-block: var(--space-xs);
    /* height: var(--space-xl); */
  }

  select:focus {
    outline: 3px solid var(--theme-color-primary);
  }
</style>
