<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte"
  import type { PageData } from "./$types"

  export let data: PageData

  let filter: string

  $: posts = filter ? data.posts.filter((post) => post.tags.includes(filter)) : data.posts
</script>

<main>
  <section class="hero">
    <p class="title">Shipping great code starts<br /> with a solid platform</p>
    <h1 class="subtitle">Wharf progress updates from Greymass</h1>
  </section>

  <section class="with-sidebar">
    <aside class="sidebar">
      <ul>
        <li>
          <input
            type="radio"
            bind:group={filter}
            class="visually-hidden"
            name="filter"
            id="all"
            value={null}
            checked />
          <label for="all">All posts</label>
        </li>
        <li>
          <input
            type="radio"
            bind:group={filter}
            class="visually-hidden"
            name="filter"
            id="video"
            value="video" />
          <label for="video">Videos</label>
        </li>
        <li>
          <input
            type="radio"
            bind:group={filter}
            class="visually-hidden"
            name="filter"
            id="article"
            value="article" />
          <label for="article">Articles</label>
        </li>
      </ul>
    </aside>

    <ul class="posts | stack">
      {#each posts as post}
        <li>
          <PostPreview {...post} />
          <hr />
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  .hero {
    display: grid;
    place-items: center;
    text-align: center;
    gap: var(--space-m);
    padding-block-start: var(--space-4xl);
    padding-block-end: var(--space-5xl);
    margin-block-end: var(--space-3xl);
    background: green;
    border-radius: var(--space-l);
    background: url("src/lib/assets/images/Frame-2421.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--color-primary-900);
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
