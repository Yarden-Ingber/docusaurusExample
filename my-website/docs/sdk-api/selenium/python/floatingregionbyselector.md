# FloatingRegionBySelector class
The class constructor used to create an object to be passed to the method [floating](./target#floating-method).
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import FloatingRegionBySelector
 
 ``` 
### Constructor 
### FloatingRegionBySelector method
The class constructor used to create an object to be passed to the method [floating](./target#floating-method).
The parameters define an inner region to be matched and an outer bound in which the inner region can move and still be considered matching.

#### Syntax 
 ``` 
region = FloatingRegionBySelector(by, value, bounds)
 ``` 

 #### Parameters 
 ###### by 
  
 Type:str 
  
 The 'by' part of a Selenium selector for an element which represents the inner region. 
  
  ###### value 
  
 Type:str 
  
 The 'value' part of a Selenium selector for an element which represents the inner region. 
  
  ###### bounds 
  
 Type:[FloatingBounds](./floatingbounds) 
  
 The amount the floating region can move in any direction. See [FloatingBounds](./floatingbounds). 
  
 #### Return value 
Type: [FloatingRegionBySelector](./floatingregionbyselector)