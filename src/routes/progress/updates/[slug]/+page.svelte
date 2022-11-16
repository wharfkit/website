<script>
  import Article from "$lib/components/Article.svelte"
  /** @type {import('./$types').PageData} */
  export let data
  let { videolink, transcriptlink, title } = data.meta
</script>

<div class="center stack">
  <Article date={new Date(data.meta.date)} {videolink} {transcriptlink} {title}>
    {@html data.PostContent}
  </Article>
</div>

<style>
</style>
