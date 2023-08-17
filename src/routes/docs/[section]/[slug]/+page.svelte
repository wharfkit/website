<script lang="ts">
  import type { PageData } from "./$types"
  import PageButtons from "$lib/components/PageButtons.svelte"
  import ObserveSections from "../../../../lib/components/ObserveSections.svelte"
  export let data: PageData
</script>

<article id="article">
  <!-- <ObserveSections> -->
  {@html data.doc.content}
  <!-- </ObserveSections> -->
</article>

<PageButtons currentDoc={data.doc} allSections={data.docs} />
