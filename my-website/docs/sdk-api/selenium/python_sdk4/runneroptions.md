# RunnerOptions class
An object of this class is used to define options for [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner).
 
 ### Import statement 
``` 
from applitools.selenium import RunnerOptions
 
 ``` 

### Constructor 
### RunnerOptions method
The constructor for the [RunnerOptions](./runneroptions) class.
Create an instance of this object, append calls to other methods of this class using a fluent interface style, and pass this to the [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner) constructor, as demonstrated in the example below.

#### Syntax 
 ``` 
runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RunnerOptions](./runneroptions)

 #### Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions-method). A call to [test\_concurrency](#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Python

    runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
    eyes = Eyes(runner) 
### test_concurrency method
Use this method to specify the maximum number of Eyes tests that this runner will run concurrently.
Effectively, this means that if the test concurrency value is set to 10, you'll see up to 10 test results marked as running in the Test Manager, for tests executed by that runner. Since a runner can run multiple test scripts concurrently, and each test checkpoint can be validated for multiple environments, the test results in the running state may reflect the concurrency of both test scripts and the environments. The maximum concurrency achieved may be lower than the number you specify, since concurrency is also limited by other factors, such as the concurrency limit of your account or team, or other tests being run at the same time in your account. Currently, this is only implemented on the VisualGridRunner. If used with the ClassicRunner, then it is ignored.

#### Syntax 
 ``` 
runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
 ``` 

 #### Parameters 
 ###### value 
  
 Type:int 
  
 The maximum number of Eyes tests that can be executed concurrently by this runner. 
  
 #### Return value 
Type: [RunnerOptions](./runneroptions)

 #### Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions-method). A call to [test\_concurrency](#-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Python

    runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
    eyes = Eyes(runner)

 #### Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](#-method). A call to [test\_concurrency](../classes-gen/class_runneroptions/#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Python

    runner = VisualGridRunner(RunnerOptions().test_concurrency(concurrent_sessions))   
    eyes = Eyes(runner)