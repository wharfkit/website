<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "./Sidebar.svelte"
  export let data: LayoutData
  const { sections } = data
</script>

<svelte:head>
  <style>
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
    /* body[data-theme="dark"] {
      --footer-background: #262936;
      background: linear-gradient(
        180deg,
        hsl(166deg 59% 49%) 0%,
        hsl(176deg 30% 44%) 14%,
        hsl(186deg 26% 49%) 20%,
        hsl(195deg 16% 44%) 25%,
        hsl(205deg 10% 38%) 30%,
        hsl(215deg 18% 32%) 34%,
        hsl(225deg 15% 26%) 37%,
        hsl(228deg 15% 22%) 41%,
        hsl(228deg 15% 29%) 45%,
        hsl(228deg 16% 27%) 48%,
        hsl(228deg 16% 24%) 52%,
        hsl(229deg 17% 22%) 55%,
        hsl(229deg 17% 20%) 59%,
        hsl(229deg 18% 18%) 63%,
        hsl(229deg 18% 16%) 66%,
        hsl(229deg 19% 15%) 70%,
        hsl(229deg 19% 14%) 75%,
        hsl(229deg 20% 13%) 80%,
        hsl(229deg 20% 12%) 86%,
        hsl(229deg 21% 10%) 100%
      ),hsl(229deg 21% 10%);
      background-repeat: no-repeat;
      background-size: 100% 20rem, 100% 100%;
    } */

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

<div class="page">
  <Sidebar {sections} />

  <slot />
</div>

<style>
  .page {
    inline-size: min(100%, var(--max-inline-size));
    margin-inline: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-xl);
  }

  @media (max-width: 768px) {
    .page {
      grid-template-columns: 1fr;
    }
  }
</style>
