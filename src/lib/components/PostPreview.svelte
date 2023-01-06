<script lang="ts">
  import Video from "./Video.svelte"

  export let title: string = ""
  export let date: string
  export let videolink: string = ""
  export let transcriptlink: string = ""
  export let path: string = ""
  export let text: string = ""
  export let preview: string = ""

  // const doc = new DOMParser().parseFromString(text, "text/html")
</script>

<article class="stack">
  <header>
    <a href={path}>
      <h2>{title}</h2>
    </a>
    <p>{date}</p>
  </header>

  {#if videolink}
    <Video {videolink} {transcriptlink} />
  {/if}

  <div class="text">
    {preview}
    <!-- {@html text} -->
  </div>
</article>

<style>
  article {
    --gap: var(--s2);
  }

  header {
    font-weight: 600;
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
  }

  a {
    text-decoration: none;
  }

  .text {
    font-size: var(--fs-0);
  }
</style>
