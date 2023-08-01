[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SigningRequestCreateIdentityArguments

# Interface: SigningRequestCreateIdentityArguments

## Hierarchy

- `SigningRequestCommonArguments`

  ↳ **`SigningRequestCreateIdentityArguments`**

## Table of contents

### Properties

- [account](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#account)
- [callback](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#callback)
- [chainId](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#chainid)
- [chainIds](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#chainids)
- [info](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#info)
- [permission](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#permission)
- [scope](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md#scope)

## Properties

### account

• `Optional` **account**: [`NameType`](/docs/testREADME.md#nametype)

Requested account name of identity.
Defaults to placeholder (any identity) if omitted.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:369

___

### callback

• **callback**: [`CallbackType`](/docs/testREADME.md#callbacktype)

Callback where the identity should be delivered.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:364

___

### chainId

• `Optional` **chainId**: ``null`` \| [`ChainIdType`](/docs/testREADME.md#chainidtype)

Chain ID to use, can be set to `null` for a multi-chain request.
Defaults to EOS if omitted.

#### Inherited from

SigningRequestCommonArguments.chainId

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:326

___

### chainIds

• `Optional` **chainIds**: [`ChainIdType`](/docs/testREADME.md#chainidtype)[]

Chain IDs to constrain a multi-chain request to.
Only considered if `chainId` is explicitly set to `null.

#### Inherited from

SigningRequestCommonArguments.chainIds

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:331

___

### info

• `Optional` **info**: `Object`

Optional metadata to pass along with the request.

#### Index signature

▪ [key: `string`]: [`Bytes`](/docs/testclasses/Bytes.md) \| [`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Inherited from

SigningRequestCommonArguments.info

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:333

___

### permission

• `Optional` **permission**: [`NameType`](/docs/testREADME.md#nametype)

Requested account permission.
Defaults to placeholder (any permission) if omitted.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:374

___

### scope

• `Optional` **scope**: [`NameType`](/docs/testREADME.md#nametype)

Scope for the request.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:378
