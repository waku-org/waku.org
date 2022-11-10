---
title: Use Waku in Your Application
---

# Use Waku in Your Application

Interested in using Waku to add private, secure, censorship-free communication
to your Application?
Here are your options:

## Desktop & Server Applications

### JSON RPC API

You can run your own nwaku (or go-waku) node alongside your application
and access the Waku network using the available JSON RPC API.

Docs:

- [Use nwaku's JSON RPC API](https://github.com/status-im/nwaku/blob/master/docs/tutorial/jsonrpc-api.md)

### HTTP REST API

[Work is in progress](https://github.com/status-im/nwaku/issues/727) to add an HTTP REST API to nwaku.

### Waku as a library

It is possible to integrate Waku as a library.

| Your Application's language | What to Use              | Links                                                                               |
| --------------------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| Nim                         | nwaku as a library       | [repository](https://github.com/status-im/nwaku/tree/master/waku/v2)                |
| Go                          | go-waku as a library     | [tutorials](https://github.com/waku-org/go-waku#tutorials-and-documentation)        |
| C/C++/etc                   | go-waku using C-Bindings | [C example](https://github.com/status-im/go-waku/tree/master/examples/c-bindings)   |
| C#                          | go-waku using C-Bindings | [C# example](https://github.com/status-im/go-waku/tree/master/examples/waku-csharp) |
| Rust                        | Waku Rust Bindings       | [Rust example](https://github.com/waku-org/waku-rust-bindings/tree/master/examples) |

## Browser Application

### JS-Waku

You can use js-waku to run a Waku node in the browser.

Docs: https://js.waku.guide/

## Mobile Application

You can run Waku on mobile phones, Android and iOS are supported:

| Your Application's language | What to Use                | Links                                                                                      |
| --------------------------- | -------------------------- | ------------------------------------------------------------------------------------------ |
| Swift (iOS)                 | go-waku using C-Bindings   | [Swift example](https://github.com/status-im/go-waku/tree/master/examples/swift-waku)      |
| Kotlin (Android)            | go-waku using C-Bindings   | [Kotlin example](https://github.com/status-im/go-waku/tree/master/examples/android-kotlin) |
| Go                          | go-waku as a library       | [tutorials](https://github.com/status-im/go-waku#tutorials-and-documentation)              |
| React Native                | go-waku as a native module | [repository](https://github.com/status-im/waku-react-native)                               |
