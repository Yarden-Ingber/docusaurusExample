# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ``` 
Region obj = new Region(left, top, width, height);

Region obj = new Region(position, size);

Region obj = new Region(rectangle);

Region obj = new Region(region);
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
  
  ###### position 
  
 Type:Point 
  
 The object passed as a parameter specifies the top-left of the new region. 
  
  ###### size 
  
 Type:Size 
  
 The object provided as a parameter specifies dimensions of the region. 
  
  ###### rectangle 
  
 Type:Rectangle 
  
 The object provided as a parameter specifies both the top-left of the new region and its dimensions. 
  
  ###### region 
  
 Type:IRegion 
  
 The object provided as a parameter specifies both the top-left of the new region and its dimensions. 
  
 #### Return value 
Type: [Region](./region)