[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SignatureProvider

# Interface: SignatureProvider

Interface that should be implemented by signature providers.

## Table of contents

### Properties

- [sign](/docs/testinterfaces/SignatureProvider.md#sign)

## Properties

### sign

• **sign**: (`message`: [`Checksum256`](/docs/testclasses/Checksum256.md)) => { `signature`: [`SignatureType`](/docs/testREADME.md#signaturetype) ; `signer`: [`NameType`](/docs/testREADME.md#nametype)  }

#### Type declaration

▸ (`message`): `Object`

Sign 32-byte message and return signer name and signature string.

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Checksum256`](/docs/testclasses/Checksum256.md) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `signature` | [`SignatureType`](/docs/testREADME.md#signaturetype) |
| `signer` | [`NameType`](/docs/testREADME.md#nametype) |

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:181
