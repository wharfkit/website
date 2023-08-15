<script lang="ts">
  export let currentDoc: DocumentationArticle
  export let allSections: DocumentationSection[]

  $: currentSection = allSections?.find((section) => section.title === currentDoc.category)
  $: currentArticles = currentSection?.articles
  $: currentIndex =
    currentArticles?.findIndex((article) => article.title === currentDoc.title) ?? -1
  $: previousDoc = currentArticles?.[currentIndex - 1]
  $: nextDoc = currentArticles?.[currentIndex + 1]
</script>

<div class="buttons">
  {#if previousDoc}
    <a href={previousDoc.path} class="previous">
      <span class="label">Previous article</span>
      <span class="title">{previousDoc.title}</span>
    </a>
  {/if}
  {#if nextDoc}
    <a href={nextDoc.path} class="next">
      <span class="label">Next article</span>
      <span class="title">{nextDoc.title}</span>
    </a>
  {/if}
</div>

<style>
  .buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: var(--space-xl);
  }

  a {
    display: block;
    padding-inline: var(--space-m);
    padding-block: var(--space-s);
    border-radius: var(--border-radius);
    border: var(--theme-border1) 1px solid;
    text-decoration: none;
    min-width: var(--space-8xl);
  }

  .next {
    margin-left: auto;
  }

  .label {
    display: block;
    font-size: var(--fs--2);
    color: var(--theme-text-heading);
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: var(--space-3xs);
    text-decoration: none;
  }

  a:hover {
    background-color: var(--theme-surface2);
  }
</style>
