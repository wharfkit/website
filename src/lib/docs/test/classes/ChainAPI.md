[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ChainAPI

# Class: ChainAPI

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ChainAPI.md#constructor)

### Methods

- [compute\_transaction](/docs/testclasses/ChainAPI.md#compute_transaction)
- [get\_abi](/docs/testclasses/ChainAPI.md#get_abi)
- [get\_account](/docs/testclasses/ChainAPI.md#get_account)
- [get\_accounts\_by\_authorizers](/docs/testclasses/ChainAPI.md#get_accounts_by_authorizers)
- [get\_activated\_protocol\_features](/docs/testclasses/ChainAPI.md#get_activated_protocol_features)
- [get\_block](/docs/testclasses/ChainAPI.md#get_block)
- [get\_block\_header\_state](/docs/testclasses/ChainAPI.md#get_block_header_state)
- [get\_currency\_balance](/docs/testclasses/ChainAPI.md#get_currency_balance)
- [get\_info](/docs/testclasses/ChainAPI.md#get_info)
- [get\_producer\_schedule](/docs/testclasses/ChainAPI.md#get_producer_schedule)
- [get\_raw\_abi](/docs/testclasses/ChainAPI.md#get_raw_abi)
- [get\_table\_by\_scope](/docs/testclasses/ChainAPI.md#get_table_by_scope)
- [get\_table\_rows](/docs/testclasses/ChainAPI.md#get_table_rows)
- [get\_transaction\_status](/docs/testclasses/ChainAPI.md#get_transaction_status)
- [push\_transaction](/docs/testclasses/ChainAPI.md#push_transaction)
- [send\_read\_only\_transaction](/docs/testclasses/ChainAPI.md#send_read_only_transaction)
- [send\_transaction](/docs/testclasses/ChainAPI.md#send_transaction)
- [send\_transaction2](/docs/testclasses/ChainAPI.md#send_transaction2)

## Constructors

### constructor

• **new ChainAPI**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`APIClient`](/docs/testclasses/APIClient.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2130

## Methods

### compute\_transaction

▸ **compute_transaction**(`tx`): `Promise`<`SendTransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`SignedTransactionType`](/docs/testREADME.md#signedtransactiontype) \| [`PackedTransaction`](/docs/testclasses/PackedTransaction.md) |

#### Returns

`Promise`<`SendTransactionResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2141

___

### get\_abi

▸ **get_abi**(`accountName`): `Promise`<`GetAbiResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountName` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`Promise`<`GetAbiResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2131

___

### get\_account

▸ **get_account**(`accountName`): `Promise`<`AccountObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountName` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`Promise`<`AccountObject`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2133

___

### get\_accounts\_by\_authorizers

▸ **get_accounts_by_authorizers**(`keys`): `Promise`<`AccountsByAuthorizers`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | [`PublicKeyType`](/docs/testREADME.md#publickeytype)[] |

#### Returns

`Promise`<`AccountsByAuthorizers`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2134

___

### get\_activated\_protocol\_features

▸ **get_activated_protocol_features**(`params?`): `Promise`<`GetProtocolFeaturesResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `GetProtocolFeaturesParams` |

#### Returns

`Promise`<`GetProtocolFeaturesResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2135

___

### get\_block

▸ **get_block**(`block_num_or_id`): `Promise`<`GetBlockResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block_num_or_id` | `any` |

#### Returns

`Promise`<`GetBlockResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2136

___

### get\_block\_header\_state

▸ **get_block_header_state**(`block_num_or_id`): `Promise`<`GetBlockHeaderStateResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block_num_or_id` | `any` |

#### Returns

`Promise`<`GetBlockHeaderStateResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2137

___

### get\_currency\_balance

▸ **get_currency_balance**(`contract`, `accountName`, `symbol?`): `Promise`<[`Asset`](/docs/testclasses/Asset-1.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | [`NameType`](/docs/testREADME.md#nametype) |
| `accountName` | [`NameType`](/docs/testREADME.md#nametype) |
| `symbol?` | `string` |

#### Returns

`Promise`<[`Asset`](/docs/testclasses/Asset-1.md)[]\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2138

___

### get\_info

▸ **get_info**(): `Promise`<`GetInfoResponse`\>

#### Returns

`Promise`<`GetInfoResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2139

___

### get\_producer\_schedule

▸ **get_producer_schedule**(): `Promise`<`GetProducerScheduleResponse`\>

#### Returns

`Promise`<`GetProducerScheduleResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2140

___

### get\_raw\_abi

▸ **get_raw_abi**(`accountName`): `Promise`<`GetRawAbiResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountName` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`Promise`<`GetRawAbiResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2132

___

### get\_table\_by\_scope

▸ **get_table_by_scope**(`params`): `Promise`<`GetTableByScopeResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `GetTableByScopeParams` |

#### Returns

`Promise`<`GetTableByScopeResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2150

___

### get\_table\_rows

▸ **get_table_rows**<`Index`\>(`params`): `Promise`<`GetTableRowsResponse`<`Index`, `any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Index` | extends `TableIndexType` = [`Name`](/docs/testclasses/Name.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `GetTableRowsParams`<`Index`\> |

#### Returns

`Promise`<`GetTableRowsResponse`<`Index`, `any`\>\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2146

▸ **get_table_rows**<`Key`\>(`params`): `Promise`<`GetTableRowsResponse`<`TableIndexTypes`[`Key`], `any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof `TableIndexTypes` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `GetTableRowsParamsKeyed`<`TableIndexTypes`[`Key`], `Key`\> |

#### Returns

`Promise`<`GetTableRowsResponse`<`TableIndexTypes`[`Key`], `any`\>\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2147

▸ **get_table_rows**<`Row`, `Index`\>(`params`): `Promise`<`GetTableRowsResponse`<`Index`, `InstanceType`<`Row`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Row` | extends [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |
| `Index` | extends `TableIndexType` = [`Name`](/docs/testclasses/Name.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `GetTableRowsParamsTyped`<`Index`, `Row`\> |

#### Returns

`Promise`<`GetTableRowsResponse`<`Index`, `InstanceType`<`Row`\>\>\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2148

▸ **get_table_rows**<`Row`, `Key`\>(`params`): `Promise`<`GetTableRowsResponse`<`TableIndexTypes`[`Key`], `InstanceType`<`Row`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Row` | extends [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |
| `Key` | extends keyof `TableIndexTypes` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `GetTableRowsParamsTyped`<`TableIndexTypes`[`Key`], `Row`\> & `GetTableRowsParamsKeyed`<`TableIndexTypes`[`Key`], `Key`\> |

#### Returns

`Promise`<`GetTableRowsResponse`<`TableIndexTypes`[`Key`], `InstanceType`<`Row`\>\>\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2149

___

### get\_transaction\_status

▸ **get_transaction_status**(`id`): `Promise`<`GetTransactionStatusResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |

#### Returns

`Promise`<`GetTransactionStatusResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2151

___

### push\_transaction

▸ **push_transaction**(`tx`): `Promise`<`PushTransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`SignedTransactionType`](/docs/testREADME.md#signedtransactiontype) \| [`PackedTransaction`](/docs/testclasses/PackedTransaction.md) |

#### Returns

`Promise`<`PushTransactionResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2143

___

### send\_read\_only\_transaction

▸ **send_read_only_transaction**(`tx`): `Promise`<`SendTransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`SignedTransactionType`](/docs/testREADME.md#signedtransactiontype) \| [`PackedTransaction`](/docs/testclasses/PackedTransaction.md) |

#### Returns

`Promise`<`SendTransactionResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2142

___

### send\_transaction

▸ **send_transaction**(`tx`): `Promise`<`SendTransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`SignedTransactionType`](/docs/testREADME.md#signedtransactiontype) \| [`PackedTransaction`](/docs/testclasses/PackedTransaction.md) |

#### Returns

`Promise`<`SendTransactionResponse`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2144

___

### send\_transaction2

▸ **send_transaction2**(`tx`, `options?`): `Promise`<`SendTransaction2Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`SignedTransactionType`](/docs/testREADME.md#signedtransactiontype) \| [`PackedTransaction`](/docs/testclasses/PackedTransaction.md) |
| `options?` | `SendTransaction2Options` |

#### Returns

`Promise`<`SendTransaction2Response`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2145
