<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<Seo />

<div class="page">
  <header>
    <Header />
  </header>
  <div class="content">
    <div class="wrapper">
      <slot />
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</div>

<style>
  .page {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: var(--space-l);
  }
  header {
    display: flex;
    justify-content: center;
  }
  .content {
    box-sizing: content-box;
  }

  .wrapper {
    max-inline-size: var(--max-inline-size);
    padding-inline: var(--space-s);
    margin-inline: auto;
  }
  footer {
    --footer-background: var(--theme-surface1);
    background: var(--footer-background, white);
  }
</style>
