<script lang="ts">
  import type { LayoutData } from "./$types"
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte"
  import { capitalize } from "$lib/utils"
  import { page } from "$app/stores"
  import type { BreadCrumb, DocumentationArticle } from "$lib/types"

  export let data: LayoutData

  function createBreadcrumbs(section: string, doc: DocumentationArticle | null): BreadCrumb[] {
    const breadcrumbs: BreadCrumb[] = [
      { title: "Documentation", path: "/docs" },
      { title: capitalize(section), path: `/docs/${section}` },
    ]

    if (doc) {
      breadcrumbs.push({
        title: doc.title,
        path: `/docs/${section}/${doc.slug}`,
      })
    }

    return breadcrumbs
  }

  $: breadcrumbs = createBreadcrumbs(data.section, $page.data.doc)
</script>

<div>
  <nav aria-label="Breadcrumbs">
    <Breadcrumbs {breadcrumbs} />
  </nav>

  <slot />
</div>

<style>
  nav {
    display: flex;
    align-items: center;
    height: var(--space-xl);
  }
</style>
