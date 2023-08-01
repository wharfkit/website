[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABISerializableObject

# Interface: ABISerializableObject

Interface that should be implemented by ABI serializable objects.

## Implemented by

- [`ABI`](/docs/testclasses/ABI-1.md)
- [`Asset`](/docs/testclasses/Asset-1.md)
- [`Blob`](/docs/testclasses/Blob.md)
- [`BlockId`](/docs/testclasses/BlockId.md)
- [`Bytes`](/docs/testclasses/Bytes.md)
- [`ExtendedAsset`](/docs/testclasses/ExtendedAsset.md)
- [`Float128`](/docs/testclasses/Float128.md)
- [`Int`](/docs/testclasses/Int.md)
- [`Name`](/docs/testclasses/Name.md)
- [`PublicKey`](/docs/testclasses/PublicKey.md)
- [`Signature`](/docs/testclasses/Signature.md)
- [`Struct`](/docs/testclasses/Struct-1.md)
- [`Symbol`](/docs/testclasses/Asset.Symbol.md)
- [`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)
- [`TrxVariant`](/docs/testclasses/API.v1.TrxVariant.md)
- [`Variant`](/docs/testclasses/Variant-1.md)

## Table of contents

### Methods

- [equals](/docs/testinterfaces/ABISerializableObject.md#equals)
- [toABI](/docs/testinterfaces/ABISerializableObject.md#toabi)
- [toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:307

___

### toABI

▸ `Optional` **toABI**(`encoder`): `void`

Called when encoding to binary abi format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | [`ABIEncoder`](/docs/testclasses/ABIEncoder.md) |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:303

___

### toJSON

▸ **toJSON**(): `any`

Called when encoding to json abi format.

#### Returns

`any`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:305
