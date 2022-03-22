# TestResultContainer class
An object of this type represents the result of running a test. It bundles together the test results and an exception status.


 
 ### BrowserInfo property
Use this to get information on the Ultrafast Grid browser/device configuration for these test results.

#### Syntax 
 ``` 
RenderBrowserInfo value = obj.BrowserInfo;
 ``` 
 
 Type:[RenderBrowserInfo](./renderbrowserinfo) 
If this test was run using the Ultrafast Grid, then an object is returned which has the browser configuration information. If the test was not run on the Ultrafast Grid, then a value of null is returned. 
 ### Exception property
Returns an indication if the test failed with an exception.

#### Syntax 
 ``` 
Exception value = obj.Exception;
 ``` 
 
 Type:Exception 
A value that is not null indicates that an exception occured when running the test. 
 ### TestResults property
Returns an object with the test results for this test.

#### Syntax 
 ``` 
TestResults value = obj.TestResults;
 ``` 
 
 Type:[TestResults](./testresults)