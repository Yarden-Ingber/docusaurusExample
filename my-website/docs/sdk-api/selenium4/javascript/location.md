# Location class
Provides an object that describes a coordinate. An object of this type is required as a parameter in some methods.
### Constructor 
### Location method
A constructor that provides several ways to specify the Location coordinates.
For user convenience, the values may be given as numbers or taken from another object.

#### Syntax 
 ``` 
let obj = new Location(location);

let obj = new Location(x, y);
 ``` 

 #### Parameters 
 ###### location 
  
 Type:[LocationPlain](./locationplain) 
  
 Another location object whose coordinate value is cloned to create this object. 
  
  ###### x 
  
 Type:number 
  
 The horizontal coordinate of the point in pixels (from the left of the image). 
  
  ###### y 
  
 Type:number 
  
 The vertical coordinate of the point in pixels (from the top of image). 
  
 #### Return value 
Type: [Location](./location)
        

 
 ### x property
The horizontal coordinate of the point in pixels (from the left of the image).

#### Syntax 
 ``` 
obj.x = value;
value = obj.x;
 ``` 
 
 Type:number 
 ### y property
The vertical coordinate of the point in pixels (from the top of image).

#### Syntax 
 ``` 
obj.y = value;
value = obj.y;
 ``` 
 
 Type:number