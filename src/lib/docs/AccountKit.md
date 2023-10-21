---
title: AccountKit
description: The Account Kit is a Software Development Kit that provides a simple interface for managing Antelope-based blockchain accounts.
category: AccountKit
order: 3
published: true
slug: index
---

# Account Kit Overview

The Account Kit is an SDK focused on managing Antelope-based blockchain accounts.

It's primary responsibilities are:

- To facilitate the generation of account and resource management related actions.
- To provide a simple interface for retrieving account details.

This section of the documentation offers a technical overview of all of the components surfaced by the Account Kit. For step-by-step guides and tutorials, please visit the [Account Kit Guides](/guides/account-kit).

## Classes

The Account Kit exports different classes for use in various types of applications. This page provides a brief overview of the major components, each of which link to their own individual documentation.

### [AccountKit](/docs/account-kit/account-kit-factory)

The core component of Wharf's Account Kit is named after the SDK itself and offers itself as a customizable [factory class](https://refactoring.guru/design-patterns/factory-method). The [AccountKit](/docs/account-kit/account-kit) gives developers methods to create [Account](/docs/account-kit/account) instances.

### [Account](/docs/account-kit/account)

Developers working with the Account Kit will primarily be working with [Account](/docs/account-kit/account) instances, whether manually defined in an application or created by the [AccountKit](/docs/account-kit/account-kit) factory `load` method. An [Account](/docs/account-kit/account) instance serves as a representation of an Antelope-based blockchain account and offers multiple helper methods to interact with it.

### [Permission](/docs/account-kit/permission)

The [Permission](/docs/account-kit/permission) class is a wrapper for Antelope blockchain account permissions. It offers several helper methods to help retrieve and set permission data.
