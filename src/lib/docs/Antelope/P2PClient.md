---
title: P2PClient
description: change_me
category: Antelope
published: false
---

# P2PClient

The `P2PClient` provided by the [Antelope](#) library is a client capable of sending and receiving messages on a native Antelope peer-to-peer network.

All documentation surrounding usage of this client will focus on usage within a nodejs context.

## Usage

The first step in establishing a connection to a P2P network is setting up a [net.Socket](https://nodejs.org/api/net.html#class-netsocket) instance and connecting to a peer on the network.

```ts
import { Socket } from "net"

const socket = new Socket()
socket.connect(9876, "jungle4.seed.eosnation.io")
```

This will create a listener and connect it to the desired endpoint.

The next step is setting up the `P2PClient` instance and giving it an instance of a [P2PProvider](https://wharfkit.github.io/antelope/interfaces/P2PProvider.html). A default provider is exported from the [Antelope](#) library and is named [SimpleEnvelopeP2PProvider](https://wharfkit.github.io/antelope/classes/SimpleEnvelopeP2PProvider.html). This provider accepts the `socket` created in the first step and instructs the client to listen to the events it emits.

```ts
import { P2PClient, SimpleEnvelopeP2PProvider } from "@wharfkit/antelope"

const client = new P2PClient({
  provider: new SimpleEnvelopeP2PProvider(socket),
})
```

At this point the `socket` is connected and the `P2PClient` is setup, but the peer the script is connected with is expecting a handshake message to validate the connection. In order for the `P2PClient` to start brokering messages, a [P2P.HandshakeMessage](https://github.com/wharfkit/antelope/blob/64fe9cb1f69590c7496e1da7a378590f9d676726/src/p2p/types.ts#L21-L38) message must be send with some information about our client and the state it is in.

In this example the script will:

- Start syncing from the point in time the script is started.
- Retrieve the current state of the blockchain via the native HTTP APIs for the chain.
- Generate a random key pair for usage during communication.
- Generate a random sha256 value to identify the script.

More advanced implementations can be implemented to alter the point in time it starts syncing.

**Note**: The `fetch` instance can be omitted if using nodejs v18 or later.

```ts
import { APIClient, Checksum256, FetchProvider, P2P, PrivateKey } from "@wharfkit/antelope"
import fetch from "node-fetch"

// Establish API Client and embedding fetch for nodejs below v18
const fetchProvider = new FetchProvider("https://jungle4.api.eosnation.io", { fetch })
const apiClient = new APIClient({ provider: fetchProvider })

// Request current chain state via get_info call to sync from this point forward
const info = await apiClient.v1.chain.get_info()
const token = Checksum256.hash(info.head_block_time.value.byteArray)

// Generate a key pair for usage in our messages
const privateKey = PrivateKey.generate("K1")
const publicKey = privateKey.toPublic()

// Assemble the P2P.HandshakeMessage
const handshake: P2P.HandshakeMessage = P2P.HandshakeMessage.from({
  networkVersion: 0xfe,
  chainId: info.chain_id,
  nodeId: Checksum256.hash(publicKey.data),
  key: publicKey,
  time: info.head_block_time.value,
  token,
  sig: privateKey.signDigest(token),
  p2pAddress: "none",
  lastIrreversibleBlockNumber: info.last_irreversible_block_num,
  lastIrreversibleBlockId: info.last_irreversible_block_id,
  headNum: info.head_block_num,
  headId: info.head_block_id,
  os: "nodejs",
  agent: "wharfkit/antelope",
  generation: 4,
})

// Send the connected client the message
client.send(handshake)
```

Now with an established connection the script will begin to receive messages and custom logic can be added to read and respond to specific message types.

As an example of how messaging handling can be done, we start with how to receive and respond to a [time_message](https://github.com/wharfkit/antelope/blob/64fe9cb1f69590c7496e1da7a378590f9d676726/src/p2p/types.ts#L54-L60). This is the message that clients on the P2P network uses as a heartbeat to ensure each connection is alive. Without handling and responding to this message, most clients will assume the connection is lost and forcibly disconnect the client.

```ts
import { P2P } from "@wharfkit/antelope"

client.on("message", (msg) => {
  // Each message received has a type and data
  const [type, data] = msg
  // For the sake of seeing socket activity, dump everything to the console
  console.log(type, data)
  // Switch based on message type
  switch (type) {
    // If we receive a time_message...
    case "time_message": {
      // Assemble a response using the current time
      const payload = P2P.TimeMessage.from({
        org: Date.now(),
        rec: 0,
        xmt: 0,
        dst: 0,
      })
      // Respond to the peer to let them know this connection is alive
      client.send(payload)
      break
    }
    default: {
      break
    }
  }
})
```

From here on our, the script will remain connected to the peer and continuously receive new messages for as long as its running. Each message received will be encoded as one of the [NetMessage](https://github.com/wharfkit/antelope/blob/64fe9cb/src/p2p/types.ts) variants, of which all of the data will be natively typed with the [Antelope](#) library. Additional logic can be established to receive blocks, transactions, and the other message types.
