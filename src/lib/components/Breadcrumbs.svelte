<script lang="ts">
  export let breadcrumbs: BreadCrumb[]
</script>

<ul>
  {#each breadcrumbs as { title, path }}
    <li>
      <a href={path.toLowerCase()}>{title}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    --spacing: 4px;
    --color: var(--theme-text-body);
    list-style: none;
    padding-inline-start: 0;
  }

  li {
    display: inline-block;
    margin-inline-end: var(--spacing);
  }

  li:last-child {
    margin-inline-end: 0;
  }

  li:not(:last-child)::after {
    content: "/";
    /* margin-inline-start: 2px; */
    color: var(--color);
  }

  a {
    font-size: var(--fs--1);
    color: var(--color);
    font-weight: 500;
    text-decoration: none;
  }

  a:is(:hover, :focus) {
    color: var(--color);
    text-decoration: underline;
  }

  a:visited {
    color: var(--color);
  }
</style>
