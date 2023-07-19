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
      <p>{date}</p>
    </a>
  </header>

  <div class="stack">
    <div class="left">
      {#if image}
        <a href={path}>
          <img src={image} alt="blog post header" loading="lazy" />
        </a>
      {/if}

      {#if videolink}
        <Video {videolink} {transcriptlink} />
      {/if}
    </div>

    <div class="text">
      <p>{description}</p>

      {#if transcriptlink}
        <a href={transcriptlink} class="button">
          Read transcript (Google docs)
          <svg width="24" height="24" fill="none">
            <path
              d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M10 6L18 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M6 6H7"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M3.5 20.5L12 12M12 12V16M12 12H8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg></a>
      {/if}
    </div>
  </div>
</article>

<style>
  article {
    gap: var(--space-s);
  }

  header {
    font-weight: 600;
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
  }

  header a {
    text-decoration: none;
  }

  header a:hover h2 {
    text-decoration: underline;
  }

  h2 {
    font-size: var(--fs-4);
  }

  p {
    color: var(--theme-text-heading);
    font-size: var(--fs-0);
    margin-top: var(--space-2xs);
  }

  img {
    border-radius: var(--space-s);
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    /* align-items: center; */
  }
</style>
