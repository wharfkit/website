[@wharfkit/session - v1.0.0](/docs/testREADME.md) / WalletPluginConfig

# Interface: WalletPluginConfig

The static configuration of a [[WalletPlugin]].

## Table of contents

### Properties

- [requiresChainSelect](/docs/testinterfaces/WalletPluginConfig.md#requireschainselect)
- [requiresPermissionEntry](/docs/testinterfaces/WalletPluginConfig.md#requirespermissionentry)
- [requiresPermissionSelect](/docs/testinterfaces/WalletPluginConfig.md#requirespermissionselect)
- [supportedChains](/docs/testinterfaces/WalletPluginConfig.md#supportedchains)

## Properties

### requiresChainSelect

• **requiresChainSelect**: `boolean`

Indicates if the pp requires the user to manually select the blockchain to authorize against.

#### Defined in

[src/wallet.ts:16](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L16)

___

### requiresPermissionEntry

• `Optional` **requiresPermissionEntry**: `boolean`

Indicates if the [[WalletPlugin]] requires the user to manually enter a permission to use.

#### Defined in

[src/wallet.ts:24](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L24)

___

### requiresPermissionSelect

• **requiresPermissionSelect**: `boolean`

Indicates if the [[WalletPlugin]] requires the user to select a permission to use from a list.

#### Defined in

[src/wallet.ts:20](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L20)

___

### supportedChains

• `Optional` **supportedChains**: [`Checksum256Type`](/docs/testREADME.md#checksum256type)[]

If set, indicates which blockchains are compatible with this [[WalletPlugin]].

#### Defined in

[src/wallet.ts:28](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L28)
