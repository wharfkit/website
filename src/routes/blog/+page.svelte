<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte"
  import type { PageData } from "./$types"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { postsPerPage } from "$lib/config"

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
    <aside class="sidebar">
      <ul>
        <li>
          <a href="/blog">All posts ({data.totals.total})</a>
        </li>
        <li>
          <a href="/blog?tag=video">Videos ({data.totals.tags["video"]})</a>
        </li>
        <li>
          <a href="/blog?tag=article">Articles ({data.totals.tags["article"]})</a>
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

      {#if data.posts.length < data.totals.total}
        <button class="button" on:click={() => loadMore()}>Load more</button>
      {/if}
    </div>
  </section>
</main>

<style>
  aside {
    display: none;
  }

  @media screen and (min-width: 900px) {
    aside {
      display: block;
    }
  }

  .sidebar {
    flex-grow: 0;
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
