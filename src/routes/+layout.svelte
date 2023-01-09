<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<Seo />

<div class="wrapper | center stack">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .wrapper {
    max-inline-size: 1200px;
    gap: var(--s2);
    padding-inline: var(--s1);
    height: 100%;
  }
  main {
    flex: 1;
  }
</style>
