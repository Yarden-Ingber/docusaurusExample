# BatchInfoPlain class
Call the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method with an object of this type to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.
        

 
 ### id property
Use this property to set and retrieve the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
batchInfo = { id: value_string };
 ``` 
 
 Type:string 
The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.
        
 ####  Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
 ### name property
Use this property to set and retrieve the name of the batch.

#### Syntax 
 ``` 
batchInfo = { name: value_string };
 ``` 
 
 Type:string 
The name of the batch. 
 ### notifyOnCompletion property
Enable informing the Eyes server that the batch has completed.
This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)
#### Syntax 
 ``` 
batchInfo = { notifyOnCompletion: value_boolean };
 ``` 
 
 Type:boolean 
If this value is true then a notification will be sent. 
 ### properties property
Set one or more user-defined properties to be associated with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
batchInfo = {
  properties: [value1_PropertyDataPlain, value2_PropertyDataPlain],
};
 ``` 
 
 Type:[PropertyDataPlain](./propertydataplain)\[\] 
Pass one or more name/valjue pairs.
        
 ####  Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](./batchinfo#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.addProperty](./configuration#addproperty-method) or [Configuration.properties](./configuration#properties-method). 
 ### sequenceName property
Use this property to set and retrieve the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
//typical code sequence using sequenceName
let batchInfo = { name: "myBatchName", sequenceName: "mySequenceName" };
eyes.setBatch(batchInfo);
 ``` 
 
 Type:string 
The name to be assigned to the batch sequence

 #### Remarks 
If you do not set this attribute and the environment variable APPLITOOLS\_BATCH\_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name. 
 ### startedAt property
Use this property to set and retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ``` 
batchInfo = { startedAt: value };
 ``` 
 
 Type: 
The date and time that will be displayed in the Test Manager as the batch start time. 
 `Date|string` 
