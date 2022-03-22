# RectangleSize class
Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
import com.applitools.eyes.RectangleSize;
 
 ``` 
### Constructor 
### RectangleSize method
A constructor that provides several ways to provide the values for the rectangle width and height.

#### Syntax 
 ``` 
RectangleSize obj = new RectangleSize(width, height);

RectangleSize obj = new RectangleSize(source);
 ``` 

 #### Parameters 
 ###### width 
  
 Type:int 
  
 The width of the rectangle in pixels. 
  
  ###### height 
  
 Type:int 
  
 The height of the rectangle in pixels. 
  
  ###### source 
  
 Type:[RectangleSize](./rectanglesize) 
  
 Another RectangleSize object instance to be cloned. 
  
 #### Return value 
Type: [RectangleSize](./rectanglesize)