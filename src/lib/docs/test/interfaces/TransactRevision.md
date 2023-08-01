[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactRevision

# Interface: TransactRevision

## Table of contents

### Properties

- [allowModify](/docs/testinterfaces/TransactRevision.md#allowmodify)
- [code](/docs/testinterfaces/TransactRevision.md#code)
- [modified](/docs/testinterfaces/TransactRevision.md#modified)
- [response](/docs/testinterfaces/TransactRevision.md#response)

## Properties

### allowModify

• **allowModify**: `boolean`

Whether or not the context allowed any modification to take effect.

#### Defined in

[src/transact.ts:250](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L250)

___

### code

• **code**: `string`

The string representation of the code executed.

#### Defined in

[src/transact.ts:254](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L254)

___

### modified

• **modified**: `boolean`

If the request was modified by this code.

#### Defined in

[src/transact.ts:258](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L258)

___

### response

• **response**: `Object`

The response from the code that was executed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | `string` |
| `signatures` | `string`[] |

#### Defined in

[src/transact.ts:262](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L262)
