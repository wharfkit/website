<script lang="ts">
  import type { PageData } from "../$types.js"
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

<main>
  <aside>
    <a href="/blog" class="back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      <span>Back to blog</span>
    </a>
  </aside>
  <article class="stack">
    <hgroup>
      <h1>{title}</h1>
      <p>{date}</p>
    </hgroup>

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
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    padding-block: var(--space-xl);
    /* padding-inline: var(--space-xl); */
  }

  @media (min-width: 768px) {
    main {
      grid-template-columns: 1fr auto 1fr;
    }

    article {
      max-inline-size: 80ch;
    }
  }

  hgroup :is(*) {
    color: var(--hgroup-color);
  }

  hgroup p {
    font-size: var(--fs-0);
    font-weight: 500;
    margin-block-start: var(--space-xs);
  }

  .back {
    display: inline-flex;
    gap: 0.5em;
    align-items: center;
    text-decoration: none;
    color: var(--back-link-color);
  }

  :global([data-theme="dark"]) {
    --back-link-color: var(--color-primary-50);
    --hgroup-color: var(--color-primary-50);
  }

  :global([data-theme="light"]) {
    --back-link-color: var(--color-primary-900);
    --hgroup-color: var(--color-primary-900);
  }

  .back:hover {
    text-decoration: underline;
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

  article :global(blockquote) {
    background-color: var(--theme-surface2);
    border: 1px solid var(--color-secondary-200);
    padding-block: var(--space-s);
    padding-inline: var(--space-m);
    border-radius: var(--border-radius, 12px);
  }

  article :global(li),
  article :global(p) {
    line-height: var(--space-l);
  }

  article :global(li:not(:first-child)) {
    /* background-color: red; */
    margin-block-start: var(--space-xs);
  }

  img {
    border-radius: var(--space-s);
    margin-block: var(--space-m);
  }
</style>
