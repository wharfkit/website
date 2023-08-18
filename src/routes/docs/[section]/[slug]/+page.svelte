<script lang="ts">
  import type { PageData } from "./$types"
  import PageButtons from "$lib/components/PageButtons.svelte"
  import addCopyButton from "$lib/addCopyButton"
  import { afterUpdate } from "svelte"
  export let data: PageData

  afterUpdate(() => {
    addCopyButton()
  })
</script>

<article id="article">
  <!-- <ObserveSections> -->
  {@html data.doc.content}
  <!-- </ObserveSections> -->
</article>

<PageButtons currentDoc={data.doc} allSections={data.docs} />
