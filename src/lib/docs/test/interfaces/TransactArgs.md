[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactArgs

# Interface: TransactArgs

Payload accepted by the [[Session.transact]] method.
Note that one of `action`, `actions` or `transaction` must be set.

## Table of contents

### Properties

- [action](/docs/testinterfaces/TransactArgs.md#action)
- [actions](/docs/testinterfaces/TransactArgs.md#actions)
- [request](/docs/testinterfaces/TransactArgs.md#request)
- [transaction](/docs/testinterfaces/TransactArgs.md#transaction)

## Properties

### action

• `Optional` **action**: [`AnyAction`](/docs/testinterfaces/AnyAction.md)

Action to sign.

#### Defined in

[src/transact.ts:188](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L188)

___

### actions

• `Optional` **actions**: [`AnyAction`](/docs/testinterfaces/AnyAction.md)[]

Actions to sign.

#### Defined in

[src/transact.ts:190](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L190)

___

### request

• `Optional` **request**: `string` \| [`SigningRequest`](/docs/testclasses/SigningRequest.md)

An ESR payload

#### Defined in

[src/transact.ts:192](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L192)

___

### transaction

• `Optional` **transaction**: [`AnyTransaction`](/docs/testinterfaces/AnyTransaction.md)

Full transaction to sign.

#### Defined in

[src/transact.ts:186](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L186)
