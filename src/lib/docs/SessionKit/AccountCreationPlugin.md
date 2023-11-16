---
title: "Plugin: Account Creation"
description: "Extend the capability of the Session Kit by allowing users to create antelope accounts from within your application."
category: SessionKit
published: true
requiresReview: true
---

# AccountCreationPlugin

The `AccountCreationPlugin` is a type of plugin for the [Session Kit](/docs/session-kit) that allows users to create antelope accounts from within applications using WharfKit. These plugins can be developed either for a specific application's needs, or built generically and released publicly as packages any application can use.


## Usage

For application developers that wish to use a `AccountCreationPlugin` in their application, the plugin code needs to be included in the project and then passed to the [SessionKit](/docs/session-kit/session-kit-factory) factory.

```ts
import { AccountCreationPluginAnchor } from "@wharfkit/account-creation-plugin-anchor"

const sessionKit = new SessionKit(
  {
    // ...arguments
  },
  {
    accountCreationPlugins: [new AccountCreationPluginAnchor()],
  }
)
```

### Account Creation

Once the account creation plugin has been added to the `SessionKit` factory, the `createAccount` method can be called to trigger the account creation process. Here is a basic example of how to use the `createAccount` method.

```ts
const newAccount = await sessionKit.createAccount()
```

In order for the account to be created on a specific chain, the `chain` parameter can be passed:

```ts
import { Chains } from "@wharfkit/common"

const newAccount = await sessionKit.createAccount({
  chain: Chains.EOS,
})
```

To specify an account name to be used during the account creation, the `accountName` parameter can be used:

```ts
const newAccount = await sessionKit.createAccount({
  accountName: "myaccount.gm",
})
```

In a situation where multiple plugins are being used, the `pluginId` parameter can be used to specify which plugin should be used for the account creation.

```ts
const newAccount = await sessionKit.createAccount({
  pluginId: "account-creation-plugin-anchor",
})
```

## Development

Developers can create their own `AccountCreationPlugin` using the provided interface and abstract class. These tools allow for the use of any Antelope account creation service within Wharf. The [account-creation-plugin-template](https://github.com/wharfkit/account-creation-plugin-template) is available on Github to help developers get started.

### Structure

When building an `AccountCreationPlugin`, the shape of the plugin can either be a Javascript class or a simple object that conforms to the following interface:

```ts
interface AccountCreationPlugin {
  /** Unique ID for the plugin */
  get id(): string

  /** Display name for the account creation service */
  get name(): string

  /** Configuration parameters */
  config: AccountCreationPluginConfig

  /** Metadata about the account creation service */
  metadata: AccountCreationPluginMetadata

  /** Function to trigger the account creation process */
  create: (context: AccountCreationContext) => Promise<CreateAccountResponse>
}
```

### Unique ID

Each `AccountCreationPlugin` requires a unique identifier, used by the [SessionKit](/docs/session-kit/session-kit-factory) for serialization and distinguishing between different plugins.

```ts
class AccountCreationPluginExample extends AbstractAccountCreationPlugin {
  get id() {
    return "account-creation-plugin-example"
  }
}
```

This unique identifier is provided through a `get id()` method on the class, which returns a string. It's important to make this string descriptive and unique to avoid conflicts with other plugins and ensure correct identification within the Session Kit framework.

### Name

The `AccountCreationPlugin` should also include a `name` property that provides a user-friendly name for the account creation service.

```ts
class AccountCreationPluginExample extends AbstractAccountCreationPlugin {
  get name() {
    return "Account Creation Plugin Example"
  }
}
```

This name is used by the [SessionKit](/docs/session-kit) to display the account creation service to the end user.

### Config

The `AccountCreationPlugin` should include a `config` property that outlines its capabilities and requirements for integration with external applications.

```ts
class AccountCreationPluginExample extends AbstractAccountCreationPlugin {
  readonly config = {
    requiresChainSelect: true,
    supportedChains: [
      "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
      // Add additional supported chain IDs here
    ],
  }
}
```

This configuration is utilized by the [SessionKit](/docs/session-kit) to guide interactions with the end user during the account creation process.

The configuration object can include the following properties:

- `requiresChainSelect`: Indicates if the Session Kit should prompt the user to choose a blockchain for account creation. Set to `false` if the plugin itself facilitates blockchain selection.
- `supportedChains`: Optionally, a list of blockchain IDs that the plugin supports for account creation can be specified if the plugin is tailored to specific blockchains.

### Metadata

The plugin should also define a `metadata` property to describe itself and the service it integrates with.

```ts
class AccountCreationPluginExample extends AbstractAccountCreationPlugin {
  readonly metadata = {
    name: "Example Account Creation Plugin",
    description: "A plugin for streamlined blockchain account creation",
    logo: "[[base_64_encoded_image]]",
    /* Alternative syntax for logo to support different themes:
    logo: {
        light: "[[base_64_encoded_image]]",
        dark: "[[base_64_encoded_image]]",
    },
    */
    homepage: "https://example-creation-service.com",
  }
}
```

This metadata is important for providing users with information about the application integrated with this plugin:

- `name`: The user-friendly name of the application (e.g., "EasyAccount Creator").
- `description`: A brief description of the application.
- `logo`: A base64 encoded image (or images for different themes) of the application's logo.
- `homepage`: The URL of the application's homepage.

### Method: Create

The `AccountCreationPlugin` needs to implement the `create` method to facilitate blockchain account creation. This method should accept a `CreateAccountContext` as its parameter, providing the plugin with essential information about the account creation request.

The plugin must communicate with the external service or application to create the account and then return an object that conforms to the `CreateAccountResponse` interface.

Below is an example of what the `create` method might look like in practice.

```ts
class AccountCreationPluginExample extends AbstractAccountCreationPlugin {
  async create(context) {
    // Interact with the external service for account creation
    const accountCreationResult = await externalAccountService.createAccount()

    // Extract the blockchain ID and account name from the result
    const chainId = accountCreationResult.chainId // e.g. "EOS Mainnet ID"
    const accountName = accountCreationResult.accountName // e.g. "newuser1234"

    // Return this information to the Session Kit
    return {
      chain: chainId,
      accountName: accountName,
    }
  }
}
```

**Note**: If the `AccountCreationPlugin` requires user interaction during the account creation process, it can utilize the [UserInterface](/docs/session-kit/plugin-user-interface) instance provided in the `CreateAccountContext` to prompt the user.

### Object Structure

If you prefer to use a simple object instead of a class, the `AccountCreationPlugin` can be structured as follows:

```ts
// Object conforming to the AccountCreationPlugin interface
const customPlugin = {
  id: "custom-account-plugin",
  name: "Custom Account Creator",
  async create(context) {
    // Logic for creating an account
    return {
      // Account creation response
    }
  },
}

const sessionKit = new SessionKit({}, {
  accountCreationPlugins: [customPlugin],
})
```
