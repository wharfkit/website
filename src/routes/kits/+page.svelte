<script>
  import Card from "$lib/components/Card.svelte"
  import CardContainer from "$lib/components/CardContainer.svelte"
  import SessionKitIcon from "$lib/assets/icons/session-kit.svg"
  import ContractKitIcon from "$lib/assets/icons/contract-kit.svg"
  import AccountKitIcon from "$lib/assets/icons/account-kit.svg"
  import frame2518 from "$lib/assets/images/frame-2518.webp"
  import lines from "$lib/assets/patterns/2412.svg"

  const cardData = [
    {
      number: 1,
      title: "Session kit",
      icon: SessionKitIcon,
      background: "var(--reef-turquoise)",
      list: [
        "For managing user sessions",
        "Give your users the opportunity to interact with the blockchain",
        "Use cases: sending tokens, sending NFTs, voting for producers, etc.",
        "Out-of-the-box UI and localization",
      ],
    },
    {
      number: 2,
      title: "Account kit",
      icon: AccountKitIcon,
      background: "var(--wharf-blue)",
      list: [
        "For interacting with Antelope accounts (you may know these as “addresses” on other chains)",
        "Use cases: seeing balances, managing resources, staking tokens, changing keys, etc.",
        "Great for wallets and block explorers",
      ],
    },
    {
      number: 3,
      title: "Contract kit",
      icon: ContractKitIcon,
      background: "var(--seafoam-mint)",
      list: [
        "For in-app actions and accessing data from smart contracts",
        "Use cases: creating or transferring an NFT, game interactions, actions that don't need to be recorded on-chain, etc.",
        "Great for games",
      ],
    },
  ]
</script>

<svelte:head>
  <style>
    body {
      background: var(--page-background-gradient);
      background-size: var(--page-background-size);
      background-position: var(--page-background-position);
      background-repeat: var(--page-background-repeat);
      /* --header-background: white; */
    }
  </style>
</svelte:head>

<img src={lines} alt="" class="lines one" />
<img src={lines} alt="" class="lines two" />

<main class="stack">
  <div class="hero | center stack">
    <h1>3 Kits - A world of options</h1>
    <p>Everything you need for web3 app development.</p>
  </div>

  <div class="cards">
    <CardContainer>
      {#each cardData as card}
        <Card
          title={card.title}
          number={card.number}
          list={card.list}
          icon={card.icon}
          background={card.background} />
      {/each}
    </CardContainer>
  </div>

  <div class="documentation | center stack">
    <h2>Not sure which kit(s) you need?</h2>
    <p>Check out our documentation for more in-depth information on each kit.</p>
    <a class="button" href="#">Go To Documentation</a>
  </div>

  <div class="tutorial | switcher">
    <div class="tutorial | stack">
      <h2>See how all the kits fit together.</h2>
      <p>
        In our tutorial, you’ll get to use the Session, Account, and Contract kits to create a
        functioning web app. From there, you can use your knowledge to combine or isolate different
        elements from each kit to create an app of your own.
      </p>
      <a href="#" class="button">Start Tutorial</a>
    </div>
    <img src={frame2518} alt="" />
  </div>

  <div class="overview | center stack">
    <h2>Overview</h2>
    <p>3 kits - Working in web3 harmony</p>
  </div>

  <div class="overview | switcher">
    <div class="card one">
      <h3>Modular SDKs for the future.</h3>
    </div>
    <div class="stack">
      <div class="card two">
        <h3>Combine the kits in any way you can imagine.</h3>
      </div>
      <div class="card three">
        <h3>Launch your project from a solid foundation.</h3>
        <p>
          Wharf's modular design was created by expert blockchain developers in order to make sure
          that no one ever has to reinvent the wheel. The Session, Contract, and Account kits can be
          used separately or in an endless number of combinations, and can also be customized
          through the use of plugins.
        </p>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  .lines {
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;

    &.one {
    }

    &.two {
      transform: translateY(8%);
    }
  }

  main {
    --gap: var(--space-4xl);
    margin-bottom: var(--space-6xl);
  }

  .center {
    text-align: center;
    max-inline-size: none;
    justify-content: center;
    align-items: center;
  }

  .hero {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-3xl);
    font-family: var(--ff-heading);
    gap: var(--space-xs);
  }

  .hero h1 {
    font-size: var(--fs-7);
    font-weight: 600;
    color: white;
    line-height: 1.2;
  }

  .hero p {
    font-size: var(--fs-2);
    font-weight: 600;
    color: white;
  }

  p {
    font-size: var(--fs-0);
    color: var(--color-neutral-700);
  }

  h2 {
    color: black;
    font-size: var(--fs-4);
    font-weight: 600;
    font-family: var(--ff-heading);
  }

  .documentation {
    gap: var(--space-s);
  }

  .tutorial.switcher {
    flex-wrap: wrap-reverse;
    gap: var(--space-2xl);
    align-items: center;

    & img {
      border-radius: var(--space-l);
      object-fit: cover;
    }
  }

  .tutorial.stack {
    gap: var(--space-l);
    align-items: flex-start;
    padding-inline: var(--space-m-4xl);
  }

  .overview {
    --gap: var(--space-m);

    & h2 {
      font-size: var(--fs-1);
      color: var(--wharf-blue);
    }
    & p {
      font-size: var(--fs-5);
      color: black;
      font-family: var(--ff-heading);
      font-weight: 600;
      line-height: 1.2;
    }

    &.switcher {
      gap: var(--space-m);
      --threshold: 960px;

      h3 {
        font-size: var(--fs-3);
        font-weight: 600;
        color: white;
      }

      p {
        font-size: var(--fs-0);
        color: var(--color-neutral-300);
      }

      & .card {
        padding-block: var(--space-xl);
        padding-inline: var(--space-2xl-3xl);
        border-radius: var(--space-l);
        display: flex;
        flex-direction: column;
        gap: var(--space-m);
      }

      & .one {
        text-align: center;
        background-color: var(--wharf-blue);
      }

      & .two {
        background-color: var(--color-primary-800);
      }

      & .three {
        background-color: var(--color-primary-900);
      }
    }
  }
</style>
