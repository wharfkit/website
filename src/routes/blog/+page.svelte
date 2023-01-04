<script>
  import PostPreview from "$lib/components/PostPreview.svelte"

  /** @type {import('./$types').PageData */
  export let data

  let { posts } = data
</script>

<div class="with-sidebar">
  <aside class="sidebar">
    <ul>
      <li><button>All posts</button></li>
      <li><button>Status updates</button></li>
      <li><button>Guides</button></li>
    </ul>
  </aside>

  <!-- <h1>Updates</h1> -->
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
  h1 {
    font-size: var(--fs-1);
    font-weight: 600;
  }

  .sidebar {
    flex-grow: 0;
  }

  .sidebar button {
    font-weight: 600;
    text-align: left;
    cursor: pointer;
  }

  .sidebar button:hover {
    text-decoration: underline;
  }

  .posts {
    list-style: none;
    gap: var(--s3);
    padding-inline: unset;
  }
</style>
