<script lang="ts">
  import Button from "$lib/components/Button.svelte"

  export let title = ""
  export let date: Date
  export let videoLink = ""
  export let transcriptLink = ""
</script>

<article class="stack">
  <header>
    <h2>{title}</h2>
    <p>{date.toLocaleDateString()}</p>
  </header>

  <div class="media | stack">
    <div class="frame">
      <div class="play | imposter box" />
    </div>
    <Button>Read transcript (Google docs)</Button>
  </div>

  <slot />
</article>

<style>
  header h2 {
    color: var(--color-primary-600);
  }
  .stack {
    --gap: var(--s2);
  }

  .frame {
    background-color: var(--wharf-blue);
    border-radius: var(--s0);
    position: relative;
  }

  .media {
    --gap: var(--s1);
  }

  .play {
    background-color: var(--white);
    --padding: 2rem;
    border-radius: 50%;
    aspect-ratio: 1;
  }
</style>
