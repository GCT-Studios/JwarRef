---
title: Zone of Control (ZoC)
cssclasses:
  - diagram
revision: 1
---
In Bushido, every model has a ZoC extending 1” from the edge of its base to any point within its [LoS](Line of Sight).  
Models ignore [Friendly](Enemy-Friendly.md) ZoC, but once a model enters an Enemy model’s ZoC, it may only [move](Movement.md) directly towards that model, or directly away, until it leaves the ZoC.  

Models beginning their activations in one or more Enemy model’s ZoC must do one of the following:
- declare a [[Stand Up action]]
- declare an action that allows them to move into [[BtB]] with one of those models and move directly toward the enemy model until they reach BtB
- declare another action that allows a move

They must move directly away from the Enemy model until they leave the ZoC; or away from all models until they leave all Enemy model’s ZoC if in multiple ZoCs, after which they can move freely.
Models can ignore the ZoC of Models that are in BtB with Enemy models for movement and declaring or performing actions (such as Ranged Attack Actions or Scenario Actions which otherwise cannot be performed in a ZoC).
If a model moves out of BtB, then it may ignore the ZoC until that move is completed.
  

![[diagram-ZoC.webp]]