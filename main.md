---
title: Main page
---

Waku is the communication layer for Web3. Decentralized communication that scales.

Private. Secure. Runs anywhere.

[Check the docs](https://js.waku.guide/)

## What is Waku?

Waku is a suite of privacy-preserving, peer-to-peer messaging protocols.

Waku **removes centralized third parties** from messaging,
enabling private, secure, censorship-free communication with no single point of failure.

Waku **provides privacy-preserving** capabilities,
such as sender anonymity,metadata protection and unlinkability to personally identifiable information.

Waku is designed for **generalized messaging**, enabling human-to-human, machine-to-machine or hybrid communication.

Waku runs everywhere: desktop, server, including **resource-restricted devices**, such as mobile devices and browsers.

## How does it work?

The first version of Waku had its origins in the Whisper protocol,
with optimizations for scalability and usability.
Waku v2 is a complete rewrite.
Its relay protocol implements pub/sub over libp2p, and also introduces additional capabilities:

1. Retrieving historical messages for mostly-offline devices.
2. Adaptive nodes, allowing for heterogeneous nodes to contribute.
3. Bandwidth preservation for light nodes.

This makes it ideal for running a p2p protocol on mobile, or in other similarly resource-restricted environments.

[Read the RFCs](https://rfc.vac.dev/spec/10/)

## Use Waku Now

You can

- [Run a Waku node](/operator)
- [Integrate Waku in your application](/platform)
- [Contribute to Waku](/contribute)

## Who is using Waku?

### Status

Status is a secure messaging app, crypto wallet, and Web3 browser built with state-of-the-art technology.

[Visit Status](https://status.im/)

### RAILGUN

RAILGUN is a privacy system for Ethereum that shields your assets in your own smart contract wallet.
RAILGUN uses Waku when offering the ETH gas payments to other users,
privately signaling fees and offers for gas payment relayers to keep the privacy & anonymity of your stablecoin & token transactions.

[Visit RAILGUN](https://railgun.org/)

### XMTP

XMTP is using Waku v2 for their open protocol and network for secure web3 messaging.

[Visit XMTP](https://xmtp.com/)

## Implementations

### nwaku

A nim implementation of the Waku v2 protocol.
Reference client and flagship implementation.

[nwaku repository](https://github.com/status-im/nwaku)

### js-waku

A JavaScript implementation for browser environments.

[js-waku docs](https://js.waku.guide/)

### go-waku

A Go implementation for native integration in go applications,
C-Bindings are also available with C#, Swift and Kotlin examples.

[go-waku repository](https://github.com/waku-org/go-waku)

### @waku/react-native

Integrate Waku in your React Native app using go-waku for mobile.

[@waku/react-native repo](https://github.com/waku-org/waku-react-native)

### Waku Rust Bindings

Rust layer on top of go-waku C FFI bindings.

[waku-rust-bindings repo](https://github.com/waku-org/waku-rust-bindings)
