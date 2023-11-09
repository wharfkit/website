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

There are two ways to use this template:

### Option 1: Use the GitHub Template Clone Feature
   1. Navigate to the [wallet plugin template repository](https://github.com/wharfkit/wallet-plugin-template) on GitHub.
   2. Click on the `Use this template` button to create a new repository based on this template.
   3. Follow the prompts to set up your new repository.

### Option 2: Cloning the Repository Manually
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

After setting up your plugin, install all the required dependencies using yarn:

```bash
yarn install
```

### Adapting the Plugin

For guidance on customizing your plugin, please refer to our detailed development [documentation](/docs/session-kit/plugin-wallet#development).
