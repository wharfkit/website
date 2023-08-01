[@wharfkit/session - v1.0.0](/docs/testREADME.md) / HistoryAPI

# Class: HistoryAPI

## Table of contents

### Constructors

- [constructor](/docs/testclasses/HistoryAPI.md#constructor)

### Methods

- [get\_actions](/docs/testclasses/HistoryAPI.md#get_actions)
- [get\_controlled\_accounts](/docs/testclasses/HistoryAPI.md#get_controlled_accounts)
- [get\_key\_accounts](/docs/testclasses/HistoryAPI.md#get_key_accounts)
- [get\_transaction](/docs/testclasses/HistoryAPI.md#get_transaction)

## Constructors

### constructor

• **new HistoryAPI**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`APIClient`](/docs/testclasses/APIClient.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2156

## Methods

### get\_actions

▸ **get_actions**(`accountName`, `pos`, `offset`): `Promise`<`GetActionsResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountName` | [`NameType`](/docs/testREADME.md#nametype) |
| `pos` | `any` |
| `offset` | `any` |

#### Returns

`Promise`<`GetActionsResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2157

___

### get\_controlled\_accounts

▸ **get_controlled_accounts**(`controllingAccount`): `Promise`<`GetControlledAccountsResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `controllingAccount` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`Promise`<`GetControlledAccountsResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2163

___

### get\_key\_accounts

▸ **get_key_accounts**(`publicKey`): `Promise`<`GetKeyAccountsResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKeyType`](/docs/testREADME.md#publickeytype) |

#### Returns

`Promise`<`GetKeyAccountsResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2162

___

### get\_transaction

▸ **get_transaction**(`id`, `options?`): `Promise`<`GetTransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |
| `options?` | `Object` |
| `options.blockNumHint?` | `any` |
| `options.excludeTraces?` | `boolean` |

#### Returns

`Promise`<`GetTransactionResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2158
