[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SigningRequestCreateArguments

# Interface: SigningRequestCreateArguments

## Hierarchy

- `SigningRequestCommonArguments`

  ↳ **`SigningRequestCreateArguments`**

## Table of contents

### Properties

- [action](/docs/testinterfaces/SigningRequestCreateArguments.md#action)
- [actions](/docs/testinterfaces/SigningRequestCreateArguments.md#actions)
- [broadcast](/docs/testinterfaces/SigningRequestCreateArguments.md#broadcast)
- [callback](/docs/testinterfaces/SigningRequestCreateArguments.md#callback)
- [chainId](/docs/testinterfaces/SigningRequestCreateArguments.md#chainid)
- [chainIds](/docs/testinterfaces/SigningRequestCreateArguments.md#chainids)
- [identity](/docs/testinterfaces/SigningRequestCreateArguments.md#identity)
- [info](/docs/testinterfaces/SigningRequestCreateArguments.md#info)
- [transaction](/docs/testinterfaces/SigningRequestCreateArguments.md#transaction)

## Properties

### action

• `Optional` **action**: [`AnyAction`](/docs/testinterfaces/AnyAction.md)

Single action to create request with.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:339

___

### actions

• `Optional` **actions**: [`AnyAction`](/docs/testinterfaces/AnyAction.md)[]

Multiple actions to create request with.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:341

___

### broadcast

• `Optional` **broadcast**: `boolean`

Whether wallet should broadcast tx, defaults to true.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:353

___

### callback

• `Optional` **callback**: [`CallbackType`](/docs/testREADME.md#callbacktype)

Optional callback URL the signer should hit after
broadcasting or signing. Passing a string means background = false.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:358

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

### identity

• `Optional` **identity**: `Object`

Create an identity request.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `permission?` | [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype) |
| `scope?` | [`NameType`](/docs/testREADME.md#nametype) |

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:348

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

### transaction

• `Optional` **transaction**: `Partial`<[`AnyTransaction`](/docs/testinterfaces/AnyTransaction.md)\>

Full or partial transaction to create request with.
If TAPoS info is omitted it will be filled in when resolving the request.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:346
