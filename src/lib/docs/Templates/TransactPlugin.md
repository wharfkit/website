---
title: Transact Plugin Template
description: A template for creating transact plugins for the Wharf SessionKit.
category: Templates
published: true
order: 4
---

# Transact Plugin Template

The Transact Plugin Template is designed to provide developers with a foundational structure to craft their own [transact plugins](/docs/session-kit/plugin-transact) for the [Wharf SessionKit](/docs/session-kit).

## Usage

There are two ways to use this template:

### Option 1: Use the GitHub Template Clone Feature
   1. Navigate to the [transact plugin template repository](https://github.com/wharfkit/transact-plugin-template) on GitHub.
   2. Click on the `Use this template` button to create a new repository based on this template.
   3. Follow the prompts to set up your new repository.

### Option 2: Cloning the Repository Manually
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

After setting up your plugin, install all the required dependencies:

```bash
yarn install
```

### Adapting the Plugin

For guidance on customizing your plugin, please refer to our detailed development [documentation](/docs/session-kit/plugin-transact#development).
