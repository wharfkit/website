---
title: Upgrading to WharfKit 4.0.0
description: How to move a project from any earlier set of @wharfkit packages to the 4.0.0 release, covering the version change, the removed peer dependencies, and the API changes to expect.
category: Releases
published: true
slug: upgrading-to-4-0-0
order: 2
---

# Upgrading to WharfKit 4.0.0

WharfKit 4.0.0 is the first release in which every `@wharfkit/*` package shares one version number and ships from one repository. Moving to it is a packaging change with no effect on any API.

The same release carries the API changes that were already under way before the packaging changed: `@wharfkit/antelope` 2.0, and a set of additions and two signature changes in `@wharfkit/session`.

Package names on npm are unchanged. The source for every package moved to the `wharfkit/js` repository. The [release notes](/docs/releases/4-0-0) list what each package gained.

## Package versions

Every package in the release is version `4.0.0`, whatever version it was on before. `@wharfkit/antelope` moves from 1.2.0, `@wharfkit/session` from 1.7.0, and `@wharfkit/cli` from 2.11.0.

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

Inside the release, packages depend on each other by exact version (`"@wharfkit/antelope": "4.0.0"`, never a range). Installing any one package brings the matching versions of the rest with it, so your project resolves one version of each.

Release candidates publish under the `next` dist-tag. Stable releases publish under `latest`.

### Versions by package

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
| `@wharfkit/light-api`                         | first published         | 4.0.0       |

### Remove @wharfkit peer dependencies you added

No `@wharfkit/*` package declares another `@wharfkit/*` package as a peer dependency. Before 4.0.0, plugins declared `@wharfkit/session` as a peer dependency, and `@wharfkit/wallet-plugin-cloudwallet` also declared `@wharfkit/antelope`. Both are normal, exact-pinned dependencies in 4.0.0.

If you added a `@wharfkit/*` entry to your own `package.json` only to satisfy a peer warning, and your code never imports it, remove the entry. Nothing errors when a stale entry stays. A stale entry with an old range can leave two copies of a package in your tree after the upgrade.

Keep the entries for packages you import directly. An application that calls `new SessionKit(...)` still depends on `@wharfkit/session`.

`@wharfkit/svelte-components` keeps its `svelte` and `tailwindcss` peer dependencies. The change covers `@wharfkit/*` peer dependencies only.

### Remove resolutions and overrides you added

If you pinned a `@wharfkit/*` package through yarn `resolutions`, npm `overrides`, or pnpm `overrides` to force deduplication or to silence a peer conflict, delete those entries and reinstall. Those entries pin versions that are not in the 4.0.0 graph, and they can reintroduce the duplicate they were added to prevent.

### Node.js version

Every 4.0.0 package declares `engines: {"node": ">=20.19.0"}`. In the browser, the SDK needs `BigInt` and WebCrypto, which every browser released since 2020 provides. Projects that cannot move to a supported Node.js version can stay on the 1.x line:

```
npm install @wharfkit/antelope@1
```

### JavaScript language level

Both bundles of every 4.0.0 package are compiled to ES2020. In the 1.x and 3.x line the CommonJS bundle was compiled to ES2015 while the ES module bundle was ES2020, so a toolchain that could only parse the older level still loaded the CommonJS entry point. In 4.0.0 both entry points need an ES2020 parser.

Every Node.js version the `engines` field admits parses ES2020, and so does every current browser and bundler. Two cases fail:

- **webpack 4**, whose bundled acorn cannot parse optional chaining in `node_modules`, and which reports it as `Module parse failed: Unexpected token`. webpack 5 parses it.
- **Browsers released before March 2020**: Chrome and Edge below 80, Firefox below 74, Safari below 13.1, iOS Safari below 13.4, Samsung Internet below 12.

If you must serve one of those browsers, transpile `@wharfkit/*` in your build rather than excluding it from the transform step. Runtime behavior is unchanged: no API moved, and no polyfill is added or removed.

### Namespace objects in the CommonJS bundles

A namespace that `@wharfkit/cli`, `@wharfkit/protocol-esr` or `@wharfkit/session` re-exports from a CommonJS dependency keeps that dependency's prototype and stays writable, where the 3.x CommonJS bundles froze it with a `null` prototype. Check any code that tests one with `instanceof`, `Object.getPrototypeOf` or `Object.isFrozen`; the [release notes](/docs/releases/4-0-0#across-every-package) describe the difference.

### Licensing

Every package is licensed under plain `BSD-3-Clause`. License compliance tooling that records `@wharfkit/*` packages by SPDX identifier sees the identifiers change, since most packages previously declared a no-military-use variant and `@wharfkit/signing-request` was MIT.

## Confirming one copy of antelope

`@wharfkit/antelope` prints this to the console when it detects two copies of itself at runtime:

```
Detected alien instance of <type>, this usually means more than one version of @wharfkit/antelope has been included in your bundle.
```

