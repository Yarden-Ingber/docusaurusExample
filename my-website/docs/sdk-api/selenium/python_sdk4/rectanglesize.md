# RectangleSize class
Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
from applitools.selenium import RectangleSize
 
 ``` 
### Constructor 
### RectangleSize method
A constructor that provides several ways to provide the values for the rectangle width and height.

#### Syntax 
 ``` 
obj = RectangleSize(width, height)
 ``` 

 #### Parameters 
 ###### width 
  
 Type:int 
  
 The width of the rectangle in pixels. 
  
  ###### height 
  
 Type:int 
  
 The height of the rectangle in pixels. 
  
 #### Return value 
Type: None

 
 ### height property
The height of the rectangle in pixels.

#### Syntax 
 ``` 
obj.height  = value
value = obj.height
 ``` 
 
 Type:int 
 ### width property
The width of the rectangle in pixels.

#### Syntax 
 ``` 
obj.width  = value
value = obj.width
 ``` 
 
 Type:int