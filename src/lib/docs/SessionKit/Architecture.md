---
title: Architecture
description: The Session Kit is a software development kit focused on managing Antelope-based user sessions in web applications.
category: SessionKit
order: 1
---

# Architecture

One of Wharf's major components in the Session Kit, a software development kit focused on managing Antelope-based user sessions in web applications.

Its major responsibilities are:

- To allow users to sign in to web applications.
- To allow users to perform transactions with their preferred wallets.
- To allow the manual creation of sessions for use within backend scripts.

### [SessionKit](#)

The core component of Wharf's Session Kit is named after the SDK itself and offers itself as a customizable [factory class](https://refactoring.guru/design-patterns/factory-method). The [SessionKit](#) gives developers a method to generate [Session](#) instances. The configuration of each [Session](#) is based on decisions the end user makes from within an [UserInterface](#) (e.g. browser, console). The factory process is initiated when the [login](#) method is called by the user which optionally connects and authenticates against external wallets. The result of this call returns a [Session](#) object that is ready to use within an application to retrieve information about the account and perform transactions related to the application.

- Also offers [logout](#), [restore](#), [persistSession](#), [getSessions](#),

Read more in the [SessionKit](#) documentation.

### [Session](#)

Developers working with the Session Kit will primarily be working with individual [Session](#) objects throughout their apps, whether manually defined in an application or created by the [SessionKit](#) factory methods. A [Session](#) represents the connection between the application and account on an Antelope-based blockchain. These objects offer a `transact` method that allows actions to be performed by the account against a given blockchain.

- Can be serialized for use in SessionKit's restore
- Can return an APIClient configured for this session
- Access to all the data needed about this session to the app

Read more in the [Session](#) documentation.

### [WalletPlugin](#)

Each [Session](#) instance requires one [WalletPlugin](#) to facilitate communication between the user session and user wallet.

Read more in the [WalletPlugin](#) documentation.

### [UserInterface](#)

Each [Session](#) may optionally be associated to one [UserInterface](#) to allow interactivity during its processes.

Read more in the [UserInterface](#) documentation.

### [ABICache](#)

Read more in the [ABICache](#) documentation.

### [TransactPlugin](#)

Read more in the [TransactPlugin](#) documentation.

### [TransactContext](#)

- Provides all the data and methods required for a plugin.

Read more in the [TransactContext](#) documentation.

### [TransactHook](#)

Read more in the [TransactHook](#) documentation.

### [LoginPlugin](#)

Read more in the [SessionKit](#) documentation.

### [LoginHooks](#)

Read more in the [LoginHooks](#) documentation.

### [LoginContext](#)

Read more in the [LoginContext](#) documentation.

### [SessionStorage](#)

Read more in the [SessionStorage](#) documentation.