The warning fires once per process, so a quiet console after the first occurrence does not mean the problem cleared. Check this first after upgrading. One copy of every `@wharfkit/*` package is the guarantee the 4.0.0 release provides.

Check the installed tree directly:

```
npm ls @wharfkit/antelope
yarn why @wharfkit/antelope
pnpm why @wharfkit/antelope
bun pm ls | grep @wharfkit/antelope
```

The expected result is one entry at `4.0.0`.

### Known source of a second copy

**`@wharfkit/apiclient-leap`, `@wharfkit/apiclient-telos` and `@wharfkit/apiclient-wax`** are not part of the 4.0.0 release. `apiclient-leap` depends on `@wharfkit/antelope` at `^0.10.0-beta1`, which cannot resolve to 4.0.0, so any project using one of the three resolves two copies of antelope. Their own version number is 4.0.6, which is unrelated to the 4.0.0 release.

`@wharfkit/account-creation-plugin-metamask` used to bring a second copy through `@greymass/create-account`. In 4.0.0 the plugin no longer depends on that package, so that source of the warning is gone.

## Changes to expect in @wharfkit/antelope

These API changes were developed as antelope 2.0, independent of the repository move, and ship under the 4.0.0 version number. Each one is described in full in the [release notes](/docs/releases/4-0-0#wharfkitantelope).

- **K1 signatures differ byte for byte** from the ones 1.x produced for the same key and message. They are valid and canonical, and verification of older signatures is unaffected. Re-record any fixture asserting a literal signature string.
- **`PrivateKey.sharedSecret()` returns the full 32 bytes** of the shared x-coordinate. Pass `{legacy: true}` to read data encrypted with the old derivation.
- **`Float32.toString()` returns the shortest round-tripping string**, and infinity, NaN and negative zero render as nodeos spells them. Check every place a `Float32` becomes a string.
- **`Authority.sort()` orders keys, accounts and waits the way the chain does.** `Name`, `PermissionLevel` and `PublicKey` gained a public `compare()`.
- **`FetchProvider` finds `globalThis.fetch` on its own**, so a `node-fetch` import passed as the `fetch` option can go.
- **`get_table_rows` handles `float64` and `float128` indexes**, an addition that leaves existing queries alone.
- **`pako` moved to 3.x and `bn.js` to 5.x**, both internal to antelope. `pako` 3.x is ESM and has no default export, which reaches a project that imports it directly.

## Changes to expect in @wharfkit/session

Two method signatures changed, and the rest of the release is additive. The [release notes](/docs/releases/4-0-0#wharfkitsession) describe each addition.

- **`SessionKit.restore()` takes a `PartialSerializedSession`**, and `RestoreArgs` is removed. Values you already pass keep working; rename an explicit `import type {RestoreArgs}`.
- **`SessionKit.persistSession()` takes `PersistOptions`** in place of a boolean: `persistSession(session, {setAsDefault: false})`.
- **`logout(session)` clears the stored default only when that session was the default.** Any logout previously cleared it for every chain.
- **`login()`, `restore()` and `persistSession()` resolve after storage is written**, and `restoreAll()` writes nothing. An application that raced a read against one of these sees ordering it could not rely on before.
- **`URLEncodedSession` exposes `serialized`** in place of `args`.

## Packages that did not move

These packages are not part of the 4.0.0 release and keep their own version numbers:

- **`@wharfkit/apiclient-leap`, `@wharfkit/apiclient-telos`, `@wharfkit/apiclient-wax`** at 4.0.6, a version number unrelated to the 4.0.0 release.
- **`@wharfkit/console-renderer`** at 0.1.1, pinned to `@wharfkit/session` 0.3.1. It does not work with 4.0.0.
- **`@wharfkit/wallet-plugin-wombat`**, for a wallet that is discontinued.
- **`@wharfkit/wallet-plugin-etheraccount`, `@wharfkit/wallet-plugin-ledger`, `@wharfkit/transact-plugin-sessionkey`**, none of which were published.

## Upgrade checklist

1. Set every `@wharfkit/*` dependency to `^4.0.0`.
2. Delete `@wharfkit/*` entries you added only to satisfy peer warnings.
3. Delete `resolutions` or `overrides` entries covering `@wharfkit/*`.
4. Confirm Node.js 20.19 or later.
5. Reinstall from a clean lockfile and confirm one `@wharfkit/antelope` in the tree.
6. Re-record any test fixture that asserts a literal K1 signature.
7. Rename `RestoreArgs` imports to `PartialSerializedSession`, and pass `{setAsDefault}` to `persistSession` in place of the boolean.
8. Check every place a `Float32` becomes a string.
9. Add `{legacy: true}` to `sharedSecret` calls that read data encrypted before 4.0.0.
10. Run the app and watch the console for the `alien instance` warning.
