[@wharfkit/session - v1.0.0](/docs/testREADME.md) / [Asset](/docs/testmodules/Asset.md) / SymbolCode

# Class: SymbolCode

[Asset](/docs/testmodules/Asset.md).SymbolCode

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Asset.SymbolCode.md#constructor)

### Properties

- [value](/docs/testclasses/Asset.SymbolCode.md#value)
- [abiName](/docs/testclasses/Asset.SymbolCode.md#abiname)

### Methods

- [equals](/docs/testclasses/Asset.SymbolCode.md#equals)
- [toABI](/docs/testclasses/Asset.SymbolCode.md#toabi)
- [toJSON](/docs/testclasses/Asset.SymbolCode.md#tojson)
- [toString](/docs/testclasses/Asset.SymbolCode.md#tostring)
- [abiDefault](/docs/testclasses/Asset.SymbolCode.md#abidefault)
- [from](/docs/testclasses/Asset.SymbolCode.md#from)
- [fromABI](/docs/testclasses/Asset.SymbolCode.md#fromabi)

## Constructors

### constructor

• **new SymbolCode**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UInt64`](/docs/testclasses/UInt64.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1038

## Properties

### value

• **value**: [`UInt64`](/docs/testclasses/UInt64.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1037

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1033

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SymbolCodeType`](/docs/testmodules/Asset.md#symbolcodetype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1039

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1040

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1042

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1041

___

### abiDefault

▸ `Static` **abiDefault**(): [`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Returns

[`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1036

___

### from

▸ `Static` **from**(`value`): [`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SymbolCodeType`](/docs/testmodules/Asset.md#symbolcodetype) |

#### Returns

[`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1034

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1035
