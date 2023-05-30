<script lang="ts">
  import type { DocumentationSections } from "$lib/types"
  import { filterDocumentationArticles } from "$lib/utils"
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

<aside>
  <details open={!isMobile} bind:this={sideNav}>
    <summary class="header">
      <h2>Documentation</h2>
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
      {#each Object.entries(filteredSections) as [title, articles]}
        <li class="section">
          <details open={!isMobile}>
            <summary>
              <h3>{title}</h3>
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
</aside>

<style>
  aside {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  h2 {
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
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
    border: 1px solid var(--seafoam-mint);
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

  summary.header {
    background-color: var(--reef-turquoise);
    border-radius: var(--border-radius);
  }

  summary svg {
    transition: transform 80ms ease-out;
  }

  details[open] > summary > svg {
    transform: rotate(90deg);
  }

  summary h3 {
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
  }

  .articles {
    padding-block-end: var(--space-s);
    padding-inline: var(--space-l);
  }

  .articles a {
    font-size: var(--fs-0);
    font-family: var(--ff-heading);
    color: var(--theme-text1);
    font-weight: 400;
    line-height: 1.5em;
    padding-block: var(--space-2xs);
    text-decoration: none;
    display: block;
  }

  .articles a:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    summary.header {
      background-color: transparent;
      cursor: defamenut;
      pointer-events: none;
    }

    summary.header svg {
      display: none;
    }
  }
</style>
