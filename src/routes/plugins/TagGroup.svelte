<script lang="ts">
  import Tag from "./Tag.svelte"
  export let tags: string[] = []
</script>

<ul class="tags | cluster">
  {#each tags as tag}
    <Tag>
      <a href={`/plugins?tag=${tag}`}>{tag}</a>
    </Tag>
  {/each}
</ul>

<style>
  .tags {
    display: flex;
    list-style: none;
    padding: 0;
    gap: var(--space-xs);
  }

  .tags a {
    text-decoration: none;
    color: inherit;
  }
</style>
