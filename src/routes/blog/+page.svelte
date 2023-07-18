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
  <section>
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

    <ul class="posts | stack">
      {#each data.posts as post}
        <li>
          <PostPreview {...post} />
          <hr />
        </li>
      {/each}
    </ul>

    {#if data.posts.length < data.totals.total}
      <button class="button" on:click={() => loadMore()}>Load more</button>
    {/if}
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

  .sidebar label {
    font-weight: 600;
    text-align: left;
    cursor: pointer;
  }

  .sidebar label:hover {
    text-decoration: underline;
  }

  .posts {
    list-style: none;
    gap: var(--space-xl);
    padding-inline: unset;
  }
  hr {
    margin-block-start: var(--space-xl);
  }
</style>
