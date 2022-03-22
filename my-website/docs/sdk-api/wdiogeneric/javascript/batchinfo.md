# BatchInfo class

Call the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

### Constructor 
### BatchInfo method
The constructor for the [BatchInfo](./batchinfo) class.
Create the object, set it up and assign it to the batch before the test starts using the [Configuration.setBatch](./configuration#setbatch-method) method or [Eyes.setBatch](./eyes#setbatch-method) method. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax 
 ``` 
//overloaded methods
let batchinfo = new BatchInfo();
let batchinfo = new BatchInfo(batch);
let batchinfo = new BatchInfo(name);
let batchinfo = new BatchInfo(name, startedat);
let batchinfo = new BatchInfo(name, startedat, id);
 ``` 

 #### Parameters 
 ###### batch 
  
 Type:[BatchInfoPlain](./batchinfoplain) \[Optional\] 
  
 An object that describes te batch attributes. 
  
  ###### name 
  
 Type:string \[Optional\] 
  
 The name of the batch. If a `null` is passed then the name will be taken from the environment variable APPLITOOLS\_BATCH\_NAME. If the environment variable is not defined then the name of the first test is used as the batch name. 
  
  ###### startedAt 
  
 Type: 
  
     string|Date\[Optional\] 
  
  ###### The date and time that will be displayed in the Test Manager as the batch start time. 
  
 id 
  
 Type:string \[Optional\] 
  
  ###### The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### addProperty method
Associate a user-defined property with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
let value = batchInfo.addProperty(property);
 ``` 

 #### Parameters 
 ###### property 
  
 Type:[PropertyDataPlain](./propertydataplain) 
  
 The name of the property. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        
 ####  Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](#) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.addProperty](./configuration#addproperty-method) or [Configuration.properties](./configuration#properties-method). 
### getId method
Use this method to retrieve the unique id of the batch.

#### Syntax 
 ``` 
let value = batchInfo.getId();
batchInfo.id = value;
value = batchInfo.id;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getName method
Use this method to retrieve the name of the batch.

#### Syntax 
 ``` 
let value = batchInfo.getName();
batchInfo.name = value;
value = batchInfo.name;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getNotifyOnCompletion method
Use this method to retrieve if the SDK will inform the Eyes server that the batch has completed.

#### Syntax 
 ``` 
let value = batchInfo.getNotifyOnCompletion();
batchInfo.notifyOnCompletion = value;
value = batchInfo.notifyOnCompletion;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getProperties method
Retrieve the set of user-defined batch properties.
These properties are defined using the [BatchInfo.addProperty](#addproperty-method) method.

#### Syntax 
 ``` 
let value = batchInfo.getProperties();
batchInfo.properties = value;
value = batchInfo.properties;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [PropertyData](./propertydata)\[\]

The returned list contains all of the name/value pairs defined for the batch. Each entry in the list is a single name/value pair. 
### getSequenceName method
Use this method to retrieve the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
let value = batchInfo.getSequenceName();
batchInfo.sequenceName = value;
value = batchInfo.sequenceName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getStartedAt method
Use this method to retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ``` 
let value = batchInfo.getStartedAt();
batchInfo.startedAt = value;
value = batchInfo.startedAt;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

    Date|string 
### setId method
Use this method to set the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
let value = batchInfo.setId(id);
batchInfo.id = value;
value = batchInfo.id;
 ``` 

 #### Parameters 
 ###### id 
  
 Type:string 
  
 The unique id of the batch. If not passed, or passed as null, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        
 ####  Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
### setName method
Use this method to set the name of the batch.

#### Syntax 
 ``` 
let value = batchInfo.setName(name);
batchInfo.name = value;
value = batchInfo.name;
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the batch. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### setNotifyOnCompletion method
Enable informing the Eyes server that the batch has completed.
This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)
#### Syntax 
 ``` 
let value = batchInfo.setNotifyOnCompletion(notifyOnCompletion);
batchInfo.notifyOnCompletion = value;
value = batchInfo.notifyOnCompletion;
 ``` 

 #### Parameters 
 ###### notifyOnCompletion 
  
 Type:boolean 
  
 If this value is true then a notification will be sent. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### setProperties method
Set one or more user-defined properties to be associated with the batch.
A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax 
 ``` 
let value = batchInfo.setProperties(properties);
batchInfo.properties = value;
value = batchInfo.properties;
 ``` 

 #### Parameters 
 ###### properties 
  
 Type:[PropertyDataPlain](./propertydataplain)\[\] 
  
 Pass one or more name/valjue pairs. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        
 ####  Remarks 
*   Call this method after creating the [BatchInfo](./batchinfo) object and before using the [Eyes.setBatch](./eyes#setbatch-method) or [Configuration.setBatch](./configuration#setbatch-method) method to associate the batch with the test (before the test is started).
*   Set multiple properties by calling [BatchInfo.addProperty](#addproperty-method) multiple times with the same property name and different values.
*   You should not assign a given value to a property more than once in a given batch run.
*   You can also associate properties with a specific test using [Configuration.addProperty](./configuration#addproperty-method) or [Configuration.properties](./configuration#properties-method). 
### setSequenceName method
Use this method to set the batch sequence name for a batch.
A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable APPLITOOLS\_BATCH\_SEQUENCE is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax 
 ``` 
//typical code sequence using setSequenceName
let batchInfo = new BatchInfo("my batch name");
let sequenceName = "My sequence name";
batchInfo.setSequenceName(sequenceName);
eyes.setBatch(batchInfo);
//typical code sequence using setSequenceName
let batchInfo = new BatchInfo("my batch name");
let sequenceName = "My sequence name";
batchInfo.setSequenceName;
eyes.setBatch(batchInfo);
//typical code sequence using setSequenceName
let batchInfo = new BatchInfo("my batch name");
let sequenceName = "My sequence name";
batchInfo.setSequenceName;
eyes.setBatch(batchInfo);
 ``` 

 #### Parameters 
 ###### sequenceName 
  
 Type:string 
  
 The name to be assigned to the batch sequence 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        
 ####  Remarks 
If you do not set this attribute and the environment variable APPLITOOLS\_BATCH\_SEQUENCE is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.
        

