# Region class
Provides an object that describes a rectangular area at a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Require statement 
``` 
const {Region} = require('@applitools/eyes-images');
 
 ``` 
### Constructor 
### Region method
A constructor to an object describes a rectangular region at a particular coordinate.

#### Syntax 
 ``` 
let obj = new Region(region);

let obj = new Region(object);

let obj = new Region(location, size);

let obj = new Region(left, top, width, height);
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 The object provided as a parameter specifies both the top-left of the new region and its dimensions. 
  
  ###### object 
  
 Type:{ left: number; top: number; width: number; height: number };  
  
 Instead of an object of the Region class, you can provide any object that meets the following definition: `{left: number, top: number, width: number, height: number}` 
  
  ###### location 
  
 Type:[Location](./location) 
  
 The object passed as a parameter specifies the top-left of the new region. You can pass any object that has the following fields: `{x: number, y: number}` 
  
  ###### size 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The object provided as a parameter specifies dimensions of the region. You can pass any object that has the following fields: `{width: number, height: number}` 
  
  ###### left 
  
 Type:number 
  
 The X coordinate of the left edge of the region in pixels. 
  
  ###### top 
  
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