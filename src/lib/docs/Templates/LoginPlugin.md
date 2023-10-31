---
title: Login Plugin Template
description: A foundational template designed for the creation of login plugins integrated with the Wharf SessionKit.
category: Templates
published: true
order: 3
---

# Login Plugin Template

The Login Plugin Template is structured to aid developers in shaping their personalized [login plugins](/docs/session-kit/login-plugin) suitable for the [Wharf SessionKit](/docs/session-kit).

## Usage

### Kickstarting with the Template

For a smooth commencement:

1. Open your preferred terminal or command interface.
2. Clone the template repository through:
```bash
git clone https://github.com/wharfkit/login-plugin-template.git login-plugin-[name]
```
Ensure you replace `[name]` with your plugin's intended name.

3. Transition into the freshly cloned directory:
```bash
cd login-plugin-[name]
```

### Setup Procedure

Once cloned, it's advisable to procure all vital dependencies via:
```bash
npm install
```

### Tailoring the Plugin

Upon setting up, you're all set to modify your plugin:

1. **Jump to the `index.ts` file** - The nucleus of your plugin is here.
2. **Assign a Unique Identifier** - The `id` attribute serves as a distinct identifier for your plugin.
3. **Localize Your Plugin** - The `translations` property integrates the localization strings, enabling multi-language support. By default, it uses the `defaultTranslations` imported from the adjacent `translations` file.
4. **Register Essential Hooks**: The `register` method lets you pin down necessary hooks for the plugin's operation.
   - **Before Login Hooks**: Register hooks that are called before the login process. In case the plugin interacts with the UI, it throws an error notifying the user of the undefined hook function.
   - **After Login Hooks**: Similarly, register hooks that are called post-login. If the plugin engages with the UI and an undefined function is called, an error is relayed.
