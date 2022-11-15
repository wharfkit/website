<script>
  /** @type {import('./$types').PageData */
  export let data

  let { posts } = data
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<div class="center stack">
  <h1>Video Updates</h1>
  <p>Blog posts are written in Markdown, served with a SvelteKit API, and rendered with mdsvex.</p>
  <nav>
    <ul>
      {#each posts as post}
        <li>
          <a href={post.path}
            >{new Date(post.meta.date).toLocaleDateString()} - {post.meta.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
