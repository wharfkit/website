<script lang="ts">
  import SessionAnimation from "./SessionAnimation.svelte"
  export let kit: string
</script>

<main>
  <section class="switcher box">
    <div class="box stack align-center">
      <hgroup class="text-center">
        <h1>{kit}</h1>
        <p>We're working on it...</p>
      </hgroup>
      <a href="https://github.com/wharfkit/" class="button">Check Progress on Github</a>
    </div>
    <SessionAnimation {kit} />
  </section>
</main>

<style>
  section {
    background: url("/src/lib/assets/images/9adffb9d8509834788bd5a77f798bc5b.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: var(--space-2xl);
    border-radius: var(--space-l);
  }

  hgroup > * {
    color: white;
  }

  div.box {
    display: grid;
    place-content: center;
  }

  h1 {
    font-size: var(--fs-6);
  }

  p {
    font-size: var(--fs-2);
  }
</style>
