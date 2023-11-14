---
title: User Interface Template
description: A comprehensive template for developers to craft user interfaces compatible with the Wharf SessionKit.
category: Templates
published: true
order: 5
---

# User Interface Template

The User Interface Plugin Template is designed to provide developers with a foundational structure to craft their own [User Interfaces](/docs/session-kit/user-interface) for the [Wharf SessionKit](/docs/session-kit).

## Usage

Developers can utilize this template in two primary ways:

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

Once your user interface setup is complete, install the necessary dependencies using yarn:

```bash
yarn install
```

### Customizing the User Interface

Refer to the comprehensive development [documentation](/docs/session-kit/plugin-ui#development) for detailed instructions on how to tailor your user interface plugin to meet specific requirements.
