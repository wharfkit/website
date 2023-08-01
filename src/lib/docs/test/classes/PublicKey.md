[@wharfkit/session - v1.0.0](/docs/testREADME.md) / PublicKey

# Class: PublicKey

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Properties

- [data](/docs/testclasses/PublicKey.md#data)
- [type](/docs/testclasses/PublicKey.md#type)
- [abiName](/docs/testclasses/PublicKey.md#abiname)

### Methods

- [equals](/docs/testclasses/PublicKey.md#equals)
- [toLegacyString](/docs/testclasses/PublicKey.md#tolegacystring)
- [toString](/docs/testclasses/PublicKey.md#tostring)
- [from](/docs/testclasses/PublicKey.md#from)

## Properties

### data

• **data**: [`Bytes`](/docs/testclasses/Bytes.md)

Compressed public key point.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1073

___

### type

• **type**: [`KeyType`](/docs/testenums/KeyType-1.md)

Type, e.g. `K1`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1071

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1069

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PublicKeyType`](/docs/testREADME.md#publickeytype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1080

___

### toLegacyString

▸ **toLegacyString**(`prefix?`): `string`

Return Antelope/EOSIO legacy (`EOS<base58data>`) formatted key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | `string` |

#### Returns

`string`

**`Throws`**

If the key type isn't `K1`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1085

___

### toString

▸ **toString**(): `string`

Return key in modern Antelope/EOSIO format (`PUB_<type>_<base58data>`)

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1087

___

### from

▸ `Static` **from**(`value`): [`PublicKey`](/docs/testclasses/PublicKey.md)

Create PublicKey object from representing types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PublicKeyType`](/docs/testREADME.md#publickeytype) |

#### Returns

[`PublicKey`](/docs/testclasses/PublicKey.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1075
