[@wharfkit/session - v1.0.0](/docs/testREADME.md) / PrivateKey

# Class: PrivateKey

## Table of contents

### Properties

- [data](/docs/testclasses/PrivateKey.md#data)
- [type](/docs/testclasses/PrivateKey.md#type)

### Methods

- [sharedSecret](/docs/testclasses/PrivateKey.md#sharedsecret)
- [signDigest](/docs/testclasses/PrivateKey.md#signdigest)
- [signMessage](/docs/testclasses/PrivateKey.md#signmessage)
- [toJSON](/docs/testclasses/PrivateKey.md#tojson)
- [toPublic](/docs/testclasses/PrivateKey.md#topublic)
- [toString](/docs/testclasses/PrivateKey.md#tostring)
- [toWif](/docs/testclasses/PrivateKey.md#towif)
- [from](/docs/testclasses/PrivateKey.md#from)
- [fromString](/docs/testclasses/PrivateKey.md#fromstring)
- [generate](/docs/testclasses/PrivateKey.md#generate)

## Properties

### data

• **data**: [`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1132

___

### type

• **type**: [`KeyType`](/docs/testenums/KeyType-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1131

## Methods

### sharedSecret

▸ **sharedSecret**(`publicKey`): [`Checksum512`](/docs/testclasses/Checksum512.md)

Derive the shared secret between this private key and given public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](/docs/testclasses/PublicKey.md) |

#### Returns

[`Checksum512`](/docs/testclasses/Checksum512.md)

**`Throws`**

If the key type isn't R1 or K1.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1161

___

### signDigest

▸ **signDigest**(`digest`): [`Signature`](/docs/testclasses/Signature.md)

Sign message digest using this key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |

#### Returns

[`Signature`](/docs/testclasses/Signature.md)

**`Throws`**

If the key type isn't R1 or K1.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1151

___

### signMessage

▸ **signMessage**(`message`): [`Signature`](/docs/testclasses/Signature.md)

Sign message using this key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

[`Signature`](/docs/testclasses/Signature.md)

**`Throws`**

If the key type isn't R1 or K1.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1156

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1176

___

### toPublic

▸ **toPublic**(): [`PublicKey`](/docs/testclasses/PublicKey.md)

Get the corresponding public key.

#### Returns

[`PublicKey`](/docs/testclasses/PublicKey.md)

**`Throws`**

If the key type isn't R1 or K1.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1166

___

### toString

▸ **toString**(): `string`

Return the key in Antelope/EOSIO PVT_<type>_<base58check> format.

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1175

___

### toWif

▸ **toWif**(): `string`

Return WIF representation of this private key

#### Returns

`string`

**`Throws`**

If the key type isn't K1.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1171

___

### from

▸ `Static` **from**(`value`): [`PrivateKey`](/docs/testclasses/PrivateKey.md)

Create PrivateKey object from representing types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PrivateKeyType`](/docs/testREADME.md#privatekeytype) |

#### Returns

[`PrivateKey`](/docs/testclasses/PrivateKey.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1134

___

### fromString

▸ `Static` **fromString**(`string`, `ignoreChecksumError?`): [`PrivateKey`](/docs/testclasses/PrivateKey.md)

Create PrivateKey object from a string representation.
Accepts WIF (5...) and Antelope/EOSIO (PVT_...) style private keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `ignoreChecksumError?` | `boolean` |

#### Returns

[`PrivateKey`](/docs/testclasses/PrivateKey.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1139

___

### generate

▸ `Static` **generate**(`type`): [`PrivateKey`](/docs/testclasses/PrivateKey.md)

Generate new PrivateKey.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`PrivateKey`](/docs/testclasses/PrivateKey.md)

**`Throws`**

If a secure random source isn't available.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1144
