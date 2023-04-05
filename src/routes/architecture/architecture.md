# **Web Client SDK Architecture**

Updated: 2022-10-15

> The Web Client SDK is a project that will create a complete framework upon which web applications can be built to utilize Antelope-based blockchains. The suite of SDKs and tools within this framework will give applications access to native Antelope data types, API access to read and write data, authentication with external users through their wallets, and the flexibility to adapt to the custom needs of each individual network and application.

Source: [Web Client SDK Example Grant Proposal](https://github.com/greymass/grant-framework/blob/main/applications/greymass-web-client-sdk.md)\_

# **Overview**

This is intended to serve as a living document that gives an overview of the Web Client SDK project’s architecture. The content will not go in-depth on the individual components that make up this architecture, but instead give an overview of the various parts that make up the Web Client SDK. The individual packages themselves and interfaces between packages will have their own documentation, which may be linked here in the future.

Changes to the architecture should be proposed by developers through pull requests against this file. Clarifications on standard terminology throughout this document can be added to a future appendix.

# **Architecture**

From the perspective of a new developer using the Web Client SDK, this will be a single npm package that contains many tools suited for their specific use case. From an architectural perspective and that of more advanced developers, the Web Client SDKs will be a collection of many packages from which they can pick and choose. This gives new developers an easy onboarding experience, while offering advanced developers the flexibility they need for more complex software development.

![Package Overview](images/pkgoverview.png "Package Overview")

The above diagram outlines the individual packages that make up the Web Client SDK. Each color box represents a different type of package within the collection. A legend describing the diagram:

- The **dark green** box represents the core of the collection of packages and the brand itself.
- The **blue** **boxes** represent a specific example of a Starter Kit. These are pre-packaged collections of recommended packages for a specific environment to get developers started quickly.
- The **light green boxes** represent major standalone packages within the product collection that offer application developers access to core Antelope functionality.
- The **orange boxes** represent one or more modular plugins included to add or customize functionality of a specific package.
- The **yellow** **boxes** represent shared libraries that are utilized internally and exposed to the developer for usage in their applications.

Additional starter kits and packages can be added to this architecture as the Antelope ecosystem evolves and new needs arise. In the future, this architecture can also be replicated for use in other programming languages aside from Javascript. Descriptions for each of the packages are described below.

### **Packages**

Each package will offer standalone functionality and be distributed individually for developers to utilize in their Antelope-based applications.

#### **Starter Kit**

Each Starter Kit is a pre-packaged collection of relevant packages for a specific environment alongside any specific types of data bindings it may require. These Starter Kits will serve as a starting point for developers who benefit from starting with a common set of packages to get started building with Antelope blockchains.

A handful of default Starter Kits will be created for the most common environments, including a generic Web Kit and Server Kit. Future Starter Kits may be created for other types of environments and developers will also have the ability to create their own to fit the needs of their preferred development stack.

##### Default Starter Kits

- _Web_: A collection of packages designed to generically work with all HTML DOM environments.
- _Server_: A collection of packages for use within server-based Node.js applications and services.

##### Ideas for Further Development

- _Console_: A collection of packages to create interactive command line applications.
- _React_: A web-based collection of packages specifically designed for React.
- _Vue_: A web-based collection of packages specifically designed for Vue.js.

#### **Account Kit**

The Account Kit is a standalone package which provides a standardized representation of an account to give application developers an easy way to interact with native account data and functions.

##### Responsibilities

- Maintaining current account state, such as system token, network resources, and permissions.
- Easy access to account management actions, such as permission and resource management.
- Accessing native APIs related to accounts for easy data retrieval.

#### **Session Kit**

The Session Kit allows developers to set up reusable account sessions where they can submit requests for signatures. This kit does a lot of the heavy lifting in the SDK, abstracting away different authenticators and transaction signing flows, reducing their complexities and presenting the developers with an easy-to-use interface to perform actions for a given account.

##### Responsibilities

- Communication with Wallet Plugins to facilitate transaction signing.
- Optional usage of a Push Plugin to ensure signed transactions made it on-chain.
- Organizing various Hook Plugins to control the flow of a transaction.

The process by which the Session Kit facilitates transactions is also customizable through the use of hooks, which can be included globally in the Session Kit or specifically enabled for certain transactions. To illustrate these plugins and how they interact with the Session Kit, an example transaction flow is included:

![Transaction Flow](/images/content/trxflow.png "Transaction Flow")

The Starter Kit packages will include default hooks that improve the user experience while allowing advanced developers the opportunity to customize how the SDKs function.

#### **Contract Kit**

The Contract Kit is the easiest way to interact with smart contracts from an Antelope blockchain. It provides a simple, strongly typed API for calling actions and querying tables without boilerplate code. It also includes documentation for all contract interactions, so developers can easily see what they do and what parameters they require.

##### Responsibilities

- Facilitate creation of actions and transactions to interact with smart contracts.
- Provide query access to the contracts tables and return strongly typed data.
- Allow for dynamic interactions with contracts without needing to generate contract-specific code.

### **Plugins**

Each plugin will be designed for use within a specific package.

#### **Hook Plugins (Session Kit)**

Individual packages capable of modifying the flow of transactions through the Session Kit. These plugins can be of various types, including pre/post sign and pre/post push, allowing developers to inject logic at specific points within the “transact” function.

Some examples of the types of hooks currently anticipated include:

- A pre-sign hook for cosigning a transaction before it’s passed to the Wallet Plugin.
- A post-sign hook to relay the signature of a specific transaction to an off-chain endpoint.
- A post-broadcast hook to perform IBC proofs of a transaction on another compatible blockchain.

#### **Push Plugins (Session Kit)**

A standardized interface that optionally accepts a signed transaction and relays that information to one or more API endpoints for inclusion on-chain. The Push Plugin can optionally interact with the Session Kit’s context in various ways to inform or prompt the user for interaction.

Various approaches can be taken while developing Push Plugins, including fire-and-forget (push and move on), push-to-many (push to multiple endpoints), guaranteed push (push and verify inclusion), and push-and-retry (push and retry transaction upon failure).

#### **Wallet Plugins (Session Kit)**

A standardized interface for wallets to take an unsigned transaction, perform necessary communication, and ultimately return a signed transaction to the Session Kit.

Various flags can be configured within the session kit that allow for specific behavior globally or on a per-transaction basis. For example, a flag can be set on the transaction to indicate whether or not the wallet itself is allowed to mutate the data during the signing process.

#### **Renderer Plugins (Starter Kit)**

An optional text-based or graphical interface tailored for the development environment that is capable of responding to the events occurring within the SDK to display information or prompt for user interaction.

### **Shared Libraries**

#### **Antelope**

The core library that contains the building blocks for system level elements and functionality for Antelope blockchains. Responsibilities include maintaining core data types, cryptography, serialization, common interfaces, and native API interfaces.

#### **API Client(s)**

Standalone purpose-built API Clients to access non-native Antelope APIs as an extension of the Antelope core API Client. These API clients will abstract the call patterns of each individual API into a standardized format and return typed data for the developer to utilize.

Examples of API Clients include History APIs (e.g. Hyperion), Resource Providers (e.g. Fuel Standard), and popular 3rd party APIs (e.g. AtomicAssets).

#### **Data Type(s)**

Standalone pre-packaged libraries that define data types of non-system Antelope objects which extend the Antelope core data types. These are used within API Clients and other applications to define and utilize strongly typed data within an application.

Examples of various data types include Resource Models (e.g. PowerUp), Open Standards (e.g. Tokens, AtomicAssets), and popular 3rd party contracts.

#### **Signing Request**

Data format standard used while passing transaction request data between select packages and services.

# **Dependencies**

The dependencies of the library will be kept to a minimum while meeting the requirements of core functionality. Various plugins will be responsible for their own dependencies and only included in the default Starter Kits once they have been audited.

To illustrate the core dependencies of a basic Starter Kit, outlined below is an example of what is expected for the default Web Kit Starter Kit from the perspective of an Application.

![Dependency Graph](/images/content/depgraph.png "Dependency Graph")
