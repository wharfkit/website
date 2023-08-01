[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABICacheInterface

# Interface: ABICacheInterface

Interface that should be implemented by abi providers.

## Hierarchy

- [`AbiProvider`](/docs/testinterfaces/AbiProvider.md)

  ↳ **`ABICacheInterface`**

## Implemented by

- [`ABICache`](/docs/testclasses/ABICache.md)

## Table of contents

### Properties

- [cache](/docs/testinterfaces/ABICacheInterface.md#cache)
- [pending](/docs/testinterfaces/ABICacheInterface.md#pending)

### Methods

- [getAbi](/docs/testinterfaces/ABICacheInterface.md#getabi)
- [setAbi](/docs/testinterfaces/ABICacheInterface.md#setabi)

## Properties

### cache

• `Readonly` **cache**: `Map`<`string`, [`ABI`](/docs/testclasses/ABI-1.md)\>

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:5

___

### pending

• `Readonly` **pending**: `Map`<`string`, `Promise`<`GetRawAbiResponse`\>\>

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:6

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

#### Overrides

AbiProvider.getAbi

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:7

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

#### Defined in

node_modules/@wharfkit/abicache/lib/abicache.d.ts:8
