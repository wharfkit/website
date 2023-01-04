<script lang="ts">
  import Button from "$lib/components/Button.svelte"

  export let videolink: string = ""
  export let transcriptlink: string = ""
</script>

<div class="media | stack">
  <div class="frame">
    <iframe
      class="youtube"
      src={videolink}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
    <a class="play | imposter box" href={videolink}>
      <span class="visually-hidden">Watch on YouTube</span>
      <svg width="34" height="34">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.92725 3.30884V30.6912L29.1917 17L5.92725 3.30884ZM2.83325 2.76959C2.83325 0.626828 5.18123 -0.701815 7.03745 0.39057L31.2182 14.621C33.0383 15.692 33.0383 18.3079 31.2182 19.379L7.03745 33.6094C5.18123 34.7018 2.83325 33.3732 2.83325 31.2304V2.76959Z"
          fill="var(--wharf-blue)" />
      </svg>
    </a>
  </div>
  <Button link={transcriptlink}>Read transcript (Google docs)</Button>
</div>

<style>
  .media {
    --gap: var(--s1);
  }

  .frame {
    background-color: var(--wharf-blue);
    border-radius: var(--s0);
    isolation: isolate;
    position: relative;
  }

  .youtube {
    aspect-ratio: 16 / 9;
    border-radius: var(--s0);
    width: 100%;
    z-index: 1;
  }

  .play {
    --padding: var(--s1);
    background-color: white;
    border-radius: 50%;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    z-index: 0;
  }

  .play svg {
    /* Offset for icon centering */
    margin-inline-start: 4px;
  }
</style>
