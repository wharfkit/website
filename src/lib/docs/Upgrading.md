---
title: Upgrading to WharfKit 4.0.0
description: How to move a project from any earlier set of @wharfkit packages to the lockstep 4.0.0 release, covering the version change, the removed peer dependencies, and the API changes in antelope and session.
category: Upgrading
published: true
slug: index
---

# Upgrading to WharfKit 4.0.0

Three separate changes reach you in the same release, and they are worth keeping apart in your head while you read.

The first is **lockstep versioning**. Every `@wharfkit/*` package now shares one version number and ships from one repository. This is a packaging change. It does not alter any API.

The second is **`@wharfkit/antelope` 2.0**, a set of real API changes that were in flight independently. They would have landed whether or not the packaging changed.

The third is a smaller set of API changes in **`@wharfkit/session`**, also in flight independently.

Package names on npm are unchanged. Only the source location moved.

## What lockstep means for your package.json

Every package that joined the release carries the version `4.0.0`, regardless of where its own numbering had reached. `@wharfkit/antelope` goes from 1.2.0 to 4.0.0, `@wharfkit/session` from 1.7.0 to 4.0.0, `@wharfkit/cli` from 2.11.0 to 4.0.0.

Set every `@wharfkit/*` entry in your `package.json` to `^4.0.0`:

```json
{
  "dependencies": {
    "@wharfkit/antelope": "^4.0.0",
    "@wharfkit/session": "^4.0.0",
    "@wharfkit/wallet-plugin-anchor": "^4.0.0",
    "@wharfkit/web-renderer": "^4.0.0"
  }
}
```

Inside the release, packages depend on each other by exact version (`"@wharfkit/antelope": "4.0.0"`, never a range). You no longer resolve that graph yourself, and installing any one package brings the matching versions of the rest with it.

Release candidates publish under the `next` dist-tag. Stable releases publish under `latest`.

### Version each package moves from

| Package                                       | Last standalone release | New version |
| --------------------------------------------- | ----------------------- | ----------- |
| `@wharfkit/antelope`                          | 1.2.0                   | 4.0.0       |
| `@wharfkit/common`                            | 1.5.0                   | 4.0.0       |
| `@wharfkit/signing-request`                   | 3.4.0                   | 4.0.0       |
| `@wharfkit/sealed-messages`                   | 1.2.0                   | 4.0.0       |
| `@wharfkit/abicache`                          | 1.2.4                   | 4.0.0       |
| `@wharfkit/contract`                          | 1.3.0                   | 4.0.0       |
| `@wharfkit/session`                           | 1.7.0                   | 4.0.0       |
| `@wharfkit/resources`                         | 1.6.0                   | 4.0.0       |
| `@wharfkit/token`                             | 1.2.0                   | 4.0.0       |
| `@wharfkit/account`                           | 1.4.1                   | 4.0.0       |
| `@wharfkit/roborovski`                        | 1.1.1                   | 4.0.0       |
| `@wharfkit/hyperion`                          | 1.0.5                   | 4.0.0       |
| `@wharfkit/atomicassets`                      | 1.3.1                   | 4.0.0       |
| `@wharfkit/actionstream`                      | 0.4.0                   | 4.0.0       |
| `@wharfkit/protocol-esr`                      | 1.6.1                   | 4.0.0       |
| `@wharfkit/protocol-scatter`                  | 1.4.2                   | 4.0.0       |
| `@wharfkit/msigs`                             | 0.3.1                   | 4.0.0       |
| `@wharfkit/webauthn`                          | 1.3.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-anchor`              | 1.7.3                   | 4.0.0       |
| `@wharfkit/wallet-plugin-cleos`               | 1.2.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-cloudwallet`         | 1.6.5                   | 4.0.0       |
| `@wharfkit/wallet-plugin-gatewallet`          | 1.1.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-imtoken`             | 1.1.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-metamask`            | 1.2.1                   | 4.0.0       |
| `@wharfkit/wallet-plugin-mock`                | 1.1.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-paycash`             | 1.1.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-privatekey`          | 1.1.0                   | 4.0.0       |
| `@wharfkit/wallet-plugin-scatter`             | 1.5.1                   | 4.0.0       |
| `@wharfkit/wallet-plugin-tokenpocket`         | 1.6.3                   | 4.0.0       |
| `@wharfkit/wallet-plugin-web-authenticator`   | 0.5.3                   | 4.0.0       |
| `@wharfkit/transact-plugin-autocorrect`       | 1.4.1                   | 4.0.0       |
| `@wharfkit/transact-plugin-cosigner`          | 1.1.0                   | 4.0.0       |
| `@wharfkit/transact-plugin-explorerlink`      | 1.0.1                   | 4.0.0       |
| `@wharfkit/transact-plugin-finality-callback` | 1.0.0                   | 4.0.0       |
| `@wharfkit/transact-plugin-finality-checker`  | 1.0.0                   | 4.0.0       |
| `@wharfkit/transact-plugin-mock`              | 1.1.0                   | 4.0.0       |
| `@wharfkit/transact-plugin-resource-provider` | 1.2.0                   | 4.0.0       |
| `@wharfkit/account-creation-plugin-anchor`    | 1.4.0                   | 4.0.0       |
| `@wharfkit/account-creation-plugin-jungle4`   | 1.2.0                   | 4.0.0       |
| `@wharfkit/account-creation-plugin-metamask`  | 1.3.0                   | 4.0.0       |
| `@wharfkit/web-renderer`                      | 1.4.3                   | 4.0.0       |
| `@wharfkit/web-ui`                            | 0.4.0                   | 4.0.0       |
| `@wharfkit/svelte-components`                 | 0.7.0                   | 4.0.0       |
| `@wharfkit/cli`                               | 2.11.0                  | 4.0.0       |
| `@wharfkit/mock-data`                         | 1.3.1                   | 4.0.0       |
| `@wharfkit/bundle`                            | 0.1.2                   | 4.0.0       |

