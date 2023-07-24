---
title: Struct
description: change_me
category: Antelope
published: false
---

The `Struct` class is one in which developers can extend in order to define core or [ABI](#) type objects for use in the [Serializer](#).

The [ContractKit](#) will automatically generate `Struct` objects during its code generation process.

As an example, the [open source](https://github.com/greymass/unicove) project [Unicove.com](https://unicove.com) uses a small library of `Struct` classes to manually define the known smart contract actions it allows users to perform. These types are all defined here:

https://github.com/greymass/unicove/blob/dev/src/abi-types.ts

These types are then imported into the application logic and used whenever transaction data is being assembled to automatically serialize the data.

https://github.com/greymass/unicove/blob/c98183514bb919719ac46fa97aa931c9d3998152/src/pages/transfer/main.svelte#L51-L56

The [abi2core](#) library can also be used to read a smart contract's ABI and automatically generate these instances of `Struct` for a project.

https://github.com/greymass/abi2core/

## Defining Structs

Each `Struct` can either be written to use TypeScript's [experimental decorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) or written more verbosely in plain Javascript.

This is an example of the `eosio.token` contract and its `transfer` action, written both using the experimental decorators and then in plain javascript.

```ts
// Using experimentalDecorators in TypeScript
@Struct.type("transfer")
export class Transfer extends Struct {
  @Struct.field(Name) from!: Name
  @Struct.field(Name) to!: Name
  @Struct.field(Asset) quantity!: Asset
  @Struct.field("string") memo!: string
}

// Using plain JavaScript
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

Once a `Struct` class is defined, they can be used to define the data within an [Action](#) without needing the ABI. Utilizing the definitions from the section above, a token `transfer` action can be written as:

```ts
const data = Transfer.from({
  from: "teamgreymass",
  to: "funds.gm",
  quantity: "0.0001 EOS",
  memo: "",
})
```

These can also be passed directly into an [Action](#) for automatic serialization.

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

Another flag that may be required depending on configuration is the `"useDefineForClassFields": true`. You know you'll need this one if you define a `Struct`, and attempt to use it, and all of the values within it come back as `undefined`.
