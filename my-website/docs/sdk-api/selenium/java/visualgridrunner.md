# VisualGridRunner class

An object of this class is used to manage multiple Eyes sessions when working with the Ultrafast Grid.
To work without the Ultrafast Grid, use [ClassicRunner](./classicrunner) instead of this class. 
 ### Import statement 
``` 
import com.applitools.eyes.visualgrid.services.VisualGridRunner;
 
 ``` 

### Constructor 
### VisualGridRunner method
Use this method to create a runner that manages tests that use the Ultrafast Grid to render screenshots.
An object of this class is used to manage multiple Eyes sessions using the Ultrafast Grid. Pass this object to each [Eyes](./eyes-method) constructor. Wait for the results of all instances using the method [VisualGridRunner.getAllTestResults](#getalltestresults-method).

#### Syntax 
 ``` 
VisualGridRunner runner = new VisualGridRunner(runnerOptions);
 ``` 

 #### Parameters 
 ###### runnerOptions 
  
 Type:[RunnerOptions](./runneroptions) 
  
 An object that defines options for the runner. Multiple options can be defined by appending multiple method calls in a fluent style. 
  
 #### Return value 
Type: [VisualGridRunner](./visualgridrunner)

 #### Example 
The example below demonstrates the creation of a [VisualGridRunner](./visualgridrunner-method) instance. It is initialized with a call to the constructor [RunnerOptions](./runneroptions-method). A call to [testConcurrency](./runneroptions#testconcurrency-method) is then appended with a parameter of 10. This runner instance is passed to the [Eyes](./eyes) instance when it is created. The end effect is that the runner manages the workflow and concurrency of all [Eyes](./eyes) instances that are initialized with that runner. Passing a parameter of 10 means that the runner limits the concurrency to a maximum of 10 active test executions.

Java

    private EyesRunner runner = null;
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions)); 
    eyes = new Eyes(runner); 
### getAllTestResults method
Call this method to get the test results for all the tests that were run using an instance of [ClassicRunner](./classicrunner) or [VisualGridRunner](./visualgridrunner).
The method must be called after all the tests executing on the runner have been closed by calling [Eyes.closeAsync](./eyes#closeasync-method) or [Eyes.abortAsync](./eyes#abortasync-method)
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
### setDontCloseBatches method
Call this method to disable the runner Auto close batch feaure.

#### Introduction 
The Test Manager displays test results in batches. The article [Grouping tests into batches with the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) explains how tests are associated with batches based on a batch ID, and how you can use the SDK to control which tests will be part of a particular batch.

Here, we will focus on understanding the notions of an active batch and closing a batch.

A batch is created and becomes active when a test is started with a batch ID that does not match an existing active batch. As long as a batch is active, new tests that have a matching batch ID will be added to the batch.

Batches are closed automatically in one of two ways. By default, runner-based SDKs implement the Auto batch closure feature. This feature closes the batches associated with the runner's test after the tests have completed. In addition, in order to prevent large batches that could cause performance issues, the Eyes server closes active batches that have not been used for several hours, or if they have been in continuous use for more than a few days.

When a batch is closed, the Eyes server can send the user a batch completion notification. This feature must be enabled explicitly, see [Batch completion notifications](https://applitools.com/docs/features/batch-completion-notifications.html) for details.

You can manage Auto batch closure by:

*   Disabling the Auto batch closure feature by calling [`runner.setdontclosebatches (not yet available in selenium java)`](#). This is useful if you want to combine tests from multiple runners, or tests that run as separate executions, into a common batch.
    
*   Disabling the Auto batch closure by defining the environment variable `APPLITOOLS_DONT_CLOSE_BATCHES` (on supported SDKs). This is useful if you want to combine tests from multiple runners, or tests that run as separate executions, into a common batch.
    
*   Manually closing the batch after it has been disabled, after all the tests have run, by using the [`close`](#close-method).

#### Syntax 
 ``` 
runner.setDontCloseBatches(dontCloseBatches);
 ``` 

 #### Parameters 
 ###### dontCloseBatches 
  
 Type:boolean 
  
 Pass a value of true to disable Auto batch closure. 
  
 #### Return value 
Type: void
 #### Example 
The example below:

*   Illustrates how to prevent the runner from closing the batch, using [VisualGridRunner.setDontCloseBatches](#) or [ClassicRunner.setDontCloseBatches](./classicrunner#setdontclosebatches-method).
*   Illustrates how to manually close the batch when all tests on all runners have completed, using the method [BatchClose.close](./batchclose#close-method).

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.setBatchId](./batchclose#setbatchid-method) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the APPLITOOLS\_BATCH\_ID environment variable. This is used as a default by the [Configuration.setBatch](./configuration#setbatch-method) method which is set up in the suite Configuration object and then assigned to each Eyes instance.

Java

    /*
     * After creating the runner, configure it so that won't close the batch
     */
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(concurrentSessions));
    runner.setDontCloseBatches(true);
    /*
     * Setup a common batch for all tests
     */
    BatchInfo batchInfo = new BatchInfo(batchName);
    batchInfo.setId(myGetUniqueBatchID()); // User defined
    suiteConfig = new Configuration() 
            .setBatch(batchInfo)
    /* ... other configurations */; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
    /*
     * After all the tests have completed, in all the runners
     */
    List<String> batchIds = Arrays.asList(System.getenv("APPLITOOLS_BATCH_ID"));
    BatchClose batchClose = new BatchClose();
    batchClose.setBatchId(batchIds).close();