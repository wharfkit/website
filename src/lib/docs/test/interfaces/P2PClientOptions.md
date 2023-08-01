[@wharfkit/session - v1.0.0](/docs/testREADME.md) / P2PClientOptions

# Interface: P2PClientOptions

## Table of contents

### Properties

- [heartbeatTimoutMs](/docs/testinterfaces/P2PClientOptions.md#heartbeattimoutms)
- [provider](/docs/testinterfaces/P2PClientOptions.md#provider)
- [setTimeoutImpl](/docs/testinterfaces/P2PClientOptions.md#settimeoutimpl)

## Properties

### heartbeatTimoutMs

• `Optional` **heartbeatTimoutMs**: `number`

heartbeat timout in milliseconds, or undefined if no heartbeat is desired

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2414

___

### provider

• **provider**: [`P2PProvider`](/docs/testinterfaces/P2PProvider.md)

P2P provider to use

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2412

___

### setTimeoutImpl

• `Optional` **setTimeoutImpl**: `SetTimeout`

alternative implementation for setTimeout (mostly for testing)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2416
