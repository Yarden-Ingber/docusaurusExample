# BatchClose class

Use an object of this class to close a batch explicitly.
 
 ### Import statement 
``` 
import com.applitools.eyes.fluent.BatchClose;
 
 ``` 
### Constructor  
### BatchClose method
The constructor for the [BatchClose](./batchclose) class.

#### Introduction 
The Test Manager displays test results in batches. The article [Grouping tests into batches with the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) explains how tests are associated with batches based on a batch ID, and how you can use the SDK to control which tests will be part of a particular batch.

Here, we will focus on understanding the notions of an active batch and closing a batch.

A batch is created and becomes active when a test is started with a batch ID that does not match an existing active batch. As long as a batch is active, new tests that have a matching batch ID will be added to the batch.

The Eyes server closes an active batch if it has not been used for several hours, or if it has been in continuous use for more than a few days.

When a batch is closed, the Eyes server sends a batch completion notification, if this feature is enabled. New tests that start will be added to a new batch and not to the closed batch.

You can manage batch closure by manually closing the batch. This is recommended if the user wants to get a batch completion notification as soon as the tests complete and not when the batch is closed automatically by the server.
To manually close a batch, instantiate an object of this class and then call [BatchClose.setBatchId](#setbatchid-method) followed by [BatchClose.close](#close-method) in a fluent method style - see the example below.

#### Syntax 
 ``` 
BatchClose obj = new BatchClose();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [BatchClose](./batchclose)

 #### Example 
The example below illustrates how to close a batch programmatically:

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.setBatchId](#setbatchid-method) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the environment variable APPLITOOLS\_BATCH\_ID. This is used as a default by the method [Configuration.setBatch](./configuration#setbatch-method) which is set up in a suite Configuration object and assigned to each Eyes instance.

Java

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
    eyes = new Eyes();
    eyes.setConfiguration(suiteConfig);
    /*
     * After all the tests have completed, in all the runners
     */
    List<String> batchIds = Arrays.asList(System.getenv("APPLITOOLS_BATCH_ID"));
    BatchClose batchClose = new BatchClose();
    batchClose.setBatchId(batchIds).close(); 
### close method
Close the batches whose batch IDs were passed to [BatchClose.setBatchId](#setbatchid-method).

#### Syntax 
 ``` 
obj.close();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void
 
### setApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
BatchClose value = obj.setApiKey(apiKey);
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:String 
  
 A string that is your API Key. 
  
 #### Return value 
Type: [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style. 
### setBatchId method
Set the batch ID of the batches that should be closed.
When closing a batch manually, this call is typically followed by a call to the method [BatchClose.close](#close-method).

#### Syntax 
 ``` 
EnabledBatchClose value = obj.setBatchId(batchIds);
 ``` 

 #### Parameters 
 ###### batchIds 
  
 Type:List`<String>`
  
 One or more batches to be closed. 
  
 #### Return value 
Type: EnabledBatchClose

The returned object is an instance of a class inherited from BatchClose. This is to ensure that you only call [BatchClose.close](#close-method) if you've set the batch ID by calling [setBatchId](#)

 
### setProxy method
Use this method to provide the URL, username, and password of a Proxy server that the SDK can use to access the Eyes server.

#### Syntax 
 ``` 
BatchClose value = obj.setProxy(proxySettings);
 ``` 

 #### Parameters 
 ###### proxySettings 
  
 Type:[ProxySettings](./proxysettings) 
  
 An object that defines how to interact with the proxy server. 
  
 #### Return value 
Type: [BatchClose](./batchclose) 
### setUrl method
Set the Eyes server URL.
You only need to set the Eyes server if you don't use the default server or if the Eyes server is not set using the environment variable APPLITOOLS\_SERVER\_URL.

#### Syntax 
 ``` 
BatchClose value = obj.setUrl(url);
 ``` 

 #### Parameters 
 ###### url 
  
 Type:String 
  
 The URL of the Eyes server. 
  
 #### Return value 
Type: [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.