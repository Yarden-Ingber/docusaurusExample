# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
from applitools.images import Region
 
 ``` 
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ``` 
obj = Region(left, top, width, height)
 ``` 

 #### Parameters 
 ###### left 
  
 Type:int 
  
 The X coordinate of the left edge of the region in pixels. 
  
  ###### top 
  
 Type:int 
  
 The Y coordinate of the top edge of the region in pixels. 
  
  ###### width 
  
 Type:int 
  
 The width of the region in pixels. 
  
  ###### height 
  
 Type:int 
  
 The height of the region in pixels. 
  
 #### Return value 
Type: None