[@wharfkit/session - v1.0.0](/docs/testREADME.md) / AccountName

# Class: AccountName

SigningRequest ABI and typedefs.

## Hierarchy

- [`Name`](/docs/testclasses/Name.md)

  ↳ **`AccountName`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/AccountName.md#constructor)

### Properties

- [value](/docs/testclasses/AccountName.md#value)
- [abiName](/docs/testclasses/AccountName.md#abiname)
- [pattern](/docs/testclasses/AccountName.md#pattern)

### Accessors

- [rawValue](/docs/testclasses/AccountName.md#rawvalue)

### Methods

- [equals](/docs/testclasses/AccountName.md#equals)
- [toABI](/docs/testclasses/AccountName.md#toabi)
- [toString](/docs/testclasses/AccountName.md#tostring)
- [abiDefault](/docs/testclasses/AccountName.md#abidefault)
- [from](/docs/testclasses/AccountName.md#from)
- [fromABI](/docs/testclasses/AccountName.md#fromabi)

## Constructors

### constructor

• **new AccountName**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UInt64`](/docs/testclasses/UInt64.md) |

#### Inherited from

[Name](/docs/testclasses/Name.md).[constructor](/docs/testclasses/Name.md#constructor)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:806

## Properties

### value

• **value**: [`UInt64`](/docs/testclasses/UInt64.md)

The numeric representation of the name.

#### Inherited from

[Name](/docs/testclasses/Name.md).[value](/docs/testclasses/Name.md#value)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:796

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Name](/docs/testclasses/Name.md).[abiName](/docs/testclasses/Name.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:792

___

### pattern

▪ `Static` **pattern**: `RegExp`

Regex pattern matching a Antelope/EOSIO name, case-sensitive.

#### Inherited from

[Name](/docs/testclasses/Name.md).[pattern](/docs/testclasses/Name.md#pattern)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:794

## Accessors

### rawValue

• `get` **rawValue**(): [`UInt64`](/docs/testclasses/UInt64.md)

The raw representation of the name.

#### Returns

[`UInt64`](/docs/testclasses/UInt64.md)

**`Deprecated`**

Use value instead.

#### Inherited from

Name.rawValue

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:801

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this name is equal to passed name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

`boolean`

#### Inherited from

[Name](/docs/testclasses/Name.md).[equals](/docs/testclasses/Name.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:808

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

#### Inherited from

[Name](/docs/testclasses/Name.md).[toABI](/docs/testclasses/Name.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:811

___

### toString

▸ **toString**(): `string`

Return string representation of this name.

#### Returns

`string`

#### Inherited from

[Name](/docs/testclasses/Name.md).[toString](/docs/testclasses/Name.md#tostring)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:810

___

### abiDefault

▸ `Static` **abiDefault**(): [`Name`](/docs/testclasses/Name.md)

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Inherited from

[Name](/docs/testclasses/Name.md).[abiDefault](/docs/testclasses/Name.md#abidefault)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:805

___

### from

▸ `Static` **from**(`value`): [`Name`](/docs/testclasses/Name.md)

Create a new Name instance from any of its representing types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NameType`](/docs/testREADME.md#nametype) |

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Inherited from

[Name](/docs/testclasses/Name.md).[from](/docs/testclasses/Name.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:803

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`Name`](/docs/testclasses/Name.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Inherited from

[Name](/docs/testclasses/Name.md).[fromABI](/docs/testclasses/Name.md#fromabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:804
