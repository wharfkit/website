<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header/Header.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Seo from "$lib/components/Seo.svelte"
</script>

<svelte:head>
  <style>
    body {
      background: var(--page-background);
    }
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      --page-background: linear-gradient(
        180deg,
        #494e62 0%,
        #7be7ce 4rem,
        #b2f2e1 5.25rem,
        #f4faf4 7rem,
        #ffffff 8.75rem
      );
      --page-background: linear-gradient(
        180deg,
        /* #494e62 0rem, */ 
        #7be7ce 0rem,
        #b2f2e1 2rem,
        #f4faf4 8rem,
        #ffffff 12rem
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: #262936;
      --header-background: #262936;
      --page-background: 
        linear-gradient(180deg, 
          hsl(228deg 15% 34%) 0rem,
          hsl(228deg 15% 28%) 2rem,
          hsl(228deg 16% 17%) 7rem,
          hsl(229deg 21% 10%) 11rem
        ) no-repeat;
    }
  </style>
</svelte:head>

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
