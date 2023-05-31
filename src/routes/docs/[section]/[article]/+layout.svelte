<script lang="ts">
  import type { LayoutData } from "./$types"
  import type { HeadingNode } from "$lib/types"
  import { onMount, afterUpdate } from "svelte"
  import TOC from "../../TOC.svelte"
  import type { BreadCrumb } from "$lib/types"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"

  export let data: LayoutData

  let headings: HeadingNode[] = []

  const breadcrumbs: BreadCrumb[] = [
    { title: "Documentation", path: "/docs" },
    { title: data.meta.section, path: `/docs/${data.meta.section}` },
    { title: data.meta.title, path: `/docs/${data.meta.section}/${data.meta.title}` },
  ]

  function parseHeadings() {
    if (!data.PostContent) return []
    const parser = new DOMParser()
    const doc = parser.parseFromString(data.PostContent, "text/html")
    const headingNodes = doc.querySelectorAll("h2")

    return Array.from(headingNodes).map((node: HTMLElement) => ({
      tagName: node.tagName.toLowerCase(),
      text: node.textContent || "",
      id: node.id || null,
    }))
  }

  function updateHeadings() {
    headings = parseHeadings()
  }

  onMount(() => {
    updateHeadings()
  })

  afterUpdate(() => {
    updateHeadings()
  })
</script>

<svelte:head>
  <style>
    body[data-theme="light"] {
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
      background-image: linear-gradient(
        180deg,
        #7BE7CE 0%,
        #494E62 5.25rem,
        #262936 7rem,
        #151720 8.75rem

      );
    }
  </style>
</svelte:head>

<main>
  <article>
    <!-- <Breadcrumbs {breadcrumbs} /> -->
    <slot />
  </article>

  <!-- Only render the TOC if there are more than 2 headings -->
  {#if headings.length > 2}
    <aside>
      <TOC {headings} />
    </aside>
  {/if}
</main>

<style>
  main {
    margin-inline: revert;
    /* display: grid; */
    /* grid-template-columns: 1fr auto; */
    display: flex;
    gap: var(--space-xl);
  }

  aside {
    flex: 1 0 25ch;
  }

  @media (max-width: 1024px) {
    main {
      grid-template-columns: 1fr;
    }

    aside {
      display: none;
    }
  }

  article :global(h1) {
    font-size: var(--fs-3);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    /* margin-block-start: var(--s2); */
    margin-block-end: var(--space-m);
    position: relative;
  }

  article :global(h2) {
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-xs);
    position: relative;
  }

  article :global(h3) {
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-s);
    position: relative;
  }

  article :global(p) {
    margin-block: var(--space-xs);
  }

  article :global(blockquote) {
    font-size: var(--fs-0);
    margin-block: var(--space-m);
    border-radius: var(--border-radius);
  }

  article :global(img) {
    border-radius: var(--border-radius);
    max-width: 100%;
    margin-inline: auto;
  }
</style>
