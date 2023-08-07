---
title: TransactContext
description: change_me
category: SessionKit
published: true
hidden: true
---

```ts
/**
 * Options for creating a new context for a [[Session.transact]] call.
 */
export interface TransactContextOptions {
  abiCache: ABICacheInterface
  appName?: NameType
  chain: ChainDefinition
  client: APIClient
  createRequest: (args: TransactArgs) => Promise<SigningRequest>
  fetch: Fetch
  permissionLevel: PermissionLevel
  storage?: SessionStorage
  transactPlugins?: AbstractTransactPlugin[]
  transactPluginsOptions?: TransactPluginsOptions
  ui?: UserInterface
}

/**
 * Temporary context created for the duration of a [[Session.transact]] call.
 *
 * This context is used to store the state of the transact request and
 * provide a way for plugins to add hooks into the process.
 */
export class TransactContext {
  readonly abiCache: ABICacheInterface
  readonly appName?: string
  readonly chain: ChainDefinition
  readonly client: APIClient
  readonly createRequest: (
    args: TransactArgs
  ) => Promise<SigningRequest>
  readonly fetch: Fetch
  readonly hooks: TransactHooks = {
    afterBroadcast: [],
    afterSign: [],
    beforeSign: [],
  }
  public info: API.v1.GetInfoResponse | undefined
  readonly permissionLevel: PermissionLevel
  readonly storage?: SessionStorage
  readonly transactPluginsOptions: TransactPluginsOptions
  readonly ui?: UserInterface

  constructor(options: TransactContextOptions) {
    this.abiCache = options.abiCache
    this.appName = String(options.appName)
    this.chain = options.chain
    this.client = options.client
    this.createRequest = options.createRequest
    this.fetch = options.fetch
    this.permissionLevel = options.permissionLevel
    if (options.storage) {
      this.storage = options.storage
    }
    this.transactPluginsOptions = options.transactPluginsOptions || {}
    this.ui = options.ui
    options.transactPlugins?.forEach(
      (plugin: AbstractTransactPlugin) => {
        plugin.register(this)
      }
    )
  }

  get accountName(): Name {
    return this.permissionLevel.actor
  }

  get permissionName(): Name {
    return this.permissionLevel.permission
  }

  get esrOptions(): SigningRequestEncodingOptions {
    return {
      abiProvider: this.abiCache,
      zlib,
    }
  }

  addHook(
    t: TransactHookTypes,
    hook: TransactHookMutable | TransactHookImmutable
  ) {
    switch (t) {
      case TransactHookTypes.beforeSign: {
        this.hooks[t].push(hook as TransactHookMutable)
        break
      }
      case TransactHookTypes.afterSign:
      case TransactHookTypes.afterBroadcast: {
        this.hooks[t].push(hook as TransactHookImmutable)
        break
      }
    }
  }

  async getInfo(): Promise<API.v1.GetInfoResponse> {
    let info: API.v1.GetInfoResponse | undefined = this.info
    if (this.info) {
      info = this.info
    } else {
      this.info = info = await this.client.v1.chain.get_info()
    }
    return info
  }

  async resolve(
    request: SigningRequest,
    expireSeconds = 120
  ): Promise<ResolvedSigningRequest> {
    // Build the transaction header
    let resolveArgs = {
      chainId: this.chain.id,
    }

    // Check if this request requires tapos generation
    if (request.requiresTapos()) {
      const info = await this.getInfo()
      const header = info.getTransactionHeader(expireSeconds)
      // override resolve args to include tapos headers
      resolveArgs = {
        ...resolveArgs,
        ...header,
      }
    }

    // Load ABIs required to resolve this request
    const abis = await request.fetchAbis(this.abiCache)

    // Resolve the request and return
    return request.resolve(abis, this.permissionLevel, resolveArgs)
  }
}
```
