---
title: Attributes
---

> Attributes let you pass data to Markdoc tags, similar to HTML attributes or React props.
>
> You can pass values of type: number, string, boolean, JSON array, or JSON object, either directly or using variables. With a tag, you can use HTML-like syntax.
>
> To pass attributes to a node, you can't use the HTML-like syntax. Instead, use annotation syntax. Put the attributes after the node, in their own set of.

Or with `mdsvex` just use a component:

<script>
  import City from "$lib/components/docs/City.svelte"
  let coordinates = [1 ,2, 3]
  let deleted = false
</script>

<City index=1 name="Vancouver" {deleted} {coordinates}/>
