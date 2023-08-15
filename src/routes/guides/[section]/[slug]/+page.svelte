<script lang="ts">
  import type { PageData } from "./$types"
  import PageButtons from "$lib/components/PageButtons.svelte"
  export let data: PageData
</script>

<article id="article">
  {@html data.doc.content}
</article>

<PageButtons currentDoc={data.doc} allSections={data.docs} />
