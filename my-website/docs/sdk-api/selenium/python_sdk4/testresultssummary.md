# TestResultsSummary class
An object of this type is used to obtain all of the test results that were run using the [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner) runner.
This class is iterable. 
 ### Import statement 
``` 
from applitools.selenium import TestResultsSummary
 
 ``` 


 
 ### all_results property
Returns an array of [TestResultContainer](./testresultcontainer) objects, one per test result.
The number of tests results is the number of tests run (calls to [open](./eyes#open-method)) multiplied by the number of configured browsers and devices on the Ultrafast Grid.

#### Syntax 
 ``` 
value = obj.all_results
 ``` 
 
 Type:List\[[TestResultContainer](./testresultcontainer)\]