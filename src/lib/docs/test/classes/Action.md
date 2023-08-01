[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Action

# Class: Action

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`Action`**

## Table of contents

### Properties

- [account](/docs/testclasses/Action.md#account)
- [authorization](/docs/testclasses/Action.md#authorization)
- [data](/docs/testclasses/Action.md#data)
- [name](/docs/testclasses/Action.md#name)
- [abiBase](/docs/testclasses/Action.md#abibase)
- [abiFields](/docs/testclasses/Action.md#abifields)
- [abiName](/docs/testclasses/Action.md#abiname)

### Accessors

- [structFields](/docs/testclasses/Action.md#structfields)

### Methods

- [decodeData](/docs/testclasses/Action.md#decodedata)
- [equals](/docs/testclasses/Action.md#equals)
- [from](/docs/testclasses/Action.md#from)

## Properties

### account

• **account**: [`Name`](/docs/testclasses/Name.md)

The account (a.k.a. contract) to run action on.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1213

___

### authorization

• **authorization**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)[]

The permissions authorizing the action.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1217

___

### data

• **data**: [`Bytes`](/docs/testclasses/Bytes.md)

The ABI-encoded action data.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1219

___

### name

• **name**: [`Name`](/docs/testclasses/Name.md)

The name of the action.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1215

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

### decodeData

▸ **decodeData**<`T`\>(`type`): `InstanceType`<`T`\>

Return action data decoded as given type or using ABI.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`<`T`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1224

▸ **decodeData**<`T`\>(`type`): `BuiltinTypes`[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `BuiltinTypes` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`BuiltinTypes`[`T`]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1225

▸ **decodeData**(`abi`): [`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abi` | [`ABIDef`](/docs/testREADME.md#abidef) |

#### Returns

[`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1226

___

### equals

▸ **equals**(`other`): `boolean`

Return true if this Action is equal to given action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AnyAction`](/docs/testinterfaces/AnyAction.md) \| [`ActionType`](/docs/testREADME.md#actiontype) |

#### Returns

`boolean`

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[equals](/docs/testclasses/Struct-1.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1222

___

### from

▸ `Static` **from**(`object`, `abi?`): [`Action`](/docs/testclasses/Action.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`AnyAction`](/docs/testinterfaces/AnyAction.md) \| [`ActionType`](/docs/testREADME.md#actiontype) |
| `abi?` | [`ABIDef`](/docs/testREADME.md#abidef) |

#### Returns

[`Action`](/docs/testclasses/Action.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1220
