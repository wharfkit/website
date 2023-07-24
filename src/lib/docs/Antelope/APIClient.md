---
title: APIClient
description: change_me
category: Antelope
published: false
---

# APIClient

The `APIClient` provided by the [Antelope](#) library is an abstraction built on top of a [FetchProvider](#) that gives developers access to the native API calls.

## Usage

### Creating an APIClient

In browser-based environments in order to create a working client, the only required parameter is the URL of the API it should use to make requests against. This will also work in a nodejs environment where the version is greater than v18.

```ts
const client = new APIClient({
  url: "https://jungle4.greymass.com",
})
```

In a nodejs environment where the version is less than v18 and [fetch](#) isn't a native feature, an instance of a `FetchProvider` must be given so that the `APIClient` knows how to make HTTP requests to the API.

This example includes [node-fetch](https://www.npmjs.com/package/node-fetch) and passes it to the `FetchProvider` so the `APIClient` can make requests.

```ts
const fetch = require("node-fetch")

const provider = new FetchProvider("https://jungle4.greymass.com", { fetch })

const client = new APIClient({ provider })
```

### Using an APIClient

Once an `APIClient` is established for a given chain, it will give access to a number of predefined API endpoints as method calls. The list of available methods embedded in the `APIClient` can be found in either the [ChainAPI](https://wharfkit.github.io/antelope/classes/ChainAPI.html) or [HistoryAPI](https://wharfkit.github.io/antelope/classes/HistoryAPI.html) autodocs. The autocompletion helpers in the developers IDE should also prompt with the available options in either `client.v1.chain` or `client.v1.history`.

Every API call made through the `APIClient` returns a promise that must be handled either through `await` or `.then`. The example below illustrates the two ways you could call the `/v1/chain/get_info` API endpoint and return a response.

```ts
const response = await client.v1.chain.get_info()

// or ...

client.v1.chain.get_info().then((response) => {
  // your code
})
```

#### Typed Responses

The `response` returned from the `APIClient` instance will be fully typed using Antelope core types. The above call will return an instance of [GetInfoResponse](https://github.com/wharfkit/antelope/blob/070bfb3bfe4b5f50f031dc58eb18090806e06c07/src/api/v1/types.ts#L324-L370), which automatically has all of the values in a typed state.

```ts
GetInfoResponse {
  server_version: '905c5cc9',
  chain_id: Checksum256 {
    array: Uint8Array(32) [
      115, 228,  56,  90,  39,   8, 230, 215,
        4, 136,  52, 251, 193,   7, 159,  47,
      171, 177, 123,  60,  18,  91,  20, 106,
      244,  56, 151,  30, 144, 113, 108,  77
    ]
  },
  head_block_num: UInt32 {
    value: BN { negative: 0, words: [Array], length: 2, red: null }
  },
  last_irreversible_block_num: UInt32 {
    value: BN { negative: 0, words: [Array], length: 2, red: null }
  },
  last_irreversible_block_id: BlockId {
    array: Uint8Array(32) [
        4, 244,  73, 172,  12,  16, 248, 191,
      226,  16, 109, 248,  37, 135,  20,  33,
      213, 168, 237, 166, 185, 122, 106, 142,
       31, 116, 227,  78, 165,  58, 186, 179
    ]
  },
  head_block_id: BlockId {
    array: Uint8Array(32) [
        4, 244,  74, 251, 213, 223,  84,  51,
      198, 171,  96, 238, 195,  71, 100, 253,
      110, 135,  43, 127,  97,  90,   7, 130,
      227, 152, 207,  17,  34,  10, 157, 144
    ]
  },
  head_block_time: TimePoint { value: Int64 { value: [BN] } },
  head_block_producer: Name { value: UInt64 { value: [BN] } },
  virtual_block_cpu_limit: UInt64 {
    value: BN { negative: 0, words: [Array], length: 2, red: null }
  },
  virtual_block_net_limit: UInt64 {
    value: BN { negative: 0, words: [Array], length: 2, red: null }
  },
  block_cpu_limit: UInt64 {
    value: BN { negative: 0, words: [Array], length: 1, red: null }
  },
  block_net_limit: UInt64 {
    value: BN { negative: 0, words: [Array], length: 1, red: null }
  },
  server_version_string: 'v3.1.3',
  fork_db_head_block_num: UInt32 {
    value: BN { negative: 0, words: [Array], length: 2, red: null }
  },
  fork_db_head_block_id: BlockId {
    array: Uint8Array(32) [
        4, 244,  74, 251, 213, 223,  84,  51,
      198, 171,  96, 238, 195,  71, 100, 253,
      110, 135,  43, 127,  97,  90,   7, 130,
      227, 152, 207,  17,  34,  10, 157, 144
    ]
  }
}
```

#### Converting Typed Responses

If the application requires the response to be untyped, the [Serializer](#) can be used to convert the response into untyped values.

```ts
const response = await client.v1.chain.get_info()

const untyped = Serializer.objectify(response)
```

The resulting response will then use native JavaScript types, as illustrated below.

```ts
{
  server_version: '905c5cc9',
  chain_id: '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d',
  head_block_num: 83119363,
  last_irreversible_block_num: 83119036,
  last_irreversible_block_id: '04f44bbcd76cf399af5e6fb30e6eeab403e2042579387711205c637f82b88c25',
  head_block_id: '04f44d03493c55292840ea3439cf764b9455aae49621c221ccbe9100d028ab23',
  head_block_time: '2023-06-20T22:15:31.000',
  head_block_producer: 'aus1genereos',
  virtual_block_cpu_limit: 200000000,
  virtual_block_net_limit: 1048576000,
  block_cpu_limit: 200000,
  block_net_limit: 1048576,
  server_version_string: 'v3.1.3',
  fork_db_head_block_num: 83119363,
  fork_db_head_block_id: '04f44d03493c55292840ea3439cf764b9455aae49621c221ccbe9100d028ab23'
}
```

### Unsupported API calls

If an API call isn't supported within the `APIClient`, a pull request can be made to the library implementing the call or the `client.call` method can be used to make a request given a known path and parameters.

#### Contributing code for new API calls

An example commit implementing the `v1/chain/get_accounts_by_authorizers` can be [found here for reference](https://github.com/wharfkit/antelope/pull/59/commits/b85448be3c99fccb45d76d310b698ea6a36ec7eb).

This commit first [defines the call itself](https://github.com/wharfkit/antelope/pull/59/commits/b85448be3c99fccb45d76d310b698ea6a36ec7eb#diff-ddf60e387c64603f070d9568d67eb5866e70c146dc69aa016791ab730f49539aR66-R73) as a function with the appropriately typed parameters in the file `src/api/v1/chain.ts`. It then utilizes the internal `client.call` function and includes the URL `path`, required Antelope typed `params`, and the `responseType` to indicate which types we expect in the API response.

```ts
async get_accounts_by_authorizers(keys: PublicKeyType[]) {
    return this.client.call({
        path: '/v1/chain/get_accounts_by_authorizers',
        params: {keys: keys},
        responseType: AccountsByAuthorizers,
    })
}
```

The `responseType` is named [AccountsByAuthorizers](https://github.com/wharfkit/antelope/pull/59/commits/b85448be3c99fccb45d76d310b698ea6a36ec7eb#diff-4fed12baf5e6587e33b5186d9ecfbdfd88e2076de11f00ac676c47fe657844cfR162-R176) and is defined in `src/api/v1/types.ts`. This [Struct](#) defines the structure of the data the API will return and defines all the native Antelope types for those fields.

```ts
@Struct.type("account_by_authorizers_row")
export class AccountByAuthorizersRow extends Struct {
  @Struct.field(Name) declare account_name: Name
  @Struct.field(Name) declare permission_name: Name
  @Struct.field(PublicKey) declare authorizing_key: PublicKey
  @Struct.field(Weight) declare weight: Weight
  @Struct.field(UInt32) declare threshold: UInt32
}

@Struct.type("account_by_authorizers")
export class AccountsByAuthorizers extends Struct {
  @Struct.field(AccountByAuthorizersRow, { array: true })
  declare accounts: AccountByAuthorizersRow[]
}
```

With this code implemented, an `APIClient` instance is able to call:

```ts
const response = await client.v1.chain.get_accounts_by_authorizers(keys)
```

The `response` will be fully typed and ready to use in a developers application.

#### Manually calling undefined API endpoints

If an endpoint isn't defined and available for immediate use, the above call structure can be used directly against an `APIClient` to make ad-hoc calls.

```ts
const response = await client.call({
  path: "/v1/chain/get_account",
  params: {
    account_name: "teamgreymass",
  },
})
```

In this example, it will call the `v1/chain/get_account` endpoint of the API and return an untyped response. The `responseType` parameter can also be used in `call` to automatically type the data.

```ts
const response = await client.call({
  path: "/v1/chain/get_account",
  params: {
    account_name: "teamgreymass",
  },
  responseType: AccountObject, // Struct defining the response type
})
```
