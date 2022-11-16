<script lang="ts">
  import "../styles/app.scss"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
</script>

<svelte:head>
  <title>Wharf Kit</title>
</svelte:head>

<div class="wrapper | center stack">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .wrapper {
    max-inline-size: 1000px;
    gap: var(--s2);
  }
  main {
    flex: 1;
  }
</style>
