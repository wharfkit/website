<script lang="ts">
  import "../styles/app.scss"
  import "../styles/prism-lucario.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte"
  import Seo from "../lib/components/Seo.svelte"
</script>

<svelte:head>
  <style>
    body {
      background: var(--page-background);
    }

    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: white;
      --page-background: 
      linear-gradient(
            180deg,
            #494e62 0%,
            #7be7ce 40rem,
            #b2f2e1 50rem,
            #f4faf4 60rem,
            #f4faf4 94%,
            white 100%
          ) no-repeat;
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: hsl(228, 21%, 10%);
      --page-background: 
      linear-gradient(180deg, 
      hsl(166deg 69% 69%) 0%,
      hsl(172deg 31% 56%) 3rem,
      hsl(189deg 18% 44%) 8rem,
      hsl(228deg 15% 34%) 15rem,
      hsl(228deg 15% 28%) 20rem,
      hsl(228deg 16% 23%) 25rem,
      hsl(229deg 17% 18%) 35rem,
      hsl(229deg 17% 18%) 96%,
      hsl(229deg 17% 10%) 100%
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
