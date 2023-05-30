<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<Seo />
<Header />
<div>
  <slot />
</div>
<Footer />

<style>
  :global(#root) {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: var(--space-2xl);
  }

  div {
    padding-inline: var(--page-padding-inline);
  }
</style>
