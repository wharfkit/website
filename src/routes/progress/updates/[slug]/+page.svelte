<script>
  import Article from "$lib/components/Article.svelte"
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="center stack">
  <Article date={new Date(data.meta.date)} title={data.meta.title}>
    {@html data.PostContent}
  </Article>
</div>

<style>
</style>
