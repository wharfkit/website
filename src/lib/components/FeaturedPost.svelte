<script lang="ts">
  import { capitalize } from "$lib/utils"

  export let post: BlogPost
  let { title, path, image, tags } = post
</script>

<article>
  <div class="image">
    <a href={path}>
      <img src={image} alt="blog post header" />
    </a>
  </div>

  <a class="card" href={path}>
    <header>
      <p class="tag">Latest {capitalize(tags[0])}</p>
      <h2>{title}</h2>
    </header>
  </a>
</article>

<style>
  article {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    align-items: center;
    gap: var(--space-2xl);
  }

  .card {
    grid-column: 1 / 4;
    grid-row: 1;
    text-decoration: none;
    color: inherit;
  }

  header {
    background: var(--theme-surface7);
    padding: var(--space-l);
    border-radius: var(--border-radius);
    transition: scale 0.2s ease-in-out;
  }

  .card:hover h2 {
    text-decoration: underline;
  }

  header h2 {
    margin-top: var(--space-xs);
    font-size: var(--fs-5);
  }

  .image {
    grid-column: 2 / 7;
    grid-row: 1;
  }

  img {
    border-radius: var(--border-radius);
  }

  @media (max-width: 1000px) {
    .card {
      grid-column: 1 / 7;
      grid-row: 2;
      margin-top: calc(var(--space-4xl) * -1);
    }

    .image {
      grid-column: 1 / 7;
      grid-row: 1;
    }
  }
</style>
