[@wharfkit/session - v1.0.0](/docs/testREADME.md) / PermissionLevel

# Class: PermissionLevel

Antelope/EOSIO Permission Level, a.k.a "auth".

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`PermissionLevel`**

## Table of contents

### Properties

- [actor](/docs/testclasses/PermissionLevel.md#actor)
- [permission](/docs/testclasses/PermissionLevel.md#permission)
- [abiBase](/docs/testclasses/PermissionLevel.md#abibase)
- [abiFields](/docs/testclasses/PermissionLevel.md#abifields)
- [abiName](/docs/testclasses/PermissionLevel.md#abiname)

### Accessors

- [structFields](/docs/testclasses/PermissionLevel.md#structfields)

### Methods

- [equals](/docs/testclasses/PermissionLevel.md#equals)
- [toString](/docs/testclasses/PermissionLevel.md#tostring)
- [from](/docs/testclasses/PermissionLevel.md#from)

## Properties

### actor

• **actor**: [`Name`](/docs/testclasses/Name.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1185

___

### permission

• **permission**: [`Name`](/docs/testclasses/Name.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1186

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

Return true if this permission level equals other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `string` \| [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype) |

#### Returns

`boolean`

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[equals](/docs/testclasses/Struct-1.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1190

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1191

___

### from

▸ `Static` **from**(`value`): [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

Create new permission level from representing types. Can be expressed as a string in the format `<actor>@<permission>`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype) |

#### Returns

[`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1188
