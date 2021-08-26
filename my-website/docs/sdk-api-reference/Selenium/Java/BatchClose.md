# BatchClose

Use an object of this class to close a batch explicitly.

## Introduction

The Test Manager displays test results in batches. The article [Grouping tests into batches with the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) explains how tests are associated with batches based on a batch ID, and how you can use the SDK to control which tests will be part of a particular batch.

Here, we will focus on understanding the notions of an active batch and closing a batch.

A batch is created and becomes active when a test is started with a batch ID that does not match an existing active batch. As long as a batch is active, new tests that have a matching batch ID will be added to the batch.

Batches are closed automatically in one of two ways. By default, runner-based SDKs implement the Auto batch closure feature. This feature closes the batches associated with the runner's test after the tests have completed. In addition, in order to prevent large batches that could cause performance issues, the Eyes server closes active batches that have not been used for several hours, or if they have been in continuous use for more than a few days.

When a batch is closed, the Eyes server can send the user a batch completion notification. This feature must be enabled explicitly, see [Batch completion notifications](https://applitools.com/docs/features/batch-completion-notifications.html) for details.

You can manage Auto batch closure by:

* Disabling the Auto batch closure by defining the environment variable `APPLITOOLS_DONT_CLOSE_BATCHES` (on supported SDKs). This is useful if you want to combine tests from multiple runners, or tests that run as separate executions, into a common batch.

* Manually closing the batch after it has been disabled, after all the tests have run, by using the [close](./Eyes#close).

#### Example

The example below:

* Illustrates how to prevent the runner from closing the batch, using [VisualGridRunner.setDontCloseBatches](./VisualGridRunner#setdontclosebatches) or [ClassicRunner.setDontCloseBatches](./ClassicRunner#setdontclosebatches).
* Illustrates how to manually close the batch when all tests on all runners have completed, using the method [BatchClose.close](./BatchClose#close).
Note that the batch ID of the batch being closed needs to be passed to the [BatchClose.setBatchId](./BatchClose#setbatchid) method. In this example, we assume that a batch ID was set for all of the batches by assigning a unique ID to the `APPLITOOLS_BATCH_ID` environment variable. This is used as a default by the [Configuration.setBatch](./Configuration#setbatch) method which is set up in the suite Configuration object and then assigned to each Eyes instance.

```java
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
```

## BatchClose
The constructor for the [BatchClose](./BatchClose) class.

To manually close a batch, instantiate an object of this class and then call [BatchClose.setBatchId](./BatchClose#setbatchid) followed by [BatchClose.close](./BatchClose#close) in a fluent method style - see the example below.

#### Syntax

```java
BatchClose obj = new BatchClose();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [BatchClose](./BatchClose)

## close
Close the batches whose batch IDs were passed to [BatchClose.setBatchId](./BatchClose#setbatchid).

#### Syntax

```java
obj.close();    
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `void`

## setApiKey
Use this method to set your Eyes license key.

To obtain your API key, see [How to obtain your API key](https://applitools.com/docs/topics/overview/obtain-api-key.html).

#### Syntax

```java
BatchClose value = obj.setApiKey(apiKey);
```

#### Parameters
apiKey<br/>
Type: `String`<br/>
A string that is your API Key.

#### Return value
Type: [BatchClose](./BatchClose)
The object that called this method. This allows other methods of this class to be appended in a Fluent style.

## setBatchId
Set the batch ID of the batches that should be closed.

#### Syntax

```java
EnabledBatchClose value = obj.setBatchId(batchIds);
```

#### Parameters
batchIds<br/>
Type:`List<String>`<br/>
One or more batches to be closed.

#### Return value
Type: `EnabledBatchClose`
The returned object is an instance of a class inherited from BatchClose. This is to ensure that you only call [BatchClose.close](./BatchClose#close) if you've set the batch ID by calling [setBatchId](./BatchClose#setbatchid)

## setProxy
Use this method to provide the URL, username, and password of a Proxy server that the SDK can use to access the Eyes server.

#### Syntax

```java
BatchClose value = obj.setProxy(proxySettings);
```

#### Parameters
proxySettings<br/>
Type: [ProxySettings](./ProxySettings)<br/>
An object that defines how to interact with the proxy server.

#### Return value
Type: [BatchClose](./BatchClose)

## setUrl
Set the Eyes server URL.

You only need to set the Eyes server if you don't use the default server or if the Eyes server is not set using the environment variable `APPLITOOLS_SERVER_URL`.

#### Syntax

```java
BatchClose value = obj.setUrl(url);
```

#### Parameters
url<br/>
Type: `String`<br/>
The URL of the Eyes server.

#### Return value
Type: [BatchClose](./BatchClose)<br/>
The object that called this method. This allows other methods of this class to be appended in a Fluent style.