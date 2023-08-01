[@wharfkit/session - v1.0.0](/docs/testREADME.md) / P2PProvider

# Interface: P2PProvider

Provider interface for P2P protocol responsible for re-assembling full message payloads before
delivering them upstream via event emission

## Table of contents

### Methods

- [destroy](/docs/testinterfaces/P2PProvider.md#destroy)
- [end](/docs/testinterfaces/P2PProvider.md#end)
- [on](/docs/testinterfaces/P2PProvider.md#on)
- [write](/docs/testinterfaces/P2PProvider.md#write)

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2249

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2248

___

### on

▸ **on**<`T`\>(`event`, `handler`): [`P2PProvider`](/docs/testinterfaces/P2PProvider.md)

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

[`P2PProvider`](/docs/testinterfaces/P2PProvider.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2250

___

### write

▸ **write**(`encodedMessage`, `done?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedMessage` | `Uint8Array` |
| `done?` | [`P2PHandler`](/docs/testREADME.md#p2phandler) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2247
