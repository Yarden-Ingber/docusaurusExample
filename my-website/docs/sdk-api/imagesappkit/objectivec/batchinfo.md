# BatchInfo class
Set the [\[Configuration batch\]](../classes-gen/class_configuration/method-configuration-setbatch-imagesappkit-objectivec.html) property or [\[Eyes batch\]](../classes-gen/class_eyes/method-eyes-setbatch-imagesappkit-objectivec.html) property with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example. 
 ### Import statement 
``` 
@import EyesImagesAppKit
 
 ``` 
### Constructor 
### initWithName method
The constructor for the [BatchInfo](./batchinfo) class.
Create the object, set it up and assign it to the batch before the test starts using the [\[Configuration batch\]](../class_configuration/method-configuration-setbatch-imagesappkit-objectivec.html) property or [\[Eyes batch\]](../class_eyes/method-eyes-setbatch-imagesappkit-objectivec.html) property. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax 
 ##### Call syntax 
 ``` 
BatchInfo* batchInfo = [[BatchInfo alloc] initWithName  : name   ];

BatchInfo* batchInfo = [[BatchInfo alloc] initWithName  : name startedAt: startedAt   ];
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)initWithName:(NSString *)name startedAt:(NSDate *)startedAt 
 ``` 

 #### Parameters 
 ###### name 
  
 Type:NSString\* 
  
 The name of the batch. If a `nil` is passed then the name will be taken from the environment variable APPLITOOLS\_BATCH\_NAME. If the environment variable is not defined then the name of the first test is used as the batch name. 
  
  ###### startedAt 
  
 Type:NSDate\* 
  
 The date and time that will be displayed in the Test Manager as the batch start time. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)\*

 
 ### name property
Use this property to retrieve and set the name of the batch.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = batchInfo.name
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, copy, nonatomic) NSString *name 
 ``` 
 
 Type:NSString\* 
 ### startedAtString property
Use this property to retrieve and set the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = batchInfo.startedAtString
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, copy, nonatomic) NSString *startedAtString 
 ``` 
 
 Type:NSString\* 
 ### batchId property
Use this property to set and retrieve the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
batchInfo.batchId  = value
value = batchInfo.batchId
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *batchId 
 ``` 
 
 Type:NSString\* 
The unique id of the batch. If not passed, or passed as nil, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.
        
 ####  Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
 ### sequenceName property
Use this property to set and retrieve the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
batchInfo.sequenceName  = value
value = batchInfo.sequenceName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *sequenceName 
 ``` 
 
 Type:NSString\* 
The name to be assigned to the batch sequence

 #### Remarks 
If you do not set this attribute and the environment variable APPLITOOLS\_BATCH\_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name. 
 ### notifyOnCompletion property
Enable informing the Eyes server that the batch has completed.
This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)
#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value; // give relevant initial value
batchInfo.notifyOnCompletion  = value
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic, getter = isNotifyOnCompletion) BOOL notifyOnCompletion 
 ``` 
 
 Type:BOOL 
If this value is true then a notification will be sent. 
 ### isNotifyOnCompletion property
Use this property to retrieve if the SDK will inform the Eyes server that the batch has completed.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value = batchInfo.notifyOnCompletion
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic, getter = isNotifyOnCompletion) BOOL notifyOnCompletion 
 ``` 
 
 Type:BOOL