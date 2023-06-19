<script lang="ts">
  import { capitalize } from "$lib/utils/general"
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<main>
  <h1>Documentation</h1>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem numquam deserunt laborum
    quod, laudantium fuga iusto vitae pariatur at distinctio accusamus error magni corrupti ipsa
    provident eaque itaque. Aperiam?
  </p>

  {#if data.updates}
    <hr />

    <h2>Latest Updates</h2>
    <ol>
      {#each data.updates as update}
        <li>
          <time>{update.date}</time>
          <ul>
            {#each update.commits as commit}
              <li>
                <p>{capitalize(commit.message)}</p>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ol>
  {/if}
</main>

<style>
  h1 {
    font-size: var(--fs-4);
    line-height: var(--space-xl);
    margin-block-end: var(--space-s);
  }

  h2 {
    font-size: var(--fs-3);
    line-height: var(--space-xl);
    margin-block-start: var(--space-l);
    margin-block-end: var(--space-m);
  }

  p {
    line-height: var(--space-l);
  }

  ol {
    list-style: none;
    padding-inline-start: 0;
  }

  time {
    font-size: var(--fs-1);
    color: var(--theme-text-heading);
    font-weight: 500;
  }

  ol > li {
    margin-block-end: var(--space-l);
  }

  ol ul {
    list-style: disc;
  }
</style>
