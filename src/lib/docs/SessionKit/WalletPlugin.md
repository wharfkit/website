---
title: "Plugin: Wallet"
description: "Integrate external wallet software with the Session Kit to allow users to both log in and sign transactions."
category: SessionKit
published: true
order: 999
requiresReview: true
---

# WalletPlugin

The `WalletPlugin` is a type of plugin for the [Session Kit](/docs/sessionkit) that enables the use of external authenticators and wallets for both authentication and transaction signing purposes.

## Usage

For application developers that wish to include a `WalletPlugin` in their application, the plugin code needs to be included in the project and then passed to either the [SessionKit](/docs/sessionkit/session-kit-factory) factory or included as as an argument on a new [Session](/docs/sessionkit/session).

### SessionKit

One or more `WalletPlugin` instances need to be passed as part of the [SessionKit](/docs/sessionkit/session-kit-factory) arguments during instantiation to provide users who perform the [Login](/docs/sessionkit/login) method a choice in how to authenticate.

```ts
const sessionKit = new SessionKit({
  // ...arguments
  walletPlugins: [new WalletPluginAnchor()],
})
```

If only one `WalletPlugin` is provided, the [SessionKit](/docs/sessionkit/session-kit-factory) will default to using it and the user will not be prompted to choose a specific wallet.

### Session

A single `WalletPlugin` instance must also be passed as an argument to a [Session](/docs/sessionkit/session) during manual creation.

```ts
const session = new Session({
  // ...arguments
  walletPlugin: new WalletPluginPrivateKey(
    "5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s"
  ),
})
```

## Development

The `WalletPlugin` interface and `AbstractWalletPlugin` abstract class are tools for developers to integrate external authenticators and wallets for use in the [SessionKit](/docs/sessionkit/session-kit-factory).

