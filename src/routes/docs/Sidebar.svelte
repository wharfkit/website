<script lang="ts">
  import type { DocumentationSections } from "$lib/types"
  import { filterDocumentationArticles, formatSectionTitle } from "$lib/utils/docs"
  import Filter from "./Filter.svelte"

  export let sections: DocumentationSections

  let filteredSections = sections
  let innerWidth: number
  $: isMobile = innerWidth <= 768

  function handleQueryChange(event: CustomEvent<string>) {
    const { detail: query } = event
    filteredSections = filterDocumentationArticles(sections, query)
  }

  let sideNav: HTMLDetailsElement

  function collapseNav() {
    if (isMobile) {
      sideNav?.removeAttribute("open")
    }
  }
</script>

<svelte:window bind:innerWidth />

<nav aria-label="Documentation Sections">
  <details open={!isMobile} bind:this={sideNav}>
    <summary class="header" tabindex={!isMobile ? -1 : 0}>
      <h2>
        <a href="/docs">Documentation</a>
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
    <menu class="sections | flow">
      {#each Object.entries(filteredSections) as [section, articles]}
        <li class="section">
          <details open={!isMobile}>
            <summary tabindex={!isMobile ? -1 : 0}>
              <h3>
                <a href="/docs/{section}">
                  {formatSectionTitle(section)}
                </a>
              </h3>
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

            <menu class="articles">
              {#each articles as article}
                <li>
                  <a href={article.path} on:click={collapseNav}>
                    {article.title}
                  </a>
                </li>
              {/each}
            </menu>
          </details>
        </li>
      {/each}
    </menu>
  </details>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  h2 {
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
    color: inherit;
    pointer-events: none;
  }

  menu {
    list-style: none;
    padding: 0;
  }

  .sections {
    font-size: var(--fs-1);
    font-weight: 600;
    font-family: var(--ff-heading);
    gap: var(--space-m);
  }

  .sections > li {
    /* border: 1px solid var(--seafoam-mint); */
    border-radius: var(--border-radius);
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--space-m);
    cursor: pointer;
    user-select: none;
    height: var(--space-xl);
  }

  summary:where(.header) {
    background-color: var(--reef-turquoise);
    border-radius: var(--border-radius);
    color: var(--wharf-blue);
  }

  summary svg {
    transition: transform 80ms ease-out;
  }

  details[open] > summary > svg {
    transform: rotate(90deg);
  }

  summary h3 {
    font-family: var(--ff-heading);
    font-size: var(--fs--1);
    font-weight: 600;
    pointer-events: none;
  }

  summary h3 a,
  h2 a {
    color: inherit;
    text-decoration: none;
  }

  .articles {
    padding-block-start: var(--space-2xs);
    padding-block-end: var(--space-s);
    padding-inline: var(--space-l);
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

  .articles a:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    h2 {
      color: var(--theme-text-heading);
    }

    summary {
      background-color: transparent;
      /* cursor: default; */
      pointer-events: none;
    }

    summary h3 a,
    h2 a {
      pointer-events: auto;
    }

    summary h3 a:hover,
    h2 a:hover {
      text-decoration: underline;
    }

    summary svg {
      display: none;
    }

    .articles {
      padding-block-start: 0;
      padding-inline: var(--space-m);
    }

    .articles a {
      line-height: 1.5em;
      padding-inline: var(--space-xs);
    }
  }
</style>
