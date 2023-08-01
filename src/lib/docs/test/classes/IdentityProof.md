[@wharfkit/session - v1.0.0](/docs/testREADME.md) / IdentityProof

# Class: IdentityProof

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`IdentityProof`**

## Table of contents

### Properties

- [chainId](/docs/testclasses/IdentityProof.md#chainid)
- [expiration](/docs/testclasses/IdentityProof.md#expiration)
- [scope](/docs/testclasses/IdentityProof.md#scope)
- [signature](/docs/testclasses/IdentityProof.md#signature)
- [signer](/docs/testclasses/IdentityProof.md#signer)
- [abiBase](/docs/testclasses/IdentityProof.md#abibase)
- [abiFields](/docs/testclasses/IdentityProof.md#abifields)
- [abiName](/docs/testclasses/IdentityProof.md#abiname)

### Accessors

- [structFields](/docs/testclasses/IdentityProof.md#structfields)

### Methods

- [equals](/docs/testclasses/IdentityProof.md#equals)
- [recover](/docs/testclasses/IdentityProof.md#recover)
- [toString](/docs/testclasses/IdentityProof.md#tostring)
- [verify](/docs/testclasses/IdentityProof.md#verify)
- [from](/docs/testclasses/IdentityProof.md#from)
- [fromPayload](/docs/testclasses/IdentityProof.md#frompayload)
- [fromString](/docs/testclasses/IdentityProof.md#fromstring)

## Properties

### chainId

• **chainId**: [`ChainId`](/docs/testclasses/ChainId.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:123

___

### expiration

• **expiration**: [`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:125

___

### scope

• **scope**: [`Name`](/docs/testclasses/Name.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:124

___

### signature

• **signature**: [`Signature`](/docs/testclasses/Signature.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:127

___

### signer

• **signer**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:126

___

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiBase](/docs/testclasses/Struct-1.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiFields](/docs/testclasses/Struct-1.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiName](/docs/testclasses/Struct-1.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

#### Inherited from

Struct.structFields

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:696

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this struct equals the other.

Note: This compares the ABI encoded bytes of both structs, subclasses
      should implement their own fast equality check when possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[equals](/docs/testclasses/Struct-1.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:705

___

### recover

▸ **recover**(): [`PublicKey`](/docs/testclasses/PublicKey.md)

Recover the public key that signed this proof.

#### Returns

[`PublicKey`](/docs/testclasses/PublicKey.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:144

___

### toString

▸ **toString**(): `string`

Encode the proof to an `EOSIO` auth header string.

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:154

___

### verify

▸ **verify**(`auth`, `currentTime?`): `boolean`

Verify that given authority signed this proof.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `auth` | [`AuthorityType`](/docs/testREADME.md#authoritytype) | The accounts signing authority. |
| `currentTime?` | `any` | Time to verify expiry against, if unset will use system time. |

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:150

___

### from

▸ `Static` **from**(`value`): [`IdentityProof`](/docs/testclasses/IdentityProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IdentityProofType`](/docs/testREADME.md#identityprooftype) |

#### Returns

[`IdentityProof`](/docs/testclasses/IdentityProof.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:128

___

### fromPayload

▸ `Static` **fromPayload**(`payload`, `options?`): [`IdentityProof`](/docs/testclasses/IdentityProof.md)

Create a new instance from a callback payload.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`CallbackPayload`](/docs/testinterfaces/CallbackPayload.md) |
| `options?` | [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md) |

#### Returns

[`IdentityProof`](/docs/testclasses/IdentityProof.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:135

___

### fromString

▸ `Static` **fromString**(`string`): [`IdentityProof`](/docs/testclasses/IdentityProof.md)

Create a new instance from an EOSIO authorization header string.
"EOSIO <base64payload>"

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

[`IdentityProof`](/docs/testclasses/IdentityProof.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:133
