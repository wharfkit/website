<script lang="ts">
  import type { LayoutData } from "./$types"
  import Sidebar from "./Sidebar.svelte"
  import Breadcrumbs from "../../lib/components/Breadcrumbs.svelte"
  import TOC from "$lib/components/TOC.svelte"
  import { page } from "$app/stores"
  export let data: LayoutData
  const { sections } = data

  $: breadcrumbs = $page.data.breadcrumbs
  $: currentDoc = $page.data.doc
  $: headings = $page.data.headings
  $: title = $page.data.title
  $: section = $page.data.section

  $: GITHUB_EDIT_URL = `https://github.com/wharfkit/docs/edit/master/${section}/${title}.md`
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

<main>
  <Sidebar {sections} />

  <div class="content">
    {#if breadcrumbs}
      <nav aria-label="Breadcrumbs">
        <Breadcrumbs {breadcrumbs} />
      </nav>
    {/if}
    <slot />
  </div>
  {#if currentDoc}
    <aside>
      <TOC {headings} {title} />
      <a href={GITHUB_EDIT_URL} class="edit button" data-type="secondary">Edit this page</a>
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

  .edit.button {
    margin-top: var(--space-s);
    position: sticky;
    top: var(--space-6xl);
    font-size: var(--fs--1);
    /* font-weight: 500; */
    --button-text: var(--theme-text-heading);
    z-index: -1;
  }

  @media (min-width: 768px) {
    main {
      grid-template-columns: 16rem minmax(0, 1fr);
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
