---
title: "Wharf 4.0.0"
date: 2026-09-15
tags: ["article"]
description: "Wharf 4.0.0 is available. Every @wharfkit package shares one version number and ships from one repository, so installing any of them resolves the rest to a matching version. The release also carries session keys, the API changes in @wharfkit/antelope 2.0, and a signing reliability fix for Anchor on iOS."
---

Wharf 4.0.0 is available on npm. Every `@wharfkit` package shares this version number, and all of them are developed in one repository at [github.com/wharfkit/js](https://github.com/wharfkit/js). Package names on npm are unchanged, and only the source location moved.

The number is the visible part of the change. `@wharfkit/session` was at 1.7.0 and `@wharfkit/cli` at 2.11.0; both are at 4.0.0, along with everything they depend on.

## One version number across every package

Install any `@wharfkit` package and every other Wharf package in your tree resolves to the matching version. Adding `@wharfkit/session` brings the wallet plugin you pair with it and the `@wharfkit/antelope` underneath both to 4.0.0. Inside the release, packages depend on each other by exact version rather than by a range, so the graph is resolved when we publish rather than by your package manager at install time.

Set every `@wharfkit` entry in your `package.json` to `^4.0.0` and reinstall:

```json
{
  "dependencies": {
    "@wharfkit/antelope": "^4.0.0",
    "@wharfkit/session": "^4.0.0",
    "@wharfkit/wallet-plugin-anchor": "^4.0.0",
    "@wharfkit/web-ui": "^4.0.0"
  }
}
```

No `@wharfkit` package declares another one as a peer dependency. If you added an entry to your own `package.json` only to satisfy a peer warning, and your code never imports it, remove it. The same goes for any `resolutions` or `overrides` entry you added to force a `@wharfkit` package to one version.

One version number is a packaging change and it moves no API. The API changes in this release were developed independently of it.

## What the release carries

The [release notes](/docs/releases/4-0-0) describe each of these package by package.

- **Session keys.** An application can hold a key that signs a named set of actions on its own, and hand everything else to the user's wallet. `@wharfkit/session` sets up the permission and the action links, and `@wharfkit/web-ui` and `@wharfkit/web-renderer` draw the consent flow.
- **Session handoff through a URL.** `Session.encode()` returns a session as a struct, a JSON string, or an encoded string, so one application can hand a session to another through a link.
- **Sessions the SDK can tell apart.** `equalityFn` replaces the chain, actor and permission rule that decides which stored session a login or a logout matches.
- **Anchor signing on iOS.** Same-device signing completes when Safari opens the return path in a fresh tab.
- **Table queries on float indexes.** `get_table_rows` accepts `Float128` bounds and infers the key type for `float64` and `float128` indexes.
- **Cryptography from `@noble/curves` and `@noble/hashes`**, replacing `elliptic`, `brorand` and `hash.js`.
- **`@wharfkit/protocol-scatter` and `@wharfkit/bundle` under Node.js.** Both import cleanly outside a browser, where each previously threw.
- **One license.** Every package is `BSD-3-Clause`, with the no-military-use clause gone from the license text.
- **`@wharfkit/light-api`**, a client for the Light API service contributed by [includenull](https://github.com/includenull), publishing for the first time under the `@wharfkit` name.

## Since 1.0

Wharf 1.0 was announced in November 2023. Fifteen packages have been published for the first time since then, and the 47 packages in this release have had around 280 stable releases between them. Four changes are worth calling out for anyone returning from the 1.x line.

Wharf supports five more wallets. [MetaMask](/plugins/wallet-plugin-metamask), [imToken](/plugins/wallet-plugin-imtoken), [GateWallet](/plugins/wallet-plugin-gatewallet), [PayCash](/plugins/wallet-plugin-paycash), and any authenticator reachable through the [web authenticator](/plugins/wallet-plugin-web-authenticator) plugin all have wallet plugins, and [`@wharfkit/account-creation-plugin-metamask`](/plugins/account-creation-plugin-metamask) creates accounts from MetaMask public keys.

The login interface was rebuilt. `@wharfkit/web-ui` draws the login, transact, and prompt flows as a modal layer inside your application, held in a shadow DOM so its styles and the host page's do not reach each other. Its palette is neutral by default and every color is themeable. It succeeds `@wharfkit/web-renderer`, which remains supported. The components it is built from are published separately as `@wharfkit/svelte-components` for applications that want to compose their own interface.

Wharf loads from a script tag. `@wharfkit/bundle` packages the Session, Contract, and Account Kits, `@wharfkit/web-ui`, five wallet plugins, and the history and token libraries into one file, for pages that are not built through a bundler.

Five libraries joined for work the core kits do not cover: `@wharfkit/msigs` for multisig proposals and `@wharfkit/actionstream` for subscribing to action streams, both against the Roborovski API; `@wharfkit/atomicassets` for AtomicAssets NFT data; `@wharfkit/webauthn` for building Antelope public keys and signatures from WebAuthn credentials; and `@wharfkit/sealed-messages` for encrypting a message to a recipient's public key.

## Upgrading

The [upgrade guide](/docs/releases/upgrading-to-4-0-0) covers the move package by package, including the version each one comes from, the peer and override entries to remove, and a checklist to work through.

Two things to check before you start. Every 4.0.0 package declares `engines: {"node": ">=20.19.0"}`. Both bundles of every package are compiled to ES2020, where the CommonJS bundle was previously compiled to ES2015, which reaches you through webpack 4 and through browsers released before March 2020. Projects that cannot move can stay on the 1.x line with `npm install @wharfkit/antelope@1`.

## Where Wharf is developed

All development happens in [github.com/wharfkit/js](https://github.com/wharfkit/js). Issues and pull requests belong there, against the package directory they concern. For questions about using Wharf, there is [GitHub Discussions](https://github.com/wharfkit/discussions/discussions) and the [Wharf Telegram group](https://t.me/wharfkit).

We would like to thank everyone who has built on Wharf, reported problems against it, and contributed to it since 1.0.
