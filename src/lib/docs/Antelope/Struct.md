---
title: Struct
description: change_me
category: Antelope
published: true
---

# Struct

The `Struct` type represents a data structure, typically as part of an [ABI](/docs/antelope/abi), that can be encoded and decoded using the [Serializer](/docs/antelope/serializer) for use on the blockchain.

## Defining Structs

The `Struct` type in the Antelope library represents one entry in the `structs` array found within an [ABI](/docs/antelope/abi).

```ts
{
  structs: [
    {
      base: "",
      name: "transfer",
      fields: [
        { name: "from", type: "name" },
        { name: "to", type: "name" },
        { name: "quantity", type: "asset" },
        { name: "memo", type: "string" },
      ],
    },
  ]
}
```

This on-chain representation of a `Struct` allows the Antelope blockchain to encode and decode data of this type for use in smart contracts. In a similar way, the `Struct` found in the Antelope library also allows the [Serializer](/docs/antelope/serializer) to encode and decode this data within Javascript applications. Many of these `Struct` objects exist as core types offered by the library, such as [Asset](/docs/antelope/asset), [Name](/docs/antelope/name), and [PermissionLevel](/docs/antelope/permission-level).

These `Struct` types are automatically generated and used while using the [Serializer](/docs/antelope/serializer), but that requires retrieving and passing the entire [ABI](/docs/antelope/abi). To help optimize applications and their need to retrieve data from remote endpoints, the `Struct` class can also be used to define ABI-like definitions as code.

This can be done using TypeScript and the [experimental decorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) compiler option:

```ts
@Struct.type("transfer")
export class Transfer extends Struct {
  @Struct.field(Name) from!: Name
  @Struct.field(Name) to!: Name
  @Struct.field(Asset) quantity!: Asset
  @Struct.field("string") memo!: string
}
```

They can also be created in plain Javascript by manually defining all the properties:

```ts
class Transfer extends Struct {
  static abiName = "transfer"
  static abiFields = [
    {
      name: "from",
      type: Name,
    },
    {
      name: "to",
      type: Name,
    },
    {
      name: "quantity",
      type: Asset,
    },
    {
      name: "memo",
      type: "string",
    },
  ]
}
```

## Using Structs

Once a `Struct` class is defined, they can be used to easily create encodable data within an [Action](/docs/antelope/action) without needing the ABI. Utilizing the definitions from the section above, a token `transfer` action can be written as:

```ts
const data = Transfer.from({
  from: "teamgreymass",
  to: "funds.gm",
  quantity: "0.0001 EOS",
  memo: "",
})
```

These can also be passed directly into an [Action](/docs/antelope/action) for automatic serialization.

```ts
const action = Action.from({
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data: Transfer.from({
    from: "teamgreymass",
    to: "funds.gm",
    quantity: "0.0001 EOS",
    memo: "",
  }),
})
```

## Gotchas

When using the decorated versions of a `Struct` in a TypeScript codebase, there are a few things that may be required depending on your version of TypeScript and the bundler in use.

Within the `tsconfig.json` in your project, one thing that is required is the use of `"experimentalDecorators": true`. An example of this can be found in [Unicove's tsconfig.json](https://github.com/greymass/unicove/blob/c98183514bb919719ac46fa97aa931c9d3998152/tsconfig.json#L19) file.

Another flag that may be required depending on configuration is the `"useDefineForClassFields": true`. You'll know you need this one if you define a `Struct`, attempt to use it, and all the values within it come back as `undefined`.
