---
title: ContractKit (Factory)
description: Class designed to streamline the process of creating Class instances.
category: ContractKit
published: true
order: 1
---

# ContractKit Class

`ContractKit` is a class designed to streamline the process of creating instances of the [`Contract`](/docs/contract-kit/contract) class. This class plays a central role in facilitating communication with on-chain contracts.

### Parameters

The `ContractKit` class accepts a single parameter:

- **ContractKitArgs**: An object containing the arguments required to instantiate the `ContractKit` class.

```typescript
const ContractKitArgs: ContractKitArgs = {
    client,
}
```

Where client is an [API client](/api/antelope/api-client) instance.

### Return Value

The `ContractKit` class returns an instance of the `ContractKit` class.

## **load()** method:

The `load` method is used to load a specific contract.

### Parameters:

- **contractName**: The name of the contract you want to load.

### Returns:

- **Contract**: An instance of the `Contract` class.

## Usage Example:

```typescript
contractKit = new ContractKit(ContractKitArgs);

const contract = await contractKit.load('eosio')
```
