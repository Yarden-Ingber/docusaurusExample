# Location class
Provides an object that describes a coordinate. An object of this type is required as a parameter in some methods.

### Constructor  
### Location method
A constructor that provides several ways to specify the Location coordinates.
For user convenience, the values may be given as numbers or taken from another object.

#### Syntax 
 ``` 
Location obj = new Location(x, y);

Location obj = new Location(point);

Location obj = new Location();
 ``` 

 #### Parameters 
 ###### x 
  
 Type:int 
  
 The horizontal coordinate of the point in pixels (from the left of the image). 
  
  ###### y 
  
 Type:int 
  
 The vertical coordinate of the point in pixels (from the top of image). 
  
  ###### point 
  
 Type:Point 
  
 The top-left corner. 
  
 #### Return value 
Type: [Location](./location)
        

 
 ### X property
The horizontal coordinate of the point in pixels (from the left of the image).

#### Syntax 
 ``` 
int value; // give relevant initial value
obj.X  = value;
value = obj.X
 ``` 
 
 Type:int 
 ### Y property
The vertical coordinate of the point in pixels (from the top of image).

#### Syntax 
 ``` 
int value; // give relevant initial value
obj.Y  = value;
value = obj.Y
 ``` 
 
 Type:int