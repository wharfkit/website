<script lang="ts">
  import type { PageData } from "./$types"
  import TOC from "./TOC.svelte"
  import type { BreadCrumb } from "$lib/types"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import { capitalize } from "$lib/utils"

  export let data: PageData

  $: doc = data.doc
  $: section = doc.section
  $: title = doc.title
  $: headings = doc.headings
  $: slug = doc.slug

  $: breadcrumbs = [
    { title: "Documentation", path: "/docs" },
    { title: capitalize(section), path: `/docs/${section}` },
    { title: title, path: `/docs/${section}/${slug}` },
  ]
</script>

<main>
  <article>
    <Breadcrumbs {breadcrumbs} />
    {@html data.doc.content}
  </article>

  <!-- Only render the TOC if there are more than 2 headings -->
  {#if headings.length}
    <aside>
      <TOC {headings} />
    </aside>
  {/if}
</main>

<style>
  main {
    margin-inline: revert;
    display: flex;
    gap: var(--space-xl);
  }

  aside {
    flex: 1 0 25ch;
  }

  @media (max-width: 1024px) {
    aside {
      display: none;
    }
  }

  article :global(h1) {
    font-size: var(--fs-3);
    font-family: var(--ff-heading);
    font-weight: 600;
    margin-block-end: var(--space-m);
  }

  article :global(h2) {
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    font-weight: 600;
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-xs);
  }

  article :global(h3) {
    font-size: var(--fs-1);
    font-family: var(--ff-heading);
    font-weight: 600;
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-s);
  }

  article :global(p) {
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    font-weight: 400;
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

  article :global(tbody tr:nth-child(odd)) {
    background-color: var(--color-secondary-50);
    border-radius: var(--border-radius);
  }

  article :global(table) {
    width: 100%;
    margin-block: var(--space-m);
    table-layout: fixed;
  }
</style>
