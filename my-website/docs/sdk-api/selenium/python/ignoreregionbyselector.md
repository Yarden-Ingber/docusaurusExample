# IgnoreRegionBySelector class
Used to create a region based on a selector, to be passed to the method [floating](./target#floating-method).
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import IgnoreRegionBySelector
 
 ``` 
### Constructor 
### IgnoreRegionBySelector method
The constructor of an object that defines a region based on an element defined by a selector. This object is then passed to the method [ignore](./target#ignore-method).

#### Syntax 
 ``` 
region = IgnoreRegionBySelector(by, value)
 ``` 

 #### Parameters 
 ###### by 
  
 Type:str 
  
 The 'by' part of a Selenium selector for an element which represents the inner region. 
  
  ###### value 
  
 Type:str 
  
 The 'value' part of a Selenium selector for an element which represents the inner region. 
  
 #### Return value 
Type: [IgnoreRegionBySelector](./ignoreregionbyselector)