### Remove @wharfkit peer dependencies you added

No `@wharfkit/*` package declares another `@wharfkit/*` package as a peer dependency any more. Plugins used to declare `@wharfkit/session`, and `@wharfkit/wallet-plugin-cloudwallet` also declared `@wharfkit/antelope`. Those are normal, exact-pinned dependencies now.

If you added a `@wharfkit/*` entry to your own `package.json` only to satisfy a peer warning, and your code never imports it, remove the entry. Nothing errors when a stale entry stays, which is what makes this the change most likely to be missed. A stale entry with an old range is also the most likely way to end up with two copies of a package after the upgrade.

Keep the entries for packages you import directly. A dApp that calls `new SessionKit(...)` still depends on `@wharfkit/session`.

`@wharfkit/svelte-components` keeps its `svelte` and `tailwindcss` peer dependencies. The policy covers `@wharfkit/*` packages only.

### Remove resolutions and overrides you added

If you pinned a `@wharfkit/*` package through yarn `resolutions`, npm `overrides`, or pnpm `overrides` to force deduplication or to silence a peer conflict, delete those entries and reinstall. They pin versions that no longer exist in the graph, and they can reintroduce the duplicate they were added to prevent.

### Node.js version

Every 4.0.0 package declares `engines: {"node": ">=20.19.0"}`, and the SDK needs a JavaScript environment with `BigInt` and WebCrypto. Browser bundlers that consume ES modules are fine. Projects that cannot move off an older Node.js should stay on the 1.x line:

```
npm install @wharfkit/antelope@1
```

### JavaScript language level

Both bundles of every 4.0.0 package are compiled to ES2020. In the 1.x and 3.x line the CommonJS bundle was compiled to ES2015 while the ES module bundle was ES2020, so a toolchain that parsed the CommonJS entry point at an older level worked by accident. It no longer does.

The change reaches you only through a parser. Every Node.js version the `engines` field admits runs ES2020, and every current browser and bundler does. Two cases fail:

- **webpack 4**, whose bundled acorn cannot parse optional chaining in `node_modules`, and which reports it as `Module parse failed: Unexpected token`. webpack 5 is fine.
- **Browsers released before March 2020**: Chrome and Edge below 80, Firefox below 74, Safari below 13.1, iOS Safari below 13.4, Samsung Internet below 12.

If you must serve one of those browsers, transpile `@wharfkit/*` rather than excluding it from your build's transform step. Nothing in the change touches runtime behavior: no API moved, and no polyfill is added or removed.

### Namespace objects in the CommonJS bundles

`@wharfkit/cli`, `@wharfkit/protocol-esr` and `@wharfkit/session` re-export a namespace they import from a CommonJS dependency, such as the `zlib` option `session` hands to a signing request. In the 3.x line the CommonJS bundles built that namespace with a `null` prototype and froze it, so `namespace instanceof Object` was `false` and the object rejected writes. In 4.0.0 it inherits the dependency's own prototype and is not frozen, which is what the TypeScript sources have always meant and what the ES module bundles have always done.

Reading properties and calling methods behaves the same either way. Code that tests one of these namespaces with `instanceof`, `Object.getPrototypeOf`, or `Object.isFrozen` sees a different answer, and code that assigns onto one now succeeds silently where it previously threw in strict mode.

### Licensing

