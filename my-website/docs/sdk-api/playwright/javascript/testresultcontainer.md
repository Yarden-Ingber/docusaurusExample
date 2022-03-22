# TestResultContainer class
An object of this type represents the result of running a test. It bundles together the test results and an exception status.
 
### getException method
Returns an indication if the test failed with an exception.

#### Syntax 
 ``` 
let value = obj.getException();
value = obj.exception;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: EyesError

A value that is not null indicates that an exception occured when running the test. 
### getTestResults method
Returns an object with the test results for this test.

#### Syntax 
 ``` 
let value = obj.getTestResults();
value = obj.testResults;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)