[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ChainDefinition

# Class: ChainDefinition

The information required to interact with a given chain.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`ChainDefinition`**

## Table of contents

### Properties

- [explorer](/docs/testclasses/ChainDefinition.md#explorer)
- [id](/docs/testclasses/ChainDefinition.md#id)
- [logo](/docs/testclasses/ChainDefinition.md#logo)
- [url](/docs/testclasses/ChainDefinition.md#url)
- [abiBase](/docs/testclasses/ChainDefinition.md#abibase)
- [abiFields](/docs/testclasses/ChainDefinition.md#abifields)
- [abiName](/docs/testclasses/ChainDefinition.md#abiname)

### Accessors

- [name](/docs/testclasses/ChainDefinition.md#name)
- [structFields](/docs/testclasses/ChainDefinition.md#structfields)

### Methods

- [equals](/docs/testclasses/ChainDefinition.md#equals)
- [getLogo](/docs/testclasses/ChainDefinition.md#getlogo)
- [from](/docs/testclasses/ChainDefinition.md#from)

## Properties

### explorer

• `Optional` **explorer**: [`ExplorerDefinitionType`](/docs/testREADME.md#explorerdefinitiontype)

The explorer definition for the chain.

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:68

___

### id

• **id**: [`Checksum256`](/docs/testclasses/Checksum256.md)

The chain ID.

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:56

___

### logo

• `Optional` **logo**: [`LogoType`](/docs/testREADME.md#logotype)

The absolute URL(s) to the chain's logo.

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:64

___

### url

• **url**: `string`

The base URL of the chain's API endpoint (e.g. https://jungle4.greymass.com).

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:60

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

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:70

___

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

### getLogo

▸ **getLogo**(): `undefined` \| [`Logo`](/docs/testclasses/Logo.md)

#### Returns

`undefined` \| [`Logo`](/docs/testclasses/Logo.md)

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:71

___

### from

▸ `Static` **from**(`data`): [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:69
