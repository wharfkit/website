<script lang="ts">
  import PostPreview from "$lib/components/PostPreview.svelte"

  /** @type {import('./$types').PageData */
  export let data

  let filter: string | null = null

  $: posts = filter ? data.posts.filter((post) => post.tags.includes(filter)) : data.posts
</script>

<div class="with-sidebar">
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
          id="update"
          value="update" />
        <label for="update">Status updates</label>
      </li>
      <li>
        <input
          type="radio"
          bind:group={filter}
          class="visually-hidden"
          name="filter"
          id="guide"
          value="guide" />
        <label for="guide">Guides</label>
      </li>
    </ul>
  </aside>

  <h1 class="visually-hidden">Blog posts</h1>
  <ul class="posts | stack">
    {#each posts as { preview, ...props }}
      <li>
        <PostPreview {...props}>
          {preview}
        </PostPreview>
        <hr />
      </li>
    {/each}
  </ul>
</div>

<style>
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
    gap: var(--s3);
    padding-inline: unset;
  }
</style>
