# BatchInfo class
Call the [Configuration.SetBatch](./configuration#setbatch-method) method or [Eyes.Batch](./eyes#setbatch-property) property with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

### Constructor  
### BatchInfo method
The constructor for the [BatchInfo](./batchinfo) class.
Create the object, set it up and assign it to the batch before the test starts using the [Configuration.SetBatch](./configuration#setbatch-method) method or [Eyes.Batch](./eyes#setbatch-property) property. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax 
 ``` 
BatchInfo batchInfo = new BatchInfo(name, startedAt);

BatchInfo batchInfo = new BatchInfo(name);

BatchInfo batchInfo = new BatchInfo();
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the batch. If a `null` is passed then the name will be taken from the environment variable APPLITOOLS\_BATCH\_NAME. If the environment variable is not defined then the name of the first test is used as the batch name. 
  
  ###### startedAt 
  
 Type:DateTimeOffset 
  
 The date and time that will be displayed in the Test Manager as the batch start time. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo) 
## Properties 
### Id property
Use this property to set and retrieve the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
string value; // give relevant initial value
batchInfo.Id  = value;
value = batchInfo.Id
 ``` 
 
 Type:string

 #### Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
### Name property
Use this property to set and retrieve the name of the batch.

#### Syntax 
 ``` 
string value; // give relevant initial value
batchInfo.Name  = value;
value = batchInfo.Name
 ``` 
 
 Type:string 
### NotifyOnCompletion property
Enable informing the Eyes server that the batch has completed.
This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)
#### Syntax 
 ``` 
bool value; // give relevant initial value
batchInfo.NotifyOnCompletion  = value;
value = batchInfo.NotifyOnCompletion
 ``` 
 
 Type:bool 
# property
Set one or more user-defined properties to be associated with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
PropertiesCollection value; // give relevant initial value
batchInfo.Properties  = value;
value = batchInfo.Properties
 ``` 
 
 Type:[PropertiesCollection](./propertiescollection)
        
 ####  Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.Batch](./eyes#setbatch-method) or [Configuration.SetBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.AddProperty](#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run. 
### SequenceName property
Use this property to set and retrieve the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
//typical code sequence using SequenceName
Batchinfo batchInfo = new BatchInfo('my batch name')
batchInfo.SequenceName = 'My sequence name';
eyes.Batch = batchInfo
 ``` 
 
 Type:string

 #### Remarks 
If you do not set this attribute and the environment variable APPLITOOLS\_BATCH\_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name. 
### StartedAt property
Use this property to set and retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ``` 
DateTimeOffset value; // give relevant initial value
batchInfo.StartedAt  = value;
value = batchInfo.StartedAt
 ``` 
 
 Type:DateTimeOffset 
### AddProperty method
Associate a user-defined property with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
batchInfo.AddProperty(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value to be associated with this property. 
  
 #### Return value 
Type: void

 #### Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.Batch](./eyes#setbatch-method) or [Configuration.SetBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.AddProperty](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
        
  
