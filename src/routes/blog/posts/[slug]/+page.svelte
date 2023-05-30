<script>
  import Video from "$lib/components/Video.svelte"
  import addCopyButton from "$lib/addCopyButton"
  import { onMount } from "svelte"
  /** @type {import('./$types').PageData} */
  export let data

  let title = data.post.title
  let date = data.post.date
  let videolink = data.post.videolink
  let transcriptlink = data.post.transcriptlink
  let image = data.post.image

  onMount(() => {
    addCopyButton()
  })
</script>

<article class="center stack">
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
    <span>Back to blog</span></a>
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

<style>
  hgroup {
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  h1 {
    font-size: var(--fs-3);
    color: var(--theme-text-body);
  }

  hgroup p {
    font-size: var(--fs-0);
    color: var(--theme-text-heading);
  }

  .back {
    display: inline-flex;
    gap: 0.5em;
    align-items: center;
    text-decoration: none;
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
