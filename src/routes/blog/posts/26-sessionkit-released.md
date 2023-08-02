---
title: Session Kit Released
date: 2023-08-02
tags: ["article"]
---

Today marks an important milestone in Wharf's progress and a step forward for the Antelope ecosystem. Not only are you reading this article on the new version of the WharfKit.com website, but also the Session Kit, one of the major Wharf components, is now production ready with a v1.0 release!

This article will outline details of the v1.0 release of the Session Kit, information about the new website, a brief history of our journey so far, and what exciting things come next.

## Session Kit (v1.0)

One of the major components of Wharf, the [Session Kit](/kits/session), is now production ready and available in a v1.0 release. Along with the release of this kit comes the release of dozens of other important components, samples, plugins, and templates:

- The [Web Renderer](#) to provide an out-of-the-box user experience.
- [4 sample projects](#) to help show how Wharf integrates into popular web frameworks.
- [4 wallet plugins](https://github.com/wharfkit/?q=wallet&type=all&language=&sort=) to allow users to accepts apps with their preferred wallet.
- [4 transact plugins](https://github.com/wharfkit/?q=transact&type=all&language=&sort=) to make performing transactions on Antelope blockchains easier.
- [3 plugin templates](#) to allow developers to extend the Session Kit.

All of these [and more](https://github.com/orgs/wharfkit/repositories) are available now and compatible with the Session Kit v1.0 release.

Ready to get started? Follow one of our [Session Kit Guides](/guides/sessionkit) to learn how to integrate or build an Antelope-based web application. If you have questions we'd invite you to join the [Discussions on Github](https://github.com/orgs/wharfkit/discussions).

## WharfKit.com

A major goal for Wharf is to arm developers in the Antelope ecosystem with the best tools possible when they are building web apps. To do this these developers need a place where they can learn about the product, find reference materials, and engage with their peers. The goal of this website is to help fill those needs and coordinate those resources in one familiar place that web developers can visit to learn how to build web apps in the Antelope ecosystem.

We want developers to get started using Wharf today, so we are launching the website today to act as a springboard. What you see here today is not the final website, but the second phase as it moves forward from a simple blog into an educational site. This is just the beginning when it comes to the [guides](/guides) and [documentation](/docs).

Today's update also represents a shift in our website strategy and moving forward we will be releasing website updates regularly. We will begin using it for Wharf component releases, continue to add additional documentation, and creating new guides based upon what we see the community needing assistance getting started with. If anyone has a request for specific content or documentation, please share your ideas on the [Discussions on Github](https://github.com/orgs/wharfkit/discussions).

## The path so far

Before diving into what to expect next, for anyone who's unfamiliar with how this project came to be, here's a short overview of how we got to where we are today.

In late 2021, [Greymass](https://greymass.com) was asked by the [EOS Network Foundation](https://eosnetwork.com) to participate in ecosystem wide research and report any findings in a document that would later be known as the [Wallet+ Blue Paper](https://medium.com/eos-network-foundation/wallet-blue-paper-a040a1865977). The goal was to determine what could be done to improve both the developer and user experiences to push adoption in [Web3](https://en.wikipedia.org/wiki/Web3). The [paper was published](https://drive.google.com/file/d/18_aLgCo6uAJN1-ZT1mtUs59SxwffhShm/view) in March 2022 and presented 13 different project recommendations, one of which was simply called "Software Development Kits".

In the months that followed, the [Antelope Coalition](https://antelope.io) (consisting of [EOS](https://eosnetwork.com), [Telos](https://telos.net), [UX](https://uxnetwork.io/) and [WAX](https://wax.io)) picked up the idea and prioritized it based on what was outlined in the blue paper. The Coalition then put out a [Request for Proposal](https://github.com/eosnetworkfoundation/Coalition-RFPs/blob/main/2022%2005%20RFP%20-%20SDKs.pdf) to have it built, to which Greymass responded to with a proposal, and was subsequently awarded a contract to make the project a reality.

Planning kicked off in the summer of 2022 and development in October after the first milestone was completed which [outlined the proposed architecture](https://docs.google.com/document/d/1_vaMtPI-deX9-YiUGK-oZJotZG6ZX831ZpRcUUrnr4Y/edit?usp=sharing). In November the ["Wharf" brand was announced](https://greymass.medium.com/introducing-wharf-antelopes-new-web-client-sdk-project-a98fb12ff51f), the website at [WharfKit.com](https://wharfkit.com) began development, and regular [public meetings](/blog?tag=video) began to inform the wider community of progress.

In January of 2023 the first beta releases of Wharf's [Session Kit](https://github.com/wharfkit/session) was made available alongside [a technical preview](/blog/a-technical-preview-of-the-session-kit-in-wharf) of its transaction signing capabilities. This was followed in March by [a second technical preview](/blog/an-early-look-integrating-the-session-kit-with-a-web-app) that showed how it could be used inside of a web application. As May we began developing the Contract Kit while early adopters began using the Session Kit in their web applications and providing invaluable feedback. This feedback led to improvements and this eventual v1.0 release of the Session Kit.

It has been a long road to get to this point, but today after much iteration we are confident that Wharf's [Session Kit](/kits/session) is ready to power the next generation of Antelope-based web apps.

## What's next

Wharf releases are just getting started and the next major project release will be the [Contract Kit](https://github.com/wharfkit/contract). While the Session Kit was a much needed improvement to the tools Antelope has had for years, the Contract Kit is something we have never had.

### Contract Kit

The Contract Kit is a toolkit to assist in both reading data from smart contracts and creating data to submit to the blockchain. It does this both in code through simplifying how these operations are done, as well as directly in the developers work environment by making their IDE understand, inform, and suggest how to work with the data. In addition it also optimizes how all these operations are done to speed up load times for the end user and reduce strain on API endpoints.

### More Products

Out on the horizon is also the release of:

- The Account Kit to help developers integrate with blockchain-based accounts and how they interact with the system contract and tokens.
- A transaction builder that interfaces with the Contract Kit to easily assemble complex transactions.
- Additional wallet, transact, and login plugins for the Session Kit to extend its functionality.

### More Education

The documentation published on the site today represents approximately 20% of the total documentation we anticipate publishing. This documentation will encompass the [Session Kit](https://github.com/wharfkit/session), [Contract Kit](https://github.com/wharfkit/contract), Account Kit, and the [Antelope](https://github.com/wharfkit/antelope) core library. It will also include all of the surrounding libraries to cover things like [Signing Requests](https://github.com/greymass/eosio-signing-request) and [Resources](https://github.com/wharfkit/resources). All of this documentation will serve as reference materials for developers who have already started a project and need to lookup how one specific part works.

For the developers looking to get started, a number of additional guides will be created as well to show step-by-step how to get started with all of the products.
