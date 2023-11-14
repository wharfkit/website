<script lang="ts">
  import { capitalize } from "$lib/utils"

  export let post: BlogPost
  let { title, path, image, tags, description } = post
</script>

<a href={path}>
  <picture>
    <img src={image} alt="blog post header" loading="lazy" width="552" height="310" />
  </picture>
  <p class="tag">{capitalize(tags[0])}</p>
  <h2>{title}</h2>
  <p class="description">{description}</p>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    font-family: var(--ff-heading);
  }

  a:hover h2 {
    text-decoration: underline;
  }

  h2 {
    font-size: var(--fs-2);
  }

  picture {
    background: hsl(228, 15%, 18%);
    margin-bottom: var(--space-xs);
    border-radius: var(--border-radius);
  }

  img {
    border-radius: inherit;
    height: auto;
    width: auto;
    color: var(--wharf-blue);
  }

  .description {
    font-family: var(--ff-body);
    font-weight: 400;
    margin-top: var(--space-xs);
  }
</style>
