[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Struct

# Class: Struct

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- **`Struct`**

  ↳ [`WalletPluginMetadata`](/docs/testclasses/WalletPluginMetadata.md)

  ↳ [`BlockExtension`](/docs/testclasses/API.v1.BlockExtension.md)

  ↳ [`HeaderExtension`](/docs/testclasses/API.v1.HeaderExtension.md)

  ↳ [`NewProducers`](/docs/testclasses/API.v1.NewProducers.md)

  ↳ [`NewProducersEntry`](/docs/testclasses/API.v1.NewProducersEntry.md)

  ↳ [`Action`](/docs/testclasses/Action.md)

  ↳ [`Authority`](/docs/testclasses/Authority.md)

  ↳ [`KeyWeight`](/docs/testclasses/KeyWeight.md)

  ↳ [`PackedTransaction`](/docs/testclasses/PackedTransaction.md)

  ↳ [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

  ↳ [`PermissionLevelWeight`](/docs/testclasses/PermissionLevelWeight.md)

  ↳ [`TransactionExtension`](/docs/testclasses/TransactionExtension.md)

  ↳ [`TransactionHeader`](/docs/testclasses/TransactionHeader.md)

  ↳ [`TransactionReceipt`](/docs/testclasses/TransactionReceipt.md)

  ↳ [`WaitWeight`](/docs/testclasses/WaitWeight.md)

  ↳ [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

  ↳ [`ExplorerDefinition`](/docs/testclasses/ExplorerDefinition.md)

  ↳ [`Logo`](/docs/testclasses/Logo.md)

  ↳ [`IdentityProof`](/docs/testclasses/IdentityProof.md)

  ↳ [`IdentityV2`](/docs/testclasses/IdentityV2.md)

  ↳ [`IdentityV3`](/docs/testclasses/IdentityV3.md)

  ↳ [`InfoPair`](/docs/testclasses/InfoPair.md)

  ↳ [`RequestDataV2`](/docs/testclasses/RequestDataV2.md)

  ↳ [`RequestDataV3`](/docs/testclasses/RequestDataV3.md)

  ↳ [`RequestSignature`](/docs/testclasses/RequestSignature.md)

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Properties

- [abiBase](/docs/testclasses/Struct-1.md#abibase)
- [abiFields](/docs/testclasses/Struct-1.md#abifields)
- [abiName](/docs/testclasses/Struct-1.md#abiname)

### Accessors

- [structFields](/docs/testclasses/Struct-1.md#structfields)

### Methods

- [equals](/docs/testclasses/Struct-1.md#equals)
- [from](/docs/testclasses/Struct-1.md#from)

## Properties

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

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

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:705

___

### from

▸ `Static` **from**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StructConstructor`](/docs/testinterfaces/StructConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `any` |

#### Returns

`InstanceType`<`T`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:694

▸ `Static` **from**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`unknown`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:695
