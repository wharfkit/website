[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ActionFields

# Interface: ActionFields

## Hierarchy

- `ActionBase`

  ↳ **`ActionFields`**

## Table of contents

### Properties

- [account](/docs/testinterfaces/ActionFields.md#account)
- [authorization](/docs/testinterfaces/ActionFields.md#authorization)
- [data](/docs/testinterfaces/ActionFields.md#data)
- [name](/docs/testinterfaces/ActionFields.md#name)

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

• **data**: [`BytesType`](/docs/testREADME.md#bytestype)

The ABI-encoded action data.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1204

___

### name

• **name**: [`NameType`](/docs/testREADME.md#nametype)

The name of the action.

#### Inherited from

ActionBase.name

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1198
