[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ResolvedAction

# Interface: ResolvedAction

## Table of contents

### Properties

- [account](/docs/testinterfaces/ResolvedAction.md#account)
- [authorization](/docs/testinterfaces/ResolvedAction.md#authorization)
- [data](/docs/testinterfaces/ResolvedAction.md#data)
- [name](/docs/testinterfaces/ResolvedAction.md#name)

## Properties

### account

• **account**: [`Name`](/docs/testclasses/Name.md)

The account (a.k.a. contract) to run action on.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:289

___

### authorization

• **authorization**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)[]

The permissions authorizing the action.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:293

___

### data

• **data**: `Record`<`string`, [`ABISerializable`](/docs/testREADME.md#abiserializable)\>

The decoded action data.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:295

___

### name

• **name**: [`Name`](/docs/testclasses/Name.md)

The name of the action.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:291
