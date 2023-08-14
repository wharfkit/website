<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "$lib/components/Sidebar.svelte"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import TOC from "$lib/components/TOC.svelte"
  import { page } from "$app/stores"
  export let data: LayoutData
  const { docs } = data

  $: breadcrumbs = $page.data.breadcrumbs
  $: tocVisible = $page.data.toc
  $: headings = $page.data.headings
  $: title = $page.data.title
  $: section = $page.data.section
</script>

<svelte:head>
  <link rel="preload" href="/styles/documentation.css" as="style" />
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
    }
  </style>
</svelte:head>

<main>
  <Sidebar {docs} title={data.rootTitle} rootPath={data.rootPath} />

  <div class="content">
    {#if breadcrumbs}
      <nav aria-label="Breadcrumbs">
        <Breadcrumbs {breadcrumbs} />
      </nav>
    {/if}
    <slot />
  </div>

  {#if tocVisible && headings && headings.length > 0}
    <aside>
      <TOC {headings} {title} {section} />
    </aside>
  {/if}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-xl);
  }

  nav {
    display: flex;
    align-items: center;
    height: var(--space-xl);
  }

  aside {
    display: none;
  }

  @media (min-width: 768px) {
    main {
      grid-template-columns: 16rem minmax(0, 1fr) 0px;
    }
  }

  @media (prefers-reduced-motion: no-preference) and (min-width: 768px) and (max-width: 1250px) {
    main {
      transition: grid-template-columns 300ms;
    }
  }

  @media (min-width: 1200px) {
    main {
      grid-template-columns: 16rem minmax(0, 1fr) 16rem;
    }

    aside {
      display: flex;
      flex-direction: column;
    }
  }
</style>
