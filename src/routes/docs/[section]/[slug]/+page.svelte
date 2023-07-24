<script lang="ts">
  import type { PageData } from "./$types"
  export let data: PageData
</script>

<article id="article">
  {@html data.doc.content}
</article>
