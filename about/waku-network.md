---
title: The Waku Network
sidebar_position: 5
---

The Waku Network Gen 0 is the first iteration of a public network for peer-to-peer messaging built on the Waku protocol stack. Its goal is to offer a permissionless, auto-scalable, DoS protected shared messaging layer for the decentralized web.

## Motive

The Waku Network is a solution to achieve scalability and reasonable Denial of Service (DoS) protection, even when sharing a decentralised message routing layer with other applications. The Waku Network is actively addressing the challenge of scaling a shared routing layer, where each user participates in relaying traffic for all applications. As the adoption of Waku continues to grow, the bandwidth consumption skyrockets. Users with limited bandwidth capabilities are becoming increasingly marginalised and unable to participate fully in the Waku Relay network.

The Waku Network also aims to mitigate the risk of users being susceptible to spam or DoS attacks that may occur when the network is fully accessible to all users and applications.

Waku’s mission is to enable anyone across the globe to opt out of using applications built on centralised communication components, that’s why Waku protocols are designed to work on even resource-restricted devices. Without finding a way to limit bandwidth consumption, the protocol would be at risk of not enabling this mission.

## Sharding and rate limiting

There are two main technological advances that the Waku Network Gen 0 introduces which enable the public network:

1. Sharding;

Instead of having one relay network, the Waku Network is split into several GossipSub topics so that the application user is not required to relay all of the applications’ traffic but rather just the subset of traffic on the same shard. Auto-sharding will automatically allocate messages for an application and does not require a centralised allocator.

2. Rate limiting.

Rate limiting prevents attackers from flooding the network beyond the maximum expected bandwidth usage. The RLN DoS protection caps publishers to 1 message per second with a 20-second grace period before additional messages are restricted. In the future, a dimensioning mechanism will give publishers a maximum allocation of messages per day, limiting the maximum rate of these messages within the overall network.