The [wallet-plugin-template](https://github.com/wharfkit/wallet-plugin-template) is available on Github to help developers get started.

### Class

When building a `WalletPlugin`, it is recommended that a class is created which extends the `AbstractWalletPlugin`. This will cause the new plugin to inherit some base helper functions as well as ensure the requirements of the `WalletPlugin` interface are met.

```ts
class WalletPluginExample extends AbstractWalletPlugin {}
```

### Config

The new plugin should include a property called `config` that outlines the capabilities and requirements of the external application.

```ts
class WalletPluginExample extends AbstractWalletPlugin {
  readonly config = {
    requiresChainSelect: true,
    requiresPermissionSelect: false,
    supportedChains: [
      "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
    ],
  }
}
```

This configuration is read by the [SessionKit](/docs/sessionkit/session-kit-factory) to determine how to prompt the end user during the [Login](/docs/sessionkit/login) call.

- `requiresChainSelect`: Determines if the Session Kit needs to ask the end user which blockchain to authenticate against. Set this value to `false` if the wallet itself will offer the opportunity to select a blockchain.
- `requiresPermissionSelect`: Determines if the Session Kit needs to ask the end user which account and permission it will authenticate against. Set this value to `false` if the wallet will allow the user to select an account during authentication.
- `supportedChains`: This value is optional and can be set to a list of blockchain IDs that the wallet supports. Only define this if the wallet is specific to one or more specific blockchains.

### Metadata

The new plugin should also specify a property called `metadata` that describes the plugin and the application it integrates with.

```ts
class WalletPluginExample extends AbstractWalletPlugin {
  readonly metadata = {
    name: "Example Wallet Plugin",
    description: "This is a test wallet plugin",
    logo: "[[base_64_encoded_image]]",
    /* Alternative syntax for logo for light/dark mode
    logo: {
        light: "[[base_64_encoded_image]]",
        dark: "[[base_64_encoded_image]]",
    },
    */
    homepage: "https://someplace.com",
    download: "https://someplace.com/download",
  }
}
```

This information will be used to present users with information about the application this plugin integrates with.

- `name`: A human readable string with the application name (e.g. "Anchor Wallet")
- `description`: A human readable description of the application
- `logo`: A base64 encoded image (or set of images) of the logo for this application ([example](https://github.com/wharfkit/wallet-plugin-anchor/blob/2b478b806b6da8ba845884bcb2e571611e4ad1f6/src/index.ts#L83-L86))
- `homepage`: A complete URL pointing to the homepage for the application
- `download`: A complete URL pointing to a webpage with download instructions

### Unique ID

Each plugin will also need a unique identifier that is used internally by the [SessionKit](/docs/sessionkit/session-kit-factory) for serialization and retrieval.

```ts
class WalletPluginExample extends AbstractWalletPlugin {
  get id() {
    return "wallet-plugin-example"
  }
}
```

This is accomplished by specifying a `get id()` method on the class which returns a verbose string in an effort to make it unique.

### Method: Login

In order for the `WalletPlugin` to authenticate users, it will need to implement the `login` method. This method accepts a [LoginContext](/docs/sessionkit/login-context) as its only parameter, which provides the plugin and wallet with potential information about the request.

**Note**: If during the [Login](/docs/sessionkit/login) process the `WalletPlugin` needs to interact with the end user, the [UserInterface](/docs/sessionkit/plugin-user-interface) instance provided on the [LoginContext](/docs/sessionkit/login-context) can be used to prompt the user.

The `WalletPlugin` will now need to communicate with the external application in order to formulate a response. The goal is for the `login` method to return an object that matches the [WalletPluginLoginResponse](https://wharfkit.github.io/session/interfaces/WalletPluginLoginResponse.html) interface that contains:

- `chain`: A typed [Checksum256](#) indicating the blockchain ID the user is logging in with.
- `permissionLevel`: A typed [PermissionLevel](#) indicating which account and permission the user has selected.

Once that information is retrieved, it can then be returned to the Session Kit to complete the process.

A complete example of what this method may look like is outlined below.

```ts
class WalletPluginExample extends AbstractWalletPlugin {
  async login(context) {
    // Communicate with external application
    const response = await externalWallet.login()

    // Get the blockchain ID from the response
    const chainId = response.chain // e.g. "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d"

    // Get the permission level from the response
    const permission = response.perm // e.g. "wharfkit1111@test"

    // Return this information to the Session Kit
    return {
      chain: Checksum256.from(chainId),
      permissionLevel: PermissionLevel.from(permission),
    }
  }
}
```

If the `WalletPlugin` does not support any form of [Login](/docs/sessionkit/login) for end users and only supports signing transactions, simply throw an error in this method call.

```ts
class WalletPluginExample extends AbstractWalletPlugin {
  async login() {
    throw new Error("This plugin does not support the Login method.")
  }
}
```

### Method: Sign

One of the primary purposes of a `WalletPlugin` is to facilitate the signing of transactions. To do this it must implement the `sign` method which accepts two parameters, a [ResolvedSigningRequest](#) and a [TransactContext](/docs/sessionkit/transact-context).

**Note**: If during the [Transact](/docs/sessionkit/transact) process the `WalletPlugin` needs to interact with the end user, the [UserInterface](/docs/sessionkit/plugin-user-interface) instance provided on the [TransactContext](/docs/sessionkit/transact-context) can be used to prompt the user.

The `WalletPlugin` will then need to communicate with the external application, relaying the transaction, in order to retrieve a signature. This process should return an object that matches the [WalletPluginSignResponse](https://wharfkit.github.io/session/interfaces/WalletPluginSignResponse.html) interface that contains:

- `signatures`: An array containing one or more [Signature](#) typed objects with signatures authorizing the transaction.
- `resolved`: An optional [ResolvedSigningRequest](#) in the event the transaction was modified by the wallet.

**Note**: If the `WalletPlugin` or external application modifies the transaction and returns it, it may invalidate any signatures previously created by the [TransactPlugin](/docs/sessionkit/plugin-transact) calls that were originally made. We would recommend that the wallet should not

Once completed this information can be returned to the Session Kit to complete the transaction.

A complete example of what this method may look like is outlined below.

```ts
class WalletPluginExample extends AbstractWalletPlugin {
  async sign(resolved, context) {
    // Retrieve the transaction from the resolved signing request
    const transaction = resolved.transaction

    // Communicate with external application
    const response = await externalWallet.sign(transaction)

    // Get the signature from the wallet response
    const sig = Signature.from(response.signature)
    // e.g. "SIG_K1_KfqBXGdSRnVgZbAXyL9hEYbAvrZjcaxUCenD7Z3aX6yzf6MEyc4Cy3ywToD4j3SKkzSg7L1uvRUirEPHwAwrbg5c9z27Z3"

    // Return the signatures from the external application
    return {
      signatures: [sig],
    }
  }
}
```
