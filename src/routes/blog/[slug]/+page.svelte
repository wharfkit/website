<script lang="ts">
  import type { PageData } from "./$types"
  import Video from "$lib/components/Video.svelte"
  import addCopyButton from "$lib/addCopyButton"
  import { onMount } from "svelte"
  export let data: PageData

  let title = data.post.title
  let date = data.post.date
  let videolink = data.post.videolink
  let transcriptlink = data.post.transcriptlink
  let image = data.post.image

  onMount(() => {
    addCopyButton()
  })
</script>

<svelte:head>
  <style>
    body {
      --body-gap: var(--space-3xl-4xl);
    }
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      --footer-background: white;
      --page-background: url("/src/lib/assets/patterns/2545.svg") no-repeat right top -5rem / contain, 
      linear-gradient(
        180deg,
        #494E62 5rem,
        #7be7ce 15rem,
        #b2f2e1 20rem,
        #f4faf4 30rem
        /* #ffffff 10rem */
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --page-background: url("/src/lib/assets/patterns/2545.svg") no-repeat right top -5rem / contain, 
        linear-gradient(180deg, 
        #7BE7CE -8rem, 
        /* #494E62 10rem,  */
        color-mix(in srgb, #494E62 100%, #262936) 10rem,
        color-mix(in srgb, #494E62 60%, #262936) 15rem,
        color-mix(in srgb, #494E62 40%, #262936) 20rem,
        color-mix(in srgb, #494E62 20%, #262936) 25rem,
        color-mix(in srgb, #494E62 10%, #262936) 30rem,
        #262936 40rem,
        #262936 calc(100% - 10rem),
        var(--color-primary-999) 100%
        ) no-repeat;
    }
  </style>
</svelte:head>

<main>
  <article class="stack">
    {#if videolink}
      <Video {videolink} {transcriptlink} />
    {:else if image}
      <img src={image} alt="blog post header" />
    {/if}

    <header>
      <h1>{title}</h1>
      <p>{date}</p>
    </header>

    {@html data.post.content}
  </article>
</main>

<style>
  main {
    max-inline-size: 80ch;
    margin-inline: auto;
  }

  header p {
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
    margin-block-start: var(--space-xs);
  }

  article :global(h2) {
    margin-block-start: var(--space-m);
  }

  article :global(h3) {
    margin-block-start: var(--space-s);
  }

  img {
    border-radius: var(--space-s);
    margin-block: var(--space-m);
  }

  article :global(section) {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
  }
</style>
