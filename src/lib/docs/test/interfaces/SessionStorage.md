[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SessionStorage

# Interface: SessionStorage

Interface storage adapters should implement.

Storage adapters are responsible for persisting [[Session]]s and can optionally be
passed to the [[SessionKit]] constructor to auto-persist sessions.

## Implemented by

- [`BrowserLocalStorage`](/docs/testclasses/BrowserLocalStorage.md)

## Table of contents

### Methods

- [read](/docs/testinterfaces/SessionStorage.md#read)
- [remove](/docs/testinterfaces/SessionStorage.md#remove)
- [write](/docs/testinterfaces/SessionStorage.md#write)

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

#### Defined in

[src/storage.ts:11](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L11)

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

#### Defined in

[src/storage.ts:13](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L13)

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

#### Defined in

[src/storage.ts:9](https://github.com/wharfkit/session/blob/3f0b05c/src/storage.ts#L9)
