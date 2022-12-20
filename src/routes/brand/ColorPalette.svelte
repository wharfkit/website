<script lang="ts">
  export let variant: string

  let weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
  let brand = {
    primary: 700,
    secondary: 300,
    tertiary: 200,
    accent: 50,
  }
  export let highlight = ""
</script>

<div class="palette {variant}">
  <div
    class="highlight"
    style="background-color: var(--color-{variant}-{highlight || brand[variant]});" />
  <div class="colors">
    {#each weights as weight}
      <div style="background-color: var(--color-{variant}-{weight});" />
    {/each}
  </div>
</div>

<style>
  .palette {
    --palette-radius: var(--s0);
    position: relative;
    display: flex;
    flex-direction: column;
    block-size: 100%;
  }

  .highlight {
    flex-grow: 2;
    min-block-size: var(--s4);
    border-top-left-radius: var(--palette-radius);
    border-top-right-radius: var(--palette-radius);
  }

  .colors {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  .colors > * {
    aspect-ratio: 1;
  }

  .colors :is(:first-child) {
    border-bottom-left-radius: var(--palette-radius);
  }

  .colors :is(:last-child) {
    border-bottom-right-radius: var(--palette-radius);
  }
</style>
