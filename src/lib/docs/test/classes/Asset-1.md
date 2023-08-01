[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Asset

# Class: Asset

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Asset-1.md#constructor)

### Properties

- [symbol](/docs/testclasses/Asset-1.md#symbol)
- [units](/docs/testclasses/Asset-1.md#units)
- [abiName](/docs/testclasses/Asset-1.md#abiname)

### Accessors

- [value](/docs/testclasses/Asset-1.md#value)

### Methods

- [equals](/docs/testclasses/Asset-1.md#equals)
- [toABI](/docs/testclasses/Asset-1.md#toabi)
- [toJSON](/docs/testclasses/Asset-1.md#tojson)
- [toString](/docs/testclasses/Asset-1.md#tostring)
- [abiDefault](/docs/testclasses/Asset-1.md#abidefault)
- [from](/docs/testclasses/Asset-1.md#from)
- [fromABI](/docs/testclasses/Asset-1.md#fromabi)
- [fromFloat](/docs/testclasses/Asset-1.md#fromfloat)
- [fromString](/docs/testclasses/Asset-1.md#fromstring)
- [fromUnits](/docs/testclasses/Asset-1.md#fromunits)

## Constructors

### constructor

• **new Asset**(`units`, `symbol`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `units` | [`Int64`](/docs/testclasses/Int64.md) |
| `symbol` | [`Symbol`](/docs/testclasses/Asset.Symbol.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:993

## Properties

### symbol

• **symbol**: [`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:985

___

### units

• **units**: [`Int64`](/docs/testclasses/Int64.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:984

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:983

## Accessors

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:995

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:996

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AssetType`](/docs/testREADME.md#assettype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:994

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:997

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:999

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:998

___

### abiDefault

▸ `Static` **abiDefault**(): [`Asset`](/docs/testclasses/Asset-1.md)

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:992

___

### from

▸ `Static` **from**(`value`): [`Asset`](/docs/testclasses/Asset-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AssetType`](/docs/testREADME.md#assettype) |

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:986

▸ `Static` **from**(`value`, `symbol`): [`Asset`](/docs/testclasses/Asset-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `symbol` | [`SymbolType`](/docs/testmodules/Asset.md#symboltype) |

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:987

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`Asset`](/docs/testclasses/Asset-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:991

___

### fromFloat

▸ `Static` **fromFloat**(`value`, `symbol`): [`Asset`](/docs/testclasses/Asset-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `symbol` | [`SymbolType`](/docs/testmodules/Asset.md#symboltype) |

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:989

___

### fromString

▸ `Static` **fromString**(`value`): [`Asset`](/docs/testclasses/Asset-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:988

___

### fromUnits

▸ `Static` **fromUnits**(`value`, `symbol`): [`Asset`](/docs/testclasses/Asset-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `symbol` | [`SymbolType`](/docs/testmodules/Asset.md#symboltype) |

#### Returns

[`Asset`](/docs/testclasses/Asset-1.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:990
