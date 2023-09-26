---
title: ContractKit (Factory)
description: Class designed to streamline the process of creating Class instances.
category: ContractKit
published: true
order: 1
---

# ContractKit Class

`ContractKit` is a class designed to streamline the process of creating instances of the [`Contract`](/docs/contract-kit/contract) class. This class plays a central role in facilitating communication with on-chain contracts.

## **Setting Up ContractKit**

To begin, you'd need to prepare the arguments required to instantiate the `ContractKit` class. As an example:

```typescript
const mockContractKitArgs: ContractKitArgs = {
    client,
}
```

Where client is your [API client](/api/antelope/api-client) instance.

##Usage Example

```typescript
contractKit = new ContractKit(mockContractKitArgs);

const contract = contractKit.load('eosio')
```
