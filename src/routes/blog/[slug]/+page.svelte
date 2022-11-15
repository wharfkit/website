<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<article class="center stack">
  <h1>{data.meta.title}</h1>
  {@html data.PostContent}
</article>

<style>
</style>
