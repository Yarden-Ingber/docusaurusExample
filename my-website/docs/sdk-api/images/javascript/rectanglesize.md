# RectangleSize class
Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.
 
 ### Require statement 
``` 
const {RectangleSize} = require('@applitools/eyes-images');
 
 ``` 
### Constructor 
### RectangleSize method
A constructor that provides several ways to provide the values for the rectangle width and height.

#### Syntax 
 ``` 
let obj = new RectangleSize(rectangleSize);

let obj = new RectangleSize(object);

let obj = new RectangleSize(width, height);
 ``` 

 #### Parameters 
 ###### rectangleSize 
  
 Type:[RectangleSize](./rectanglesize) 
  
 Another RectangleSize object instance to be cloned. 
  
  ###### object 
  
 Type:{ width: number; height: number };  
  
 An object of the form {width:number,height:number}. 
  
  ###### width 
  
 Type:number 
  
 The width of the rectangle in pixels. 
  
  ###### height 
  
 Type:number 
  
 The height of the rectangle in pixels. 
  
 #### Return value 
Type: [RectangleSize](./rectanglesize)