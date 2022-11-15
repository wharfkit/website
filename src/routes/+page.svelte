<script>
  import Article from "$lib/components/Article.svelte"

  export let data
  let { posts } = data
</script>

<div class="page | stack">
  <div class="hero | box stack">
    <h1 class="center">Shipping great code starts with a solid platform.</h1>
    <p class="center">Wallet SDK Progress by Greymass</p>
  </div>

  <ul class="center stack">
    {#each posts as post}
      <li>
        <Article
          title={post.meta.title}
          date={new Date(post.meta.date)}
          postPath={post.path}
          transcriptLink={post.transcriptLink}>
          {@html post.text}
        </Article>
      </li>
      <hr />
    {/each}
  </ul>
</div>

<style>
  .page {
    gap: var(--s4);
  }

  .hero {
    --border-radius: var(--s0);
    padding-block: var(--s4);
    font-weight: 600;
    gap: var(--s-1);
    background: linear-gradient(to left, var(--reef-turquoise), var(--swell-mist));
    text-align: center;
  }

  .hero h1 {
    font-size: var(--fs-500);
  }

  .hero p {
    font-size: var(--fs-400);
  }

  ul {
    list-style: none;
  }

  li {
    font-size: var(--fs-300);
  }
</style>
