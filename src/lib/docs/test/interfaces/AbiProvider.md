[@wharfkit/session - v1.0.0](/docs/testREADME.md) / AbiProvider

# Interface: AbiProvider

Interface that should be implemented by abi providers.

## Hierarchy

- **`AbiProvider`**

  ↳ [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md)

## Table of contents

### Properties

- [getAbi](/docs/testinterfaces/AbiProvider.md#getabi)

## Properties

### getAbi

• **getAbi**: (`account`: [`Name`](/docs/testclasses/Name.md)) => `Promise`<[`ABIDef`](/docs/testREADME.md#abidef)\>

#### Type declaration

▸ (`account`): `Promise`<[`ABIDef`](/docs/testREADME.md#abidef)\>

Return a promise that resolves to an abi object for the given account name,
e.g. the result of a rpc call to chain/get_abi.

##### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Name`](/docs/testclasses/Name.md) |

##### Returns

`Promise`<[`ABIDef`](/docs/testREADME.md#abidef)\>

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:169
