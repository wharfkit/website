<script>
  import Article from "$lib/components/Article.svelte"

  export let data
  let { posts } = data
</script>

<div class="stack">
  <div class="hero | box">
    <h1 class="center">Shipping great code starts with a solid platform.</h1>
    <p class="center">Wallet SDK Progress by Greymass</p>
  </div>

  <ul class="center stack">
    {#each posts as post}
      <li>
        <Article title={post.meta.title} date={new Date(post.meta.date)}>
          {@html post.text}
          <!-- <pre>{JSON.stringify(post)}</pre> -->
        </Article>
        <!-- <a href={post.path}>{post.meta.title}</a> -->
      </li>
      <hr />
    {/each}
  </ul>
</div>

<style>
  h1 {
    /* font-size: var(--s2); */
  }

  .stack {
    gap: var(--s4);
  }
  .box {
    /* --padding: var(--s4); */
    --border-radius: var(--s0);
    background-color: var(--reef-turquoise);
    text-align: center;
  }

  ul {
    list-style: none;
  }
</style>
