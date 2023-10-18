<script lang="ts">
  import { page } from "$app/stores"
  import Filter from "../../lib/components/Filter.svelte"

  $: getLink = (tag: string) => {
    const currentSearchParams = new URLSearchParams($page.url.search)
    const url = new URL($page.url.origin + "/plugins")
    url.search = currentSearchParams.toString()
    url.searchParams.set("tag", tag)
    return String(url)
  }
</script>

<svelte:head>
  <style>
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      --page-background: linear-gradient(
        180deg,
        #7be7ce 0rem,
        #b2f2e1 2rem,
        #f4faf4 7rem,
        #ffffff 10rem
      );
      --_tag-background: var(--color-neutral-100);
      --input-background-color: var(--color-neutral-100);
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: linear-gradient(180deg, hsl(229deg 21% 10% / 0.3), #262936 5rem), #262936;
      --header-background: #262936;
      --header-background-transparent: #26293600;
      --page-background: 
        linear-gradient(180deg, 
          hsl(228deg 15% 34%) 0rem,
          hsl(228deg 15% 28%) 2rem,
          hsl(228deg 16% 17%) 7rem,
          hsl(229deg 21% 10%) 11rem
        ) no-repeat;
      --_tag-background:hsl(228, 15%, 18%);
    }
  </style>
</svelte:head>

<main>
  <nav class="">
    <div class="sidebar-header">
      <p class="sidebar-title">
        <a href="/plugins">WharfKit Plugins</a>
      </p>
    </div>
    <!-- TODO: add search provider -->
    <!-- <Filter placeholder={"Search for a plugin"} /> -->
    <ul class="sidebar-list">
      <li class="sidebar-subtitle sidebar-list-item"><a href={getLink("contract")}>Contract</a></li>
      <li class="sidebar-subtitle sidebar-list-item"><a href={getLink("account")}>Account</a></li>
      <li class="sidebar-subtitle sidebar-list-item"><a href={getLink("session")}>Session</a></li>
      <li class="sidebar-subtitle sidebar-list-item"><a href={getLink("wallet")}>Wallet</a></li>
      <li class="sidebar-subtitle sidebar-list-item">
        <a href={getLink("transaction")}>Transaction</a>
      </li>
    </ul>
  </nav>
  <slot />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-m);
  }

  .sidebar-list-item {
    height: var(--space-l);
    font-weight: 400;
  }

  @media (min-width: 769px) {
    main {
      gap: var(--space-l-xl);
      grid-template-columns: 16rem minmax(0, 1fr);
    }
  }
</style>
