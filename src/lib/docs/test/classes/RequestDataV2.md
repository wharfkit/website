[@wharfkit/session - v1.0.0](/docs/testREADME.md) / RequestDataV2

# Class: RequestDataV2

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`RequestDataV2`**

## Table of contents

### Properties

- [callback](/docs/testclasses/RequestDataV2.md#callback)
- [chain\_id](/docs/testclasses/RequestDataV2.md#chain_id)
- [flags](/docs/testclasses/RequestDataV2.md#flags)
- [info](/docs/testclasses/RequestDataV2.md#info)
- [req](/docs/testclasses/RequestDataV2.md#req)
- [abiBase](/docs/testclasses/RequestDataV2.md#abibase)
- [abiFields](/docs/testclasses/RequestDataV2.md#abifields)
- [abiName](/docs/testclasses/RequestDataV2.md#abiname)

### Accessors

- [structFields](/docs/testclasses/RequestDataV2.md#structfields)

### Methods

- [equals](/docs/testclasses/RequestDataV2.md#equals)
- [from](/docs/testclasses/RequestDataV2.md#from)

## Properties

### callback

• **callback**: `string`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:100

___

### chain\_id

• **chain\_id**: [`ChainIdVariant`](/docs/testclasses/ChainIdVariant.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:97

___

### flags

• **flags**: [`RequestFlags`](/docs/testclasses/RequestFlags.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:99

___

### info

• **info**: [`InfoPair`](/docs/testclasses/InfoPair.md)[]

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:101

___

### req

• **req**: [`RequestVariantV2`](/docs/testclasses/RequestVariantV2.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:98

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

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:694

▸ `Static` **from**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`unknown`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:695
