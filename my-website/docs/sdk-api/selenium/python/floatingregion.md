# FloatingRegion class
Used to create a region based on pixel coordinates, to be passed to the method [floating](./target#floating-method).
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import FloatingRegion
 
 ``` 

### Constructor 
### FloatingBounds method
The class constructor, used to create an object to be passed to the method [floating](./target#floating-method).
The parameters define an inner region to be matched and an outer bound in which the inner region can move and still be considered matching.

#### Syntax 
 ``` 
region = FloatingRegion(region, bounds)
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines the region position and size. 
  
  ###### bounds 
  
 Type:[FloatingBounds](./floatingbounds) 
  
 The amount the floating region can move in any direction. See [FloatingBounds](./floatingbounds). 
  
 #### Return value 
Type: [FloatingRegion](./floatingregion)