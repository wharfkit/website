<script lang="ts">
  import { capitalize } from "$lib/utils"

  export let post: BlogPost
  export let sort: string | null

  let { title, path, image, tags, description } = post
</script>

<article>
  <div class="image">
    <a href={path}>
      <img src={image} alt="blog post header" width="940" height="528" />
    </a>
  </div>

  <a class="card" href={path}>
    <header>
      <p class="tag">{sort === "asc" ? "Oldest" : "Latest"} {capitalize(tags[0])}</p>
      <h2>{title}</h2>
      <p class="description">{description}</p>
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
    font-size: var(--fs-5);
  }

  .description {
    font-family: var(--ff-body);
    font-weight: 400;
    margin-top: var(--space-xs);
  }

  .image {
    grid-column: 3 / 7;
    grid-row: 1;
    background: hsl(228, 15%, 18%);
    border-radius: var(--border-radius);
  }

  img {
    border-radius: var(--border-radius);
    color: var(--wharf-blue);
    width: auto;
    height: auto;
  }

  @media (max-width: 1000px) {
    header {
      border-radius: 0;
    }

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
