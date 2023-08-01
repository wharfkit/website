[@wharfkit/session - v1.0.0](/docs/testREADME.md) / [ABI](/docs/testmodules/ABI.md) / ResolvedType

# Class: ResolvedType

[ABI](/docs/testmodules/ABI.md).ResolvedType

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ABI.ResolvedType.md#constructor)

### Properties

- [base](/docs/testclasses/ABI.ResolvedType.md#base)
- [fields](/docs/testclasses/ABI.ResolvedType.md#fields)
- [id](/docs/testclasses/ABI.ResolvedType.md#id)
- [isArray](/docs/testclasses/ABI.ResolvedType.md#isarray)
- [isExtension](/docs/testclasses/ABI.ResolvedType.md#isextension)
- [isOptional](/docs/testclasses/ABI.ResolvedType.md#isoptional)
- [name](/docs/testclasses/ABI.ResolvedType.md#name)
- [ref](/docs/testclasses/ABI.ResolvedType.md#ref)
- [variant](/docs/testclasses/ABI.ResolvedType.md#variant)

### Accessors

- [allFields](/docs/testclasses/ABI.ResolvedType.md#allfields)
- [typeName](/docs/testclasses/ABI.ResolvedType.md#typename)

## Constructors

### constructor

• **new ResolvedType**(`fullName`, `id?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullName` | `string` |
| `id?` | `number` |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:968

## Properties

### base

• `Optional` **base**: [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:961

___

### fields

• `Optional` **fields**: { `name`: `string` ; `type`: [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)  }[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:962

___

### id

• **id**: `number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:957

___

### isArray

• **isArray**: `boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:958

___

### isExtension

• **isExtension**: `boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:960

___

### isOptional

• **isOptional**: `boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:959

___

### name

• **name**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:956

___

### ref

• `Optional` **ref**: [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:967

___

### variant

• `Optional` **variant**: [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:966

## Accessors

### allFields

• `get` **allFields**(): `undefined` \| { `name`: `string` ; `type`: [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)  }[]

All fields including base struct(s), undefined if not a struct type.

#### Returns

`undefined` \| { `name`: `string` ; `type`: [`ResolvedType`](/docs/testclasses/ABI.ResolvedType.md)  }[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:974

___

### typeName

• `get` **typeName**(): `string`

Type name including suffixes: [] array, ? optional, $ binary ext

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:972