Every package in the release is licensed under plain `BSD-3-Clause`, with one license text across the repository. Before 4.0.0 the license text in most packages carried a no-military-use clause, some manifests declared it as `BSD-3-Clause-No-Military-License`, and `@wharfkit/signing-request` was MIT. If your license compliance tooling records `@wharfkit/*` packages by SPDX identifier, expect the identifiers to change.

## Confirming you resolve one copy of antelope

`@wharfkit/antelope` prints this to the console when it detects two copies of itself at runtime:

```
Detected alien instance of <type>, this usually means more than one version of @wharfkit/antelope has been included in your bundle.
```

The warning fires once per process, so a quiet console after the first occurrence does not mean the problem cleared. Resolving one copy of every `@wharfkit/*` package is the reason lockstep exists, and it is the thing to verify first after upgrading.

Check the installed tree directly:

```
npm ls @wharfkit/antelope
yarn why @wharfkit/antelope
pnpm why @wharfkit/antelope
bun pm ls | grep @wharfkit/antelope
```

One entry at `4.0.0` is the expected result. If a second version appears, the next section covers the known source.

### Known source of a second copy

**`@wharfkit/apiclient-leap`, `@wharfkit/apiclient-telos` and `@wharfkit/apiclient-wax`** did not join the lockstep release. `apiclient-leap` depends on `@wharfkit/antelope` at `^0.10.0-beta1`, which cannot resolve to 4.0.0, so any project using one of the three resolves two copies of antelope. Their own version numbers sit at 4.0.6, close enough to the lockstep line to read as part of it. They are not.

`@wharfkit/account-creation-plugin-metamask` used to bring a second copy through `@greymass/create-account`. In 4.0.0 the plugin no longer depends on that package, so a warning you saw only with the metamask plugin installed is gone.

## What changed in @wharfkit/antelope 2.0

These are API changes, unrelated to the repository move. They ship inside 4.0.0 because the lockstep number replaced the 2.0 number the work was originally headed for.

### Cryptography moved to noble

`elliptic`, `brorand` and `hash.js` were replaced by `@noble/curves` and `@noble/hashes`.

**K1 signatures produced for the same key and message differ byte for byte from 1.x.** The canonical-signature search now feeds the attempt counter through RFC 6979 extra entropy rather than through the old library's personalization string. Every signature the new code produces is valid and canonical, and verification of old signatures is unaffected. Tests that assert a literal expected signature string need re-recording.

**`PrivateKey.sharedSecret()` returns a different value for some key pairs.** The old derivation stripped leading zero bytes from the shared x-coordinate; the new one returns the full fixed-width 32 bytes, which is what the specification calls for. The two agree unless the x-coordinate starts with a zero byte, which happens for roughly one key pair in 256. To decrypt data sealed with the old derivation, pass the `legacy` option:

```ts
const secret = privateKey.sharedSecret(publicKey, { legacy: true })
```

### Float rendering matches nodeos

`Float32.toString()` returned a fixed seven decimal places. It now returns the shortest string that round-trips to the same value, so `1.5` renders as `"1.5"` rather than `"1.5000000"`. Any snapshot, fixture, or user-facing string built from a `Float32` changes accordingly.

Infinity and NaN render as the spellings nodeos emits: `inf`, `-inf`, `nan` and `-nan`. Negative zero renders as `-0`. A NaN decoded from the wire keeps its original bytes so its sign survives re-encoding.

### Authority sorting matches consensus

`Authority.sort()` used a string comparison over the rendered key, permission and wait values. It now compares keys by the ordering nodeos enforces, permission levels by actor and then permission, and waits numerically. Call it before including an authority in an `updateauth` action, as before. Authorities that the old ordering produced were sometimes rejected by the chain; that is what the change fixes.

`Name`, `PermissionLevel` and `PublicKey` gained a public `compare()` method as part of this.

### fetch resolution and node-fetch

`FetchProvider` now looks for `globalThis.fetch` first, then `window.fetch`. Node.js 18 and later ship a built-in `fetch`, so passing a `fetch` implementation is no longer necessary on any supported Node.js version. If you were importing `node-fetch` and passing it in, you can drop it:

```ts
// before
import fetch from "node-fetch"
const provider = new FetchProvider(url, { fetch })

// after
const provider = new FetchProvider(url)
```

The `fetch` option stays supported for custom implementations and for instrumenting requests.

### Table queries: float64 and float128 indexes

`get_table_rows` accepts `Float128` bounds and infers `key_type` for `float64` and `float128` indexes. A `Float128` bound sets `encode_type: 'hex'` and byte-reverses the bound, which is the spelling nodeos reads. `GetTableRowsParams` gained an `encode_type` field, and `Float128` gained `fromDouble()`, `fromDecimal()` and `toBoundHex()`. These are additions; existing table queries are unaffected.

