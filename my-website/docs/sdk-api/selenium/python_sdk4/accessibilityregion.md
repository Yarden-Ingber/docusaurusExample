# AccessibilityRegion class
An object that stores information about an accesibility region.
 
 ### Import statement 
``` 
from applitools.selenium import AccessibilityRegion
 
 ``` 
### Constructor 
### AccessibilityRegion method
Create a region with a defined accessibility region type.

#### Syntax 
 ``` 
obj = AccessibilityRegion(left, top, width, height, type)
 ``` 

 #### Parameters 
 ###### left 
  
 Type:int 
  
 The coordinate of the left edge of a rectangular area whose accessibility is being defined. 
  
  ###### top 
  
 Type:int 
  
 The coordinate of the top edge of a rectangular area whose accessibility is being defined. 
  
  ###### width 
  
 Type:int 
  
 The width of the rectangular area whose accessibility is being defined. 
  
  ###### height 
  
 Type:int 
  
 The height of the rectangular area whose accessibility is being defined. 
  
  ###### type 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The type of accessibility region defined by the rectanglar area. 
  
 #### Return value 
Type: None

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).
        

 
 ### height property
Use this property to retrieve the height of the rectangular area for which accessibility is being defined.

#### Syntax 
 ``` 
obj.height  = value
value = obj.height
 ``` 
 
 Type:int

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### left property
Use this property to retrieve the coordinate of the left edge of the rectangular area for which accessibility is being defined.

#### Syntax 
 ``` 
obj.left  = value
value = obj.left
 ``` 
 
 Type:int

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### top property
Use this property to retrieve the coordinate of the top edge of a rectangular area for which accessibility is being defined.

#### Syntax 
 ``` 
obj.top  = value
value = obj.top
 ``` 
 
 Type:int

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### type property
Use this property to retrieve the type of accessibility region defined by the rectangle.

#### Syntax 
 ``` 
obj.type  = value
value = obj.type
 ``` 
 
 Type:[AccessibilityRegionType](./accessibilityregiontype)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### width property
Use this property to retrieve the width of the rectangular area for which accessibility is being defined.

#### Syntax 
 ``` 
obj.width  = value
value = obj.width
 ``` 
 
 Type:int

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).