---
title: "Practical Guide To Not Blocking The Event Loop :: Building Better Software Slower"
date: "2025-09-30T00:11:40.354Z"
lastmod: "2025-09-30T00:11:40.354Z"
categories: ["Reference Articles"]
description: "JavaScript runs in a single-threaded environment with an event loop, an architecture that is very easy to reason about. It's a continuous loop executing incoming work. Synchronous work runs immediately; asynchronous work runs when there is no synchronous work to left to perform. This design implies that performing synchronous work is a Big Deal: for every continuous moment it runs, the event loop cannot perform any work -- none!"
original_url: "https://www.bbss.dev/posts/eventloop/"
draft: false
---
