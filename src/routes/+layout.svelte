<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<Seo />

<div class="wrapper">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: var(--space-l);
  }

  main {
    box-sizing: content-box;
    max-inline-size: var(--max-inline-size);
    padding-inline: var(--space-s);
    margin-inline: auto;
  }
</style>
