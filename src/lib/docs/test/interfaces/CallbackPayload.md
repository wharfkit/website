[@wharfkit/session - v1.0.0](/docs/testREADME.md) / CallbackPayload

# Interface: CallbackPayload

The callback payload sent to background callbacks.

## Indexable

▪ [sig0: `string`]: `string` \| `undefined`

## Table of contents

### Properties

- [bn](/docs/testinterfaces/CallbackPayload.md#bn)
- [cid](/docs/testinterfaces/CallbackPayload.md#cid)
- [ex](/docs/testinterfaces/CallbackPayload.md#ex)
- [rbn](/docs/testinterfaces/CallbackPayload.md#rbn)
- [req](/docs/testinterfaces/CallbackPayload.md#req)
- [rid](/docs/testinterfaces/CallbackPayload.md#rid)
- [sa](/docs/testinterfaces/CallbackPayload.md#sa)
- [sig](/docs/testinterfaces/CallbackPayload.md#sig)
- [sp](/docs/testinterfaces/CallbackPayload.md#sp)
- [tx](/docs/testinterfaces/CallbackPayload.md#tx)

## Properties

### bn

• `Optional` **bn**: `string`

Block number hint (only present if transaction was broadcast).

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:195

___

### cid

• `Optional` **cid**: `string`

The resolved chain id.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:209

___

### ex

• **ex**: `string`

Expiration time used when resolving request.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:207

___

### rbn

• **rbn**: `string`

Reference block num used when resolving request.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:201

___

### req

• **req**: `string`

The originating signing request packed as a uri string.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:205

___

### rid

• **rid**: `string`

Reference block id used when resolving request.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:203

___

### sa

• **sa**: `string`

Signer authority, aka account name.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:197

___

### sig

• **sig**: `string`

The first signature.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:191

___

### sp

• **sp**: `string`

Signer permission, e.g. "active".

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:199

___

### tx

• **tx**: `string`

Transaction ID as HEX-encoded string.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:193
