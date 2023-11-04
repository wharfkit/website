---
title: Login Plugin Template
description: A foundational template designed for the creation of login plugins integrated with the Wharf SessionKit.
category: Templates
published: true
order: 3
---

# Login Plugin Template

The Login Plugin Template is designed to provide developers with a foundational structure to craft their own [login plugins](/docs/session-kit/plugin-login) for the [Wharf SessionKit](/docs/session-kit).

## Usage

### Cloning the Repository

To use this template:

1. Launch your terminal or command interface.
2. Clone the template repository with:
```bash
git clone https://github.com/wharfkit/login-plugin-template.git login-plugin-[name]
```
Replace `[name]` with the desired name for your plugin.

3. Navigate to the newly cloned directory:
```bash
cd login-plugin-[name]
```

### Installing Dependencies

After cloning, ensure you have all the required dependencies by running:
```bash
npm install
```

### Adapting the Plugin

Once your plugin is set up, you can begin customizing it to suit your needs.

1. **Open the `index.ts` file** - This is where the core logic of the plugin resides.
2. **Assign a Unique Identifier** - The `id` attribute serves as a distinct identifier for your plugin.
3. **Register Hooks**: The `register` method lets you pin down necessary hooks for the plugin's operation.
   - **Before Login Hooks**: Register hooks that are called before the login process.
   - **After Login Hooks**: Similarly, register hooks that are called post-login.
