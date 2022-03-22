# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ``` 
let obj = new Region(region);

let obj = new Region(location, size);

let obj = new Region(x, y, width, height);
 ``` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)
        
 ####  Parameters 
 ###### region 
  
 Type:RegionPlain 
  
 The object provided as a parameter specifies both the top-left of the new region and its dimensions. 
  
  ###### Type definitions 
  
 RegionPlain 
  
 Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain) 
  
  ###### location 
  
 Type:[LocationPlain](./locationplain) 
  
 The object passed as a parameter specifies the top-left of the new region. You can pass any object that has the following fields: `{x: number, y: number}` 
  
  ###### size 
  
 Type:[RectangleSizePlain](./rectanglesizeplain) 
  
 The object provided as a parameter specifies dimensions of the region. You can pass any object that has the following fields: `{width: number, height: number}` 
  
  ###### x 
  
 Type:number 
  
 The X coordinate of the left edge of the region in pixels. 
  
  ###### y 
  
 Type:number 
  
 The Y coordinate of the top edge of the region in pixels. 
  
  ###### width 
  
 Type:number 
  
 The width of the region in pixels. 
  
  ###### height 
  
 Type:number 
  
 The height of the region in pixels. 
  
 #### Return value 
Type: [Region](./region)