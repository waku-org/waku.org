---
title: About
sidebar_position: 1
---

Waku is a suite of generalised messaging protocols aiming to be the communication standard for the decentralised web. It enables private and secure human-to-human, machine-to-machine, and human-to-machine communication without reliance on centralised intermediaries. Messaging through Waku is possible from one-to-one to many-to-many.

Waku serves as the communications layer of the [Logos](https://logos.co/) tech stack. Alongside the trustless agreement layer, [Nomos](http://nomos.tech), and the storage layer, [Codex](http://www.codex.storage), it is one of the Logos Collective's foundational projects. 

<br/>

### Motive

Today's internet is increasingly controlled by a small number of tech giants. Google, Amazon, Meta, and a few others dictate what we see and with whom we can communicate. Their influence is almost limitless, and their actions shape global public opinion and even geopolitics. 

To anyone that understands the internet's present architecture, this outcome should be expected. The centralised entities through which we communicate have privileged access to reams of data that we, as internet users, produce daily, presenting an opportunity for the kind of surveillance that was once confined to the pages of science-fiction literature. Thinking that the most powerful commercial and political institutions would not leverage this would be naive. 

Yet, it doesn't have to be this way. Advances in cryptography, peer-to-peer networking, and decentralised technologies provide an alternate path forward.

<br/>

### (Slowly) moving toward a decentralised web

The early Ethereum community realised this. Initially, the plan was to rebuild the web's architecture along decentralised lines by developing the so-called Holy Trinity of the Decentralised Web: computation, storage, and communication. Ethereum itself would handle computation, Swarm was the reimagined web's storage layer, and Whisper would take care of messaging.

<br/>

![history](/subpages/history.png)

<br/>

Whisper was a promising start but scalability shortcomings quickly became apparent. Meanwhile, the development of Swarm and Whisper was seemingly relegated to a backseat while Ethereum took centre stage. Yet, without adequate communication and storage layers, the decentralised web's potential for disrupting human coordination remained severely encumbered.

Status, the decentralised messaging application, was built to leverage Whisper but because of Whisper’s development delays, the team decided to build their own communication protocol. Consequently, the R&D group [Vac](https://vac.dev/) was put together in 2018 to research solutions to Whisper's scaling woes.


<br/>

### The birth of Waku

In 2020, Waku v1 was released. As a fork of the Whisper codebase, this initial version introduced various Vac-proposed optimizations, resulting in a better performing messaging protocol. Yet, it was clear that further changes were needed for Waku to be able to handle the volume of messages an application like Status would produce.  

The following year, work on a complete protocol rewrite began. Waku v2, as the version under development today is known, introduced a relay protocol that implements pub/sub over libp2p. Additionally, further capabilities were included to make Waku more useful, including historic message retrieval for mostly-offline devices, adaptive nodes to make participation more accessible to users with limited or intermittent connections and lower-spec hardware, and various bandwidth preservation techniques.   

Waku was first announced as a core Logos project in June 2023.
  
