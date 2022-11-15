<script>
  /** @type {import('./$types').PageData */
  export let data

  let { posts } = data
</script>

<!-- <svelte:head>
  <title>Blog Posts</title>
</svelte:head> -->

<div class="center stack">
  <h1>Video Updates</h1>
  <ul class="stack">
    {#each posts as post}
      <li>
        <a href={post.path}>{new Date(post.date).toLocaleDateString()} - {post.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  h1 {
    font-size: var(--fs-500);
    font-weight: 600;
  }

  ul {
    gap: var(--s0);
  }
</style>
