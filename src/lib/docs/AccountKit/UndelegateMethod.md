---
title:
description: Manage undelegation of EOS bandwidth resources for an account.
category: ContractKit
published: true
order: 8
---

# Undelegate

The undelegate method facilitates the undelegation of EOS bandwidth resources from a specific account. This method encompasses both CPU and NET bandwidth resources.

## Usage

The undelegate method is available on any account instance. Below is a basic example of how to use it:

```typescript
const action = testAccount.undelegate({cpu: '1.0000 EOS', net: '0.5000 EOS'});
// Initiates an undelegate action with the specified CPU and NET quantities.
```

You can optionally override the receiver of the undelegate action:

```typescript
const action = testAccount.undelegate({
    cpu: '1.0000 EOS',
    net: '0.5000 EOS',
    receiver: 'wharfkit1112'
});
```

## Arguments

The undelegate method accepts an object with the following properties:

- `cpu`: (optional) The quantity of CPU bandwidth to undelegate, specified as a string (e.g., '1.0000 EOS').
- `net`: (optional) The quantity of NET bandwidth to undelegate, specified as a string (e.g., '0.5000 EOS').
- `receiver`: (optional) The EOS account to which the undelegated bandwidth should be returned. If not provided, it defaults to the account initiating the undelegate action.

## Return Value

The undelegate method returns an [action](/docs/antelope/action) object containing details about the undelegation.
