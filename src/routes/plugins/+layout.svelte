<script lang="ts">
  import { page } from "$app/stores"

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
    <search>
      <form action="/plugins">
        <label for="search" class="visually-hidden">Search</label>
        <input type="search" placeholder="Search plugins" name="q" />
        <button type="submit" class="button" data-type="secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search"
            aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <span class="visually-hidden">Search</span>
        </button>
      </form>
    </search>
    <ul class="sidebar-list hidden-sm">
      <li class="sidebar-subtitle sidebar-list-item">
        <a href={getLink("session-kit")}>Session</a>
      </li>
      <li class="sidebar-subtitle sidebar-list-item">
        <a href={getLink("wallet-plugin")}>Wallet</a>
      </li>
      <li class="sidebar-subtitle sidebar-list-item">
        <a href={getLink("login-plugin")}>Login</a>
      </li>
      <li class="sidebar-subtitle sidebar-list-item">
        <a href={getLink("transact-plugin")}>Transact</a>
      </li>
    </ul>
  </nav>
  <slot />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-l-xl);
  }

  .sidebar-list-item {
    height: var(--space-l);
    font-weight: 400;
  }

  @media (min-width: 769px) {
    main {
      grid-template-columns: 16rem minmax(0, 1fr);
    }
  }

  search {
    position: relative;
    margin-block-start: var(--space-s);
  }

  search form {
    display: flex;
    align-items: center;
    gap: var(--space-2xs);
  }

  input {
    width: 100%;
    padding-inline: var(--space-m);
    height: var(--space-xl);
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    background-color: var(--input-background-color, var(--theme-surface2));
    color: var(--theme-text1);
    outline: none;
    position: relative;
  }

  input:focus {
    box-shadow: 0 0 0 2px var(--theme-text3);
  }

  input::placeholder {
    color: var(--theme-text1);
    font-style: italic;
    opacity: 0.6;
  }

  search button {
    --button-background: var(--input-background-color, var(--theme-surface2));
    padding-inline: var(--space-s);
  }

  search button svg {
    max-width: none;
  }

  .hidden-sm {
    @media (max-width: 768px) {
      display: none;
    }
  }
</style>
