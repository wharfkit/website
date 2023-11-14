<script>
  import frame2518 from "$lib/assets/images/frame-2518.webp"
  import KitSwitcher from "$lib/components/KitSwitcher.svelte"

  import sessionKit from "$lib/assets/images/kits/session-kit.svg"
  import contractKit from "$lib/assets/images/kits/contract-kit.svg"
  import accountKit from "$lib/assets/images/kits/account-kit.svg"
  import threeKits from "$lib/assets/images/kits/three-kits.svg"
</script>

<svelte:head>
  <style>
    body {
      --pyramid-top: 30rem;
      --cube-size: 180px;
      --flare-offset: 150px;
      --background-size: 3840px;
      --background-offset: -1450px;
    }

    body[data-theme="light"] {
      --footer-background: white;
      --page-background: var(--swell-mist);

      /* prettier-ignore */
      background:
      conic-gradient(
        from 120deg,
        var(--page-background) 33.333%,
        transparent 33.333%
      ),
      linear-gradient(
        180deg,
        var(--wharf-blue) 0%,
        var(--reef-turquoise) 40rem,
        var(--seafoam-mint) 60rem,
        var(--swell-mist) 2390px,
        var(--page-background)
      );

      background-repeat: no-repeat;
      background-size: auto 3840px, cover;
      background-position: center top -1450px, bottom;

      --card-2-background: white;
      --card-3-background: white;
    }

    body[data-theme="dark"] {
      --footer-background: hsl(228, 21%, 10%);
      --header-background: var(--wharf-blue); /* #494E62 */
      --header-background-transparent: #494e6200;
      --page-background: #262936;
      --radial-0: hsl(166, 60%, 50%) 0%;
      --radial-1: hsl(197, 20%, 40%) 20%;
      --radial-2: hsl(228, 15%, 34%) 40%;
      --radial-3: hsl(228, 21%, 10%) 100%;

      /* prettier-ignore */
      background:
      conic-gradient(
        from 120deg,
        var(--page-background) 33.333%,
        transparent 33.333%
      ),
      radial-gradient(
        100% 40rem at center,
        var(--radial-0),
        var(--radial-1),
        var(--radial-2),
        var(--radial-3)
      ),
      linear-gradient(
        0deg,
        var(--page-background),
        var(--page-background)
      );

      background-repeat: no-repeat;
      background-size: auto var(--background-size),
        auto calc(var(--background-size) - var(--flare-offset)), cover;
      background-position: center top var(--background-offset),
        center top calc(var(--background-offset) - var(--flare-offset) * -1), bottom;

      --card-2-background: #494e62;
      --card-3-background: #363944;
    }
  </style>
</svelte:head>

