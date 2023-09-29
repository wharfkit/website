---
title: Contract
description: The central interface within the ContractKit for directly interacting and managing Antelope chain contracts, offering methods for data retrieval and action generation.
category: ContractKit
published: true
order: 2
---

# Contract

The `Contract` class in ContractKit provides an essential interface for those wanting to interact directly with Antelope chain contracts. It offers a myriad of methods that provide functionality ranging from retrieving contract data to generating contract actions that can be executed using the [SessionKit](/docs/session-kit/transact).

## **Methods Overview:**

1. **tableNames()** 
    - Type: Getter Method
    - What it does: Returns an array of the table names associated with the given contract.

2. [**table()**](/docs/contract-kit/table)
    - Type: Method
    - What it does: Helps in retrieving a specific table from the contract.

3. **actionNames()**
    - Type: Getter Method
    - What it does: Provides an array of the names of actions associated with the contract.

4. [**action()**](/docs/contract-kit/action-method)
    - Type: Method
    - What it does: Generates a specific action that you can later pass to the `SessionKit` to have it executed on the chain.

## **Usage:**

To make use of this class, you can use the [ContractKit](/docs/contract-kit/contract-kit) load() method.
