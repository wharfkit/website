<script lang="ts">
  export let gap = "var(--s1)"
  export let style = ""
  let props = $$props.class ? $$props.class : ""
</script>

<div class={["stack", props].join(" ")} style:gap {style}>
  <slot />
</div>

<style>
</style>
