<script lang="ts">
  let active = "session"
</script>

<div class="kitswitcher | box">
  <menu>
    <li class:active={active === "session"}>
      <button on:click={() => (active = "session")}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-radio"
            ><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle
              cx="12"
              cy="12"
              r="2" /><path
              d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>
        </span>
        <span>Session Kit</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </span>
      </button>
    </li>
    <li class:active={active === "account"}>
      <button on:click={() => (active = "account")}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-users"
            ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
              cx="9"
              cy="7"
              r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        </span>
        <span>Account Kit</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </span>
      </button>
    </li>
    <li class:active={active === "contract"}>
      <button on:click={() => (active = "contract")}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text"
            ><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path
              d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
        </span>
        <span>Contract Kit</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </span>
      </button>
    </li>
  </menu>
  <div class="kits">
    <div class="session kit | stack" class:active={active === "session"}>
      <h3>Session Kit</h3>
      <p>The Session Kit is designed to make signing transactions easy. With this kit, you can:</p>
      <ul>
        <li>
          Request that a user login to an application using their preferred wallet and establish a Session for transaction signing. 
        An out-of-the-box UI is also provided for this interaction.
        </li>
        <li>
          Manually establish a Session in your application code to sign transactions directly.
        </li>
      </ul>
      <a href="/kits/session" class="button">Learn More</a>
    </div>
    <div class="account kit | stack" class:active={active === "account"}>
      <h3>Account Kit</h3>
      <p>
        The Account Kit makes accessing account information and managing account resources easy. With this kit, you can:
      </p>
      <ul>
        <li>
          Create transactions for the management of accounts like updating permissions, obtaining
          resources, voting, and token transfers.
        </li>
        <li>
          Load account related data such as permissions, resource utilization, voting weight, and
          token balances.
        </li>
      </ul>
      <a href="/kits/account" class="button">Learn More</a>
    </div>
    <div class="contract kit | stack" class:active={active === "contract"}>
      <h3>Contract Kit</h3>
      <p>The Contract Kit makes accessing smart contract data and creating transactions easy. With this kit, you can:</p>
      <ul>
        <li>
          Interpret smart contract structures, retrieve natively typed data, and craft transactions
          based on the actions the contract defines.
        </li>
        <li>
          Perform code generation for any smart contract to optimize API call patterns and make your
          developer environment context-aware to reduce mistakes through autocompletion and type checking.
        </li>
      </ul>
      <a href="/kits/contract" class="button">Learn More</a>
    </div>
  </div>
</div>

<style>
  .kitswitcher {
    --padding: var(--space-s);
    border-radius: var(--space-l);
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
  }

  .kits {
    display: grid;
    grid-template-areas: "stack";
    padding: var(--space-s);
  }

  menu {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
  }

  menu li {
    border: 1px solid transparent;
    border-radius: var(--space-s);
    flex: 1;
  }

  menu > li button {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    align-items: center;
    width: 100%;
    padding-block: var(--space-xs);
    padding-inline: var(--space-s);
    cursor: pointer;
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 600;
    color: var(--theme-text-heading);
  }

  button > :nth-child(3) {
    display: none;
  }

  .kit {
    grid-area: stack;
    align-items: start;
    text-align: start;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .kit ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    /* color: var(--theme-text1); */
    list-style: none;
    padding: 0;
  }

  .kit li {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: var(--space-m);
  }

  .kit li::before {
    height: var(--space-l);
    content: "";
    -webkit-mask: url("/src/lib/assets/icons/check.svg") no-repeat 50% 0%;
    mask: url("/src/lib/assets/icons/check.svg") no-repeat 50% 0%;
    -webkit-mask-size: contain;
    mask-size: contain;
    background-color: var(--theme-text-heading);
  }

  li.active {
    border: 1px solid var(--theme-border1);
  }

  .kit.active {
    visibility: visible;
    opacity: 100;
  }

  h3 {
    font-size: var(--fs-3);
  }

  @media (min-width: 768px) {
    .kitswitcher {
      --padding: var(--space-l);
      flex-direction: row;
      gap: var(--space-2xl);
      width: 100%;
      width: fit-content;
    }

    .kits {
      flex: 1;
    }

    menu {
      flex-basis: 30ch;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--space-l);
    }

    menu > li {
      flex: 0;
    }

    menu > li button {
      font-size: var(--fs-1);
      flex-direction: row;
      gap: var(--space-s);
      padding-block: var(--space-m);
      padding-inline: var(--space-m);
    }

    button > :nth-child(3) {
      display: inline-flex;
      justify-content: flex-end;
      flex: 1;
    }

    .kit {
      max-inline-size: 75ch;
    }
  }
</style>
