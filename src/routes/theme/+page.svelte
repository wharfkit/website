<script lang="ts">
</script>

<svelte:head>
  <style>
    :root {
      /* --header-background: white; */
      /* --footer-background: var(--wharf-blue); */
    }
    body {
      background: linear-gradient(
        180deg,
        #494e62 0%,
        #7be7ce 63.52px,
        #b2f2e1 84.44px,
        #f4faf4 112.36px,
        #ffffff 140px
      );
    }
  </style>
</svelte:head>

<main>
  <section>
    <div class="surface-samples">
      <div class="surface1 rad-shadow">1</div>
      <div class="surface2 rad-shadow">2</div>
      <div class="surface3 rad-shadow">3</div>
      <div class="surface4 rad-shadow">4</div>
      <div class="surface5 rad-shadow">5</div>
    </div>
  </section>

  <section>
    <div class="text-samples">
      <h1 class="text1">
        <span class="swatch brand rad-shadow" />
        Brand
      </h1>
      <h1 class="text1">
        <span class="swatch text1 rad-shadow" />
        Text Color 1
      </h1>
      <h1 class="text2">
        <span class="swatch text2 rad-shadow" />
        Text Color 2
      </h1>
      <h1 class="text3">
        <span class="swatch text3 rad-shadow" />
        Text Color 3
      </h1>
      <br />
      <p class="text1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p class="text2">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 10vmax 10vmin;
  }

  section {
    display: grid;
    gap: 2.5vh;
  }

  h1 {
    font-weight: 100;
    opacity: 0.95;
  }

  p {
    max-inline-size: 35ch;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  header {
    display: inline-grid;
    gap: 1ch;
  }

  form {
    display: flex;
    gap: 2ch;

    & > div {
      display: inline-flex;
      align-items: center;
      gap: 0.75ch;
    }
  }

  .surface-samples {
    display: grid;
    --size: 20ch;
    grid-template-columns: var(--size) var(--size);
    grid-auto-rows: var(--size);
    gap: 2ch;

    @media (max-width: 480px) {
      & {
        --size: 40vw;
      }
    }

    & > * {
      border-radius: 1rem;
      display: grid;
      place-content: center;
      font-size: 3rem;
      font-weight: 200;
    }
  }

  .text-samples {
    display: grid;
    gap: 1.5ch;

    & > h1 {
      font-size: 2.5rem;
      display: inline-flex;
      align-items: center;
      gap: 1ch;
    }
  }

  .brand {
    color: var(--brand);
    background-color: var(--brand);
  }

  .surface1 {
    background-color: var(--theme-surface1);
    color: var(--theme-text1);
  }

  .surface2 {
    background-color: var(--theme-surface2);
    color: var(--theme-text1);
  }

  .surface3 {
    background-color: var(--theme-surface3);
    color: var(--theme-text1);
  }

  .surface4 {
    background-color: var(--theme-surface4);
    color: var(--theme-text3);
  }

  .surface5 {
    background-color: var(--theme-surface5);
    color: var(--theme-text3);
  }

  .text1 {
    color: var(--theme-text1);
    & p {
      font-weight: 200;
    }
  }

  .text2 {
    color: var(--theme-text2);
  }

  .text3 {
    color: var(--theme-text3);
  }

  .swatch {
    display: inline-block;
    flex-shrink: 0;
    inline-size: 1.5ch;
    block-size: 1.5ch;
    border-radius: 50%;

    &.text1 {
      background-color: var(--theme-text1);
    }
    &.text2 {
      background-color: var(--theme-text2);
    }
    &.text3 {
      background-color: var(--theme-text3);
    }
  }

  .rad-shadow {
    border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
    box-shadow: 0 1rem 0.5rem -0.5rem;
    box-shadow: 0 2.8px 2.2px hsl(var(--theme-surface-shadow) / calc(var(--shadow-strength) + 0.03)),
      0 6.7px 5.3px hsl(var(--theme-surface-shadow) / calc(var(--shadow-strength) + 0.01)),
      0 12.5px 10px hsl(var(--theme-surface-shadow) / calc(var(--shadow-strength) + 0.02)),
      0 22.3px 17.9px hsl(var(--theme-surface-shadow) / calc(var(--shadow-strength) + 0.02)),
      0 41.8px 33.4px hsl(var(--theme-surface-shadow) / calc(var(--shadow-strength) + 0.03)),
      0 100px 80px hsl(var(--theme-surface-shadow) / var(--shadow-strength));
  }
</style>
