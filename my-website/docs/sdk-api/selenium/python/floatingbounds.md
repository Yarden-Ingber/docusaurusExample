# FloatingBounds class
Used when defining floating regions, to define the distance a region can move without causing a mismatch.
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import FloatingBounds
 
 ``` 

### Constructor 
### FloatingBounds method
The constructor defines the amount a floating region may move in any direction.

#### Syntax 
 ``` 
region = FloatingBounds(max_left_offset, max_up_offset, max_right_offset, max_down_offset)

region = FloatingBounds(max_left_offset, max_up_offset, max_right_offset)

region = FloatingBounds(max_left_offset, max_up_offset)

region = FloatingBounds(max_left_offset)

region = FloatingBounds()
 ``` 

 #### Parameters 
 ###### max\_left\_offset 
  
 Type:int \[Optional : default = 0 \] 
  
 The amount the floating region may move to the left. 
  
  ###### max\_up\_offset 
  
 Type:int \[Optional : default = 0 \] 
  
 The amount the floating region may move upwards. 
  
  ###### max\_right\_offset 
  
 Type:int \[Optional : default = 0 \] 
  
 The amount the floating region may move to the right. 
  
  ###### max\_down\_offset 
  
 Type:int \[Optional : default = 0 \] 
  
 The amount the floating region may move downwards. 
  
 #### Return value 
Type: [FloatingBounds](./floatingbounds)