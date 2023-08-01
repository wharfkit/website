[@wharfkit/session - v1.0.0](/docs/testREADME.md) / AnyAction

# Interface: AnyAction

Action type that may or may not have its data encoded

## Hierarchy

- `ActionBase`

  ↳ **`AnyAction`**

## Table of contents

### Properties

- [account](/docs/testinterfaces/AnyAction.md#account)
- [authorization](/docs/testinterfaces/AnyAction.md#authorization)
- [data](/docs/testinterfaces/AnyAction.md#data)
- [name](/docs/testinterfaces/AnyAction.md#name)

## Properties

### account

• **account**: [`NameType`](/docs/testREADME.md#nametype)

The account (a.k.a. contract) to run action on.

#### Inherited from

ActionBase.account

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1196

___

### authorization

• **authorization**: [`PermissionLevelType`](/docs/testREADME.md#permissionleveltype)[]

The permissions authorizing the action.

#### Inherited from

ActionBase.authorization

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1200

___

### data

• **data**: [`BytesType`](/docs/testREADME.md#bytestype) \| `Record`<`string`, `any`\> \| [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1208

___

### name

• **name**: [`NameType`](/docs/testREADME.md#nametype)

The name of the action.

#### Inherited from

ActionBase.name

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1198
