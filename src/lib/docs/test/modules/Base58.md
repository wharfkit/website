[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Base58

# Namespace: Base58

## Table of contents

### Enumerations

- [ErrorCode](/docs/testenums/Base58.ErrorCode.md)

### Classes

- [DecodingError](/docs/testclasses/Base58.DecodingError.md)

### Functions

- [decode](/docs/testmodules/Base58.md#decode)
- [decodeCheck](/docs/testmodules/Base58.md#decodecheck)
- [decodeRipemd160Check](/docs/testmodules/Base58.md#decoderipemd160check)
- [encode](/docs/testmodules/Base58.md#encode)
- [encodeCheck](/docs/testmodules/Base58.md#encodecheck)
- [encodeRipemd160Check](/docs/testmodules/Base58.md#encoderipemd160check)

## Functions

### decode

▸ **decode**(`s`, `size?`): [`Bytes`](/docs/testclasses/Bytes.md)

Decode a Base58 encoded string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |
| `size?` | `number` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1438

___

### decodeCheck

▸ **decodeCheck**(`encoded`, `size?`): [`Bytes`](/docs/testclasses/Bytes.md)

Decode a Base58Check encoded string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `size?` | `number` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1440

___

### decodeRipemd160Check

▸ **decodeRipemd160Check**(`encoded`, `size?`, `suffix?`): [`Bytes`](/docs/testclasses/Bytes.md)

Decode a Base58Check encoded string that uses ripemd160 instead of double sha256 for the digest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `size?` | `number` |
| `suffix?` | `string` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1442

___

### encode

▸ **encode**(`data`): `string`

Encode bytes to a Base58 string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1444

___

### encodeCheck

▸ **encodeCheck**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1445

___

### encodeRipemd160Check

▸ **encodeRipemd160Check**(`data`, `suffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesType`](/docs/testREADME.md#bytestype) |
| `suffix?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1446
