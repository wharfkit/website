[@wharfkit/session - v1.0.0](/docs/testREADME.md) / [Asset](/docs/testmodules/Asset.md) / Symbol

# Class: Symbol

[Asset](/docs/testmodules/Asset.md).Symbol

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Asset.Symbol.md#constructor)

### Properties

- [value](/docs/testclasses/Asset.Symbol.md#value)
- [abiName](/docs/testclasses/Asset.Symbol.md#abiname)
- [maxPrecision](/docs/testclasses/Asset.Symbol.md#maxprecision)
- [symbolNamePattern](/docs/testclasses/Asset.Symbol.md#symbolnamepattern)

### Accessors

- [code](/docs/testclasses/Asset.Symbol.md#code)
- [name](/docs/testclasses/Asset.Symbol.md#name)
- [precision](/docs/testclasses/Asset.Symbol.md#precision)

### Methods

- [convertFloat](/docs/testclasses/Asset.Symbol.md#convertfloat)
- [convertUnits](/docs/testclasses/Asset.Symbol.md#convertunits)
- [equals](/docs/testclasses/Asset.Symbol.md#equals)
- [toABI](/docs/testclasses/Asset.Symbol.md#toabi)
- [toJSON](/docs/testclasses/Asset.Symbol.md#tojson)
- [toString](/docs/testclasses/Asset.Symbol.md#tostring)
- [abiDefault](/docs/testclasses/Asset.Symbol.md#abidefault)
- [from](/docs/testclasses/Asset.Symbol.md#from)
- [fromABI](/docs/testclasses/Asset.Symbol.md#fromabi)
- [fromParts](/docs/testclasses/Asset.Symbol.md#fromparts)

## Constructors

### constructor

• **new Symbol**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UInt64`](/docs/testclasses/UInt64.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1012

## Properties

### value

• **value**: [`UInt64`](/docs/testclasses/UInt64.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1011

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1004

___

### maxPrecision

▪ `Static` **maxPrecision**: `number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1006

___

### symbolNamePattern

▪ `Static` **symbolNamePattern**: `RegExp`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1005

## Accessors

### code

• `get` **code**(): [`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Returns

[`SymbolCode`](/docs/testclasses/Asset.SymbolCode.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1016

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1014

___

### precision

• `get` **precision**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1015

## Methods

### convertFloat

▸ **convertFloat**(`float`): [`Int64`](/docs/testclasses/Int64.md)

Convert floating point to units according to symbol precision.
Note that the value will be rounded to closest precision.

#### Parameters

| Name | Type |
| :------ | :------ |
| `float` | `number` |

#### Returns

[`Int64`](/docs/testclasses/Int64.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1027

___

### convertUnits

▸ **convertUnits**(`units`): `number`

Convert units to floating point number according to symbol precision.

#### Parameters

| Name | Type |
| :------ | :------ |
| `units` | [`Int64`](/docs/testclasses/Int64.md) |

#### Returns

`number`

**`Throws`**

If the given units can't be represented in 53 bits.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1022

___

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SymbolType`](/docs/testmodules/Asset.md#symboltype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1013

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1017

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1029

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1028

___

### abiDefault

▸ `Static` **abiDefault**(): [`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Returns

[`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1010

___

### from

▸ `Static` **from**(`value`): [`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SymbolType`](/docs/testmodules/Asset.md#symboltype) |

#### Returns

[`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1007

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1009

___

### fromParts

▸ `Static` **fromParts**(`name`, `precision`): [`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `precision` | `number` |

#### Returns

[`Symbol`](/docs/testclasses/Asset.Symbol.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1008