### Dependency updates

`pako` moved from 2.x to 3.x and `bn.js` from 4.x to 5.x. Both are internal to antelope. If your own project imports `pako` directly, note that 3.x is ESM and has no default export.

## What changed in @wharfkit/session

Two signatures on `SessionKit` changed shape. The rest of the 1.7.x line carried forward intact.

### RestoreArgs is now PartialSerializedSession

`SessionKit.restore()` describes its argument with `PartialSerializedSession`, and the `RestoreArgs` type is gone. The argument is a partial `SerializedSession`, which is what it had always been in practice, and the new name says so.

```ts
import type { PartialSerializedSession } from "@wharfkit/session"

const session = await sessionKit.restore({ chain, actor, permission })
```

Values you already pass keep working, because the shape is unchanged apart from `walletPlugin`, which is typed as `SerializedWalletPlugin` rather than `Record<string, any>`. Only an explicit `import type {RestoreArgs}` needs editing. Code that hands `restore()` an object literal or a whole `SerializedSession` compiles unchanged.

### persistSession takes an options object

`SessionKit.persistSession()` took a boolean second argument. It takes `PersistOptions` instead, which carries the same flag and adds the equality function described below.

```ts
await sessionKit.persistSession(session, { setAsDefault: false })
```

The default is unchanged: a session with no second argument persists as the default for its chain.

### Session handoff through a URL

`Session.encode()` returns a session as a `SerializedSession`, a JSON string, a `URLEncodedSession` struct, or an Antelope-encoded hex string, so one application can hand a session to another through a link.

```ts
const payload = session.encode("url")
window.location.href = `https://example.com/?incomingWharfSession=${payload}`
```

The receiving application opts in, and `restore()` then reads the parameter, strips it from the URL so a reload cannot replay it, and falls back to storage when no session arrives:

```ts
const sessionKit = new SessionKit(args, { acceptUrlSession: true })
const session = await sessionKit.restore()
```

`acceptUrlSessionParam` renames the parameter, which defaults to `incomingWharfSession`. Reading the URL requires a browser; under Node.js `restore()` goes straight to storage.

Anyone sending a session this way is handing over the wallet data it carries. Send it only to an origin you control.

### Choosing when two sessions are the same

`SessionKit` treats two sessions as the same when their chain, actor and permission match, which is what decides whether persisting a session replaces a stored one and which session a logout removes. `equalityFn` replaces that rule:

```ts
import { Session, type SessionType } from "@wharfkit/session"

const sessionKit = new SessionKit(args, {
  equalityFn: (a: SessionType, b: SessionType) => {
    const first = a instanceof Session ? a.serialize() : a
    const second = b instanceof Session ? b.serialize() : b
    return (
      Session.matches(first, second) &&
      first.data?.appId === second.data?.appId
    )
  },
})
```

An application holding several sessions for one account, separated by something it stores in `session.data`, needs this to keep them apart. `login()`, `logout()` and `persistSession()` each accept an `equalityFn` of their own for a single call. The default is exported as `serializedSessionEquals`.

## Packages that did not move

Everything in the lockstep group is on 4.0.0. These stayed behind, and their version numbers keep their own lines:

- **`@wharfkit/apiclient-leap`, `@wharfkit/apiclient-telos`, `@wharfkit/apiclient-wax`** at 4.0.6, which is not part of the lockstep line.
- **`@wharfkit/console-renderer`** at 0.1.1, pinned to `@wharfkit/session` 0.3.1. It cannot be used with 4.0.0 until it is ported.
- **`@wharfkit/wallet-plugin-wombat`**, for a wallet that is discontinued.
- **`@wharfkit/wallet-plugin-etheraccount`, `@wharfkit/wallet-plugin-ledger`, `@wharfkit/transact-plugin-sessionkey`**, none of which were published.

## Upgrade checklist

1. Set every `@wharfkit/*` dependency to `^4.0.0`.
2. Delete `@wharfkit/*` entries you added only to satisfy peer warnings.
3. Delete `resolutions` or `overrides` entries covering `@wharfkit/*`.
4. Confirm Node.js 20.19 or later.
5. Reinstall from a clean lockfile and confirm one `@wharfkit/antelope` in the tree.
6. Re-record any test fixture that asserts a literal K1 signature.
7. Rename `RestoreArgs` imports to `PartialSerializedSession`, and pass `{setAsDefault}` where `persistSession` took a boolean.
8. Check every place a `Float32` becomes a string.
9. Add `{legacy: true}` to `sharedSecret` calls that read data sealed before 4.0.0.
10. Run the app and watch the console for the alien-instance warning.
