<script lang="ts">
  import { isDocNotHidden } from "../utils"
  export let currentDoc: DocumentationArticle
  export let allSections: DocumentationSection[]

  const getActiveSection = (doc: DocumentationArticle) =>
    allSections.filter((section) => section.title === doc.category)[0]

  const getCurrentIndex = (currentArticles: DocumentationArticle[], doc: DocumentationArticle) =>
    currentArticles.findIndex((article) => article.title === doc.title)

  const getPreviousDoc = (currentArticles: DocumentationArticle[], currentIndex: number) =>
    currentArticles[currentIndex - 1]

  const getNextDoc = (currentArticles: DocumentationArticle[], currentIndex: number) =>
    currentArticles[currentIndex + 1]

  $: currentSection = getActiveSection(currentDoc)
  $: currentArticles = currentSection.articles.filter(isDocNotHidden)
  $: currentIndex = getCurrentIndex(currentArticles, currentDoc)
  $: previousDoc = getPreviousDoc(currentArticles, currentIndex)
  $: nextDoc = getNextDoc(currentArticles, currentIndex)
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
    border: var(--theme-border2) 1px solid;
    text-decoration: none;
    min-width: var(--space-8xl);
  }

  .next {
    text-align: right;
    margin-left: auto;
  }

  .label {
    display: block;
    font-size: var(--fs--2);
    color: var(--theme-text-heading);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.1em;
    opacity: 0.5;
    margin-bottom: var(--space-3xs);
    text-decoration: none;
  }

  a:hover {
    background-color: var(--theme-surface2);
    border-color: transparent;
  }
</style>
