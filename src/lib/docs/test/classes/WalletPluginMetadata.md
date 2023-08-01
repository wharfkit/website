[@wharfkit/session - v1.0.0](/docs/testREADME.md) / WalletPluginMetadata

# Class: WalletPluginMetadata

The metadata of a [[WalletPlugin]] for display purposes.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`WalletPluginMetadata`**

## Table of contents

### Properties

- [description](/docs/testclasses/WalletPluginMetadata.md#description)
- [download](/docs/testclasses/WalletPluginMetadata.md#download)
- [homepage](/docs/testclasses/WalletPluginMetadata.md#homepage)
- [logo](/docs/testclasses/WalletPluginMetadata.md#logo)
- [name](/docs/testclasses/WalletPluginMetadata.md#name)
- [publicKey](/docs/testclasses/WalletPluginMetadata.md#publickey)
- [abiBase](/docs/testclasses/WalletPluginMetadata.md#abibase)
- [abiFields](/docs/testclasses/WalletPluginMetadata.md#abifields)
- [abiName](/docs/testclasses/WalletPluginMetadata.md#abiname)

### Accessors

- [structFields](/docs/testclasses/WalletPluginMetadata.md#structfields)

### Methods

- [equals](/docs/testclasses/WalletPluginMetadata.md#equals)
- [from](/docs/testclasses/WalletPluginMetadata.md#from)

## Properties

### description

• `Optional` **description**: `string`

A wallet description to further identify the wallet for users.

#### Defined in

[src/wallet.ts:43](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L43)

___

### download

• `Optional` **download**: `string`

Link to the download page for the wallet

#### Defined in

[src/wallet.ts:55](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L55)

___

### homepage

• `Optional` **homepage**: `string`

Link to the homepage for the wallet

#### Defined in

[src/wallet.ts:51](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L51)

___

### logo

• `Optional` **logo**: [`Logo`](/docs/testclasses/Logo.md)

Wallet branding

#### Defined in

[src/wallet.ts:47](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L47)

___

### name

• `Optional` **name**: `string`

A display name for the wallet that is presented to users.

#### Defined in

[src/wallet.ts:39](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L39)

___

### publicKey

• `Optional` **publicKey**: `string`

The public key being used by the wallet plugin

#### Defined in

[src/wallet.ts:59](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L59)

___

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiBase](/docs/testclasses/Struct-1.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiFields](/docs/testclasses/Struct-1.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiName](/docs/testclasses/Struct-1.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

#### Inherited from

Struct.structFields

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:696

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this struct equals the other.

Note: This compares the ABI encoded bytes of both structs, subclasses
      should implement their own fast equality check when possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[equals](/docs/testclasses/Struct-1.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:705

___

### from

▸ `Static` **from**(`data`): [`WalletPluginMetadata`](/docs/testclasses/WalletPluginMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`WalletPluginMetadata`](/docs/testclasses/WalletPluginMetadata.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

[src/wallet.ts:61](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L61)
