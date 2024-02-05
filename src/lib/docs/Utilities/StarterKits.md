---
title: Starter Kits
description: Starter kits to jumpstart your development on Antelope blockchains with Wharfkit.
category: Utilities
published: true
requiresReview: true
order: 6
---

# Starter Kits Overview

The starter kits exist to facilitate the initial setup of developers wanting to use Wharfkit in their applications. The kits, including come with all the essential Wharfkit packages, as well as pre-configured `sessionKit` instances that can be used to quickly instantiate Wharf sessions. The available starter kits are: 

- `@wharfkit/starter`: Used to interact with any of the main Antelope blockchains.
- `@wharfkit/starter-eos`: Used to interact with the EOS blockchain.
- `@wharfkit/starter-telos`: Used to interact with the Telos blockchain.
- `@wharfkit/starter-wax`: Used to interact with the WAX blockchain.
- `@wharfkit/starter-jungle`: Used to interact with the Jungle Testnet.

## Installation

You can install any of these starter kits via npm or yarn. Here are the installation instructions for each one:

### General Starter Kit
```bash
yarn add @wharfkit/starter
# or
npm install --save @wharfkit/starter
```

### EOS-Specific Starter Kit
```bash
yarn add @wharfkit/starter-eos
# or
npm install --save @wharfkit/starter-eos
```

### Telos-Specific Starter Kit
```bash
yarn add @wharfkit/starter-telos
# or
npm install --save @wharfkit/starter-telos
```

### WAX-Specific Starter Kit
```bash
yarn add @wharfkit/starter-wax
# or
npm install --save @wharfkit/starter-wax
```

### Jungle Testnet Starter Kit
```bash
yarn add @wharfkit/starter-jungle
# or
npm install --save @wharfkit/starter-jungle
```

## Usage

Once installed, you can start importing and using the core Wharfkit modules that you need in your project. For example:

```ts
import {SessionKit, ContractKit, AccountKit} from '@wharfkit/starter';
// ... or any additional modules that are needed
```

### Pre-Configured `SessionKit` Instances

- **General Starter Kit**: The `@wharfkit/starter` includes a pre-configured `SessionKit` instance that can be generated quickly using the `createSessionKit` method. The `SessionKit` instance can then be used to transact with any of the main Antelope blockchains.

    ```ts
    import { createSessionKit } from '@wharfkit/starter';

    const sessionKit = await createSessionKit();

    await sessionKit.login(); // Send a login request that can be used to login to any of the main Antelope blockchains
    ```

- **Blockchain-Specific Kits**: Similarly, the blockchain-specific starter kits have pre-configured `SessionKit` instances that can be used to transact with the designated blockchain.

    ```ts
    import { createSessionKit } from '@wharfkit/starter-jungle';

    const sessionKit = await createSessionKit();

    await sessionKit.login(); // Send a login request specific to Jungle accounts
    ```

For detailed guidance on how to use the `sessionKit` instance, refer to the [SessionKit documentation](/docs/session-kit). This comprehensive resource provides insights and examples for effectively creating and utilizing Wharf session across different blockchain environments.

### Pre-Configured `ContractKit` instances

For blockchain-specific starter kits, you can also use the `createContractKit` method to generate a pre-configured `ContractKit` instance that are configured to work with the designated blockchain.

    ```ts
    import { createContractKit } from '@wharfkit/starter-jungle';

    const contractKit = await createContractKit();

    const contract = await contractKit.load('eosio.token');
    // loads the eosio.token contract that is deployed on Jungle 4 and instantiates a Contract instance
    ```

For detailed guidance on how to use the `ContractKit` instances, refer to the [ContractKit documentation](/docs/contract-kit).

### Pre-Configured `AccountKit` instances

For blockchain-specific starter kits, you can also use the `createAccountKit` method to generate a pre-configured `AccountKit` instance that is configured to work with the designated blockchain.

    ```ts
    import { createAccountKit } from '@wharfkit/starter-jungle';

    const accountKit = await createAccountKit();

    const account = await accountKit.load('myaccount.gm');
    // loads the myaccount.gm account that is deployed on Jungle 4 and instantiates an Account instance
    ```

For detailed guidance on how to use the `AccountKit` instances, refer to the [AccountKit documentation](/docs/account-kit).
