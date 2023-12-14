---
title: Wharfkit Starter Kits
description: Starter kits to jumpstart your development on Antelope blockchains with Wharfkit.
category: Utilities
published: true
order: 2
---

# Wharfkit Starter Kits Overview

Wharfkit starter kits exist to facilitate the initial setup for developers working on projects across different Antelope blockchains. The kits, including `@wharfkit/starter`, `@wharfkit/starter-eos`, `@wharfkit/starter-telos`, `@wharfkit/starter-wax`, and `@wharfkit/starter-jungle`, come with all the essential Wharfkit packages, as well as pre-configured `sessionKit` instances for transacting on the respective Antelope blockchains.

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

Once installed, you can start importing and using the Wharfkit packages that you need in your project. For example:

```ts
import SessionKit from '@wharfkit/session';
import ContractKit from '@wharfkit/contract';
import AccountKit from '@wharfkit/account';
// ... or any additional packages that are needed
```

### Pre-Configured `sessionKit` Instances

- **General Starter Kit**: The `@wharfkit/starter` includes a pre-configured `sessionKit` instance that can be imported quickly and used to transact with any of the main Antelope blockchains.

    ```ts
    import { sessionKit } from '@wharfkit/starter';

    await sessionKit.login(); // Send a login request that can be used to login to any of the main Antelope blockchains
    ```

- **Blockchain-Specific Kits**: For example, with the Jungle Testnet Starter Kit:

    ```ts
    import { sessionKit } from '@wharfkit/starter-jungle';

    await sessionKit.login(); // Send a login request specific to Jungle accounts
    ```

### For More Information

For detailed guidance on how to use the `sessionKit` instance, refer to the [SessionKit documentation](/docs/session-kit). This comprehensive resource provides insights and examples for effectively utilizing `sessionKit` across different blockchain environments.