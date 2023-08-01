[@wharfkit/session - v1.0.0](/docs/testREADME.md) / APIClient

# Class: APIClient

## Table of contents

### Constructors

- [constructor](/docs/testclasses/APIClient.md#constructor)

### Properties

- [provider](/docs/testclasses/APIClient.md#provider)
- [v1](/docs/testclasses/APIClient.md#v1)
- [\_\_className](/docs/testclasses/APIClient.md#__classname)

### Methods

- [call](/docs/testclasses/APIClient.md#call)

## Constructors

### constructor

• **new APIClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`APIClientOptions`](/docs/testinterfaces/APIClientOptions.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2204

## Properties

### provider

• `Readonly` **provider**: [`APIProvider`](/docs/testinterfaces/APIProvider.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2203

___

### v1

• **v1**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chain` | [`ChainAPI`](/docs/testclasses/ChainAPI.md) |
| `history` | [`HistoryAPI`](/docs/testclasses/HistoryAPI.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2205

___

### \_\_className

▪ `Static` **\_\_className**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2202

## Methods

### call

▸ **call**<`T`\>(`args`): `Promise`<`InstanceType`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.params?` | `unknown` |
| `args.path` | `string` |
| `args.responseType` | `T` |

#### Returns

`Promise`<`InstanceType`<`T`\>\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2209

▸ **call**<`T`\>(`args`): `Promise`<`BuiltinTypes`[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `BuiltinTypes` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.params?` | `unknown` |
| `args.path` | `string` |
| `args.responseType` | `T` |

#### Returns

`Promise`<`BuiltinTypes`[`T`]\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2214

▸ **call**<`T`\>(`args`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.params?` | `unknown` |
| `args.path` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2219
