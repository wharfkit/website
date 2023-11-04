---
title: Transact Plugin Template
description: A blueprint specifically designed to facilitate developers in creating transaction plugins for integration with the Wharf SessionKit.
category: Templates
published: true
order: 4
---

# Transact Plugin Template

The Transact Plugin Template is designed to provide developers with a foundational structure to craft their own [transact plugins](/docs/session-kit/plugin-transact) for the [Wharf SessionKit](/docs/session-kit).

## Usage

### Cloning the Repository

To commence:

1. Initiate your terminal or command interface.
2. Clone the template repository via:
```bash
git clone https://github.com/wharfkit/transact-plugin-template.git transact-plugin-[name]
```
Replace `[name]` with the desired name for your plugin.

3. Navigate to the newly cloned directory:
```bash
cd transact-plugin-[name]
```

### Installing Dependencies

After cloning, ensure you have all the required dependencies by running:
```bash
npm install
```

### Personalizing the Plugin

After installation:

1. **Access the `index.ts` file** - This is where the core logic of the plugin resides.
2. **Set a Distinct Identifier** - The `id` attribute serves as a distinct identifier for your plugin.
3. **Register Hooks**: Within the `register` method, you can seimplement and set necessary hooks for the plugin's execution.
   - **Before Sign Hooks**: Register hooks that are called before the transaction is signed.
   - **After Sign Hooks**: Register hooks that are called after the transaction is signed.
   - **After Broadcast Hooks**: Register hooks that are called after the transaction is broadcasted.