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
      --footer-background: white;
      --page-background: linear-gradient(
        180deg,
        #7be7ce 0rem,
        #b2f2e1 6rem,
        #f4faf4 15rem
        /* #ffffff 10rem */
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: #151720;
      --footer-background: var(--color-primary-999);
      --header-background: #262936;
      --header-background: var(--wharf-blue);
      --page-background: 
        linear-gradient(180deg, 
          hsl(228deg 15% 34%) 0rem,
          hsl(228deg 15% 28%) 2rem,
          hsl(228deg 16% 17%) 7rem,
          hsl(229deg 21% 10%) 11rem
        ) no-repeat;

      --page-background: url("/src/lib/assets/patterns/2545.svg") no-repeat center top -5rem / contain, 
        linear-gradient(180deg, 
        #7BE7CE -10rem, 
        /* #494E62 10rem,  */
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
<Footer />

<style>
  .page {
    padding-inline: var(--page-padding-inline);
  }
</style>
