<script lang="ts">
  import SessionAnimation from "../SessionAnimation.svelte"
</script>

<svelte:head>
  <style>
    body {
      --body-gap: var(--space-3xl-4xl);
    }
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      --footer-background: white;
      --page-background:
      linear-gradient(
        180deg,
        #494E62 0rem,
        #7be7ce 40rem,
        #b2f2e1 50rem,
        #f4faf4 60rem
        /* #ffffff 10rem */
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --page-background:
        linear-gradient(180deg, 
        #7BE7CE -8rem, 
        /* #494E62 10rem,  */
        color-mix(in srgb, #494E62 100%, #262936) 30rem,
        color-mix(in srgb, #494E62 60%, #262936) 35rem,
        color-mix(in srgb, #494E62 40%, #262936) 40rem,
        color-mix(in srgb, #494E62 20%, #262936) 45rem,
        color-mix(in srgb, #494E62 10%, #262936) 50rem,
        #262936 60rem,
        #262936 calc(100% - 10rem),
        var(--color-primary-999) 100%
        ) no-repeat;
    }
  </style>
</svelte:head>

<main>
  <section class="switcher box">
    <div class="box stack align-center">
      <hgroup class="text-center">
        <h1>Account Kit</h1>
        <p>We're working on it...</p>
      </hgroup>
      <a href="https://github.com/orgs/wharfkit/projects/1" class="button"
        >Check Progress on Github</a>
    </div>
    <SessionAnimation kit={"Account Kit"} />
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
