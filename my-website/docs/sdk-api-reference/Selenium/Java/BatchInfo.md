# BatchInfo
Call the [Configuration.setBatch](./Configuration#setbatch) method or [Eyes.setBatch](./Eyes#setbatch) method with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

## BatchInfo
The constructor for the [BatchInfo](./BatchInfo) class.

Create the object, set it up and assign it to the batch before the test starts using the [Configuration.setBatch](./Configuration#setbatch) method or [Eyes.setBatch](./Eyes#setbatch) method. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax

```java
BatchInfo batchInfo = new BatchInfo(name, startedAt);

BatchInfo batchInfo = new BatchInfo();

BatchInfo batchInfo = new BatchInfo(name);
```

#### Parameters
name<br/>
Type: `String`<br/>
The name of the batch. If a `null` is passed then the name will be taken from the environment variable `APPLITOOLS_BATCH_NAME`. If the environment variable is not defined then the name of the first test is used as the batch name.

startedAt<br/>
Type: `Calendar`<br/>
The date and time that will be displayed in the Test Manager as the batch start time.

#### Return value
Type: [BatchInfo](./BatchInfo)

## addProperty
Associate a user-defined property with the batch.

A batch property is a user-defined name/value pair that you can associate with a batch. Use the Test Manger to view the properties and their values for a particular batch and you can filter for batches with specific property values. See [Using user defined batch properties](https://applitools.com/docs/topics/working-with-test-batches/using-batch-properties.html) for more information.

#### Syntax

```java
BatchInfo value = batchInfo.addProperty(name, value);
```

#### Parameters
name<br/>
Type: `String`<br/>
The name of the property.

value<br/>
Type: `String`<br/>
The value to be associated with this property.

#### Return value
Type: [BatchInfo](./BatchInfo)

#### Remarks
* Call this method after creating the [BatchInfo](./BatchInfo) object and before using the [Eyes.setBatch](./Eyes#setbatch) or [Configuration.setBatch](./Configuration#setbatch) method to associate the batch with the test (before the test is started).
* Set multiple properties by calling [BatchInfo.addProperty](./BatchInfo#addproperty) multiple times with the same property name and different values.
* You should not assign a given value to a property more than once in a given batch run.

## getId
Use this method to retrieve the unique id of the batch.

#### Syntax

```java
String value = batchInfo.getId();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getName
Use this method to retrieve the name of the batch.

#### Syntax

```java
String value = batchInfo.getName();
```

Note: This method is a static method.

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getProperties
Retrieve the set of user-defined batch properties.

These properties are defined using the [BatchInfo.addProperty](./BatchInfo#addproperty) method.

#### Syntax

```java
List<Map<String, String>> value = batchInfo.getProperties();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `List<Map<String, String>>`<br/>
The returned list contains all of the name/value pairs defined for the batch. Each entry in the list is a single name/value pair.

## getSequenceName
Use this method to retrieve the batch sequence name for a batch.

A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable `APPLITOOLS_BATCH_SEQUENCE` is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax

```java
String value = batchInfo.getSequenceName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getStartedAt
Use this method to retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax

```java
Calendar value = batchInfo.getStartedAt();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `Calendar`

## isNotifyOnCompletion
Use this method to retrieve if the SDK will inform the Eyes server that the batch has completed.

#### Syntax

```java
boolean value = batchInfo.isNotifyOnCompletion();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## setId
Use this method to set the unique id of the batch.

You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)

#### Syntax

```java
batchInfo.setId(id);
```

#### Parameters
id<br/>
Type: `String`<br/>
The unique id of the batch. If not passed, or passed as null, and the environment variable `APPLITOOLS_BATCH_ID` is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value
Type: `void`

#### Remarks
If the id is not set, and the environment variable `APPLITOOLS_BATCH_ID` is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run.

## setNotifyOnCompletion
Enable informing the Eyes server that the batch has completed.

This is part of the Batch completion notification feature. The fact that a test run reports completion to the Eyes server does not mean that a batch completion notification is actually sent to users. Actual batch completion notication depends on how the feature has been configured by the Test Manager administrator. In particular, the configuration must either specify the application name of the test that should be notified or the configuration must be set so that all applications are notified. For more details see [Batch completion notification](https://applitools.com/docs/topics/sdk/setup-batch-completion-notification-sdk.html)

#### Syntax

```java
batchInfo.setNotifyOnCompletion(notifyOnCompletion);
```

#### Parameters
notifyOnCompletion<br/>
Type: `boolean`<br/>
If this value is true then a notification will be sent.

#### Return value
Type: `void`

## setSequenceName
Use this method to set the batch sequence name for a batch.

A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable `APPLITOOLS_BATCH_SEQUENCE` is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

#### Syntax

```java
//typical code sequence using setSequenceName
Batchinfo batchInfo = new BatchInfo('my batch name');
String sequenceName = 'My sequence name';
batchInfo.setSequenceName(sequenceName);
eyes.setBatch(batchInfo);
```

#### Parameters
sequenceName<br/>
Type: `String`<br/>
The name to be assigned to the batch sequence

#### Return value
Type: `void`

#### Remarks
If you do not set this attribute and the environment variable `APPLITOOLS_BATCH_SEQUENCE` is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.

## setStartedAt
Use this method to set the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax

```java
batchInfo.setStartedAt(startedAt);
```

#### Parameters
startedAt<br/>
Type: `String`<br/>
The date and time that will be displayed in the Test Manager as the batch start time.

#### Return value
Type: `void`

## withBatchId
Use this method to set the unique id of the batch using a Fluent interface.

You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)

#### Syntax

```java
eyes.setBatch(new BatchInfo(name).withBatchId('myId');
```

#### Parameters
id<br/>
Type: `String`<br/>
The unique id of the batch. If not passed, or passed as null, and the environment variable `APPLITOOLS_BATCH_ID` is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.

#### Return value
Type: [BatchInfo](./BatchInfo)

#### Remarks
This command is intended for use instead of the [setId](./BatchInfo#setid) method. It can be called as part of the constructor of the Batchinfo object as shown in the syntax section.