<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "./Sidebar.svelte"
  export let data: LayoutData
  const { sections } = data
</script>

<svelte:head>
  <style>
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      background: linear-gradient(
        180deg,
        #494e62 0%,
        #7be7ce 4rem,
        #b2f2e1 5.25rem,
        #f4faf4 7rem,
        #ffffff 8.75rem
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: #262936;
      background: linear-gradient(
        180deg,
        hsl(166deg 69% 69%) 0%,
        hsl(176deg 50% 64%) 14%,
        hsl(186deg 36% 59%) 20%,
        hsl(195deg 26% 54%) 25%,
        hsl(205deg 20% 48%) 30%,
        hsl(215deg 18% 42%) 34%,
        hsl(225deg 15% 36%) 37%,
        hsl(228deg 15% 32%) 41%,
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
