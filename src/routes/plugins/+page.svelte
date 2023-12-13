<script lang="ts">
  import type { PageData } from "./$types"
  import PluginListItem from "./PluginListItem.svelte"
  import Dropdown from "$lib/components/Dropdown.svelte"
  import { page } from "$app/stores"
  import { capitalize } from "$lib/utils"
  import EmptyIcon from "./EmptyIcon.svelte"
  export let data: PageData

  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "latest", label: "Latest" },
  ]

  $: currentSort = $page.url.searchParams.get("sort") || "latest"
  $: currentTag = $page.url.searchParams.get("tag") || "All"
  $: allPlugins = data.allPlugins
</script>

<section>
  <header>
    <h1>{capitalize(currentTag)} Plugins</h1>
    <div class="sort">
      <span>Sort by</span>
      <Dropdown options={sortOptions} selected={currentSort} />
    </div>
  </header>
  <ul class="plugin-list">
    {#key allPlugins}
      {#if allPlugins.length === 0}
        <div class="empty-state">
          <p>No plugins found</p>
          <EmptyIcon />
        </div>
      {:else}
        {#each allPlugins as plugin}
          <PluginListItem {plugin} />
        {/each}
      {/if}
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

  .empty-state {
    display: grid;
    justify-items: center;
    gap: var(--space-l);
  }

  .empty-state p {
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    font-weight: 600;
    text-align: center;
    margin-top: var(--space-xl);
  }
</style>
