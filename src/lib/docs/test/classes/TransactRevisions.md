[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactRevisions

# Class: TransactRevisions

## Table of contents

### Constructors

- [constructor](/docs/testclasses/TransactRevisions.md#constructor)

### Properties

- [revisions](/docs/testclasses/TransactRevisions.md#revisions)

### Methods

- [addRevision](/docs/testclasses/TransactRevisions.md#addrevision)

## Constructors

### constructor

• **new TransactRevisions**(`request`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SigningRequest`](/docs/testclasses/SigningRequest.md) |

#### Defined in

[src/transact.ts:270](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L270)

## Properties

### revisions

• `Readonly` **revisions**: [`TransactRevision`](/docs/testinterfaces/TransactRevision.md)[] = `[]`

#### Defined in

[src/transact.ts:269](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L269)

## Methods

### addRevision

▸ **addRevision**(`response`, `code`, `allowModify`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`TransactHookResponse`](/docs/testinterfaces/TransactHookResponse.md) |
| `code` | `string` |
| `allowModify` | `boolean` |

#### Returns

`void`

#### Defined in

[src/transact.ts:273](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L273)
