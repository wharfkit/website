---
title: Tags
---

> Tags are a syntactic extension of standard Markdown. You can use native Markdoc tags, like tables, conditionals, and partials, or create custom React components.
>
> Similar to React components and HTML elements, tags are composable, and you can customize them with attributes.

## Built-in tags

Markdoc comes out-of-the-box with four built-in tags: if, else, table, and partial.

### If/else

{#if true }

#### This should always be shown.

{/if}

Same as in a Svelte file

### Table

Should be built-in

| Item         | Price    | # In stock |
| ------------ | -------- | ---------- |
| Juicy Apples | 1.99     | _7_        |
| Bananas      | **1.89** | 5234       |

### Partials

See [partials](../03-advanced/partials)
