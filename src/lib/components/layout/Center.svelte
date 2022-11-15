<script>
  export let padding = "1.5rem"
  export let max = "60ch"
  export let andText = false
</script>

<div
  class="center {$$props.class}"
  style:padding-inline={padding}
  style:max-inline-size={max}
  class:andText>
  <slot />
</div>

<style>
  .center {
    box-sizing: content-box;
    margin-inline: auto;
  }

  .andText {
    text-align: center;
  }
</style>
