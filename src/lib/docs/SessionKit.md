---
description: The Session Kit is a software development kit focused on managing Antelope-based user sessions in web applications.
category: SessionKit
order: 1
published: true
slug: index
---

# Session Kit - Overview

One of Wharf's major components in the Session Kit, a SDK focused on managing sessions linked to Antelope-based accounts.

Its major responsibilities are:

- To facilitate the signing of transactions.
- To allow users to "sign in" to web applications and prove their identity.
- To allow users to use their preferred wallets.

## Classes

The Session Kit exports many classes for use in various types of applications.

### [SessionKit](/docs/sessionkit/session-kit-factory)

The core component of Wharf's Session Kit is named after the SDK itself and offers itself as a customizable [factory class](https://refactoring.guru/design-patterns/factory-method). The [SessionKit](#) gives developers methods to generate [Session](#) instances.

The configuration of each [Session](#) it generates is based on decisions the end user makes from within an [UserInterface](#) (e.g. browser, console). The factory process is initiated when the [login](#) method is called by the user which optionally connects and authenticates against external wallets. The result of this call returns a [Session](#) object that is ready to use within an application to retrieve information about the account and perform transactions.

### [Session](#)

Developers working with the Session Kit will primarily be working with individual [Session](#) objects throughout their apps, whether manually defined in an application or created by the [SessionKit](#) factory methods. A [Session](#) represents the connection between the application and account on an Antelope-based blockchain. These objects offer a `transact` method that allows actions to be performed by the account against a given blockchain.

- Can be serialized for use in SessionKit's restore
- Can return an APIClient configured for this session
- Access to all the data needed about this session to the app

### [WalletPlugin](#)

Each [Session](#) instance requires one [WalletPlugin](#) to facilitate communication between the user session and user wallet.

### [UserInterface](#)

Each [Session](#) may optionally be associated to one [UserInterface](#) to allow interactivity during its processes.

### [ABICache](#)

### [TransactPlugin](#)

### [TransactContext](#)

- Provides all the data and methods required for a plugin.

### [TransactHook](#)

### [LoginPlugin](#)

### [LoginHooks](#)

### [LoginContext](#)

### [SessionStorage](#)
