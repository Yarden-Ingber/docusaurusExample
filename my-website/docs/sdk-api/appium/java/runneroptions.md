# RunnerOptions class
An object of this class is used to define options for [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner).
 
 ### Import statement 
``` 
import com.applitools.eyes.visualgrid.services.RunnerOptions;
 
 ``` 
 
### apiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html) Use this method instead of the equivalent methods in [Eyes](./eyes) or [Configuration](./configuration).

#### Syntax 
 ``` 
RunnerOptions value = obj.apiKey(apiKey);
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:String 
  
 A string that is your API Key. 
  
 #### Return value 
Type: [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style. 
### autProxy method
Use this method to set the URL of a Proxy server that the SDK should use to interact with the AUT (Application under test).
By default, if a proxy server is defined using one of the proxy commands, then the SDK will access the AUT via that proxy. This method can be used in cases where a different proxy needs to be used for the AUT.

#### Syntax 
 ``` 
RunnerOptions value = obj.autProxy(autProxy);
 ``` 

 #### Parameters 
 ###### autProxy 
  
 Type:AbstractProxySettings 
  
 An object that defines how to interact with the proxy server. 
  
 #### Return value 
Type: [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style. 
### proxy method
Use this method to provide the URL, username, and password of a Proxy server that the SDK can use to access the Eyes server.
You can use this method instead of [Eyes.setProxy](./eyes#setproxy-method) or [Configuration.setProxy](./configuration#setproxy-method).

#### Syntax 
 ``` 
RunnerOptions value = obj.proxy(proxySettings);
 ``` 

 #### Parameters 
 ###### proxySettings 
  
 Type:AbstractProxySettings 
  
 An object that defines how to interact with the proxy server. 
  
 #### Return value 
Type: [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style. 
### serverUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this method instead of the equivalent methods in [Eyes](./eyes) or [Configuration](./configuration).

#### Syntax 
 ``` 
RunnerOptions value = obj.serverUrl(serverUrl);
 ``` 

 #### Parameters 
 ###### serverUrl 
  
 Type:String 
  
 The URI of your Eyes server in URI format. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: [RunnerOptions](./runneroptions)

This method returns the object that called it so that it can be used to call other methods supported by this class in a fluent API style. 
### testConcurrency method
Use this method to specify the maximum number of Eyes tests that this runner will run concurrently.
Effectively, this means that if the test concurrency value is set to 10, you'll see up to 10 test results marked as running in the Test Manager, for tests executed by that runner. Since a runner can run multiple test scripts concurrently, and each test checkpoint can be validated for multiple environments, the test results in the running state may reflect the concurrency of both test scripts and the environments. The maximum concurrency achieved may be lower than the number you specify, since concurrency is also limited by other factors, such as the concurrency limit of your account or team, or other tests being run at the same time in your account. Currently, this is only implemented on the VisualGridRunner. If used with the ClassicRunner, then it is ignored.

#### Syntax 
 ``` 
runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 
 ``` 

 #### Parameters 
 ###### testConcurrency 
  
 Type:int 
  
 The maximum number of Eyes tests that can be executed concurrently by this runner. 
  
 #### Return value 
Type: [RunnerOptions](./runneroptions)

 #### Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions-method). A call to [testConcurrency](#-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Java

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 
    eyes = new Eyes(runner);
        
 ####  Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](#-method). A call to [testConcurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Java

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 
    eyes = new Eyes(runner);