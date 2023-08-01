[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ResolvedCallback

# Interface: ResolvedCallback

Context used to resolve a callback.
Compatible with the JSON response from a `push_transaction` call.

## Table of contents

### Properties

- [background](/docs/testinterfaces/ResolvedCallback.md#background)
- [payload](/docs/testinterfaces/ResolvedCallback.md#payload)
- [url](/docs/testinterfaces/ResolvedCallback.md#url)

## Properties

### background

• **background**: `boolean`

Whether to run the request in the background. For a https url this
means POST in the background instead of a GET redirect.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:224

___

### payload

• **payload**: [`CallbackPayload`](/docs/testinterfaces/CallbackPayload.md)

The callback payload as a object that should be encoded to JSON
and POSTed to background callbacks.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:229

___

### url

• **url**: `string`

The URL to hit.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:219
