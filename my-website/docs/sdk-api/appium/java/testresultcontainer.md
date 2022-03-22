# TestResultContainer class
An object of this type represents the result of running a test. It bundles together the test results and an exception status.
 
 ### Import statement 
``` 
import com.applitools.eyes.TestResultContainer;
 
 ``` 
 
### getBrowserInfo method
Use this to get information on the Ultrafast Grid browser/device configuration for these test results.

#### Syntax 
 ``` 
RenderBrowserInfo value = obj.getBrowserInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RenderBrowserInfo](./renderbrowserinfo)

If this test was run using the Ultrafast Grid, then an object is returned which has the browser configuration information. If the test was not run on the Ultrafast Grid, then a value of null is returned. 
### getException method
Returns an indication if the test failed with an exception.

#### Syntax 
 ``` 
Throwable value = obj.getException();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Throwable

A value that is not null indicates that an exception occured when running the test. 
### getTestResults method
Returns an object with the test results for this test.

#### Syntax 
 ``` 
TestResults value = obj.getTestResults();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)