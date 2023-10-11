---
title: Resource (Method)
description: Retrieve a specific resource instance (CPU, NET, or RAM) from the account.
category: AccountKit
published: true
order: 15
---

# Resource (Method)

The resource method provides a structured way to access resource-related details for a specific resource type within an Antelope blockchain account. The method returns an instance of the Resource class.

## Usage

The resource method is available on any [account](/docs/account-kit/account) instance. Here's an example of how to use it:

```typescript
const cpuDetails = myAccount.resource('cpu');
```

## Arguments

- `resourceType`: An enumeration representing the type of resource. Supported types include 'cpu', 'net', and 'ram'.

## Return Value

The resource method returns a [resource](/docs/account-kit/resource) instance, detailing the specified resource's usage and capacity.


