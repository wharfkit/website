---
title: Wallet Plugin Template
description: A template to streamline the creation of wallet plugins compatible with the Wharf SessionKit.
category: Templates
published: true
order: 2
---

# Wallet Plugin Template

The Wallet Plugin Template is designed to provide developers with a foundational structure to craft their own [wallet plugins](/docs/session-kit/plugin-wallet) for the [Wharf SessionKit](/docs/session-kit).

## Usage

### Cloning the Repository

To use this template:

1. Launch your terminal or command interface.
2. Clone the template repository with:
```bash
git clone https://github.com/wharfkit/wallet-plugin-template.git wallet-plugin-[name]
```
Replace `[name]` with the desired name for your plugin.

3. Navigate to the newly cloned directory:
```bash
cd wallet-plugin-[name]
```

### Installing Dependencies

After cloning, ensure you have all the required dependencies by running:
```bash
npm install
```

### Adapting the Plugin

Once your plugin is set up, you can begin customizing it to suit your needs.

1. **Open the `index.ts` file** - This is where the core logic of the plugin resides.
2. **Adapt Configuration Attributes** - The `config` entity outlines the plugin's functionality. For instance, if you want the user interface to present a chain selector, set `requiresChainSelect` to `true` and if you want the permission to get selected before the plugin is used, set `requiresPermissionSelect` to `true`.
3. **Revise Metadata** - The `metadata` structure informs the UI about the plugin. This is where you define your plugin's name, a brief description, its logo, and the plugin's main and download URLs.
4. **Determine Unique Identifier and Title** - The `id` and `name` respectively provide a unique string identifier for the plugin and the name it showcases on the UI.
5. **Implement Wallet Interaction Logic** - Many methods are available to implement, but the most important ones are:
   - **Login**: The `login` method implements the necessary logic to log in using a wallet and yields the corresponding account name and chain.
   - **Signing Transactions**: The `sign` function implements the necessary logic to sign transactions and yields the corresponding signature.

