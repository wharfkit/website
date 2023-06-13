<script lang="ts">
  import Button from "$lib/components/Button.svelte"

  export let videolink: string = ""
  export let transcriptlink: string = ""
  let play = false

  const getVideoID = (videolink: string) => {
    try {
      const url = new URL(videolink)
      if (url.hostname.includes("youtube.com")) {
        const videoId = url.searchParams.get("v")
        if (videoId) {
          return videoId
        }
        if (url.pathname.includes("/live/")) {
          return url.pathname.split("/").pop()
        }
      } else if (url.hostname.includes("youtu.be")) {
        return url.pathname.slice(1)
      }
    } catch (error) {
      console.error(error)
      return ""
    }
  }

  let videoID = getVideoID(videolink)
  let videoEmbed = `https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1`
  let thumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
</script>

<div class="media | stack">
  <div class="frame" style="background-image: url({thumbnail}); background-size: cover;">
    {#if play}
      <iframe
        class="youtube"
        src={videoEmbed}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        allowfullscreen />
    {/if}
    <button class="play | imposter box" on:click={() => (play = true)}>
      <span class="visually-hidden">Watch on YouTube</span>
      <svg width="34" height="34">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.92725 3.30884V30.6912L29.1917 17L5.92725 3.30884ZM2.83325 2.76959C2.83325 0.626828 5.18123 -0.701815 7.03745 0.39057L31.2182 14.621C33.0383 15.692 33.0383 18.3079 31.2182 19.379L7.03745 33.6094C5.18123 34.7018 2.83325 33.3732 2.83325 31.2304V2.76959Z"
          fill="white" />
      </svg>
    </button>
  </div>
  {#if transcriptlink}
    <Button link={transcriptlink}>Read transcript (Google docs)</Button>
  {/if}
</div>

<style>
  .media {
    --gap: var(--space-m);
  }

  .frame {
    background-color: var(--wharf-blue);
    border-radius: var(--space-s);
    isolation: isolate;
    position: relative;
  }

  .youtube {
    aspect-ratio: 16 / 9;
    border-radius: var(--space-s);
    width: 100%;
    z-index: 1;
  }

  .play {
    --padding: var(--space-m);
    background-color: var(--wharf-blue);
    border-radius: 50%;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    z-index: 0;
    opacity: 80%;
    transition: opacity 200ms ease-out;
  }

  .play:hover {
    opacity: 100%;
  }

  .play svg {
    /* Offset for icon centering */
    margin-inline-start: 4px;
  }
</style>
