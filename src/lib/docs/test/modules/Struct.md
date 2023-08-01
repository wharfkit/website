[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Struct

# Namespace: Struct

## Table of contents

### Functions

- [field](/docs/testmodules/Struct.md#field)
- [type](/docs/testmodules/Struct.md#type)

## Functions

### field

▸ **field**(`type`, `options?`): <T\>(`target`: `T`, `name`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md) |
| `options?` | `ABITypeModifiers` |

#### Returns

`fn`

▸ <`T`\>(`target`, `name`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](/docs/testclasses/Struct-1.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `name` | `string` |

##### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:711

___

### type

▸ **type**(`name`): <T\>(`struct`: `T`) => `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`fn`

▸ <`T`\>(`struct`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StructConstructor`](/docs/testinterfaces/StructConstructor.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `struct` | `T` |

##### Returns

`T`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:710
