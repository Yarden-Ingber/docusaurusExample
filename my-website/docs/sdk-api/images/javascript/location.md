# Location class
Provides an object that describes a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Require statement 
``` 
const {Location} = require('@applitools/eyes-images');
 
 ``` 
### Constructor 
### Location method
A constructor that provides several ways to specify the Location coordinates.
For user convenience, the values may be given as numbers or taken from another object.

#### Syntax 
 ``` 
let obj = new Location(location);

let obj = new Location(object);

let obj = new Location(x, y);
 ``` 

 #### Parameters 
 ###### location 
  
 Type:[Location](./location) 
  
 Another location object whose coordinate value is cloned to create this object. 
  
  ###### object 
  
 Type:{ x: number; y: number };  
  
 The location attributes will be cloned from the object passed as a parameter. 
  
  ###### x 
  
 Type:number 
  
 The horizontal coordinate of the point in pixels (from the left of the image). 
  
  ###### y 
  
 Type:number 
  
 The vertical coordinate of the point in pixels (from the top of image). 
  
 #### Return value 
Type: [Location](./location)