---
title: Wallet Plugin Template
description: A template to streamline the creation of wallet plugins compatible with the Wharf SessionKit.
category: Templates
published: true
order: 2
---

# Wallet Plugin Template

Introducing the Wallet Plugin Template - a tailored framework enabling developers to seamlessly integrate any antelope-compatible wallet with the [Wharf SessionKit](/docs/session-kit).

## Usage

### Initiating with the Template

To get started:

1. Launch your terminal or command interface.
2. Clone the template repository with:
```bash
git clone https://github.com/wharfkit/wallet-plugin-template.git wallet-plugin-[name]
```
Remember to replace `[name]` with the desired name for your plugin.

3. Move into the newly cloned directory:
```bash
cd wallet-plugin-[name]
```

### Configuration

After cloning, make sure to fetch all necessary dependencies by executing:
```bash
npm install
```

### Adapting the Plugin

Once set up, delve into tailoring your plugin:

1. **Navigate to the `index.ts` file** - Here lies the central logic of your plugin.
2. **Adapt Configuration Attributes** - The `config` entity outlines the plugin's functionality. For instance, if you want the user interface to present a chain selector, set `requiresChainSelect` to `true`. The `supportedChains` array, though optional, allows you to dictate specific blockchains this plugin can cater to.
3. **Revise Metadata** - The `metadata` structure informs the UI about the plugin. This is where you define your plugin's name, a brief description, its logo (in base64 format), and the plugin's main and download URLs.
4. **Determine Unique Identifier and Title** - The `id` and `metadata.name` respectively provide a unique string identifier for the plugin and the name it showcases on the UI.
5. **Embed Wallet Functionalities**:
   - **Login**: The `login` method implements the necessary logic to log in using a wallet and yields the corresponding account name and chain.
   - **Signing Transactions**: The `sign` function implements the necessary logic to sign transactions and yields the corresponding signature.
