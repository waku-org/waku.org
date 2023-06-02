---
title: About
sidebar_position: 1
---

Waku is the communication standard for the decentralized web. A suite of generalized messaging protocols, it enables private, secure, bidirectional human-to-human, machine-to-machine and human-to-machine communication without reliance on centralized intermediaries.

Waku serves as the communications branch of the [Logos](https://logos.co/) tech stack. Alongside the computational branch, [Nomos](http://www.nomos.tech), and the storage branch, [Codex](http://www.codex.storage), it is one of the Logos Collective's foundational projects. 

<br/>

### Motive

Today's internet is increasingly controlled by a vanishingly small number of tech giants. The Googles, Amazons and Metas of the world dictate what we see and with whom we can communicate. Their influence is absolute, and their actions shape global public opinion and even geopolitics. 

To anyone that understands the internet's present architecture, this outcome should be expected. The centralized entities through which we communicate have privileged access to reams of data that we, as internet users, produce daily, presenting an opportunity for the kind of surveillance that was once confined to the pages of science-fiction literature. Thinking that the most powerful commercial and political institutions would not leverage this would be naive. 

Yet, it doesn't have to be this way. Advances in cryptography, P2P technologies and decentralized networking provide an alternate path forward.

<br/>

### (Slowly) moving toward a decentralized web

The early Ethereum community realized this. Initially, the plan was to rebuild the web's architecture along decentralized lines by developing the so-called "Holy Trinity of the Decentralized Web." Ethereum itself would handle computation, Swarm was the reimagined web's storage layer and Whisper would take care of messaging. 

<br/>

![history](/subpages/history.png)

<br/>

Whisper was a promising start but scalability shortcomings quickly became apparent. Meanwhile, for reasons upon which we can only speculate, the development of Swarm and Whisper was relegated to a backseat while Ethereum took center stage. Yet, without adequate communication and storage layers, the decentralized web's potential for disruption remained severely handicapped.

Status, the decentralized messaging application, hoped to leverage Whisper but with development grinding to a snail's pace, it was forced to take up the job itself. Consequently, the R&D group [Vac](https://vac.dev/) was put together in 2018 to research solutions to Whisper's scaling woes.


<br/>

### The birth of Waku

In 2020, Waku v1 was released. A fork of the Whisper codebase, this initial version introduced various Vac-proposed optimizations, resulting in a more performant messaging protocol. Yet, it was clear that further changes were needed if Waku was to handle the volume of messages an application like Status would produce.  

The following year, work on a complete protocol rewrite began. Waku v2, as the version under development today is known, introduced a relay protocol that implements pub/sub over libp2p. Additionally, further capabilities were included to make Waku more useful, including historic message retrieval for often-offline devices, adaptive nodes to make participation more accessible to users with limited or intermittent connections and lower-spec hardware, and various bandwidth preservation techniques.   

Waku was first announced as a core Logos project in June 2023.    
