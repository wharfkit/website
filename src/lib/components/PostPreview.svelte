<script lang="ts">
  import Video from "./Video.svelte"

  export let title: string = ""
  export let date: string
  export let videolink: string = ""
  export let transcriptlink: string = ""
  export let path: string = ""
  export let description: string = ""
  export let image: string = ""
</script>

<article class="stack">
  <header>
    <a href={path}>
      <h2>{title}</h2>
    </a>
    <p>{date}</p>
  </header>

  {#if image}
    <a href={path}>
      <img src={image} alt="blog post header" />
    </a>
  {/if}

  {#if videolink}
    <Video {videolink} {transcriptlink} />
  {/if}

  <div class="text">
    <p>{description}</p>
    <a href={path}>Read More</a>
  </div>
</article>

<style>
  article {
    --gap: var(--space-l);
  }

  header {
    font-weight: 600;
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
  }

  header a {
    text-decoration: none;
  }

  h2 {
    color: var(--theme-text-link);
  }

  p {
    color: var(--theme-text-heading);
    font-size: var(--fs-0);
  }

  img {
    border-radius: var(--space-s);
  }
</style>
