# TestResultContainerPlain class
An object of this type represents the result of running a test. It bundles together the test results and an exception status.


 
 ### exception property
Returns an indication if the test failed with an exception.

#### Syntax 
 ``` 
obj = { exception: value_EyesError };
 ``` 
 
 Type:EyesError 
A value that is not null indicates that an exception occured when running the test. 
 ### testResults property
Returns an object with the test results for this test.

#### Syntax 
 ``` 
obj = { testResults: value_TestResultsPlain };
 ``` 
 
 Type:[TestResultsPlain](./testresultsplain)