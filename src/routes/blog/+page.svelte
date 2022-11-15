<script>
  import Stack from "$lib/components/layout/Stack.svelte"
  /** @type {import('./$types').PageData */
  export let data

  let { posts } = data
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<Stack>
  <h1>Blog Posts</h1>
  <p>Blog posts are written in Markdown, served with a SvelteKit API, and rendered with mdsvex.</p>
  <nav>
    <ul>
      {#each posts as post}
        <li>
          <a href={post.path}>{post.meta.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</Stack>
