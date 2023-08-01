[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Signature

# Class: Signature

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Properties

- [data](/docs/testclasses/Signature.md#data)
- [type](/docs/testclasses/Signature.md#type)
- [abiName](/docs/testclasses/Signature.md#abiname)

### Methods

- [equals](/docs/testclasses/Signature.md#equals)
- [recoverDigest](/docs/testclasses/Signature.md#recoverdigest)
- [recoverMessage](/docs/testclasses/Signature.md#recovermessage)
- [toString](/docs/testclasses/Signature.md#tostring)
- [verifyDigest](/docs/testclasses/Signature.md#verifydigest)
- [verifyMessage](/docs/testclasses/Signature.md#verifymessage)
- [from](/docs/testclasses/Signature.md#from)

## Properties

### data

• **data**: [`Bytes`](/docs/testclasses/Bytes.md)

Signature data.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1105

___

### type

• **type**: [`KeyType`](/docs/testenums/KeyType-1.md)

Type, e.g. `K1`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1103

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1101

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SignatureType`](/docs/testREADME.md#signaturetype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1112

___

### recoverDigest

▸ **recoverDigest**(`digest`): [`PublicKey`](/docs/testclasses/PublicKey.md)

Recover public key from given message digest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |

#### Returns

[`PublicKey`](/docs/testclasses/PublicKey.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1114

___

### recoverMessage

▸ **recoverMessage**(`message`): [`PublicKey`](/docs/testclasses/PublicKey.md)

Recover public key from given message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

[`PublicKey`](/docs/testclasses/PublicKey.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1116

___

### toString

▸ **toString**(): `string`

Base58check encoded string representation of this signature (`SIG_<type>_<data>`).

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1122

___

### verifyDigest

▸ **verifyDigest**(`digest`, `publicKey`): `boolean`

Verify this signature with given message digest and public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |
| `publicKey` | [`PublicKey`](/docs/testclasses/PublicKey.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1118

___

### verifyMessage

▸ **verifyMessage**(`message`, `publicKey`): `boolean`

Verify this signature with given message and public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`BytesType`](/docs/testREADME.md#bytestype) |
| `publicKey` | [`PublicKey`](/docs/testclasses/PublicKey.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1120

___

### from

▸ `Static` **from**(`value`): [`Signature`](/docs/testclasses/Signature.md)

Create Signature object from representing types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SignatureType`](/docs/testREADME.md#signaturetype) |

#### Returns

[`Signature`](/docs/testclasses/Signature.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1107
