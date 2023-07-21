<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte"
  import type { PageData } from "./$types"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { postsPerPage } from "$lib/config"

  $: tag = $page.url.searchParams.get("tag")

  const loadMore = () => {
    const url = new URL($page.url)
    const limit = Number(url.searchParams.get("limit")) || postsPerPage
    url.searchParams.set("limit", String(limit + postsPerPage))
    goto(url, { noScroll: true })
  }

  export let data: PageData
</script>

<main>
  <section class="with-sidebar">
    <aside>
      <div class="sidebar-header">
        <h1 class="sidebar-title"><a href="/blog">Blog</a></h1>
      </div>
      <ul class="sidebar-list">
        <li class="sidebar-list-item">
          <a href="/blog" class="sidebar-subtitle">
            All posts ({data.totals.total})
          </a>
        </li>
        <li class="sidebar-list-item">
          <a href="/blog?tag=video" class="sidebar-subtitle">
            Videos ({data.totals.tags["video"]})
          </a>
        </li>
        <li class="sidebar-list-item">
          <a href="/blog?tag=article" class="sidebar-subtitle">
            Articles ({data.totals.tags["article"]})
          </a>
        </li>
      </ul>
    </aside>

    <div class="list">
      <ul class="posts | stack">
        {#each data.posts as post}
          <li>
            <PostPreview {...post} />
          </li>
        {/each}
      </ul>

      {#if tag && data.posts.length < data.totals.tags[tag]}
        <button class="button" on:click={() => loadMore()}>Load more {tag}s</button>
      {:else if !tag && data.posts.length < data.totals.total}
        <button class="button" on:click={() => loadMore()}>Load more posts</button>
      {/if}
    </div>
  </section>
</main>

<style>
  aside {
    display: none;
  }

  .sidebar-list {
    color: var(--theme-text-heading);
  }

  @media screen and (min-width: 900px) {
    aside {
      display: block;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4xl);
    align-items: center;
  }

  .posts {
    list-style: none;
    gap: var(--space-4xl);
    padding-inline: unset;
  }
</style>
