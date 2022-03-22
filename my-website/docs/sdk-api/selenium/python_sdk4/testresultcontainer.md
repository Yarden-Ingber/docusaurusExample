# TestResultContainer class
An object of this type represents the result of running a test. It bundles together the test results and an exception status.
 
 ### Import statement 
``` 
from applitools.selenium import TestResultContainer
 
 ``` 


 
 ### browser_info property
Use this to get information on the Ultrafast Grid browser/device configuration for these test results.

#### Syntax 
 ``` 
obj.browser_info  = value
value = obj.browser_info
 ``` 
 
 Type:[RenderBrowserInfo](./renderbrowserinfo) 
If this test was run using the Ultrafast Grid, then an object is returned which has the browser configuration information. If the test was not run on the Ultrafast Grid, then a value of None is returned. 
 ### exception property
Returns an indication if the test failed with an exception.

#### Syntax 
 ``` 
obj.exception  = value
value = obj.exception
 ``` 
 
 Type:Exception 
A value that is not None indicates that an exception occured when running the test. 
 ### test_results property
Returns an object with the test results for this test.

#### Syntax 
 ``` 
obj.test_results  = value
value = obj.test_results
 ``` 
 
 Type:[TestResults](./testresults)