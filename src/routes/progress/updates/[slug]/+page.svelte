<script>
  import Article from "$lib/components/Article.svelte"
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="center stack">
  <Article {...data.post}>
    {@html data.post.content}
  </Article>
</div>