<main class="flow">
  <div class="hero">
    <h1>Three Kits, Endless Possibilities</h1>
    <p>Your building blocks for web3 app development.</p>
  </div>

  <div class="images">
    <div class="contract kit">
      <img src={contractKit} alt="contract kit icon" height="180" width="180" />
    </div>
    <div class="session kit">
      <img src={sessionKit} alt="session kit icon" height="180" width="180" />
    </div>
    <div class="account kit">
      <img src={accountKit} alt="account kit icon" height="180" width="180" />
    </div>
  </div>

  <div class="kitswitcher">
    <KitSwitcher />
  </div>

  <div class="tutorial | switcher">
    <div class="box stack">
      <h2>Try out the Session Kit.</h2>
      <p>
        Learn how to define a Session and perform transactions with our Node.js Guide, or discover
        how to connect wallets to a web application and prompt transactions with our Web App Guide.
        And check back soon for more guides on the other kits!
      </p>
      <div class="buttons | cluster">
        <a href="/guides/session-kit/getting-started-node-js" class="button">Node.js Tutorial</a>
        <a href="/guides/session-kit/getting-started-web-app" class="button">Web App Tutorial</a>
      </div>
    </div>
    <div class="image | box place-center">
      <img src={frame2518} alt="wharf logo stylized" loading="lazy" />
    </div>
  </div>

  <!--
  <div class="documentation | center stack">
    <h2>Not sure which kit(s) you need?</h2>
    <p>Check out our documentation for more in-depth information on each kit.</p>
    <a class="button" href="/docs">Go to Documentation</a>
  </div>
  -->

  <div class="overview | switcher">
    <div class="card one | place-center align-center">
      <h3>Build projects on a solid foundation.</h3>
      <picture>
        <img src={threeKits} alt="contract kit logo" loading="lazy" width="256" height="256" />
      </picture>
    </div>
    <div class="stack">
      <div class="card three">
        <h3>The Antelope SDK</h3>
        <p>
          Every kit in Wharf is built using the Antelope SDK, the core library which provides
          Javascript native types, client interfaces, and other tools to make it easy to work with
          any Antelope-based blockchain.
        </p>
        <div class="buttons | cluster">
          <a href="/docs/antelope" class="button">Documentation</a>
          <a href="https://github.com/wharfkit/antelope" class="button">Github</a>
        </div>
      </div>
      <div class="card three">
        <h3>Protocol Standards</h3>
        <p>
          Transactions that pass through the Wharf kits are standardized and represented as <a
            href="https://github.com/greymass/eosio-signing-request/">Signing Requests</a
          >.
        </p>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    gap: var(--space-4xl);
  }

  .center {
    text-align: center;
    max-inline-size: none;
    justify-content: center;
    align-items: center;
  }

  .hero {
    position: absolute;
    inset-inline: 0;
    top: var(--space-7xl);
    padding-inline: var(--space-s);
    font-family: var(--ff-heading);
    gap: var(--space-s);
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero h1 {
    font-size: var(--fs-6);
    font-weight: 700;
  }

  .hero p {
    font-size: var(--fs-2);
    font-weight: 600;
  }

  .images {
    position: absolute;
    top: calc(var(--pyramid-top) - var(--cube-size) / 4);
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns:
      1fr
      calc(var(--cube-size) / 2)
      calc(var(--cube-size) / 2)
      var(--space-m)
      calc(var(--cube-size) / 2)
      calc(var(--cube-size) / 2)
      1fr;
    grid-template-rows:
      calc(var(--cube-size) - var(--space-m))
      var(--space-m)
      calc(var(--cube-size) - var(--space-m));
  }

  @media (max-width: 768px) {
    .images {
      --cube-size: 144px;
    }
    .kit img {
      width: var(--cube-size);
      height: var(--cube-size);
    }
  }

  .images > :nth-child(2) {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
    justify-self: center;
  }

  .images > :nth-child(3) {
    grid-column: 5 / 7;
    grid-row: 2 / 4;
    justify-self: center;
  }

  .images > :nth-child(1) {
    grid-column: 2 / 4;
    grid-row: 2 / 4;
  }

  .kitswitcher {
    margin-top: 42rem;
    display: grid;
    place-content: center;
  }

  .tutorial.switcher {
    --threshold: 960px;
    flex-wrap: wrap-reverse;
    align-items: center;
  }
  .tutorial.switcher img {
    border-radius: var(--space-l);
    object-fit: cover;
  }

  .tutorial .stack {
    align-items: flex-start;
  }

  .overview {
    --gap: var(--space-m);
  }
  .overview.switcher {
    gap: var(--space-m);
    --threshold: 960px;
  }

  .overview h3 {
    font-size: var(--fs-3);
  }

  .card {
    padding-block: var(--space-xl);
    padding-inline: var(--space-2xl-3xl);
    border-radius: var(--space-l);
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
  }

  .card.one {
    text-align: center;
    background: linear-gradient(
        180deg,
        hsl(228, 20%, 20%) 0%,
        hsl(228, 15%, 34%) 30%,
        hsl(197, 20%, 40%) 60%,
        hsl(180, 17%, 50%) 80%,
        hsl(166, 69%, 69%) 100%
      )
      no-repeat;
    gap: var(--space-l);
  }

  .card.one img {
    object-fit: contain;
  }

  .card.one h3 {
    color: white;
  }

  .card.two {
    background-color: var(--card-2-background);
    color: var(--theme-text-heading);
    flex-direction: row;
    align-items: center;
    gap: var(--space-l);
  }

  .card.three {
    background-color: var(--card-3-background);
  }
</style>
