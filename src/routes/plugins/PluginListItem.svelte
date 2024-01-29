<script lang="ts">
  import TagGroup from "./TagGroup.svelte"
  export let plugin: WharfkitPlugin
  const { name, description, tags, authorIcon, author, version, lastPublishedDate } = plugin
  const link = `/plugins/${name}`
</script>

<li>
  <h3><a href={link}>{name}</a></h3>
  <p>{description}</p>

  <TagGroup {tags} />

  <div class="footer">
    <img src={authorIcon} class="author-icon" alt="" width="28" height="28" />
    <p>
      <span class="author">{author}</span>
      {#if version}
        <span class="version">published {version}</span>
      {/if}
      {#if lastPublishedDate}
        -
        <span class="last-published">{lastPublishedDate}</span>
      {/if}
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
