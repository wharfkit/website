[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ExtendedAsset

# Class: ExtendedAsset

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ExtendedAsset.md#constructor)

### Properties

- [contract](/docs/testclasses/ExtendedAsset.md#contract)
- [quantity](/docs/testclasses/ExtendedAsset.md#quantity)
- [abiName](/docs/testclasses/ExtendedAsset.md#abiname)

### Methods

- [equals](/docs/testclasses/ExtendedAsset.md#equals)
- [toABI](/docs/testclasses/ExtendedAsset.md#toabi)
- [toJSON](/docs/testclasses/ExtendedAsset.md#tojson)
- [from](/docs/testclasses/ExtendedAsset.md#from)
- [fromABI](/docs/testclasses/ExtendedAsset.md#fromabi)

## Constructors

### constructor

• **new ExtendedAsset**(`quantity`, `contract`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `quantity` | [`Asset`](/docs/testclasses/Asset-1.md) |
| `contract` | [`Name`](/docs/testclasses/Name.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1055

## Properties

### contract

• **contract**: [`Name`](/docs/testclasses/Name.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1054

___

### quantity

• **quantity**: [`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1053

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1050

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ExtendedAssetType`](/docs/testREADME.md#extendedassettype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1056

___

### toABI

▸ **toABI**(`encoder`): `void`

Called when encoding to binary abi format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | [`ABIEncoder`](/docs/testclasses/ABIEncoder.md) |

#### Returns

`void`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toABI](/docs/testinterfaces/ABISerializableObject.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1057

___

### toJSON

▸ **toJSON**(): `Object`

Called when encoding to json abi format.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contract` | [`Name`](/docs/testclasses/Name.md) |
| `quantity` | [`Asset`](/docs/testclasses/Asset-1.md) |

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1058

___

### from

▸ `Static` **from**(`value`): [`ExtendedAsset`](/docs/testclasses/ExtendedAsset.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ExtendedAssetType`](/docs/testREADME.md#extendedassettype) |

#### Returns

[`ExtendedAsset`](/docs/testclasses/ExtendedAsset.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1051

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`ExtendedAsset`](/docs/testclasses/ExtendedAsset.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`ExtendedAsset`](/docs/testclasses/ExtendedAsset.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1052
