# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.Region;
 
 ``` 
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ``` 
Region obj = new Region(other);

Region obj = new Region(width, height, top, left);
 ``` 

 #### Parameters 
 ###### other 
  
 Type:[Region](./region) 
  
 Another Region object to clone. 
  
  ###### width 
  
 Type:int 
  
 The width of the region in pixels. 
  
  ###### height 
  
 Type:int 
  
 The height of the region in pixels. 
  
  ###### top 
  
 Type:int 
  
 The Y coordinate of the top edge of the region in pixels. 
  
  ###### left 
  
 Type:int 
  
 The X coordinate of the left edge of the region in pixels. 
  
 #### Return value 
Type: [Region](./region)