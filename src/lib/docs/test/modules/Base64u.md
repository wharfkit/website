[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Base64u

# Namespace: Base64u

## Table of contents

### Functions

- [decode](/docs/testmodules/Base64u.md#decode)
- [encode](/docs/testmodules/Base64u.md#encode)

## Functions

### decode

▸ **decode**(`input`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:568

___

### encode

▸ **encode**(`data`, `urlSafe?`): `string`

Base64u - URL-Safe Base64 variant no padding.
Based on https://gist.github.com/jonleighton/958841

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `urlSafe?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:567
