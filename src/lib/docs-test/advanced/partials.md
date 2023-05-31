---
title: Partials
---

> Markdoc uses partials to reuse content across documents. A separate Markdoc file stores the content, and it's referenced from within the partial tag.

## This partial should show the Frontmatter page

<script>
  import Frontmatter from "../advanced/frontmatter.md"
</script>

<Frontmatter/>
