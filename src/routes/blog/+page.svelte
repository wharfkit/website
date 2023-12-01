<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte"
  import FeaturedPost from "$lib/components/FeaturedPost.svelte"
  import Dropdown from "$lib/components/Dropdown.svelte"
  import type { PageData } from "./$types"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { postsPerPage } from "$lib/config"

  export let data: PageData

  $: tag = $page.url.searchParams.get("tag")
  $: sort = $page.url.searchParams.get("sort")

  const loadMore = () => {
    const url = new URL($page.url)
    const limit = Number(url.searchParams.get("limit")) || postsPerPage
    url.searchParams.set("limit", String(limit + postsPerPage))
    goto(url, { noScroll: true })
  }

  $: getLink = (tag: string) => {
    const url = new URL($page.url)
    url.searchParams.set("tag", tag)
    return String(url)
  }

  $: [newestPost, ...posts] = data.posts
</script>

<svelte:head>
  <link rel="preload" as="image" href={newestPost.image} />
  <style>
    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: #262936;
      --page-background: url("/images/patterns/2545.svg") no-repeat center top -5rem / contain,
        linear-gradient(180deg,
        #7BE7CE -10rem,
        /* #494E62 10rem,  */
        color-mix(in srgb, #494E62 100%, #262936) 10rem,
        color-mix(in srgb, #494E62 60%, #262936) 15rem,
        color-mix(in srgb, #494E62 40%, #262936) 17rem,
        color-mix(in srgb, #494E62 20%, #262936) 20rem,
        color-mix(in srgb, #494E62 10%, #262936) 22rem,
        color-mix(in srgb, #262936 30%, #151720) 27rem,
        #151720 30rem,
        #151720 calc(100% - 10rem),
        var(--color-primary-999) 100%
        ) no-repeat;
    }
  </style>
</svelte:head>

<main>
  <h1 class="visually-hidden">Blog</h1>
  {#key newestPost}
    <FeaturedPost post={newestPost} {sort} />
  {/key}
  <section>
    <aside>
      <nav>
        <div class="sidebar-header">
          <p class="sidebar-title"><a href="/blog">Blog</a></p>
        </div>
        <Dropdown />
        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href={getLink("all")} class="sidebar-subtitle" class:active={tag === "all"}>
              All posts ({data.totals.total})
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href={getLink("video")} class="sidebar-subtitle" class:active={tag === "video"}>
              Videos ({data.totals.tags["video"]})
            </a>
          </li>
          <li class="sidebar-list-item">
            <a href={getLink("article")} class="sidebar-subtitle" class:active={tag === "article"}>
              Articles ({data.totals.tags["article"]})
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    {#key posts}
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
    {/key}
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
    gap: var(--space-4xl);
  }

  aside {
    display: none;
  }

  aside nav {
    position: sticky;
    top: var(--space-xl);
  }

  .sidebar-header {
    margin-bottom: var(--space-3xs);
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
    /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
    /* grid-template-columns: 1fr 1fr; */
    column-gap: var(--space-xl);
    row-gap: var(--space-3xl);
  }

  @media screen and (min-width: 600px) {
    .posts {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }

  @media screen and (min-width: 900px) {
    .posts {
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }

    aside {
      display: block;
      width: 100%;
    }

    section {
      grid-template-columns: 12rem minmax(0, 1fr);
      justify-items: start;
    }

    .posts {
      row-gap: var(--space-2xl);
    }
  }
</style>