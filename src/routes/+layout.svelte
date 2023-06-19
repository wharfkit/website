<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<Seo />
<Header />
<div class="page">
  <slot />
</div>
<Footer />

<style>
  .page {
    padding-inline: var(--page-padding-inline);
  }
</style>
