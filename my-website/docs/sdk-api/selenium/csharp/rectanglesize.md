# RectangleSize class
Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.
### Constructor 
### RectangleSize method
A constructor that provides several ways to provide the values for the rectangle width and height.

#### Syntax 
 ``` 
RectangleSize obj = new RectangleSize();

RectangleSize obj = new RectangleSize(width, height);

RectangleSize obj = new RectangleSize(size);

RectangleSize obj = new RectangleSize(rectangle);

RectangleSize obj = new RectangleSize(region);
 ``` 

 #### Parameters 
 ###### width 
  
 Type:int 
  
 The width of the rectangle in pixels. 
  
  ###### height 
  
 Type:int 
  
 The height of the rectangle in pixels. 
  
  ###### size 
  
 Type:Size 
  
 The dimensions of the rectangle as a standard C# Size object. 
  
  ###### rectangle 
  
 Type:Rectangle 
  
 The dimensions of the rectangle. 
  
  ###### region 
  
 Type:IRegion 
  
 The dimensions of the rectangle. 
  
  ###### size 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The dimensions of the rectangle as a standard C# Rectangle object. 
  
 #### Return value 
Type: [RectangleSize](./rectanglesize)
        

 
 ### Height property
The height of the rectangle in pixels.

#### Syntax 
 ``` 
int value; // give relevant initial value
obj.Height  = value;
value = obj.Height
 ``` 
 
 Type:int 
 ### Width property
The width of the rectangle in pixels.

#### Syntax 
 ``` 
int value; // give relevant initial value
obj.Width  = value;
value = obj.Width
 ``` 
 
 Type:int