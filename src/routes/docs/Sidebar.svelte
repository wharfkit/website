<script lang="ts">
  import Searchbar from "./Searchbar.svelte"
  export let sections: Record<string, any>
</script>

<aside>
  <h2>Documentation</h2>
  <Searchbar />
  <ul class="sections | flow">
    {#each Object.entries(sections) as [title, articles]}
      <li class="section">
        <details>
          <summary>
            <h3>{title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
          </summary>

          <ul class="articles">
            {#each articles as article}
              <li>
                <a href={article.path}>
                  {article.title}
                </a>
              </li>
            {/each}
          </ul>
        </details>
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  h2 {
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
    padding-block: var(--space-s);
    padding-inline: var(--space-m);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .sections {
    font-size: var(--fs-1);
    font-weight: 600;
    font-family: var(--ff-heading);
    gap: var(--space-m);
  }

  .sections > li {
    border: 1px solid var(--seafoam-mint);
    border-radius: var(--border-radius);
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: var(--space-s);
    padding-inline: var(--space-m);
    cursor: pointer;
  }

  summary svg {
    transition: transform 80ms ease-out;
  }

  details[open] svg {
    transform: rotate(90deg);
  }

  summary h3 {
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
  }

  .articles {
    padding-block-end: var(--space-s);
    padding-inline: var(--space-l);
  }

  .articles a {
    font-size: var(--fs-0);
    font-family: var(--ff-heading);
    color: var(--theme-text1);
    font-weight: 400;
    line-height: 2em;
    text-decoration: none;
    display: block;
  }

  .articles a:hover {
    text-decoration: underline;
  }
</style>
