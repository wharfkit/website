[@wharfkit/session - v1.0.0](/docs/testREADME.md) / P2PClient

# Class: P2PClient

## Table of contents

### Constructors

- [constructor](/docs/testclasses/P2PClient.md#constructor)

### Properties

- [provider](/docs/testclasses/P2PClient.md#provider)
- [\_\_className](/docs/testclasses/P2PClient.md#__classname)

### Methods

- [addListener](/docs/testclasses/P2PClient.md#addlistener)
- [destroy](/docs/testclasses/P2PClient.md#destroy)
- [end](/docs/testclasses/P2PClient.md#end)
- [on](/docs/testclasses/P2PClient.md#on)
- [once](/docs/testclasses/P2PClient.md#once)
- [prependListener](/docs/testclasses/P2PClient.md#prependlistener)
- [removeListener](/docs/testclasses/P2PClient.md#removelistener)
- [send](/docs/testclasses/P2PClient.md#send)

## Constructors

### constructor

• **new P2PClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`P2PClientOptions`](/docs/testinterfaces/P2PClientOptions.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2434

## Properties

### provider

• `Readonly` **provider**: [`P2PProvider`](/docs/testinterfaces/P2PProvider.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2429

___

### \_\_className

▪ `Static` **\_\_className**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2428

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `handler`): [`P2PClient`](/docs/testclasses/P2PClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `P2PClientEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `handler` | `P2PClientEventMap`[`T`] |

#### Returns

[`P2PClient`](/docs/testclasses/P2PClient.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2444

___

### destroy

▸ **destroy**(`err?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `Error` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2437

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2436

___

### on

▸ **on**<`T`\>(`event`, `handler`): [`P2PClient`](/docs/testclasses/P2PClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `P2PClientEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `handler` | `P2PClientEventMap`[`T`] |

#### Returns

[`P2PClient`](/docs/testclasses/P2PClient.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2442

___

### once

▸ **once**<`T`\>(`event`, `handler`): [`P2PClient`](/docs/testclasses/P2PClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `P2PClientEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `handler` | `P2PClientEventMap`[`T`] |

#### Returns

[`P2PClient`](/docs/testclasses/P2PClient.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2443

___

### prependListener

▸ **prependListener**<`T`\>(`event`, `handler`): [`P2PClient`](/docs/testclasses/P2PClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `P2PClientEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `handler` | `P2PClientEventMap`[`T`] |

#### Returns

[`P2PClient`](/docs/testclasses/P2PClient.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2445

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `handler`): [`P2PClient`](/docs/testclasses/P2PClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `P2PClientEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `handler` | `P2PClientEventMap`[`T`] |

#### Returns

[`P2PClient`](/docs/testclasses/P2PClient.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2446

___

### send

▸ **send**(`message`, `done?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`PackedTransaction`](/docs/testclasses/PackedTransaction.md) \| `HandshakeMessage` \| `ChainSizeMessage` \| `GoAwayMessage` \| `TimeMessage` \| `NoticeMessage` \| `RequestMessage` \| `SyncRequestMessage` \| `SignedBlock` |
| `done?` | [`P2PHandler`](/docs/testREADME.md#p2phandler) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2435
