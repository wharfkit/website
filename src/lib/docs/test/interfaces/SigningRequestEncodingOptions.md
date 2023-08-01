[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SigningRequestEncodingOptions

# Interface: SigningRequestEncodingOptions

## Table of contents

### Properties

- [abiProvider](/docs/testinterfaces/SigningRequestEncodingOptions.md#abiprovider)
- [signatureProvider](/docs/testinterfaces/SigningRequestEncodingOptions.md#signatureprovider)
- [zlib](/docs/testinterfaces/SigningRequestEncodingOptions.md#zlib)

## Properties

### abiProvider

• `Optional` **abiProvider**: [`AbiProvider`](/docs/testinterfaces/AbiProvider.md)

Abi provider, required if the arguments contain un-encoded actions.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:384

___

### signatureProvider

• `Optional` **signatureProvider**: [`SignatureProvider`](/docs/testinterfaces/SignatureProvider.md)

Optional signature provider, will be used to create a request signature if provided.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:386

___

### zlib

• `Optional` **zlib**: [`ZlibProvider`](/docs/testinterfaces/ZlibProvider.md)

Optional zlib, if provided the request will be compressed when encoding.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:382
