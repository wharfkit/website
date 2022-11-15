<script lang="ts">
  export let gap = "var(--s1)"
</script>

<div style:gap>
  <slot />
</div>

<style>
  div {
    display: grid;
    --minimum: 20ch;
  }
  @supports (width: min(var(--minimum), 100%)) {
    div {
      /* ↓ Enhance with the min() function
  into multiple columns */
      grid-template-columns: repeat(auto-fit, minmax(min(var(--minimum), 100%), 1fr));
    }
  }
</style>
