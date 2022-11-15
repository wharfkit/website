<script lang="ts">
  import "../styles/app.scss"
  import Header from "$lib/components/Header.svelte"
</script>

<div class="wrapper | center stack">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    max-inline-size: 1000px;
    gap: var(--s2);
  }
  main {
    flex: 1;
  }
</style>
