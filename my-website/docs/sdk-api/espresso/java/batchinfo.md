# BatchInfo class
Call the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example. 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.BatchInfo;
 
 ``` 
### Constructor 
### BatchInfo method
The constructor for the [BatchInfo](./batchinfo) class.
Create the object, set it up and assign it to the batch before the test starts using the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax 
 ``` 
BatchInfo batchInfo = new BatchInfo(name, startedAt);

BatchInfo batchInfo = new BatchInfo(name);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The name of the batch. If a `null` is passed then the name will be taken from the environment variable APPLITOOLS\_BATCH\_NAME. If the environment variable is not defined then the name of the first test is used as the batch name. 
  
  ###### startedAt 
  
 Type:Calendar 
  
 The date and time that will be displayed in the Test Manager as the batch start time. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### getId method
Use this method to retrieve the unique id of the batch.

#### Syntax 
 ``` 
String value = batchInfo.getId();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getName method
Use this method to retrieve the name of the batch.

#### Syntax 
 ``` 
String value = batchInfo.getName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getSequenceName method
Use this method to retrieve the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
String value = batchInfo.getSequenceName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getStartedAt method
Use this method to retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ``` 
Calendar value = batchInfo.getStartedAt();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Calendar 
### isNotifyOnCompletion method
Use this method to retrieve if the SDK will inform the Eyes server that the batch has completed.

#### Syntax 
 ``` 
boolean value = batchInfo.isNotifyOnCompletion();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### setId method
Use this method to set the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
batchInfo.setId(id);
 ``` 

 #### Parameters 
 ###### id 
  
 Type:String 
  
 The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used. 
  
 #### Return value 
Type: void

 #### Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
### setNotifyOnCompletion method
Enable informing the Eyes server that the batch has completed.
This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)
#### Syntax 
 ``` 
batchInfo.setNotifyOnCompletion(notifyOnCompletion);
 ``` 

 #### Parameters 
 ###### notifyOnCompletion 
  
 Type:boolean 
  
 If this value is true then a notification will be sent. 
  
 #### Return value 
Type: void 
### setSequenceName method
Use this method to set the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
//typical code sequence using setSequenceName
Batchinfo batchInfo = new BatchInfo('my batch name');
String sequenceName = 'My sequence name';
batchInfo.setSequenceName(sequenceName);
eyes.setBatch(batchInfo);
 ``` 

 #### Parameters 
 ###### sequenceName 
  
 Type:String 
  
 The name to be assigned to the batch sequence 
  
 #### Return value 
Type: void

 #### Remarks 
If you do not set this attribute and the environment variable APPLITOOLS\_BATCH\_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.