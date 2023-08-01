[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SigningRequest

# Class: SigningRequest

## Table of contents

### Constructors

- [constructor](/docs/testclasses/SigningRequest.md#constructor)

### Properties

- [data](/docs/testclasses/SigningRequest.md#data)
- [signature](/docs/testclasses/SigningRequest.md#signature)
- [version](/docs/testclasses/SigningRequest.md#version)

### Methods

- [clone](/docs/testclasses/SigningRequest.md#clone)
- [encode](/docs/testclasses/SigningRequest.md#encode)
- [fetchAbis](/docs/testclasses/SigningRequest.md#fetchabis)
- [getChainId](/docs/testclasses/SigningRequest.md#getchainid)
- [getChainIds](/docs/testclasses/SigningRequest.md#getchainids)
- [getData](/docs/testclasses/SigningRequest.md#getdata)
- [getIdentity](/docs/testclasses/SigningRequest.md#getidentity)
- [getIdentityPermission](/docs/testclasses/SigningRequest.md#getidentitypermission)
- [getIdentityScope](/docs/testclasses/SigningRequest.md#getidentityscope)
- [getInfoKey](/docs/testclasses/SigningRequest.md#getinfokey)
- [getRawActions](/docs/testclasses/SigningRequest.md#getrawactions)
- [getRawInfo](/docs/testclasses/SigningRequest.md#getrawinfo)
- [getRawInfoKey](/docs/testclasses/SigningRequest.md#getrawinfokey)
- [getRawTransaction](/docs/testclasses/SigningRequest.md#getrawtransaction)
- [getRequiredAbis](/docs/testclasses/SigningRequest.md#getrequiredabis)
- [getSignatureData](/docs/testclasses/SigningRequest.md#getsignaturedata)
- [getSignatureDigest](/docs/testclasses/SigningRequest.md#getsignaturedigest)
- [isIdentity](/docs/testclasses/SigningRequest.md#isidentity)
- [isMultiChain](/docs/testclasses/SigningRequest.md#ismultichain)
- [requiresTapos](/docs/testclasses/SigningRequest.md#requirestapos)
- [resolve](/docs/testclasses/SigningRequest.md#resolve)
- [resolveActions](/docs/testclasses/SigningRequest.md#resolveactions)
- [resolveTransaction](/docs/testclasses/SigningRequest.md#resolvetransaction)
- [setBroadcast](/docs/testclasses/SigningRequest.md#setbroadcast)
- [setCallback](/docs/testclasses/SigningRequest.md#setcallback)
- [setChainIds](/docs/testclasses/SigningRequest.md#setchainids)
- [setInfoKey](/docs/testclasses/SigningRequest.md#setinfokey)
- [setRawInfoKey](/docs/testclasses/SigningRequest.md#setrawinfokey)
- [setSignature](/docs/testclasses/SigningRequest.md#setsignature)
- [shouldBroadcast](/docs/testclasses/SigningRequest.md#shouldbroadcast)
- [sign](/docs/testclasses/SigningRequest.md#sign)
- [toJSON](/docs/testclasses/SigningRequest.md#tojson)
- [toString](/docs/testclasses/SigningRequest.md#tostring)
- [create](/docs/testclasses/SigningRequest.md#create)
- [createSync](/docs/testclasses/SigningRequest.md#createsync)
- [from](/docs/testclasses/SigningRequest.md#from)
- [fromData](/docs/testclasses/SigningRequest.md#fromdata)
- [fromTransaction](/docs/testclasses/SigningRequest.md#fromtransaction)
- [identity](/docs/testclasses/SigningRequest.md#identity)

## Constructors

### constructor

• **new SigningRequest**(`version`, `data`, `zlib?`, `abiProvider?`, `signature?`)

Create a new signing request.
Normally not used directly, see the `create` and `from` class methods.

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |
| `data` | [`RequestDataV2`](/docs/testclasses/RequestDataV2.md) \| [`RequestDataV3`](/docs/testclasses/RequestDataV3.md) |
| `zlib?` | [`ZlibProvider`](/docs/testinterfaces/ZlibProvider.md) |
| `abiProvider?` | [`AbiProvider`](/docs/testinterfaces/AbiProvider.md) |
| `signature?` | [`RequestSignature`](/docs/testclasses/RequestSignature.md) |

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:427

## Properties

### data

• **data**: [`RequestDataV2`](/docs/testclasses/RequestDataV2.md) \| [`RequestDataV3`](/docs/testclasses/RequestDataV3.md)

The raw signing request data.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:418

___

### signature

• `Optional` **signature**: [`RequestSignature`](/docs/testclasses/RequestSignature.md)

The request signature.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:420

___

### version

• **version**: `number`

The signing request version.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:416

## Methods

### clone

▸ **clone**(): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

Return a deep copy of this request.

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:538

___

### encode

▸ **encode**(`compress?`, `slashes?`, `scheme?`): `string`

Encode this request into an `esr:` uri.

#### Parameters

| Name | Type |
| :------ | :------ |
| `compress?` | `boolean` |
| `slashes?` | `boolean` |
| `scheme?` | `string` |

#### Returns

`string`

An esr uri string.

**`Argument`**

compress Whether to compress the request data using zlib,
                   defaults to true if omitted and zlib is present;
                   otherwise false.

**`Argument`**

slashes Whether add slashes after the protocol scheme, i.e. `esr://`.
                  Defaults to true.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:463

___

### fetchAbis

▸ **fetchAbis**(`abiProvider?`): `Promise`<[`AbiMap`](/docs/testREADME.md#abimap)\>

Resolve required ABI definitions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `abiProvider?` | [`AbiProvider`](/docs/testinterfaces/AbiProvider.md) |

#### Returns

`Promise`<[`AbiMap`](/docs/testREADME.md#abimap)\>

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:473

___

### getChainId

▸ **getChainId**(): [`ChainId`](/docs/testclasses/ChainId.md)

Get the id of the chain where this request is valid.

#### Returns

[`ChainId`](/docs/testclasses/ChainId.md)

The 32-byte chain id as hex encoded string.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:486

___

### getChainIds

▸ **getChainIds**(): ``null`` \| [`ChainId`](/docs/testclasses/ChainId.md)[]

Chain IDs this request is valid for, only valid for multi chain requests. Value of `null` when `isMultiChain` is true denotes any chain.

#### Returns

``null`` \| [`ChainId`](/docs/testclasses/ChainId.md)[]

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:490

___

### getData

▸ **getData**(): `Uint8Array`

Get the request data without header or signature.

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:465

___

### getIdentity

▸ **getIdentity**(): ``null`` \| [`Name`](/docs/testclasses/Name.md)

Present if the request is an identity request and requests a specific account.

#### Returns

``null`` \| [`Name`](/docs/testclasses/Name.md)

**`Note`**

This returns `nil` unless a specific identity has been requested,
      use `isIdentity` to check id requests.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:512

___

### getIdentityPermission

▸ **getIdentityPermission**(): ``null`` \| [`Name`](/docs/testclasses/Name.md)

Present if the request is an identity request and requests a specific permission.

#### Returns

``null`` \| [`Name`](/docs/testclasses/Name.md)

**`Note`**

This returns `nil` unless a specific permission has been requested,
      use `isIdentity` to check id requests.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:518

___

### getIdentityScope

▸ **getIdentityScope**(): ``null`` \| [`Name`](/docs/testclasses/Name.md)

Present if the request is an identity request and requests a specific permission.

#### Returns

``null`` \| [`Name`](/docs/testclasses/Name.md)

**`Note`**

This returns `nil` unless a specific permission has been requested,
      use `isIdentity` to check id requests.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:524

___

### getInfoKey

▸ **getInfoKey**(`key`): `string`

Get a metadata key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:534

▸ **getInfoKey**<`T`\>(`key`, `type`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `type` | `T` |

#### Returns

`InstanceType`<`T`\>

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:535

▸ **getInfoKey**(`key`, `type`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `type` | [`ABISerializableType`](/docs/testREADME.md#abiserializabletype) |

#### Returns

`any`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:536

___

### getRawActions

▸ **getRawActions**(): [`Action`](/docs/testclasses/Action.md)[]

Return the actions in this request with action data encoded.

#### Returns

[`Action`](/docs/testclasses/Action.md)[]

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:500

___

### getRawInfo

▸ **getRawInfo**(): `Object`

Get raw info dict

#### Returns

`Object`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:526

___

### getRawInfoKey

▸ **getRawInfoKey**(`key`): `undefined` \| [`Bytes`](/docs/testclasses/Bytes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:529

___

### getRawTransaction

▸ **getRawTransaction**(): [`Transaction`](/docs/testclasses/Transaction.md)

Unresolved transaction.

#### Returns

[`Transaction`](/docs/testclasses/Transaction.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:502

___

### getRequiredAbis

▸ **getRequiredAbis**(): [`Name`](/docs/testclasses/Name.md)[]

ABI definitions required to resolve request.

#### Returns

[`Name`](/docs/testclasses/Name.md)[]

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:469

___

### getSignatureData

▸ **getSignatureData**(): `Uint8Array`

Get signature data, returns an empty array if request is not signed.

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:467

___

### getSignatureDigest

▸ **getSignatureDigest**(): [`Checksum256`](/docs/testclasses/Checksum256.md)

Get the signature digest for this request.

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:436

___

### isIdentity

▸ **isIdentity**(): `boolean`

Whether the request is an identity request.

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:504

___

### isMultiChain

▸ **isMultiChain**(): `boolean`

True if chainId is set to chain alias `0` which indicates that the request is valid for any chain.

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:498

___

### requiresTapos

▸ **requiresTapos**(): `boolean`

Whether TaPoS values are required to resolve request.

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:471

___

### resolve

▸ **resolve**(`abis`, `signer`, `ctx?`): [`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abis` | [`AbiMap`](/docs/testREADME.md#abimap) |
| `signer` | [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype) |
| `ctx?` | [`TransactionContext`](/docs/testinterfaces/TransactionContext.md) |

#### Returns

[`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:481

___

### resolveActions

▸ **resolveActions**(`abis`, `signer?`): [`ResolvedAction`](/docs/testinterfaces/ResolvedAction.md)[]

Decode raw actions actions to object representations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `abis` | [`AbiMap`](/docs/testREADME.md#abimap) | ABI defenitions required to decode all actions. |
| `signer?` | [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype) | Placeholders in actions will be resolved to signer if set. |

#### Returns

[`ResolvedAction`](/docs/testinterfaces/ResolvedAction.md)[]

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:479

___

### resolveTransaction

▸ **resolveTransaction**(`abis`, `signer`, `ctx?`): [`ResolvedTransaction`](/docs/testinterfaces/ResolvedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abis` | [`AbiMap`](/docs/testREADME.md#abimap) |
| `signer` | [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype) |
| `ctx?` | [`TransactionContext`](/docs/testinterfaces/TransactionContext.md) |

#### Returns

[`ResolvedTransaction`](/docs/testinterfaces/ResolvedTransaction.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:480

___

### setBroadcast

▸ **setBroadcast**(`broadcast`): `void`

Set broadcast flag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `broadcast` | `boolean` | Whether the transaction should be broadcast by receiver. |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:453

___

### setCallback

▸ **setCallback**(`url`, `background`): `void`

Set the request callback, mutating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Where the callback should be sent. |
| `background` | `boolean` | Whether the callback should be sent in the background. |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:448

___

### setChainIds

▸ **setChainIds**(`ids`): `void`

Set chain IDs this request is valid for, only considered for multi chain requests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`ChainIdType`](/docs/testREADME.md#chainidtype)[] |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:494

___

### setInfoKey

▸ **setInfoKey**(`key`, `object`, `type?`): `void`

Set a metadata key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `object` | [`ABISerializable`](/docs/testREADME.md#abiserializable) |
| `type?` | [`ABISerializableType`](/docs/testREADME.md#abiserializabletype) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:532

___

### setRawInfoKey

▸ **setRawInfoKey**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:530

___

### setSignature

▸ **setSignature**(`signer`, `signature`): `void`

Set the signature data for this request, mutating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `string` | Account name of signer. |
| `signature` | `string` | The signature string. |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:442

___

### shouldBroadcast

▸ **shouldBroadcast**(): `boolean`

Whether the request should be broadcast by signer.

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:506

___

### sign

▸ **sign**(`signatureProvider`): `void`

Sign the request, mutating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signatureProvider` | [`SignatureProvider`](/docs/testinterfaces/SignatureProvider.md) | The signature provider that provides a signature for the signer. |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:432

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:540

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:539

___

### create

▸ `Static` **create**(`args`, `options?`): `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

Create a new signing request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SigningRequestCreateArguments`](/docs/testinterfaces/SigningRequestCreateArguments.md) |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |

#### Returns

`Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:397

___

### createSync

▸ `Static` **createSync**(`args`, `options?`, `abis?`): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

Synchronously create a new signing request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SigningRequestCreateArguments`](/docs/testinterfaces/SigningRequestCreateArguments.md) |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |
| `abis?` | `Record`<`string`, [`ABIDef`](/docs/testREADME.md#abidef)\> |

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

**`Throws`**

If an un-encoded action with no abi def is encountered.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:402

___

### from

▸ `Static` **from**(`uri`, `options?`): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

Creates a signing request from encoded `esr:` uri string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:413

___

### fromData

▸ `Static` **fromData**(`data`, `options?`): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesType`](/docs/testREADME.md#bytestype) |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:414

___

### fromTransaction

▸ `Static` **fromTransaction**(`chainId`, `serializedTransaction`, `options?`): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

Create a request from a chain id and serialized transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | [`ChainIdType`](/docs/testREADME.md#chainidtype) | The chain id where the transaction is valid. |
| `serializedTransaction` | [`BytesType`](/docs/testREADME.md#bytestype) | The serialized transaction. |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) | Creation options. |

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:411

___

### identity

▸ `Static` **identity**(`args`, `options?`): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

Creates an identity request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SigningRequestCreateIdentityArguments`](/docs/testinterfaces/SigningRequestCreateIdentityArguments.md) |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:404
