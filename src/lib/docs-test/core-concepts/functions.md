---
title: Functions
---

> Functions enable you extend Markdoc with custom utilities, which let you transform your content and variables at runtime.
> Built-in functions
>
> Markdoc comes out-of-the-box with six built-in functions: equals, and, or, not, default, and debug.

## And/Or/Not

Use these functions with the if tag to perform boolean operations and render the content when the condition is met.

{#if true }

## This should always be shown.

{/if}

<script>
  let test = 3 > 4
</script>

{#if test}

## This shouldn't be shown.

{/if}
