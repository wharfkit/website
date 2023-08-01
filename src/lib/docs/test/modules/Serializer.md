[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Serializer

# Namespace: Serializer

## Table of contents

### Functions

- [decode](/docs/testmodules/Serializer.md#decode)
- [encode](/docs/testmodules/Serializer.md#encode)
- [objectify](/docs/testmodules/Serializer.md#objectify)
- [stringify](/docs/testmodules/Serializer.md#stringify)
- [synthesize](/docs/testmodules/Serializer.md#synthesize)

## Functions

### decode

▸ **decode**<`T`\>(`args`): `BuiltinTypes`[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `BuiltinTypes` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `BuiltinDecodeArgs`<`T`\> |

#### Returns

`BuiltinTypes`[`T`]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:196

▸ **decode**<`T`\>(`args`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `TypedDecodeArgs`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:197

▸ **decode**(`args`): [`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `UntypedDecodeArgs` |

#### Returns

[`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:198

___

### encode

▸ **encode**(`args`): [`Bytes`](/docs/testclasses/Bytes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `EncodeArgs` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:270

___

### objectify

▸ **objectify**(`object`): `any`

Create a vanilla js representation of a core object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`ABISerializable`](/docs/testREADME.md#abiserializable) |

#### Returns

`any`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1404

___

### stringify

▸ **stringify**(`object`): `string`

Create JSON representation of a core object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`ABISerializable`](/docs/testREADME.md#abiserializable) |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1402

___

### synthesize

▸ **synthesize**(`type`): [`ABI`](/docs/testclasses/ABI-1.md)

Create an Antelope/EOSIO ABI definition for given core type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |

#### Returns

[`ABI`](/docs/testclasses/ABI-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1400
