<script lang="ts">
  import wharfLogo from "$lib/assets/logos/Wharf_logo_dark_vector_no_bg_svgfix.svg"
  import antelopeLogo from "$lib/assets/logos/antelope.svg"
</script>

<!-- Isometric Grid Background -->

<svelte:head>
  <style>
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: white;
      background: 
      linear-gradient(
            180deg,
            transparent 20rem,
            #b2f2e170 40rem,
            #f4faf4 60rem
          ) no-repeat,
        repeating-linear-gradient(
          150deg,
          #7BE7CE80,
          #7BE7CE80 1px, 
          transparent 1px,
          transparent 40px
        ),
        repeating-linear-gradient(
          30deg, 
          #7BE7CE80, 
          #7BE7CE80 1px, 
          transparent 1px, 
          transparent 40px
          ),
          repeating-linear-gradient(
            90deg, 
            #7BE7CE80, 
            #7BE7CE80 1px, 
          transparent 1px, 
          transparent 41px
          ),
          linear-gradient(
            180deg,
            #494e62 0%,
            #7be7ce 50rem,
            #b2f2e1 60rem,
            #f4faf4 70rem
          ) no-repeat;
      background-size:cover, 81px 46px, 81px 46px, 81px 46px, cover;
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --footer-background: hsl(228, 21%, 10%);
      background:       linear-gradient(180deg, 
       transparent 10rem,
      hsl(229deg 17% 18%) 60rem
      ) no-repeat,
      repeating-linear-gradient(
          150deg,
          #7BE7CE80,
          #7BE7CE80 1px,
          transparent 1px,
          transparent 40px
          ),
          repeating-linear-gradient(
            30deg, 
          #7BE7CE80, 
            #7BE7CE80 1px,
            transparent 1px, 
            transparent 40px
            ),
            repeating-linear-gradient(
              90deg, 
              #7BE7CE80, 
              #7BE7CE80 1px,
          transparent 1px, 
          transparent 41px
          ),
      linear-gradient(180deg, 
      hsl(166deg 69% 69%) 0%,
      hsl(172deg 31% 56%) 10rem,
      hsl(189deg 18% 44%) 20rem,
      hsl(228deg 15% 34%) 30rem,
      hsl(228deg 15% 28%) 40rem,
      hsl(228deg 16% 23%) 50rem,
      hsl(229deg 17% 18%) 60rem
      ) no-repeat;
      background-size:cover, 81px 46px, 81px 46px, 81px 46px, cover;

    }
  </style>
</svelte:head>

<main class="flow">
  <section class="hero place-center">
    <h1>Learn All About Wharf</h1>
  </section>

  <section class="wharf">
    <div class="switcher reverse">
      <div class="box stack">
        <h2>What is Wharf?</h2>
        <p>
          Wharf is a complete framework of intuitive and reliable developer tools for building
          web-based apps on Antelope blockchains. Its three modular kits (Session,
          Account, and Contract) make it easy to turn your idea into reality — whether you want to
          create a wallet, mint NFTs, design a DeFi protocol, or build something entirely new.
        </p>
      </div>
      <div class="logo | box place-center">
        <img src={wharfLogo} alt="wharf logo" width="125" height="140" />
      </div>
    </div>
  </section>

  <section class="antelope">
    <div class="switcher">
      <div class="logo | box place-center">
        <img src={antelopeLogo} alt="antelope logo" width="137" height="162" />
      </div>

      <div class="box stack">
        <h2>Built on Antelope, the most performant blockchain protocol.</h2>
        <p>
          Antelope is an open protocol that hosts multiple blockchains, including
          <a href="https://eosnetwork.com/">EOS</a>,
          <a href="https://www.telos.net/">Telos</a>,
          <a href="https://www.wax.io/">WAX</a>, and the
          <a href="https://uxnetwork.io/">UX Network</a>. It was designed from the ground up to be
          incredibly fast, with low costs for users and developers, and a low latency of
          transactions.
        </p>
        <p>
          The Antelope ecosystem offers developers a high-quality experience when creating new
          dApps, with funding and developer support available from multiple sources.
        </p>
      </div>
    </div>
  </section>

  <section class="know | flow">
    <div class="box stack align-center text-center">
      <h2>Get to know the team behind Wharf.</h2>
      <p>Wharf was built by Greymass, and funded by the Antelope Coalition.</p>
    </div>

    <div class="cards | switcher">
      <div class="card | box stack align-left">
        <h3>Greymass</h3>
        <p>
          Greymass is an expert team of researchers and developers who passionately believe that the
          internet (and the world) can be a better place, and that distributed ledger technology
          will help us get there. Their goal is to empower users with the tools they need to
          participate in decentralized communities.
        </p>
        <a href="https://www.greymass.com" class="button">Learn More</a>
      </div>
      <div class="card | box stack align-left">
        <h3>The Antelope Coalition</h3>
        <p>
          The Coalition is run by the ENF, and coordinates the efforts of all Antelope-based chains
          to manage shared resources, such as the Antelope protocol and community. Wharf was created
          in response to a Request for Proposal from the Coalition that outlined the need for SDKs
          for Antelope developers.
        </p>
        <a href="https://eosnetwork.com/antelope/" class="button">Learn More</a>
      </div>
    </div>
  </section>

  <section class="share">
    <div class="box stack align-center text-center">
      <h2>Share Wharf with the world!</h2>
      <p>Check out our brand guidelines for logos and other resources.</p>
      <a href="/brand" class="button">Go to Brand Guidelines</a>
    </div>
  </section>
</main>

<style>
  main {
    gap: var(--space-5xl-6xl);
  }

  .hero {
    padding-block: var(--space-4xl-5xl);
  }

  h1 {
    font-size: var(--fs-6);
    font-weight: 700;
    color: white;
    text-align: center;
  }

  :is(h1, h2, h3, p) {
    text-wrap: balance;
  }

  .switcher {
    --threshold: 768px;
    gap: var(--space-xl-2xl);
  }

  .logo.box {
    border-radius: var(--space-l);
    padding: var(--space-3xl);
  }

  .wharf .logo.box {
    background: url("$lib/assets/images/9adffb9d8509834788bd5a77f798bc5b.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .antelope .logo.box {
    background-color: black;
  }

  section.know {
    gap: var(--space-l-xl);
  }

  section.know::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100rem;
    left: 0;
    transform: translate(0, -30%) scaleX(-1);
    background-image: url("/src/lib/assets/images/squiggle-1.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: -1;
    opacity: 0.05;
  }

  :global([data-theme="dark"]) section.know::before {
    opacity: 0.2;
  }

  .card {
    background-color: var(--theme-surface7);
    padding: var(--space-xl);
    border-radius: var(--space-l);
  }
</style>
