[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ZlibProvider

# Interface: ZlibProvider

Interface that should be implemented by zlib implementations.

## Table of contents

### Properties

- [deflateRaw](/docs/testinterfaces/ZlibProvider.md#deflateraw)
- [inflateRaw](/docs/testinterfaces/ZlibProvider.md#inflateraw)

## Properties

### deflateRaw

• **deflateRaw**: (`data`: `Uint8Array`) => `Uint8Array`

#### Type declaration

▸ (`data`): `Uint8Array`

Deflate data w/o adding zlib header.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

##### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:174

___

### inflateRaw

• **inflateRaw**: (`data`: `Uint8Array`) => `Uint8Array`

#### Type declaration

▸ (`data`): `Uint8Array`

Inflate data w/o requiring zlib header.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

##### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:176
