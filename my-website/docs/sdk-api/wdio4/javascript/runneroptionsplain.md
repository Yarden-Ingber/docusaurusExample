# RunnerOptionsPlain class
An object of this type is used to define options for [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner).


 
 ### testConcurrency property
Use this method to specify the maximum number of Eyes tests that this runner will run concurrently.
Effectively, this means that if the test concurrency value is set to 10, you'll see up to 10 test results marked as running in the Test Manager, for tests executed by that runner. Since a runner can run multiple test scripts concurrently, and each test checkpoint can be validated for multiple environments, the test results in the running state may reflect the concurrency of both test scripts and the environments. The maximum concurrency achieved may be lower than the number you specify, since concurrency is also limited by other factors, such as the concurrency limit of your account or team, or other tests being run at the same time in your account. Currently, this is only implemented on the VisualGridRunner. If used with the ClassicRunner, then it is ignored.

#### Syntax 
 ``` 
runner = new VisualGridRunner({ testConcurrency: concurrentSessions });
 ``` 
 
 Type:number 
The maximum number of Eyes tests that can be executed concurrently by this runner.