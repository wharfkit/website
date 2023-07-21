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
        #262936 calc(100% - 30rem),
        var(--color-primary-999) 100%
        ) no-repeat;
    }
  </style>
</svelte:head>

<main>
  <article class="stack">
    <header>
      <h1>{title}</h1>
      <p>{date}</p>
    </header>

    {#if image}
      <img src={image} alt="blog post header" />
    {/if}

    {#if videolink}
      <Video {videolink} {transcriptlink} />
    {/if}

    {@html data.post.content}
  </article>
</main>

<style>
  main {
    max-inline-size: 80ch;
    margin-inline: auto;
  }

  header p {
    font-size: var(--fs-0);
    font-weight: 500;
    margin-block-start: var(--space-xs);
  }

  article :global(h2) {
    font-family: var(--ff-heading);
    font-size: var(--fs-2);
    font-weight: 600;
    margin-block-start: var(--space-m);
  }

  article :global(h3) {
    font-family: var(--ff-heading);
    font-size: var(--fs-1);
    font-weight: 600;
    margin-block-start: var(--space-s);
  }

  /* article :global(blockquote) {
    background-color: var(--theme-surface2);
    border: 1px solid var(--color-secondary-200);
    padding-block: var(--space-s);
    padding-inline: var(--space-m);
    border-radius: var(--border-radius, 12px);
  } */

  article :global(li),
  article :global(p) {
    line-height: var(--space-l);
  }

  article :global(li:not(:first-child)) {
    margin-block-start: var(--space-xs);
  }

  img {
    border-radius: var(--space-s);
    margin-block: var(--space-m);
  }
</style>
