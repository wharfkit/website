[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ResolvedSigningRequest

# Class: ResolvedSigningRequest

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ResolvedSigningRequest.md#constructor)

### Properties

- [chainId](/docs/testclasses/ResolvedSigningRequest.md#chainid)
- [request](/docs/testclasses/ResolvedSigningRequest.md#request)
- [resolvedTransaction](/docs/testclasses/ResolvedSigningRequest.md#resolvedtransaction)
- [signer](/docs/testclasses/ResolvedSigningRequest.md#signer)
- [transaction](/docs/testclasses/ResolvedSigningRequest.md#transaction)

### Accessors

- [serializedTransaction](/docs/testclasses/ResolvedSigningRequest.md#serializedtransaction)
- [signingData](/docs/testclasses/ResolvedSigningRequest.md#signingdata)
- [signingDigest](/docs/testclasses/ResolvedSigningRequest.md#signingdigest)

### Methods

- [getCallback](/docs/testclasses/ResolvedSigningRequest.md#getcallback)
- [getIdentityProof](/docs/testclasses/ResolvedSigningRequest.md#getidentityproof)
- [fromPayload](/docs/testclasses/ResolvedSigningRequest.md#frompayload)

## Constructors

### constructor

• **new ResolvedSigningRequest**(`request`, `signer`, `transaction`, `resolvedTransaction`, `chainId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SigningRequest`](/docs/testclasses/SigningRequest.md) |
| `signer` | [`PermissionLevel`](/docs/testclasses/PermissionLevel.md) |
| `transaction` | [`Transaction`](/docs/testclasses/Transaction.md) |
| `resolvedTransaction` | [`ResolvedTransaction`](/docs/testinterfaces/ResolvedTransaction.md) |
| `chainId` | [`ChainId`](/docs/testclasses/ChainId.md) |

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:555

## Properties

### chainId

• `Readonly` **chainId**: [`ChainId`](/docs/testclasses/ChainId.md)

Id of chain where the request was resolved.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:554

___

### request

• `Readonly` **request**: [`SigningRequest`](/docs/testclasses/SigningRequest.md)

The request that created the transaction.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:546

___

### resolvedTransaction

• `Readonly` **resolvedTransaction**: [`ResolvedTransaction`](/docs/testinterfaces/ResolvedTransaction.md)

Transaction object with action data decoded.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:552

___

### signer

• `Readonly` **signer**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

Expected signer of transaction.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:548

___

### transaction

• `Readonly` **transaction**: [`Transaction`](/docs/testclasses/Transaction.md)

Transaction object with action data encoded.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:550

## Accessors

### serializedTransaction

• `get` **serializedTransaction**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:556

___

### signingData

• `get` **signingData**(): [`Bytes`](/docs/testclasses/Bytes.md)

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:558

___

### signingDigest

• `get` **signingDigest**(): [`Checksum256`](/docs/testclasses/Checksum256.md)

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:557

## Methods

### getCallback

▸ **getCallback**(`signatures`, `blockNum?`): ``null`` \| [`ResolvedCallback`](/docs/testinterfaces/ResolvedCallback.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatures` | [`SignatureType`](/docs/testREADME.md#signaturetype)[] |
| `blockNum?` | `any` |

#### Returns

``null`` \| [`ResolvedCallback`](/docs/testinterfaces/ResolvedCallback.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:559

___

### getIdentityProof

▸ **getIdentityProof**(`signature`): [`IdentityProof`](/docs/testclasses/IdentityProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`SignatureType`](/docs/testREADME.md#signaturetype) |

#### Returns

[`IdentityProof`](/docs/testclasses/IdentityProof.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:560

___

### fromPayload

▸ `Static` **fromPayload**(`payload`, `options?`): `Promise`<[`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)\>

Recreate a resolved request from a callback payload.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`CallbackPayload`](/docs/testinterfaces/CallbackPayload.md) |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |

#### Returns

`Promise`<[`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)\>

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:544
