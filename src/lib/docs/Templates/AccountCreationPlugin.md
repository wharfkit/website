---
title: Account Creation Plugin Template
description: A template for creating account creation plugins for the Wharf SessionKit.
category: Templates
published: true
order: 1
---

# Account Creation Plugin Template

The Account Creation Plugin Template is designed to provide developers with a foundational structure to craft their own account creation plugins for the Wharf SessionKit.

## Usage

There are two ways to use this template:

### Option 1: Use the GitHub Template Clone Feature
   1. Navigate to the [account creation plugin template repository](https://github.com/wharfkit/account-creation-plugin-template) on GitHub.
   2. Click on the `Use this template` button to create a new repository based on this template.
   3. Follow the prompts to set up your new repository.

### Option 2: Cloning the Repository Manually
   1. Open your terminal or command prompt.
   2. Execute the command to clone the repository:
      ```bash
      git clone https://github.com/wharfkit/account-creation-plugin-template.git account-creation-plugin-[name]
      ```
      Replace `[name]` with the desired name for your plugin.

   3. Navigate to the newly cloned directory:
      ```bash
      cd account-creation-plugin-[name]
      ```

### Installing Dependencies

After setting up your plugin, install all the required dependencies using yarn:

```bash
yarn install
```

### Adapting the Plugin

For guidance on customizing your plugin, please refer to our detailed development [documentation](/docs/session-kit/plugin-account-creation).
