---
title: Line of Sight (LoS)
cssclasses:
  - diagram
---
A model can draw LoS to points in its [[Facing]]. LoS is achieved if you can draw a straight line from any part of the origin model’s Base to a point in that origin model’s Facing.  

Terrain and models block LoS except for the following:
- LoS is not blocked by models and Terrain elements smaller than the model LoS is being drawn to.
- LoS is not blocked by models (other than the model you are drawing LoS to) and Terrain elements smaller than the model drawing LoS.

LoS may be checked for any model (Friendly or Enemy) at any time.  

> [!EXAMPLE]
> ![[diagram-LoS.webp]]
> Model A has no LoS to Model B since Models E and D are blocking LoS.  
> Model C is Medium Sized, so has LoS to Model A, likewise Model A has LoS to Model C.
