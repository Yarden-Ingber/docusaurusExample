# ClassicRunner class
An object of this class is used to manage multiple Eyes sessions
 
 ### Import statement 
``` 
import com.applitools.eyes.android.espresso.ClassicRunner;
 
 ``` 
### Constructor 
### ClassicRunner method
The constructor for the [ClassicRunner](./classicrunner) class.
An object of this class is used to manage multiple Eyes sessions Pass this object to each instantiation of the [Eyes](./eyes-method) constructor. Wait for the results of all the instances using [ClassicRunner.getAllTestResults](#getalltestresults-method)
#### Syntax 
 ``` 
ClassicRunner runner = new ClassicRunner();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ClassicRunner](./classicrunner) 
### getAllTestResults method
Call this method to get the test results for all the tests that were run using this runner.
The method must be called after all the tests executing on the runner have been closed by calling [Eyes.close](./eyes#close-method) or [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method)
#### Syntax 
 ``` 
TestResultsSummary runner = runner.getAllTestResults();

TestResultsSummary runner = runner.getAllTestResults(shouldThrowException);
 ``` 

 #### Parameters 
 ###### shouldThrowException 
  
 Type:boolean 
  
 If a value of true is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of false is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.getException](./testresultcontainer#getexception-method) method to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults-method) returned by the method [getTestResults](./testresultcontainer#gettestresults-method) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is true. 
  
 #### Return value 
Type: [TestResultsSummary](./testresultssummary)