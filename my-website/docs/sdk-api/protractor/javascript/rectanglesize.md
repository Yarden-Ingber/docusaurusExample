# RectangleSize class
Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.
### Constructor 
### RectangleSize method
A constructor that provides several ways to provide the values for the rectangle width and height.

#### Syntax 
 ``` 
let obj = new RectangleSize(size);

let obj = new RectangleSize(width, height);
 ``` 

 #### Parameters 
 ###### size 
  
 Type:[RectangleSizePlain](./rectanglesizeplain) 
  
 The dimensions of the rectangle. 
  
  ###### width 
  
 Type:number 
  
 The width of the rectangle in pixels. 
  
  ###### height 
  
 Type:number 
  
 The height of the rectangle in pixels. 
  
 #### Return value 
Type: [RectangleSize](./rectanglesize)
        

 
 ### height property
The height of the rectangle in pixels.

#### Syntax 
 ``` 
obj.height = value;
value = obj.height;
 ``` 
 
 Type:number 
 ### width property
The width of the rectangle in pixels.

#### Syntax 
 ``` 
obj.width = value;
value = obj.width;
 ``` 
 
 Type:number