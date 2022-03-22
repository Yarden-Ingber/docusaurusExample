# ClassicRunner class
An object of this class is used to manage multiple Eyes sessions when working without the Ultrafast Grid.
To work with the Ultrafast Grid, use [VisualGridRunner](./visualgridrunner) instead of this class. 
### getAllTestResults method
Call this method to get the test results for all the tests that were run using this runner.
The method must be called after all the tests executing on the runner have been closed by calling [Eyes.close](./eyes#close-method) or [Eyes.abort](./eyes#abort-method)
#### Syntax 
 ``` 
let result = await runner.getAllTestResults(throwErr);

let result = await runner.getAllTestResults();
 ``` 

 #### Parameters 
 ###### throwErr 
  
 Type:boolean \[Optional\] 
  
 If a value of true is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of false is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.getException](./testresultcontainer#getexception-method) method to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults-method) returned by the method [getTestResults](./testresultcontainer#gettestresults-method) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is true. 
  
 #### Return value 
Type: Promise<[TestResultsSummary](./testresultssummary)\>