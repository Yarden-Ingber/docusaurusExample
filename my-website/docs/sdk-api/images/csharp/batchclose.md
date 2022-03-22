# BatchClose class

Use an object of this class to close a batch explicitly.

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
To manually close a batch, instantiate an object of this class and then call [BatchClose.SetBatchId](#setbatchid-method) followed by [BatchClose.Close](#close-method) in a fluent method style - see the example below.

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

Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.SetBatchId](#setbatchid-method) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the environment variable APPLITOOLS\_BATCH\_ID. This is used as a default by the method [Configuration.SetBatch](./configuration#setbatch-method) which is set up in a suite Configuration object and assigned to each Eyes instance.

C#

    /*
     * Setup a common batch for all tests
     */
    BatchInfo batchInfo = new BatchInfo(batchName);
    batchInfo.Id = MyGetUniqueBatchID(); // User defined
    suiteConfig = (Configuration) new Configuration() 
        .SetBatch(batchInfo)
        /* ... other configurations */; 
    /* 
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes();
    eyes.SetConfiguration(suiteConfig);
    /*
     * After all the tests have completed, in all the runners
     */
    List<String> batchIds = new List<string>() { Environment.GetEnvironmentVariable("APPLITOOLS_BATCH_ID") };
    BatchClose batchClose = new BatchClose();
    batchClose.SetBatchId(batchIds).Close(); 

### ApiKey property
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
string value; // give relevant initial value
obj.ApiKey  = value;
value = obj.ApiKey
 ``` 
 
 Type:string 
### Close method
Close the batches whose batch IDs were passed to [BatchClose.SetBatchId](#setbatchid-method).


#### Syntax 
 ``` 
obj.Close();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void
 
### SetApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
BatchClose value = obj.SetApiKey(apiKey);
obj.ApiKey  = value;
 = obj.ApiKey;
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:string 
  
 A string that is your API Key. 
  
 #### Return value 
Type: [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style. 
### SetProxy method
Use this method to provide the URL, username, and password of a Proxy server that the SDK can use to access the Eyes server.

#### Syntax 
 ``` 
BatchClose value = obj.SetProxy(proxy);
obj.Proxy  = value;
 = obj.Proxy;
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:WebProxy 
  
 An object that defines how to interact with the proxy server. 
  
 #### Return value 
Type: [BatchClose](./batchclose) 
### SetUrl method
Set the Eyes server URL.
You only need to set the Eyes server if you don't use the default server or if the Eyes server is not set using the environment variable APPLITOOLS\_SERVER\_URL.

#### Syntax 
 ``` 
BatchClose value = obj.SetUrl(url);
 ``` 

 #### Parameters 
 ###### url 
  
 Type:string 
  
 The URL of the Eyes server. 
  
  ###### url 
  
 Type:Uri 
  
 The URI of the Eyes server. 
  
 #### Return value 
Type: [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.
        

 
 ### SetUrl method
Set the Eyes server URL.
You only need to set the Eyes server if you don't use the default server or if the Eyes server is not set using the environment variable APPLITOOLS\_SERVER\_URL.

#### Syntax 
 ``` 
BatchClose value = obj.SetUrl(url);
 ``` 

 #### Parameters 
 ###### url 
  
 Type:string 
  
 The URL of the Eyes server. 
  
  ###### url 
  
 Type:Uri 
  
 The URI of the Eyes server. 
  
 #### Return value 
Type: [BatchClose](./batchclose)

The object that called this method. This allows other methods of this class to be appended in a Fluent style.