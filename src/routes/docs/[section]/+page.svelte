<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<svelte:head>
  <link rel="stylesheet" href="/src/styles/documentation.css" />
</svelte:head>

<article>
  {@html data.section.indexPage.content}
</article>
