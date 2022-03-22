# BatchInfo class

Call the [Configuration.set\_batch](./configuration#setbatch-method) method or [Eyes.batch](./eyes#setbatch-property) property with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example. 
 ### Import statement 
``` 
from applitools.selenium import BatchInfo
 
 ``` 
### Constructor 
### BatchInfo method
The constructor for the [BatchInfo](./batchinfo) class.
Create the object, set it up and assign it to the batch before the test starts using the [Configuration.set\_batch](./configuration#setbatch-method) method or [Eyes.batch](./eyes#setbatch-property) property. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax 
 ``` 
batch_info = BatchInfo(name, started_at)

batch_info = BatchInfo(name)

batch_info = BatchInfo()
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text \[Optional : default = None \] 
  
 The name of the batch. If a `None` is passed then the name will be taken from the environment variable APPLITOOLS\_BATCH\_NAME. If the environment variable is not defined then the name of the first test is used as the batch name. 
  
  ###### started\_at 
  
 Type:datetime \[Optional : default = None \] 
  
 The date and time that will be displayed in the Test Manager as the batch start time. 
  
 #### Return value 
Type: None 
## Properties 
### id property
Use this property to set and retrieve the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
batch_info.id  = value
value = batch_info.id
 ``` 
 
 Type:Text 
The unique id of the batch. If not passed, or passed as None, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.
        
 ####  Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
### name property
Use this property to set and retrieve the name of the batch.

#### Syntax 
 ``` 
batch_info.name  = value
value = batch_info.name
 ``` 
 
 Type:Text 
The name of the batch. 
### notify_on_completion property
Enable informing the Eyes server that the batch has completed.
This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)
#### Syntax 
 ``` 
batch_info.notify_on_completion  = value
value = batch_info.notify_on_completion
 ``` 
 
 Type:bool 
If this value is True then a notification will be sent. 
### properties property
Set one or more user-defined properties to be associated with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
batch_info.properties  = value
value = batch_info.properties
 ``` 
 
 Type:List\[Dict\[Text,Text\]\] 
Pass one or more name/valjue pairs.
        
 ####  Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.batch](./eyes#setbatch-method) or [Configuration.set\_batch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.add\_property](#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.add\_property](./configuration#addproperty-method) or [Configuration.properties](./configuration#setproperties-method). 
### sequence_name property
Use this property to set and retrieve the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
//typical code sequence using sequence_name
Batchinfo batchInfo = new BatchInfo()
batchInfo.name = 'my batch name'
batchInfo.sequence_name = 'My sequence name'
eyes.batch = batchInfo
 ``` 
 
 Type:Text 
The name to be assigned to the batch sequence

 #### Remarks 
If you do not set this attribute and the environment variable APPLITOOLS\_BATCH\_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name. 
### started_at property
Use this property to set and retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ``` 
batch_info.started_at  = value
value = batch_info.started_at
 ``` 
 
 Type:datetime 
The date and time that will be displayed in the Test Manager as the batch start time. 
### add_property method
Associate a user-defined property with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
value = batch_info.add_property(name, value)
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text 
  
 The name of the property. 
  
  ###### value 
  
 Type:Text 
  
 The value to be associated with this property. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        
 ####  Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.batch](./eyes#setbatch-method) or [Configuration.set\_batch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.add\_property](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.add\_property](./configuration#addproperty-method) or [Configuration.properties](./configuration#setproperties-method). 
### with_batch_id method
Use this method to set the unique id of the batch using a Fluent interface.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
value = batch_info.with_batch_id(id)
 ``` 

 #### Parameters 
 ###### id 
  
 Type:Text 
  
 The unique id of the batch. If not passed, or passed as None, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        
 ####  Remarks 
This command is intended for use instead of the [id](#setid-property) property. It can be called as part of the constructor of the Batchinfo object as shown in the syntax section.
        
  
