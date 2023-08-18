<script lang="ts">
  import { scrollPosition, scrollDirection } from "../stores"

  let scrollY: number

  $: scrollPosition.update((existing) => {
    scrollY > existing ? scrollDirection.set("down") : scrollDirection.set("up")
    return scrollY
  })
</script>

<svelte:window bind:scrollY />
