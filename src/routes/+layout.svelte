<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header/Header.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Seo from "$lib/components/Seo.svelte"
  import ScrollListener from "$lib/components/ScrollListener.svelte"
  import ScrollToTop from "$lib/components/ScrollToTop.svelte"

  const PROD = import.meta.env.PROD
</script>

<svelte:head>
  {#if PROD}
    <script defer data-domain="wharfkit.com" src="https://stats.greymass.com/js/script.js"></script>
  {/if}

  <style>
    body {
      background: var(--page-background);
    }
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: white;
      --header-background: #ffffff;
      --header-background-transparent: #ffffff00;
      --page-background: linear-gradient(
        180deg,
        #7be7ce 0rem,
        #b2f2e1 6rem,
        #f4faf4 15rem
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: var(--color-primary-999);
      --header-background: var(--wharf-blue); /* #494E62 */
      --header-background-transparent: #494E6200;
      --page-background: url("/images/patterns/2545.svg") no-repeat center top -5rem / contain, 
        linear-gradient(180deg, 
        #7BE7CE -10rem, 
        color-mix(in srgb, #494E62 100%, #262936) 10rem,
        color-mix(in srgb, #494E62 60%, #262936) 15rem,
        color-mix(in srgb, #494E62 40%, #262936) 20rem,
        color-mix(in srgb, #494E62 20%, #262936) 25rem,
        color-mix(in srgb, #494E62 10%, #262936) 30rem,
        #262936 40rem,
        #262936 calc(100% - 10rem),
        var(--color-primary-999) 100%
        ) no-repeat;
    }
  </style>
</svelte:head>

<Seo />
<Header />
<div class="page">
  <slot />
</div>
<ScrollToTop />
<Footer />
<ScrollListener />

<style>
  .page {
    padding-inline: var(--page-padding-inline);
  }
</style>
