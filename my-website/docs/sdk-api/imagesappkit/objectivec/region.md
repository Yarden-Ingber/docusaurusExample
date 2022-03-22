# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
@import EyesImagesAppKit
 
 ``` 
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL obj = [[Region alloc] region  : region isIntersectedWithRegion: anotherRegion   ];
 ``` 
 
 ##### Declaration 
 ``` 
(BOOL)region:(Region *)region isIntersectedWithRegion:(Region *)anotherRegion 
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region)\* 
  
 The object provided as a parameter specifies both the top-left of the new region and its dimensions. 
  
  ###### anotherRegion 
  
 Type:[Region](./region)\* 
  
 Another Region object to clone. 
  
 #### Return value 
Type: BOOL