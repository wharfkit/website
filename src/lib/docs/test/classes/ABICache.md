[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABICache

# Class: ABICache

Given an APIClient instance, this class provides an AbiProvider interface for retrieving and caching ABIs.

## Implements

- [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ABICache.md#constructor)

### Properties

- [cache](/docs/testclasses/ABICache.md#cache)
- [client](/docs/testclasses/ABICache.md#client)
- [pending](/docs/testclasses/ABICache.md#pending)

### Methods

- [getAbi](/docs/testclasses/ABICache.md#getabi)
- [setAbi](/docs/testclasses/ABICache.md#setabi)

## Constructors

### constructor

• **new ABICache**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`APIClient`](/docs/testclasses/APIClient.md) |

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:17

## Properties

### cache

• `Readonly` **cache**: `Map`<`string`, [`ABI`](/docs/testclasses/ABI-1.md)\>

#### Implementation of

[ABICacheInterface](/docs/testinterfaces/ABICacheInterface.md).[cache](/docs/testinterfaces/ABICacheInterface.md#cache)

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:15

___

### client

• `Readonly` **client**: [`APIClient`](/docs/testclasses/APIClient.md)

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:14

___

### pending

• `Readonly` **pending**: `Map`<`string`, `Promise`<`GetRawAbiResponse`\>\>

#### Implementation of

[ABICacheInterface](/docs/testinterfaces/ABICacheInterface.md).[pending](/docs/testinterfaces/ABICacheInterface.md#pending)

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:16

## Methods

### getAbi

▸ **getAbi**(`account`): `Promise`<[`ABI`](/docs/testclasses/ABI-1.md)\>

Return a promise that resolves to an abi object for the given account name,
e.g. the result of a rpc call to chain/get_abi.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`Promise`<[`ABI`](/docs/testclasses/ABI-1.md)\>

#### Implementation of

[ABICacheInterface](/docs/testinterfaces/ABICacheInterface.md).[getAbi](/docs/testinterfaces/ABICacheInterface.md#getabi)

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:18

___

### setAbi

▸ **setAbi**(`account`, `abi`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`NameType`](/docs/testREADME.md#nametype) |
| `abi` | [`ABIDef`](/docs/testREADME.md#abidef) |

#### Returns

`void`

#### Implementation of

[ABICacheInterface](/docs/testinterfaces/ABICacheInterface.md).[setAbi](/docs/testinterfaces/ABICacheInterface.md#setabi)

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:19
