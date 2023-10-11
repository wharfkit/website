---
title: Serializer
description: An Antelope data serializer used to encode and decode compatible data types from ABI definitions
category: Antelope
published: true
requiresReview: true
---

# Serializer

Most data read from and written to Antelope-based blockchains is serialized using an [ABI](#). The `Serializer` within the Antelope SDK is a utility that facilitates the encoding and decoding of this type of data from the blockchain. All of the data encoding it handles has its functionality mirrored from the C++ implementation that runs the blockchain.

## Usage

The `Serializer` can be called directly without instantiation to perform encoding, decoding, and various utility methods. To make use of all of these methods the `Serializer` namespace needs to be included in the project. Once included any of the methods can be called directly without any sort of instantiation.

```ts
import { Serializer } from "@wharfkit/antelope"
```

## Encode

The `.encode()` method on the `Serializer` accepts multiple variations of parameters, all of which will return an encoded instance of the data as a [Bytes](#) object.

### Native Antelope Types

In the most simple example any core Antelope data type can be passed as the `object` parameter of the call.

This example shows passing an [Asset](#) typed object and encoding it into the [Bytes](#) type.

```ts
import { Asset, Serializer } from "@wharfkit/antelope"

const asset = Asset.from("1.0000 FOO")

const encoded = Serializer.encode({ object: asset })

console.log(encoded)
/*
Bytes {
  array: Uint8Array(16) [
    16, 39, 0,  0,  0,  0,
     0,  0, 4, 70, 79, 79,
     0,  0, 0,  0
  ]
}
*/

console.log(String(encoded))
// 102700000000000004464f4f00000000
```

### Custom Struct

The same encoding can also be performed against a custom [Struct](#) as defined in your application or by the [Contract Kit](#).

This example defines a custom [Struct](#) that matches an `eosio.token` contract `transfer` action and creates an instance of it using the `Struct.from()` method. This object can then be passed into the `Serializer` in order to convert it to [Bytes](#).

```ts
import { Asset, Name, Struct, Serializer } from "@wharfkit/antelope"

@Struct.type("transfer")
class Transfer extends Struct {
  @Struct.field("name") from!: Name
  @Struct.field("name") to!: Name
  @Struct.field("asset") quantity!: Asset
  @Struct.field("string") memo!: string
}

const object = Transfer.from({
  from: "foo",
  to: "bar",
  quantity: "1.0000 EOS",
  memo: "hello",
})

const encoded = Serializer.encode({ object })

console.log(encoded)
/*
Bytes {
  array: Uint8Array(38) [
    0, 0, 0,   0,   0,   0,  40,  93, 0, 0,
    0, 0, 0,   0, 174,  57,  16,  39, 0, 0,
    0, 0, 0,   0,   4,  69,  79,  83, 0, 0,
    0, 0, 5, 104, 101, 108, 108, 111
  ]
}
*/

console.log(String(encoded))
// 000000000000285d000000000000ae39102700000000000004454f53000000000568656c6c6f
```

### Untyped data and Struct

The serializer is also capable of assembling a [Struct](#) dynamically before the encoding if passed any object and a compatible [Struct](#) or native Antelope type.

In this example the `object` passed to the encoder is a string representation of an [Asset](#) which is accompanied by a secondary `type` parameter where the actual [Struct](#) is passed to define it.

```ts
import { Asset, Serializer } from "@wharfkit/antelope"

const encoded = Serializer.encode({
  object: "1.0000 FOO",
  type: Asset,
})

console.log(encoded)
/*
Bytes {
  array: Uint8Array(16) [
    16, 39, 0,  0,  0,  0,
     0,  0, 4, 70, 79, 79,
     0,  0, 0,  0
  ]
}
*/

console.log(String(encoded))
// 102700000000000004464f4f00000000
```

### Untyped Data and ABI

The `Serializer` is capable of accepting an untyped object, [ABI](#), and struct name as a string to encode data and return a [Bytes](#) object.

The following example shows an untyped variable named `object`, alongside an [ABI](#) that defines a `struct` named `my_struct` that defines the objects format. The `object`, [ABI](#), and a 3rd string parameter with the string name of the struct are passed in to the encode method in order to serialize the data and return an instance of [Bytes](#).

```ts
import { ABI, Serializer } from "@wharfkit/antelope"

const object = {
  foo: "bar",
}

const abi = ABI.from({
  structs: [
    {
      name: "my_struct",
      base: "",
      fields: [
        {
          name: "foo",
          type: "string",
        },
      ],
    },
  ],
})

const encoded = Serializer.encode({ object, abi, type: "my_struct" })

console.log(encoded)
// Bytes { array: Uint8Array(4) [ 3, 98, 97, 114 ] }

console.log(String(encoded))
// 03626172
```

## Decode

The `.decode()` method of the `Serializer` accepts any encoded version of data and will return either a native Antelope type or an instance of a custom [Struct](#).

### Using encoded data

The `data` parameter passed in to the `.decode()` method can be passed either as hex data or as an instance of [Bytes](#).

```ts
import { Asset, Serializer } from "@wharfkit/antelope"

const data = "102700000000000004464f4f00000000"
// or
// const data = Bytes.from('102700000000000004464f4f00000000')

const decoded = Serializer.decode({ data, type: Asset })

console.log(decoded)
/*
Asset {
  units: Int64 {
    value: BN { negative: 0, words: [Array], length: 1, red: null }
  },
  symbol: Symbol { value: UInt64 { value: [BN] } }
}
*/

console.log(String(decoded))
// 1.0000 FOO
```

Here the decoder is instructed to use the [Asset](#) Antelope type during the decoding of the raw data being passed in. This results in an [Asset](#) typed object being returned as the result.

### Using Custom Struct

A custom defined [Struct](#) may also be passed in as the `type` alongside the data, resulting in the data being decoded using a specific type.

```ts
import { Asset, Name, Serializer, Struct } from "@wharfkit/antelope"

const data =
  "000000000000285d000000000000ae39102700000000000004454f53000000000568656c6c6f"

@Struct.type("transfer")
class Transfer extends Struct {
  @Struct.field("name") from!: Name
  @Struct.field("name") to!: Name
  @Struct.field("asset") quantity!: Asset
  @Struct.field("string") memo!: string
}

const decoded = Serializer.decode({ data, type: Transfer })

console.log(decoded)
/*
Transfer {
    from: Name { value: UInt64 { value: [BN] } },
    to: Name { value: UInt64 { value: [BN] } },
    quantity: Asset {
        units: Int64 { value: [BN] },
        symbol: Symbol { value: [UInt64] }
    },
    memo: 'hello'
}
*/

console.log(JSON.stringify(decoded))
// {"from":"foo","to":"bar","quantity":"1.0000 EOS","memo":"hello"}
```

### Using an ABI

An [ABI](#) parameter may also be passed in alongside a `type` parameter to allow decoding using an ABI directly.

```ts
import { APIClient, Serializer } from "@wharfkit/antelope"

const data =
  "000000000000285d000000000000ae39102700000000000004454f53000000000568656c6c6f"

const client = new APIClient({ url: "https://jungle4.greymass.com" })
const { abi } = await client.v1.chain.get_abi("eosio.token")

const decoded = Serializer.decode({ data, abi, type: "transfer" })

console.log(decoded)
/*
Transfer {
    from: Name { value: UInt64 { value: [BN] } },
    to: Name { value: UInt64 { value: [BN] } },
    quantity: Asset {
        units: Int64 { value: [BN] },
        symbol: Symbol { value: [UInt64] }
    },
    memo: 'hello'
}
*/

console.log(JSON.stringify(decoded))
// {"from":"foo","to":"bar","quantity":"1.0000 EOS","memo":"hello"}
```

The [ABI](#) can either be embedded directly within the application or it can be retrieved from an [APIClient](#). In the example above the code is loading the ABI for the `eosio.token` contract from the Jungle 4 blockchain. It then passes the encoded data, the ABI, and the type to retrieve from the ABI as a string.

## Utilities

### Stringify

### Objectify

The `Serializer` provides a method that is capable of converting [Struct](#) data types into native Javascript data types. This can be useful when interfacing with code which isn't expecting the Antelope native data types or when outputting JSON data.

```ts
import { Asset, Name, Serializer, Struct } from "@wharfkit/antelope"

@Struct.type("transfer")
class Transfer extends Struct {
  @Struct.field("name") from!: Name
  @Struct.field("name") to!: Name
  @Struct.field("asset") quantity!: Asset
  @Struct.field("string") memo!: string
}

const transfer = Transfer.from({
  from: "foo",
  to: "bar",
  quantity: "1.0000 EOS",
  memo: "hello",
})

console.log(transfer)
/*
Transfer {
  from: Name { value: UInt64 { value: [BN] } },
  to: Name { value: UInt64 { value: [BN] } },
  quantity: Asset {
    units: Int64 { value: [BN] },
    symbol: Symbol { value: [UInt64] }
  },
  memo: 'hello'
}
*/

const object = Serializer.objectify(transfer)

console.log(object)
/*
{ 
    from: 'foo', 
    to: 'bar', 
    quantity: '1.0000 EOS', 
    memo: 'hello' 
}
*/
```

This example shows creating a strongly typed `transfer` object, which when output through `console.log` shows all of the Antelope data types. The `transfer` object is then passed to the `Serializer.objectify` method which walks the object and converts all of its properties into native Javascript types, like strings and numbers.
