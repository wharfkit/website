<script>
  import sessionKit from "$lib/assets/images/session-kit.svg"
  import contractKit from "$lib/assets/images/contract-kit.svg"
  import accountKit from "$lib/assets/images/account-kit.svg"
  import KitSwitcher from "$lib/components/KitSwitcher.svelte"
  import VisionBoard from "$lib/components/VisionBoard.svelte"

  import reactIcon from "$lib/assets/icons/react.svg"
  import javascriptIcon from "$lib/assets/icons/javascript.svg"
  import vueIcon from "$lib/assets/icons/vue.svg"
  import nodeIcon from "$lib/assets/icons/node.svg"
</script>

<svelte:head>
  <style>
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: white;
      background: 
        linear-gradient(
        180deg,
        #494e62 0%,
        #7be7ce 50rem,
        #b2f2e1 60rem,
        #f4faf4 70rem
      );
      background-repeat: no-repeat;
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: hsl(228, 21%, 10%);
      background: linear-gradient(180deg, 
      hsl(166deg 69% 69%) 0%,
      hsl(172deg 31% 56%) 10rem,
      hsl(189deg 18% 44%) 20rem,
      hsl(228deg 15% 34%) 30rem,
      hsl(228deg 15% 28%) 40rem,
      hsl(228deg 16% 23%) 50rem,
      hsl(229deg 17% 18%) 60rem
      );
      background-repeat: no-repeat;
    }

    body {
      /* Remove default gap to allow elements in <main> to overflow */
      --body-gap: 0;
    }

    .page {
      --page-padding-inline: 0;
    }
  </style>
</svelte:head>

<main class="stack">
  <section class="hero">
    <div class="box stack center">
      <h1>A modular SDK with endless possibilities</h1>
      <p>Wharf provides a fast and flexible way to build web3 projects on Antelope blockchains.</p>
      <a href="#" class="button">Get Started</a>
    </div>
  </section>

  <section class="kits | full-bleed">
    <div class="images">
      <div class="account kit">
        <img src={accountKit} alt="account kit icon" />
      </div>
      <div class="contract kit">
        <img src={contractKit} alt="contract kit icon" />
      </div>
      <div class="session kit">
        <img src={sessionKit} alt="session kit icon" />
      </div>
    </div>

    <div class="launch">
      <h2>Use Wharf to launch your next web3 project</h2>
      <p>
        Wharf’s modular and user-focused approach saves development time and effort, helping to turn
        your ideas into reality. Whether you want to create a wallet, mint NFTs, design a DeFi
        protocol, or build something entirely new: the days of clunky, limited blockchain SDKs are
        over!
      </p>
      <KitSwitcher />
    </div>
  </section>

  <section class="tools | switcher">
    <div class="frameworks card | box">
      <p class="visually-hidden">Supported Frameworks</p>
      <div class="cluster">
        <img src={reactIcon} alt="React" loading="lazy" />
        <img src={javascriptIcon} alt="Javascript" loading="lazy" />
        <img src={vueIcon} alt="Vue" loading="lazy" />
        <img src={nodeIcon} alt="NodeJS" loading="lazy" />
      </div>
    </div>
    <div class="box stack left">
      <h3>Get started with your favorite tools</h3>
      <p>
        Whether you prefer to code in X, Y, or Z, Wharf makes it easy to build apps on the
        blockchain. Starter Kits will soon be available in your favorite language, so you can hit
        the ground running. (If your preferred language is ABC, then you’re in luck! That’s what
        we’re building in, so you can access Wharf today.)
      </p>
      <a href="#" class="button">Coming Soon</a>
    </div>
  </section>

  <section class="contract | box stack center">
    <h4>Looking to build a smart contract?</h4>
    <p>Wharf can’t help you with that, but we’ve got some friends who can.</p>
    <a href="#" class="button">Go to the Antelope Developer Portal</a>
  </section>

  <section class="cards | switcher">
    <div class="card | box stack left ">
      <h3>UX your users will love.</h3>
      <p>
        Wharf is a modular SDK that makes it easy to build web3 projects on Antelope blockchains.
        Wharf is designed to be flexible, so you can use it to build anything you can imagine.
      </p>
      <a href="#" class="button">Learn More About the Session Kit</a>
    </div>
    <div class="card | box stack left ">
      <h3>Build on the most responsive blockchains.</h3>
      <p>
        The Antelope chains - including the EOS Network, Telos, WAX and UX Network - are behind some
        of the fastest, most secure, and user-friendly Web3 products and services, reliably
        fulfilling millions of daily transactions.
      </p>
      <a href="#" class="button">Learn More About Antelope</a>
    </div>
  </section>

  <section class="box stack center">
    <h2>Want to keep up with the latest Wharf developments?</h2>
    <p>Check out our blog for regular video updates and Technical Previews.</p>
    <a href="/blog" class="button">Go to Blog</a>
  </section>

  <section class="vision | full-bleed">
    <VisionBoard />
  </section>
</main>

