[@wharfkit/session - v1.0.0](/docs/testREADME.md) / [API](/docs/testmodules/API.md) / [v1](/docs/testmodules/API.v1.md) / TrxVariant

# Class: TrxVariant

[API](/docs/testmodules/API.md).[v1](/docs/testmodules/API.v1.md).TrxVariant

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/API.v1.TrxVariant.md#constructor)

### Properties

- [extra](/docs/testclasses/API.v1.TrxVariant.md#extra)
- [id](/docs/testclasses/API.v1.TrxVariant.md#id)
- [abiName](/docs/testclasses/API.v1.TrxVariant.md#abiname)

### Accessors

- [signatures](/docs/testclasses/API.v1.TrxVariant.md#signatures)
- [transaction](/docs/testclasses/API.v1.TrxVariant.md#transaction)

### Methods

- [equals](/docs/testclasses/API.v1.TrxVariant.md#equals)
- [toJSON](/docs/testclasses/API.v1.TrxVariant.md#tojson)
- [from](/docs/testclasses/API.v1.TrxVariant.md#from)

## Constructors

### constructor

• **new TrxVariant**(`id`, `extra`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Checksum256`](/docs/testclasses/Checksum256.md) |
| `extra` | `Record`<`string`, `any`\> |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1620

## Properties

### extra

• `Readonly` **extra**: `Record`<`string`, `any`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1617

___

### id

• `Readonly` **id**: [`Checksum256`](/docs/testclasses/Checksum256.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1616

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1618

## Accessors

### signatures

• `get` **signatures**(): `undefined` \| [`Signature`](/docs/testclasses/Signature.md)[]

#### Returns

`undefined` \| [`Signature`](/docs/testclasses/Signature.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1622

___

### transaction

• `get` **transaction**(): `undefined` \| [`Transaction`](/docs/testclasses/Transaction.md)

#### Returns

`undefined` \| [`Transaction`](/docs/testclasses/Transaction.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1621

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1623

___

### toJSON

▸ **toJSON**(): [`Checksum256`](/docs/testclasses/Checksum256.md)

Called when encoding to json abi format.

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1624

___

### from

▸ `Static` **from**(`data`): [`TrxVariant`](/docs/testclasses/API.v1.TrxVariant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TrxVariant`](/docs/testclasses/API.v1.TrxVariant.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1619
