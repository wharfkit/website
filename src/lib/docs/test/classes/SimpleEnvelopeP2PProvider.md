[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SimpleEnvelopeP2PProvider

# Class: SimpleEnvelopeP2PProvider

## Table of contents

### Constructors

- [constructor](/docs/testclasses/SimpleEnvelopeP2PProvider.md#constructor)

### Properties

- [maxReadLength](/docs/testclasses/SimpleEnvelopeP2PProvider.md#maxreadlength)

### Methods

- [destroy](/docs/testclasses/SimpleEnvelopeP2PProvider.md#destroy)
- [emitData](/docs/testclasses/SimpleEnvelopeP2PProvider.md#emitdata)
- [emitError](/docs/testclasses/SimpleEnvelopeP2PProvider.md#emiterror)
- [end](/docs/testclasses/SimpleEnvelopeP2PProvider.md#end)
- [on](/docs/testclasses/SimpleEnvelopeP2PProvider.md#on)
- [write](/docs/testclasses/SimpleEnvelopeP2PProvider.md#write)

## Constructors

### constructor

• **new SimpleEnvelopeP2PProvider**(`nextProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProvider` | [`P2PProvider`](/docs/testinterfaces/P2PProvider.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2258

## Properties

### maxReadLength

▪ `Static` **maxReadLength**: `number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2253

## Methods

### destroy

▸ **destroy**(`err?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `Error` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2261

___

### emitData

▸ **emitData**(`messageBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBuffer` | `Uint8Array` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2263

___

### emitError

▸ **emitError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2264

___

### end

▸ **end**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | [`P2PHandler`](/docs/testREADME.md#p2phandler) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2260

___

### on

▸ **on**<`T`\>(`event`, `handler`): [`SimpleEnvelopeP2PProvider`](/docs/testclasses/SimpleEnvelopeP2PProvider.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`P2PEventMap`](/docs/testREADME.md#p2peventmap) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `handler` | [`P2PEventMap`](/docs/testREADME.md#p2peventmap)[`T`] |

#### Returns

[`SimpleEnvelopeP2PProvider`](/docs/testclasses/SimpleEnvelopeP2PProvider.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2262

___

### write

▸ **write**(`data`, `done?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `done?` | [`P2PHandler`](/docs/testREADME.md#p2phandler) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2259
