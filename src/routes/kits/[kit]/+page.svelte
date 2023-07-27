<script lang="ts">
  import type { PageData } from "./$types"
  import TransparentKitLogo from "./TransparentKitLogo.svelte"
  import SessionAnimation from "./SessionAnimation.svelte"
  import ComingSoon from "./ComingSoon.svelte"

  export let data: PageData
  $: kit = data.kit
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

{#if kit.title === "Account Kit" || kit.title === "Contract Kit"}
  <ComingSoon kit={kit.title} />
{:else}
  <main class="stack">
    <section class="hero | center stack | text-center align-center">
      <TransparentKitLogo />
      <h1 class="title">{kit.title}</h1>
      <p class="subtitle">{kit.subtitle}</p>
    </section>

    {#if kit.features}
      {@const feature = kit.features[0]}
      <section class="feature one | switcher">
        <div class="content | box flow | align-left justify-center">
          <h2>{feature.title}</h2>
          <div class="description">
            <p>{feature.description}</p>

            {#if feature.list}
              <ul>
                {#each feature.list as item}
                  <li>{item}</li>
                {/each}
              </ul>
            {/if}
          </div>
          <a href={feature.link?.href} class="button">{feature.link?.text}</a>
        </div>
        <div class="image | box place-center">
          <SessionAnimation />
        </div>
      </section>

      <section class="feature two">
        <div class="box center stack | text-center text-balance">
          <h2>{kit.features[1].title}</h2>
          <p>{kit.features[1].description}</p>
        </div>

        {#if kit.examples}
          <div class="examples">
            <div class="grid">
              {#each kit.examples as example}
                <div class="card | box stack">
                  <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"
                    ><path
                      d="M44 38a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h10l4 6h18a4 4 0 0 1 4 4v22Z"
                      stroke="#7BE7CE"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round" /></svg>
                  <h3>{example.title}</h3>
                  <p>{example.description}</p>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </section>
    {/if}

    {#if kit.features}
      <section class="feature three | switcher">
        <div class="image | box place-center">
          <img src={kit.logo} alt="{kit.title} logo" loading="lazy" />
        </div>
        <div class="content | box flow | align-left justify-center">
          <h2>{kit.features[2].title}</h2>
          <p>{kit.features[2].description}</p>
          <a href={kit.features[2].link?.href} class="button">{kit.features[2].link?.text}</a>
        </div>
      </section>
    {/if}

    {#if kit.cta}
      <section class="cta | box center stack | text-center text-balance align-center">
        <h2>{kit.cta.title}</h2>
        <a href={kit.cta.link?.href} class="button">{kit.cta.link?.text}</a>
      </section>
    {/if}
  </main>
{/if}

<style>
  main {
    margin-block-start: var(--space-xl);
    gap: var(--space-6xl);
  }

  .switcher {
    --threshold: 768px;
  }

  .flow {
    gap: var(--space-m);
  }

  .hero {
    /* color: var(--theme-text-heading); */
    color: white;
  }

  .title {
    font-size: var(--fs-6);
  }
  .subtitle {
    font-size: var(--fs-2);
  }

  .feature .image {
    background: var(--background);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding: var(--space-2xl);
  }

  .feature.one .image {
    --background: url("/src/lib/assets/images/9adffb9d8509834788bd5a77f798bc5b.webp");
    inline-size: fit-content;
  }

  .feature.three .image {
    --background: linear-gradient(hsla(228 15% 34% / 0.5), hsla(228 15% 34% / 0.5)),
      url("/src/lib/assets/images/e352306b2329b918c36de9f39666159f.webp");
  }

  .feature p {
    white-space: pre-line;
  }

  .examples .grid {
    --minimum: 40ch;
    margin-top: var(--space-xl);
  }

  .box {
    border-radius: var(--space-l);
  }

  .card {
    background-color: var(--theme-surface7);
    padding: var(--space-l-xl);
  }

  .cta {
    gap: var(--space-l);
  }
</style>