<style>
  .switcher {
    --threshold: 768px;
  }

  main {
    /* Re-insert default gap via padding */
    padding-block-start: var(--space-xl-2xl);
    max-inline-size: revert;
    overflow: hidden;
    gap: var(--space-5xl-6xl);
  }

  :where(h1, h2, h3, p) {
    /* Nicer wrapping in Chrome */
    text-wrap: balance;
  }

  main > * {
    /* Allows individual sections to break out from the max-inline-size */
    max-inline-size: var(--max-inline-size);
    margin-inline: auto;
    width: calc(100% - var(--space-s) * 2);
  }

  .hero {
    padding-block-start: var(--space-6xl);
    padding-block-start: 15vh;
    padding-block-end: var(--space-4xl-5xl);
    padding-block-end: 15vh;
    display: grid;
    place-items: center;
    position: relative;
  }

  .hero::before {
    content: url("/src/lib/assets/images/group-2554.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  :global([data-theme="dark"]) .hero::before {
    content: url("/src/lib/assets/images/group-2554-dark.svg");
  }

  .hero .stack {
    gap: var(--space-l);
  }

  .hero h1 {
    font-size: var(--fs-6);
    line-height: 1.1;
    color: white;
    max-width: 20ch;
  }

  .hero p {
    font-size: var(--fs-1);
    font-weight: 500;
    color: white;
    max-width: 35ch;
  }

  .images {
    display: grid;
    grid-template-columns: 1fr auto auto auto 1fr;
    grid-template-rows: repeat(3, 1fr);
    column-gap: var(--space-l);
    position: relative;
    margin-bottom: var(--space-xl);
  }

  .images::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    top: calc(var(--space-m) * -1);
    background-image: url("/src/lib/assets/images/Frame-2591.webp");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .kit {
    display: grid;
    position: relative;
  }

  .account.kit {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    justify-items: end;
  }

  .contract.kit {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    justify-items: center;
  }

  .session.kit {
    grid-column: 4 / 5;
    grid-row: 2 / 4;
  }

  .center {
    align-items: center;
    text-align: center;
  }

  .left {
    align-items: flex-start;
  }

  .full-bleed {
    width: 100%;
  }

  .card {
    --padding: var(--space-l-xl);
    background-color: var(--theme-surface7);
    border-radius: var(--space-l);
  }

  div.launch {
    background: linear-gradient(180deg, transparent 0, var(--theme-surface7) 15rem);
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.launch p {
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-xl);
    margin-inline: var(--space-s);
    max-width: 65ch;
  }

  section.tools {
    --padding: var(--space-l);
    gap: var(--space-l);
    width: calc(100% - var(--space-s) * 2);
    margin-inline: auto;
  }

  .frameworks {
    color: white;
    background: url("/src/lib/assets/images/9adffb9d8509834788bd5a77f798bc5b.webp");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .frameworks.card {
    display: grid;
    place-content: center;
    text-align: center;
    gap: var(--space-m);
  }

  .frameworks .cluster {
    justify-content: center;
    max-width: 35ch;
  }

  .frameworks p {
    font-family: var(--ff-heading);
    font-weight: 600;
  }

  section.tools h3 {
    font-size: var(--fs-3);
  }

  section.contract h4 {
    font-size: var(--fs-3);
  }

  section.cards {
    position: relative;
  }

  section.cards::before {
    content: url("/src/lib/assets/images/squiggle-1.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    z-index: -1;
    opacity: 0.1;
  }

  :global([data-theme="dark"]) section.cards::before {
    opacity: 1;
  }

  @media (min-width: 768px) {
    main {
      padding-block-end: var(--space-6xl);
    }

    .hero h1 {
      font-size: var(--fs-8);
    }
    .hero p {
      font-size: var(--fs-2);
    }

    .images::before,
    .images::after {
      --kit-bg-source: url("/src/lib/assets/images/Frame-2591.webp");
      content: var(--kit-bg-source);
      position: absolute;
      inset: revert;
      background: none;
      top: 50%;
      left: 50%;
      z-index: -1;
    }

    .images::before {
      transform: translate(-140%, -30%);
    }

    .images::after {
      transform: translate(40%, -30%);
    }

    :global([data-theme="dark"]) .images::before,
    :global([data-theme="dark"]) .images::after {
      --kit-bg-source: url("/src/lib/assets/images/Frame-2650.webp");
    }

    .contract.kit::before {
      content: url("/src/lib/assets/images/Frame-2588.webp");
      position: absolute;
      top: -25%;
      z-index: -1;
    }

    :global([data-theme="dark"]) .contract.kit::before {
      content: url("/src/lib/assets/images/Frame-2588-dark.webp");
    }

    div.launch {
      border-radius: 0 0 var(--space-l) var(--space-l);
      padding-block-start: var(--space-2xl-3xl);
    }

    .full-bleed {
      border-radius: var(--space-l);
      width: calc(100% - var(--space-s) * 2);
    }

    section.tools {
      --padding: var(--space-xl-2xl);
    }
  }
</style>
