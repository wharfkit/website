<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<Seo />

<div class="wrapper">
  <header>
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: var(--space-l);
  }
  header {
    display: flex;
    justify-content: center;
  }
  main {
    box-sizing: content-box;
    max-inline-size: var(--max-inline-size);
    padding-inline: var(--space-s);
    margin-inline: auto;
  }
  footer {
    --footer-background: var(--surface1);
    background: var(--footer-background, white);
  }
</style>
