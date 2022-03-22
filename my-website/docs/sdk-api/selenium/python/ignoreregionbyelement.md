# IgnoreRegionByElement class
Used to create a region based on a webelement, to be passed to the method [ignore](./target#ignore-method).
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import IgnoreRegionByElement
 
 ``` 
### Constructor 
### IgnoreRegionByElement method
The constructor of an object that defines a region based on an element. This object is then passed to the method [ignore](./target#ignore-method).

#### Syntax 
 ``` 
region = IgnoreRegionByElement(element)
 ``` 

 #### Parameters 
 ###### element 
  
 Type:AnyWebElement 
  
 A WebElement whose position and size are used to define the ignore region. 
  
 #### Return value 
Type: [IgnoreRegionByElement](./ignoreregionbyelement)