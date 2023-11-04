---
title: Account Creation Plugin Template
description: A template for creating account creation plugins for the Wharf SessionKit.
category: Templates
published: true
order: 1
---

# Account Creation Plugin Template

The Account Creation Plugin Template is designed to provide developers with a foundational structure to craft their own [account creation plugins](/docs/session-kit/plugin-account-creation) for the [Wharf SessionKit](/docs/session-kit). 

## Usage

### Cloning the Repository

To use this template:

1. Open your terminal or command prompt.
2. Clone the repository by executing:
```bash
git clone https://github.com/wharfkit/account-creation-plugin-template.git account-creation-plugin-[name]
```
Replace `[name]` with the desired name for your plugin.

3. Navigate to the newly cloned directory:
```bash
cd account-creation-plugin-[name]
```

### Installing Dependencies

After cloning, ensure you have all the required dependencies by running:
```bash
npm install
```

### Adapting the Plugin

Once your plugin is set up, you can begin customizing it to suit your needs.

1. **Open the `index.ts` file** - This is where the core logic of the plugin resides.
2. **Set Configuration Properties** - The `config` object dictates the behavior of the plugin. For instance, if you want the session kit to display a chain selector before the plugin is used, set `requiresChainSelect` to `true`. You can also specify which blockchains are supported by the plugin through the `supportedChains` array.
3. **Modify Metadata** - The `metadata` object provides the UI with information about the plugin. You can specify the plugin's name, a short description, its logo, and a homepage URL.
4. **Define Unique Identifier and Name** - The `id` and `name` getters respectively offer a unique string identifier for the plugin and the name displayed in the UI.
5. **Implement Account Creation Logic** - The `create` method is where the magic happens. This asynchronous function must create the account and return a `Promise` that resolves to an account name and chain.
