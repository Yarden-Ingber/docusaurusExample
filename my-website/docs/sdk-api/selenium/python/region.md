# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import Region
 
 ``` 
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ``` 
obj = Region(left, top, width, height)

obj = Region(left, top, width)

obj = Region(left, top)

obj = Region(left)

obj = Region()
 ``` 

 #### Parameters 
 ###### left 
  
 Type:float \[Optional : default = 0 \] 
  
 The X coordinate of the left edge of the region in pixels. 
  
  ###### top 
  
 Type:float \[Optional : default = 0 \] 
  
 The Y coordinate of the top edge of the region in pixels. 
  
  ###### width 
  
 Type:float \[Optional : default = 0 \] 
  
 The width of the region in pixels. 
  
  ###### height 
  
 Type:float \[Optional : default = 0 \] 
  
 The height of the region in pixels. 
  
 #### Return value 
Type: [Region](./region)