<script lang="ts">
  import type { PageData } from "./$types"
  import PluginListItem from "./PluginListItem.svelte"
  import Dropdown from "../../lib/components/Dropdown.svelte"
  import { page } from "$app/stores"
  export let data: PageData

  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "latest", label: "Latest" },
  ]

  $: currentSort = $page.url.searchParams.get("sort") || "latest"
  $: allPlugins = data.allPlugins
</script>

<section>
  <header>
    <h1>All Plugins</h1>
    <div class="sort">
      <span>Sort by</span>
      <Dropdown options={sortOptions} selected={currentSort} />
    </div>
  </header>
  <ul class="plugin-list">
    {#key allPlugins}
      {#each allPlugins as plugin}
        <PluginListItem {plugin} />
      {/each}
    {/key}
  </ul>
</section>

<style>
  .plugin-list {
    list-style: none;
    padding: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--theme-border2);
    padding-bottom: var(--space-l);
  }

  .sort {
    font-family: var(--ff-heading);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }
</style>
