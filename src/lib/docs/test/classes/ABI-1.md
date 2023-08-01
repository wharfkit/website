[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABI

# Class: ABI

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ABI-1.md#constructor)

### Properties

- [actions](/docs/testclasses/ABI-1.md#actions)
- [ricardian\_clauses](/docs/testclasses/ABI-1.md#ricardian_clauses)
- [structs](/docs/testclasses/ABI-1.md#structs)
- [tables](/docs/testclasses/ABI-1.md#tables)
- [types](/docs/testclasses/ABI-1.md#types)
- [variants](/docs/testclasses/ABI-1.md#variants)
- [version](/docs/testclasses/ABI-1.md#version)
- [abiName](/docs/testclasses/ABI-1.md#abiname)
- [version](/docs/testclasses/ABI-1.md#version-1)

### Methods

- [equals](/docs/testclasses/ABI-1.md#equals)
- [getActionType](/docs/testclasses/ABI-1.md#getactiontype)
- [getStruct](/docs/testclasses/ABI-1.md#getstruct)
- [getVariant](/docs/testclasses/ABI-1.md#getvariant)
- [resolveAll](/docs/testclasses/ABI-1.md#resolveall)
- [resolveType](/docs/testclasses/ABI-1.md#resolvetype)
- [toABI](/docs/testclasses/ABI-1.md#toabi)
- [toJSON](/docs/testclasses/ABI-1.md#tojson)
- [from](/docs/testclasses/ABI-1.md#from)
- [fromABI](/docs/testclasses/ABI-1.md#fromabi)

## Constructors

### constructor

• **new ABI**(`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Partial`<[`Def`](/docs/testinterfaces/ABI.Def.md)\> |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:884

## Properties

### actions

• **actions**: [`Action`](/docs/testinterfaces/ABI.Action.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:881

___

### ricardian\_clauses

• **ricardian\_clauses**: [`Clause`](/docs/testinterfaces/ABI.Clause.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:883

___

### structs

• **structs**: [`Struct`](/docs/testinterfaces/ABI.Struct.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:880

___

### tables

• **tables**: [`Table`](/docs/testinterfaces/ABI.Table.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:882

___

### types

• **types**: [`TypeDef`](/docs/testinterfaces/ABI.TypeDef.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:878

___

### variants

• **variants**: [`Variant`](/docs/testinterfaces/ABI.Variant.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:879

___

### version

• **version**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:877

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:875

___

### version

▪ `Static` **version**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:876

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ABIDef`](/docs/testREADME.md#abidef) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:899

___

### getActionType

▸ **getActionType**(`actionName`): `undefined` \| `string`

Return arguments type of an action in this ABI.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionName` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:898

___

### getStruct

▸ **getStruct**(`name`): `undefined` \| [`Struct`](/docs/testinterfaces/ABI.Struct.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Struct`](/docs/testinterfaces/ABI.Struct.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:895

___

### getVariant

▸ **getVariant**(`name`): `undefined` \| [`Variant`](/docs/testinterfaces/ABI.Variant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`Variant`](/docs/testinterfaces/ABI.Variant.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:896

___

### resolveAll

▸ **resolveAll**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `structs` | [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)[] |
| `types` | [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)[] |
| `variants` | [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)[] |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:889

___

### resolveType

▸ **resolveType**(`name`): [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:888

___

### toABI

▸ **toABI**(`encoder`): `void`

Called when encoding to binary abi format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | [`ABIEncoder`](/docs/testclasses/ABIEncoder.md) |

#### Returns

`void`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toABI](/docs/testinterfaces/ABISerializableObject.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:887

___

### toJSON

▸ **toJSON**(): `Object`

Called when encoding to json abi format.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `abi_extensions` | `never`[] |
| `actions` | [`Action`](/docs/testinterfaces/ABI.Action.md)[] |
| `error_messages` | `never`[] |
| `ricardian_clauses` | [`Clause`](/docs/testinterfaces/ABI.Clause.md)[] |
| `structs` | [`Struct`](/docs/testinterfaces/ABI.Struct.md)[] |
| `tables` | [`Table`](/docs/testinterfaces/ABI.Table.md)[] |
| `types` | [`TypeDef`](/docs/testinterfaces/ABI.TypeDef.md)[] |
| `variants` | [`Variant`](/docs/testinterfaces/ABI.Variant.md)[] |
| `version` | `string` |

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:900

___

### from

▸ `Static` **from**(`value`): [`ABI`](/docs/testclasses/ABI-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ABIDef`](/docs/testREADME.md#abidef) |

#### Returns

[`ABI`](/docs/testclasses/ABI-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:885

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`ABI`](/docs/testclasses/ABI-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`ABI`](/docs/testclasses/ABI-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:886
