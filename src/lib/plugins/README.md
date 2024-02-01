The `plugins.json` file is a read-only source for the plugin directory.

The github workflow action in `.github/workflows/plugin-updater.yaml` and the associated script in `.github/scripts/check-plugins.js` automatically check for changes to each of the repositories listed in the `plugin-directory.txt` file.

## Add a new plugin

To add a new plugin, add a new line to `plugin-directory.txt` with the github repository for the plugin in the format of "owner/repo". For example, `wharfkit/account-creation-plugin`.

## Remove a plugin

Simply delete the line from `plugin-directory.txt` and the plugin updater will remove the plugin on the next run.

## Update a plugin

Updates to plugins will be detected by the plugin updater workflow. The plugin updater will check the SHA of the latest commit in the repository and if it differs from the SHA in `plugins.json` it will fetch new information from the plugin repo.
