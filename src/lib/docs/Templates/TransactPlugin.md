---
title: Transact Plugin Template
description: A blueprint specifically designed to facilitate developers in creating transaction plugins for integration with the Wharf SessionKit.
category: Templates
published: true
order: 4
---

# Transact Plugin Template

The Transact Plugin Template lays out a structured path for developers aspiring to build their own [transaction plugins](/docs/session-kit/transact-plugin) harmonized with the [Wharf SessionKit](/docs/session-kit).

## Usage

### Initiating with the Template

To commence:

1. Initiate your terminal or command interface.
2. Clone the template repository via:
```bash
git clone https://github.com/wharfkit/transact-plugin-template.git transact-plugin-[name]
```
Make sure to substitute `[name]` with the moniker you've chosen for your plugin.

3. Shift to the newly cloned directory:
```bash
cd transact-plugin-[name]
```

### Installation Procedure

Once retrieved, ensure you assemble all vital dependencies through:
```bash
npm install
```

### Personalizing the Plugin

After installation:

1. **Access the `index.ts` file** - Herein lies the essence of your plugin.
2. **Set a Distinct Identifier** - The `id` property furnishes a singular identifier for the plugin.
3. **Equip Translations** - The `translations` property integrates localization strings, equipping multi-language support. By default, it adopts the `defaultTranslations` from the included `translations` file.
4. **Establish Vital Hooks**: Within the `register` method, you can set necessary hooks for the plugin's execution.
   - **Before Sign Hooks**: Register hooks meant to function before the signing phase. If a UI interaction occurs with an undefined function, an error gets broadcasted.
   - **After Sign Hooks**: Similarly, set hooks to function after the signing phase. Again, errors are dispatched for undefined functions interacting with the UI.
   - **After Broadcast Hooks**: Pin down hooks meant to be invoked post-transaction broadcasting. In situations where the plugin communicates with the UI and an undefined function is detected, an error message is broadcasted.
