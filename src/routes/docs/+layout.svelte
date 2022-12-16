<script lang="ts">
  import type { LayoutData } from "./$types"

  export let data: LayoutData
</script>

<div class="wrapper | with-sidebar">
  <aside>
    <ul class="sections">
      {#each Object.entries(data.sections) as [title, articles]}
        <li>
          {title}
          <ul class="articles">
            {#each articles as article}
              <li><a href={article.path}>{article.title}</a></li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </aside>

  <main>
    <slot />
  </main>
</div>

<pre>
  {JSON.stringify(data, null, 2)}
</pre>

<style>
  main :global(h1) {
    font-size: var(--fs-3);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    /* margin-block-start: var(--s2); */
    margin-block-end: var(--s2);
  }
  main :global(h2) {
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    font-weight: 600;
    /* line-height: 1.5em; */
    margin-block-start: var(--s2);
    margin-block-end: var(--s0);
  }

  main :global(p) {
    margin-block: var(--s0);
  }

  main :global(code) {
    font-size: var(--fs-0);
    font-family: monospace;
    background-color: var(--color-neutral-200);
    padding-block: 0.25em;
    padding-inline: 0.5em;
    border-radius: 0.25em;
  }

  main :global(blockquote) {
    font-size: var(--fs-0);
    background-color: var(--color-secondary-50);
    border-inline-start: 0.5em solid var(--color-secondary-200);
    margin-block: var(--s1);
    padding-block: var(--s-2);
    padding-inline: 1em;
    border-radius: var(--s0);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .sections {
    font-size: var(--fs-1);
    font-weight: 600;
    font-family: var(--ff-heading);
  }

  .sections > * + * {
    margin-block-start: var(--s1);
  }

  .articles a {
    font-size: var(--fs-0);
    font-family: var(--ff-body);
    font-weight: 400;
    line-height: 1.5em;
  }
</style>
