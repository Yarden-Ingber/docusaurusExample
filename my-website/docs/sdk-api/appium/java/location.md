# Location class
Provides an object that describes a coordinate. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
import com.applitools.eyes.Location;
 
 ``` 
### Constructor 
 ### Location method
A constructor that provides several ways to specify the Location coordinates.
For user convenience, the values may be given as numbers or taken from another object.

#### Syntax 
 ``` 
Location obj = new Location();

Location obj = new Location(x, y);

Location obj = new Location(other);
 ``` 

 #### Parameters 
 ###### x 
  
 Type:int 
  
 The horizontal coordinate of the point in pixels (from the left of the image). 
  
  ###### y 
  
 Type:int 
  
 The vertical coordinate of the point in pixels (from the top of image). 
  
  ###### other 
  
 Type:[Location](./location) 
  
 Another location object whose coordinate value is cloned to create this object. 
  
 #### Return value 
Type: [Location](./location)