[@wharfkit/session - v1.0.0](/docs/testREADME.md) / BrowserLocalStorage

# Class: BrowserLocalStorage

Interface storage adapters should implement.

Storage adapters are responsible for persisting [[Session]]s and can optionally be
passed to the [[SessionKit]] constructor to auto-persist sessions.

## Implements

- [`SessionStorage`](/docs/testinterfaces/SessionStorage.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/BrowserLocalStorage.md#constructor)

### Properties

- [keyPrefix](/docs/testclasses/BrowserLocalStorage.md#keyprefix)

### Methods

- [read](/docs/testclasses/BrowserLocalStorage.md#read)
- [remove](/docs/testclasses/BrowserLocalStorage.md#remove)
- [storageKey](/docs/testclasses/BrowserLocalStorage.md#storagekey)
- [write](/docs/testclasses/BrowserLocalStorage.md#write)

## Constructors

### constructor

• **new BrowserLocalStorage**(`keyPrefix?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyPrefix` | `string` | `''` |

#### Defined in

[src/storage.ts:17](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L17)

## Properties

### keyPrefix

• `Readonly` **keyPrefix**: `string` = `''`

#### Defined in

[src/storage.ts:17](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L17)

## Methods

### read

▸ **read**(`key`): `Promise`<``null`` \| `string`\>

Read key from storage. Should return `null` if key can not be found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

[SessionStorage](/docs/testinterfaces/SessionStorage.md).[read](/docs/testinterfaces/SessionStorage.md#read)

#### Defined in

[src/storage.ts:21](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L21)

___

### remove

▸ **remove**(`key`): `Promise`<`void`\>

Delete key from storage. Should not error if deleting non-existing key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[SessionStorage](/docs/testinterfaces/SessionStorage.md).[remove](/docs/testinterfaces/SessionStorage.md#remove)

#### Defined in

[src/storage.ts:24](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L24)

___

### storageKey

▸ **storageKey**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[src/storage.ts:27](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L27)

___

### write

▸ **write**(`key`, `data`): `Promise`<`void`\>

Write string to storage at key. Should overwrite existing values without error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[SessionStorage](/docs/testinterfaces/SessionStorage.md).[write](/docs/testinterfaces/SessionStorage.md#write)

#### Defined in

[src/storage.ts:18](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L18)
