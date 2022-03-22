# ClassicRunner class
An object of this class is used to manage multiple Eyes sessions when working without the Ultrafast Grid.
To work with the Ultrafast Grid, use [VisualGridRunner](./visualgridrunner) instead of this class. 
 ### Import statement 
``` 
from applitools.selenium import ClassicRunner
 
 ``` 

### Constructor 
### ClassicRunner method
The constructor for the [ClassicRunner](./classicrunner) class.
An object of this class is used to manage multiple Eyes sessions when working without the Ultrafast Grid. Pass this object to each instantiation of the [Eyes](./eyes-method) constructor. Wait for the results of all the instances using [ClassicRunner.get\_all\_test\_results](#getalltestresults-method)
#### Syntax 
 ``` 
runner = ClassicRunner()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ClassicRunner](./classicrunner) 
### get_all_test_results method
Call this method to get the test results for all the tests that were run using this runner.
The method must be called after all the tests executing on the runner have been closed by calling [Eyes.close\_async](./eyes#closeasync-method) or [Eyes.abort\_async](./eyes#abortasync-method)
#### Syntax 
 ``` 
runner = runner.get_all_test_results(should_raise_exception)

runner = runner.get_all_test_results()
 ``` 

 #### Parameters 
 ###### should\_raise\_exception 
  
 Type:bool \[Optional : default = True \] 
  
 If a value of True is passed and any test did not pass, or there was a failure, then an exception is thrown. If a value of False is passed, then the object returned contains the test results and status of all the tests. The calling program should use the [TestResultContainer.exception](./testresultcontainer#getexception-property) property to examine the exception status and, if it is null, check the various methods in the [TestResults](./testresults-method) returned by the method [test\_results](./testresultcontainer#gettestresults-method) to see if the tests passed or mismatched where found. If no parameter is passed, then the default value is True. 
  
 #### Return value 
Type: [TestResultsSummary](./testresultssummary)