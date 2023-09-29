---
title: Table
description: Represents a table within a blockchain contract and facilitates querying this table for data.
category: ContractKit
published: true
order: 4
---

# Table

The `Table` class acts as a primary interface to access and interact with tables within a smart contract. With its methods, you can fetch rows, scopes, or even metadata, making data retrieval streamlined and intuitive.

To initialize a `Table` instance from a `Contract`, you'll typically use the [Contract](/docs/contract-kit/contract) [table() method](/docs/contract-kit/table-method). Once the table instance is available, you can query its data using the provided methods.

### Methods:

Here's a quick overview of the available methods. Click on each method for a detailed explanation and usage:

1. [**query**](/docs/contract-kit/query) - Queries the table based on given parameters.
2. [**get**](/docs/contract-kit/get) - Retrieves a specific row from the table.
3. [**first**](/docs/contract-kit/first) - Fetches the initial set of rows from the table.
4. [**all**](/docs/contract-kit/all) - Retrieves all rows from the table.
5. [**scopes**](/docs/contract-kit/scopes) - Obtains the different scopes within the table.
