# TestResultsStatus class
Defines possible test result status.
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import TestResultsStatus
 
 ``` 


 
 ### Failed property
At least one step in the test failed.

#### Syntax 
 ``` 
value = obj.Failed
 ``` 
 
 Type:Text 
 ### Passed property
All steps in the test matched the baseline image or are there was no baseline image and are new.

#### Syntax 
 ``` 
value = obj.Passed
 ``` 
 
 Type:Text 
 ### Unresolved property
At least one step in the test needs resolution.

#### Syntax 
 ``` 
value = obj.Unresolved
 ``` 
 
 Type:Text