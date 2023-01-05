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
  <header>
    <h1>{title}</h1>
    <p>{date}</p>
  </header>

  {#if videolink}
    <Video {videolink} {transcriptlink} />
  {/if}

  {@html data.post.content}
</article>

<style>
  header {
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  h1 {
    font-size: var(--fs-3);
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
    margin-block-start: var(--s1);
  }

  article :global(h3) {
    font-family: var(--ff-heading);
    font-size: var(--fs-1);
    font-weight: 600;
    margin-block-start: var(--s0);
  }

  article :global(blockquote) {
    background-color: var(--color-secondary-50);
    border-inline-start: 0.25em solid var(--color-secondary-200);
    padding-block: var(--s0);
    padding-inline: var(--s1);
  }

  article :global(li) {
    line-height: var(--line-height);
  }

  article :global(li:not(:first-child)) {
    /* background-color: red; */
    margin-block-start: var(--s-1);
  }
</style>
