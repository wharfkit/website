<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte"
  import FeaturedPost from "$lib/components/FeaturedPost.svelte"
  import type { PageData } from "./$types"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { postsPerPage } from "$lib/config"

  export let data: PageData

  $: tag = $page.url.searchParams.get("tag")

  const loadMore = () => {
    const url = new URL($page.url)
    const limit = Number(url.searchParams.get("limit")) || postsPerPage
    url.searchParams.set("limit", String(limit + postsPerPage))
    goto(url, { noScroll: true })
  }

  $: [newestPost, ...posts] = data.posts
</script>

<main>
  <h1 class="visually-hidden">Blog</h1>
  <FeaturedPost post={newestPost} />

  <section>
    <aside>
      <nav>
        <div class="sidebar-header">
          <p class="sidebar-title"><a href="/blog">Blog</a></p>
        </div>
        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href="/blog?tag=all" class="sidebar-subtitle" class:active={tag === "all"}>
              All posts ({data.totals.total})
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="/blog?tag=video" class="sidebar-subtitle" class:active={tag === "video"}>
              Videos ({data.totals.tags["video"]})
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href="/blog?tag=article" class="sidebar-subtitle" class:active={tag === "article"}>
              Articles ({data.totals.tags["article"]})
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="list">
      <ul class="posts">
        {#each posts as post}
          <li>
            <PostPreview {post} />
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
  main {
    display: grid;
    gap: var(--space-4xl);
  }

  section {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: var(--space-xl);
  }

  aside {
    display: none;
  }

  aside nav {
    position: sticky;
    top: var(--space-xl);
  }

  .sidebar-list,
  .sidebar-title {
    color: var(--theme-text-heading);
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4xl);
    align-items: center;
    padding-top: var(--space-s);
  }

  .posts {
    list-style: none;
    padding-inline: unset;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    column-gap: var(--space-xl);
    row-gap: var(--space-3xl);
  }

  @media screen and (min-width: 900px) {
    aside {
      display: block;
    }

    section {
      grid-template-columns: 16rem minmax(0, 1fr);
      justify-items: start;
    }

    .posts {
      row-gap: var(--space-2xl);
    }
  }
</style>
