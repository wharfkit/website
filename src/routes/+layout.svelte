<script lang="ts">
  import "../styles/app.scss"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
</script>

<svelte:head>
  <title>Wharf Kit</title>

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@wharfkit" />
  <meta name="twitter:title" content="Wharf Kit" />
  <meta
    name="twitter:description"
    content="A Web Client SDK being developed by Greymass and funded by
  blockchains within the Antelope Coalition." />
  <meta name="twitter:image" content="https://wharfkit.com/images/wharf-logo.svg" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="Wharf Kit" />
  <meta
    property="og:description"
    content="A Web Client SDK being developed by Greymass and funded by
  blockchains within the Antelope Coalition." />
  <meta property="og:url" content="https://wharfkit.com/" />
  <meta property="og:image" content="https://wharfkit.com/images/wharf-logo.svg" />
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
