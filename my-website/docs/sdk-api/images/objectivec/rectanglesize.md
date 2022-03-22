# RectangleSize class
Provides an object that describes a rectangle. An object of this type is required as a parameter in some methods.
 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 
### Constructor 
### initWithSize method
Construct a RectangleSize object.

#### Syntax 
 ##### Call syntax 
 ``` 
RectangleSize* obj = [[RectangleSize alloc] initWithSize  : size   ];
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)initWithSize:(CGSize)size 
 ``` 

 #### Parameters 
 ###### size 
  
 Type:CGSize 
  
 The dimensions of the rectangle. 
  
 #### Return value 
Type: [RectangleSize](./rectanglesize)\*

 
 ### height property
The height of the rectangle in pixels.

#### Syntax 
 ##### Call syntax 
 ``` 
CGFloat value = obj.height
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) CGFloat height 
 ``` 
 
 Type:CGFloat 
 ### width property
The width of the rectangle in pixels.

#### Syntax 
 ##### Call syntax 
 ``` 
CGFloat value = obj.width
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) CGFloat width 
 ``` 
 
 Type:CGFloat