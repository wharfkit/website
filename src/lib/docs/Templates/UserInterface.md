---
title: User Interface Template
description: A template for creating user interfaces for the Wharf SessionKit.
category: Templates
published: true
order: 5
---

# User Interface Template

The User Interface Plugin Template is designed to provide developers with a foundational structure to craft their own [User Interfaces](/docs/session-kit/plugin-user-interface) for the [Wharf SessionKit](/docs/session-kit).

## Usage

There are two ways to use this template:

### Option 1: Use the GitHub Template Clone Feature
   1. Go to the [user interface plugin template repository](https://github.com/wharfkit/ui-plugin-template) on GitHub.
   2. Click the `Use this template` button to start a new repository based on this template.
   3. Complete the setup process as guided by GitHub prompts.

### Option 2: Manually Cloning the Repository
   1. Open your terminal or command interface.
   2. Clone the template repository with the following command:
      ```bash
      git clone https://github.com/wharfkit/ui-plugin-template.git wharf-ui-[name]
      ```
      Here, replace `[name]` with a suitable name for your plugin.
   3. Enter the cloned directory:
      ```bash
      cd wharf-ui-[name]
      ```

### Installing Dependencies

Once your user interface setup is complete, install the necessary dependencies:

```bash
yarn install
```

### Customizing the User Interface

For guidance on customizing your plugin, please refer to our detailed development [documentation](/docs/session-kit/plugin-user-interface#specification).
