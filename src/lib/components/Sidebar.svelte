<script lang="ts">
  import {
    filterDocumentationArticles,
    formatSectionTitle,
    removeHiddenArticles,
    isSectionNotHidden,
  } from "$lib/utils/docs"
  import Filter from "./Filter.svelte"
  import { page } from "$app/stores"

  export let docs: DocumentationSection[]
  export let rootPath: string
  export let title: string

  let filteredSections = docs.map(removeHiddenArticles).filter(isSectionNotHidden)
  let innerWidth: number
  let sideNav: HTMLDetailsElement
  let isQuerying = false

  $: isMobile = innerWidth <= 768

  function handleQueryChange(event: CustomEvent<string>) {
    const { detail: query } = event
    isQuerying = !!query
    filteredSections = filterDocumentationArticles(docs, query)
  }

  function collapseNav() {
    if (isMobile) {
      sideNav?.removeAttribute("open")
    }
  }
</script>

<svelte:window bind:innerWidth />

<nav class="sidebar" aria-label="Section List">
  <details open={!isMobile} bind:this={sideNav}>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex-->
    <summary class="sidebar-header" tabindex={!isMobile ? -1 : 0}>
      <h2 class="sidebar-title">
        <a href={rootPath}>{title}</a>
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
    </summary>
    <Filter on:queryChange={handleQueryChange} />
    <menu class="sidebar-list">
      {#each filteredSections as { title: sectionTitle, slug, articles }}
        <li class="section">
          <a class="sidebar-subtitle sidebar-list-item" href="{rootPath}/{slug}">
            <h3>
              {formatSectionTitle(sectionTitle)}
            </h3>
          </a>

          <menu class="articles">
            {#each articles as article}
              <li>
                <a
                  href={article.path}
                  on:click={collapseNav}
                  class:active={article.path === $page.url.pathname}>
                  {article.title}
                </a>
              </li>
            {/each}
          </menu>
        </li>
      {/each}
    </menu>
  </details>
</nav>

<style>
  .sidebar-title {
    color: inherit;
    pointer-events: none;
  }

  .articles {
    list-style: none;
    padding: 0;
  }

  .sidebar-list-item {
    height: var(--space-xl);
  }

  .sidebar-list > li {
    border-radius: var(--border-radius);
  }

  summary {
    cursor: pointer;
    user-select: none;
  }

  summary:where(.sidebar-header) {
    background-color: var(--reef-turquoise);
    border-radius: var(--border-radius);
    color: var(--wharf-blue);
  }

  summary svg {
    transition: transform 80ms ease-out;
    transform: rotate(90deg);
  }

  details[open] > summary > svg {
    transform: rotate(-90deg);
  }

  .sidebar-subtitle > * {
    font-size: var(--fs--1);
  }

  .sidebar-subtitle,
  .sidebar-title a {
    color: inherit;
    text-decoration: none;
    font-weight: inherit;
  }

  .articles {
    padding-block-start: var(--space-2xs);
    padding-block-end: var(--space-s);
    padding-inline: var(--space-xs);
  }

  .articles a {
    font-size: var(--fs--1);
    font-family: var(--ff-heading);
    color: var(--theme-text1);
    font-weight: 400;
    line-height: 2em;
    padding-block: var(--space-2xs);
    text-decoration: none;
    display: block;
  }

  .articles a:hover,
  .sidebar-subtitle:hover {
    text-decoration: underline;
  }

  .articles a.active {
    font-weight: 600;
    color: var(--theme-text-heading);
  }

  @media (min-width: 769px) {
    .sidebar-title {
      color: var(--theme-text-heading);
    }

    summary {
      background-color: transparent;
      /* cursor: default; */
      pointer-events: none;
    }

    .sidebar-title a {
      pointer-events: auto;
    }

    .sidebar-title a:hover {
      text-decoration: underline;
    }

    summary svg {
      display: none;
    }

    .articles {
      padding-block-start: 0;
      padding-inline: 0;
    }

    .articles a {
      line-height: 1.5em;
      padding-inline: var(--space-xs);
    }
  }
</style>
