[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Authority

# Class: Authority

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`Authority`**

## Table of contents

### Properties

- [accounts](/docs/testclasses/Authority.md#accounts)
- [keys](/docs/testclasses/Authority.md#keys)
- [threshold](/docs/testclasses/Authority.md#threshold)
- [waits](/docs/testclasses/Authority.md#waits)
- [abiBase](/docs/testclasses/Authority.md#abibase)
- [abiFields](/docs/testclasses/Authority.md#abifields)
- [abiName](/docs/testclasses/Authority.md#abiname)

### Accessors

- [keyThreshold](/docs/testclasses/Authority.md#keythreshold)
- [waitThreshold](/docs/testclasses/Authority.md#waitthreshold)
- [structFields](/docs/testclasses/Authority.md#structfields)

### Methods

- [equals](/docs/testclasses/Authority.md#equals)
- [hasPermission](/docs/testclasses/Authority.md#haspermission)
- [keyWeight](/docs/testclasses/Authority.md#keyweight)
- [sort](/docs/testclasses/Authority.md#sort)
- [from](/docs/testclasses/Authority.md#from)

## Properties

### accounts

• **accounts**: [`PermissionLevelWeight`](/docs/testclasses/PermissionLevelWeight.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1374

___

### keys

• **keys**: [`KeyWeight`](/docs/testclasses/KeyWeight.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1373

___

### threshold

• **threshold**: [`UInt32`](/docs/testclasses/UInt32.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1372

___

### waits

• **waits**: [`WaitWeight`](/docs/testclasses/WaitWeight.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1375

___

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiBase](/docs/testclasses/Struct-1.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiFields](/docs/testclasses/Struct-1.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiName](/docs/testclasses/Struct-1.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### keyThreshold

• `get` **keyThreshold**(): `number`

Weight a key needs to sign for this authority.

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1380

___

### waitThreshold

• `get` **waitThreshold**(): `number`

Total weight of all waits.

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1378

___

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

#### Inherited from

Struct.structFields

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:696

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this struct equals the other.

Note: This compares the ABI encoded bytes of both structs, subclasses
      should implement their own fast equality check when possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[equals](/docs/testclasses/Struct-1.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:705

___

### hasPermission

▸ **hasPermission**(`publicKey`, `includePartial?`): `boolean`

Check if given public key has permission in this authority,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | [`PublicKeyType`](/docs/testREADME.md#publickeytype) | The key to check. |
| `includePartial?` | `boolean` | Whether to consider auths where the key is included but can't be reached alone (e.g. multisig). |

#### Returns

`boolean`

**`Attention`**

Does not take indirect permissions for the key via account weights into account.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1389

___

### keyWeight

▸ **keyWeight**(`publicKey`): `number`

Return the weight for given public key, or zero if it is not included in this authority.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKeyType`](/docs/testREADME.md#publickeytype) |

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1382

___

### sort

▸ **sort**(): `void`

Sorts the authority weights in place, should be called before including the authority in a `updateauth` action or it might be rejected.

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1393

___

### from

▸ `Static` **from**(`value`): [`Authority`](/docs/testclasses/Authority.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AuthorityType`](/docs/testREADME.md#authoritytype) |

#### Returns

[`Authority`](/docs/testclasses/Authority.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1376
