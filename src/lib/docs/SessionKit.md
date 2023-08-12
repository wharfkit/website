---
title: Session Kit Overview
description: The Session Kit is a software development kit focused on managing Antelope-based user sessions in web applications.
category: SessionKit
order: 1
published: true
slug: index
---

# Session Kit Overview

One of Wharf's major components in the Session Kit, a SDK focused on managing sessions linked to Antelope-based accounts.

Its primary responsibilities are:

- To facilitate the signing of transactions.
- To allow users to "sign in" to web applications.
- To integrate with Antelope-based wallets.

This section of the documentation offers a technical overview of all of the components surfaced by the Session Kit. For step by step guides and tutorials, please visit the [Session Kit Guides](/guides/sessionkit)

## Classes

The Session Kit exports many classes for use in various types of applications. This page provides a brief overview of the major components each which link to their own individual documentation.

### [SessionKit](/docs/sessionkit/session-kit-factory)

The core component of Wharf's Session Kit is named after the SDK itself and offers itself as a customizable [factory class](https://refactoring.guru/design-patterns/factory-method). The [SessionKit](/docs/sessionkit/session-kit-factory) gives developers methods to generate [Session](/docs/sessionkit/session) instances in **web applications**.

The configuration of each [Session](/docs/sessionkit/session) it generates is based on decisions an end user makes from within an [UserInterface](/docs/sessionkit/plugin-user-interface) (e.g. web, console). The factory process is initiated when the [login](/docs/sessionkit/login) method is called by the user which optionally connects and authenticates against external wallets. The result of this call returns a [LoginResult](/docs/sessionkit/login-result) containing a [Session](/docs/sessionkit/session) object that is ready to use within an application to retrieve information about the account and perform transactions.

For any web application that allows users to login with their own wallet, this is a good starting point.

### [Session](/docs/sessionkit/session)

Developers working with the Session Kit will primarily be working with individual [Session](/docs/sessionkit/session) objects throughout their apps, whether manually defined in an application or created by the [SessionKit](/docs/sessionkit/session-kit-factory) factory methods. A [Session](/docs/sessionkit/session) represents the connection between the application and account on an Antelope-based blockchain. Each session offers a [Transact](/docs/sessionkit/transact) method that allows actions to be performed by the account against a given blockchain. The result of this call returns a [TransactResult](/docs/sessionkit/transact-result) containing the result from the [APIClient](/docs/antelope/api-client), details of the fully crafted [Transaction](/docs/antelope/name), and any changes [TransactPlugins](/docs/sessionkit/plugin-transact) may have made.

For any Node.js application that internally manages account details, this is a good starting point.

## Interfaces

The Session Kit also exports many interfaces for developers to extend and customize the functionality that the kit has to offer. These interfaces are used throughout the plugin architecture to ensure data standards are followed and to give developers a clear understanding of how various components communicate with one another.

### [WalletPlugin](/docs/sessionkit/plugin-wallet)

Each [WalletPlugin](/docs/sessionkit/plugin-wallet) instance provides the required code to facilitate the [login](/docs/sessionkit/login) method of the [SessionKit](/docs/sessionkit/session-kit-factory) to create a new session, as well as providing the means for a [Session](/docs/sessionkit/session) to perform a transaction using the [Transact](/docs/sessionkit/transact) method. Every [Session](/docs/sessionkit/session) instance as well as the [SessionKit](/docs/sessionkit/session-kit-factory) itself requires at least one [WalletPlugin](/docs/sessionkit/plugin-wallet). This interface provides the structure required these methods to operate either locally performing this logic in-app or through direct communication with an external wallet application.

### [LoginPlugin](/docs/sessionkit/plugin-login)

One or more [LoginPlugin](/docs/sessionkit/plugin-login) instances can be passed to the [SessionKit](/docs/sessionkit/session-kit-factory) to add new logic during the [login](/docs/sessionkit/login) call. The interface provides the expected structure of a plugin to allow it to register `beforeLogin` and `afterLogin` hooks that allow execution of custom code at specific points of the [login](/docs/sessionkit/login) process. This can be useful if an application requires additional steps to be performed for user verification or to pass results to 3rd party services for authentication.

### [TransactPlugin](/docs/sessionkit/plugin-transact)

One or more [TransactPlugin](/docs/sessionkit/plugin-transact) instances can be passed to either individual [Session](/docs/sessionkit/session) instances or the [SessionKit](/docs/sessionkit/session-kit-factory) in order to add new logic during the [Transact](/docs/sessionkit/transact) call. The interface provides the expected structure of a plugin to allow it to register `beforeSign`, `afterSign`, and `afterBroadcast` hooks that allow execution of custom code at specific points of the [Transact](/docs/sessionkit/transact) process. These plugins can be useful to perform custom logic when performing transactions or after they have executed.

### [UserInterface](/docs/sessionkit/plugin-user-interface)

During instantiation of the [SessionKit](/docs/sessionkit/session-kit-factory), one [UserInterface](/docs/sessionkit/plugin-user-interface) instance is required to provide interactivity to the end user during the [login](/docs/sessionkit/login) process. Optionally the [UserInterface](/docs/sessionkit/plugin-user-interface) can also provide interactivity during the [Transact](/docs/sessionkit/transact) call, either directly or through the various types of plugins.

## Utilities

### [SessionStorage](/docs/sessionkit/session-storage)

The [SessionKit](/docs/sessionkit/session-kit-factory) utilizes the [SessionStorage](/docs/sessionkit/session-storage) interface in order to persist [Session](/docs/sessionkit/session) instances between page loads. The [SessionKit](/docs/sessionkit/session-kit-factory) does this by default using the [BrowserLocalStorage](/docs/sessionkit/browser-local-storage) implementation of the interface, which can be overridden during the instantiation of the [SessionKit](/docs/sessionkit/session-kit-factory) to provide custom means of storage.
