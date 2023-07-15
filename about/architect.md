---
title: Description and architecture
sidebar_position: 2
---

Waku is a family of protocols that enable private, censorship-resistant communications over an open-source, decentralised network. By communications, we mean the exchange of data or messages between two or more entities, whether they are users, devices, or nodes. 

Waku was built as open-source public goods infrastructure to serve as the communications layer of the decentralised web. As such, its development focuses on the following: 

- **Generalised:** Waku's focus on generalised and ephemeral messaging facilitates communication between users, subsystems, or nodes according to developers' needs.

- **Peer-to-peer:** The Waku network has a decentralised peer-to-peer topology, preventing censorship and providing surveillance resistance. It is composed of adaptive nodes and is designed to scale to millions of users. 

- **Runs anywhere:**  Waku was designed to run in resource-restricted environments like phones and browsers, enabling users operating lower-spec hardware or with limited bandwidth to participate as peers.

- **Privacy first:** Waku empowers developers to build apps that cannot harvest users' metadata, removing the need for them to trust that their data is not used maliciously or without their consent. 

- **Modular:**  Waku's modularity enables developers to make tradeoffs according to their users' privacy expectations and performance demands, by implementing only those protocols that are relevant to their applications. For example, while one app might value privacy above all else, another may be willing to make compromises to deliver a more frictionless UX.

- **Platform agnostic:** Waku can run on any platform or in any environment, making it a suitable messaging solution for decentralised applications regardless of the network on which they're deployed.

<br/>

## Network architecture

The Waku team has developed three clients to run in different environments along with a range of SDKs in Rust, React Native, Kotlin, and Swift:

- nwaku: Waku's reference implementation written in Nim.

- go-waku: An implementation for native integration with Golang applications.

- js-waku: Waku's JavaScript implementation for browser environments.

Waku is best thought of as a cohesive whole in terms of its capabilities. However, under the hood are three distinct network interaction domains: gossip, discovery, and request/response. 

### Waku protocols

Waku consists of multiple protocols, including but not limited to the following:

**Waku Relay**: Waku Relay is the backbone of the Waku network. It specifies a pub/sub approach to P2P messaging with a focus on privacy, censorship resistance, and security, and is currently implemented as a minor extension of the libp2p GossipSub protocol. 

**Waku Filter**: A lighter-weight version of the relay protocol for resource-restricted devices, Waku Filter enables light nodes to only receive the messages they want from full nodes. 

**Waku Store**: Enables devices that cannot participate in the Waku Relay network to retrieve messages they missed while being offline.

**Waku Light Push**: A request/response protocol that enables nodes with short connection windows or limited bandwidth to publish messages to the Waku network.


<br/>

![architect](/subpages/architect.png)

<br/>

[Dive into the docs](https://docs.waku.org)
