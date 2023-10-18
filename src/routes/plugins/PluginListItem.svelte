<script lang="ts">
  import Tag from "./Tag.svelte"
  export let plugin: WharfkitPlugin
  const { name, description, tags, authorIcon, author, version, lastPublishedDate } = plugin
  const link = `/plugins/${name}`
</script>

<li>
  <h3><a href={link}>{name}</a></h3>
  <p>{description}</p>
  <ul class="tags">
    {#each tags as tag}
      <Tag>{tag}</Tag>
    {/each}
  </ul>
  <div class="footer">
    <img src={authorIcon} class="author-icon" alt="" width="28" height="28" />
    <p>
      <span class="author">{author}</span>
      <span class="version">published {version}</span>
      -
      <span class="last-published">{lastPublishedDate}</span>
    </p>
  </div>
</li>

<style>
  li:not(.tag) {
    display: grid;
    gap: var(--space-xs);
    padding-block: var(--space-l);
    border-bottom: 1px solid var(--theme-border2);
  }

  h3 a {
    text-decoration: none;
  }

  .tags {
    display: flex;
    list-style: none;
    padding: 0;
    gap: var(--space-xs);
  }

  .footer {
    display: flex;
    align-items: center;
    gap: var(--space-2xs);
  }

  .author-icon {
    border-radius: var(--space-2xs);
  }

  .author {
    font-weight: 600;
  }
</style>
