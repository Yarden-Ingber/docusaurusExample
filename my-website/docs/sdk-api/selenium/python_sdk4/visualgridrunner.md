# VisualGridRunner class
An object of this class is used to manage multiple Eyes sessions when working with the Ultrafast Grid.
To work without the Ultrafast Grid, use [ClassicRunner](./classicrunner) instead of this class. 
 ### Import statement 
``` 
from applitools.selenium import VisualGridRunner
 
 ``` 

### Constructor 
### VisualGridRunner method
Use this method to create a runner that manages tests that use the Ultrafast Grid to render screenshots.
An object of this class is used to manage multiple Eyes sessions using the Ultrafast Grid. Pass this object to each [Eyes](./eyes-method) constructor. Wait for the results of all instances using the method [VisualGridRunner.get\_all\_test\_results](#getalltestresults-method).

#### Syntax 
 ``` 
runner = VisualGridRunner(options_or_concurrency)
 ``` 

 #### Parameters 
 ###### options\_or\_concurrency 
  
 Type:Union\[[RunnerOptions](./runneroptions),int\] \[Optional : default = RunnerOptions() \] 
  
 Pass the concurrency to be used using a [RunnerOptions](./runneroptions-method) constructor and [test\_concurrency](./runneroptions#testconcurrency-method) methods as shown in the example below. Passing the concurrency as an integer will eventually be deprecated and should not be used. 
  
 #### Return value 
Type: None
 #### Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions-method). A call to [test\_concurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Python

    runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
    eyes = Eyes(runner) 
### get_all_test_results method
Call this method to get the test results for all the tests that were run using an instance of [ClassicRunner](./classicrunner) or [VisualGridRunner](./visualgridrunner).
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