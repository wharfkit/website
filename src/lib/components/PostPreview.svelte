<script lang="ts">
  import { capitalize } from "$lib/utils"

  export let post: BlogPost
  let { title, path, image, tags, description } = post
</script>

<a href={path}>
  <img src={image} alt="blog post header" loading="lazy" />
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

  img {
    border-radius: var(--border-radius);
    margin-bottom: var(--space-xs);
  }

  .description {
    margin-top: var(--space-xs);
  }
</style>
