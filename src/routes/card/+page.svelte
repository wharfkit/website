<script lang="ts">
  import Card from "$lib/components/Card.svelte"
  import CardContainer from "$lib/components/CardContainer.svelte"
  import SessionKitIcon from "$lib/assets/icons/session-kit.svg"
  import ContractKitIcon from "$lib/assets/icons/contract-kit.svg"
  import AccountKitIcon from "$lib/assets/icons/account-kit.svg"

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

<main>
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
</main>

<style>
  main {
    background: linear-gradient(0deg, var(--reef-turquoise) 0%, var(--wharf-blue) 100%);
    padding: 3rem;
    min-height: 100vh;
  }
</style>
