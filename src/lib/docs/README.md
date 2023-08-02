# Wharf Documentation Formatting

Follow the instructions below to get started using mdsvex features.

## Basic Markdown Formatting

Double asterix for **Bold**, e.g. `**Bold**`

Single underscore for _Italic_, e.g. `_Italic_`

[Links](/docs/get-started/cheat-sheet) can reference internal routes e.g. `[Links](/docs/get-started/cheat-sheet)`

Images can use internal links e.g. `![Images](/images/content/depgraph.png)` or external links e.g. ` ![Image](https://picsum.photos/seed/picsum/760/400)`

![Image](https://picsum.photos/seed/picsum/760/400)

## Lists

Lists can be unordered:

- Item 1
- Item 2
- Item 3

Or ordered, with 4 spaces before the number for nested lists

1. Item 1
   1. Item 1.1
   2. Item 1.2
2. Item 2
3. Item 3

## Quotes

Quotes are automatically converted to blockquotes

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

## Code

Backticks for `Inline code`

Or labelled code fences for blocks with syntax highlighting.

```bash
Code fences
```

## Tables

Tables are automatically converted to HTML tables.

| Item         | Price    | # In stock |
| ------------ | -------- | ---------- |
| Juicy Apples | 1.99     | _7_        |
| Bananas      | **1.89** | 5234       |
| Bananas      | **1.89** | 5234       |
| Bananas      | **1.89** | 5234       |

## Frontmatter

Access document frontmatter in markdown by using curly braces. e.g. `{title}` will render the title if it exists in the frontmatter.

## Variables

Variables can be used to store values and perform operations.

```svelte
<script>
  let test = 3 > 4
</script>

The result of the test is: **{test}**
```

<script>
  let test = 3 > 4
</script>

The result of the test is: **{test}**

## Functions

Use functions to perform boolean operations and render the content when the condition is met.

```svelte
{#if false}
  ## This won't be shown.
{/if}
```

## Partials

Use the `import` syntax to import a markdown file as a component. e.g.

```svelte
<!-- cheatsheet.md -->
<script>
  import Frontmatter from "../advanced/frontmatter.md"
</script>

<Frontmatter />
```

You can also import svelte components and pass attributes. e.g.

```svelte
<!-- cheatsheet.md -->
<script>
  import City from "$lib/components/docs/City.svelte"
  let coordinates = [1, 2, 3]
  let deleted = false
</script>

<City index="1" name="Vancouver" {deleted} {coordinates} />
```
