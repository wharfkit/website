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
    {#each posts as { text, date, ...rest }}
      <li>
        <Article date={new Date(date)} {...rest}>
          {@html text}
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
    background: url("/images/header-lines.svg"), url("/images/header-background.svg"),
      linear-gradient(to left, var(--reef-turquoise), var(--swell-mist));
    background-repeat: no-repeat;
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
    gap: var(--s3);
  }

  li {
    font-size: var(--fs-300);
  }
</style>
