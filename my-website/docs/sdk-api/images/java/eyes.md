# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Import statement 
``` 
import com.applitools.eyes.images.Eyes;
 
 ``` 
### Constructor 
### Eyes method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
Eyes eyes = new Eyes();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class. 
### abort method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [closeAsync](#closeasync-method) or [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
TestResults value = eyes.abort();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)
        
 ####  Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### abortAsync method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [closeAsync](#closeasync-method) or [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
eyes.abortAsync();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### abortIfNotClosed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [closeAsync](#closeasync-method) or [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
TestResults value = eyes.abortIfNotClosed();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)
        
 ####  Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### addProperty method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [Eyes.addProperty](#-method) method.

#### Syntax 
 ``` 
eyes.addProperty(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The name of the property. 
  
  ###### value 
  
 Type:String 
  
 The value associated with the name. 
  
 #### Return value 
Type: void

 #### Remarks 
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method). 
### check method
Run a checkpoint. Uses Fluent arguments to specify the various parameters.
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [ImagesCheckSettings](./checksettings) class.

#### Syntax 
 ``` 
boolean value = eyes.check(name, checkSettings);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### checkSettings 
  
 Type:ICheckSettings 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
 #### Return value 
Type: boolean

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.
        
 ####  Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### checkImage method
Run a checkpoint on an image that you provide as a parameter.

#### Syntax 
 ``` 
boolean value = eyes.checkImage(image);

boolean value = eyes.checkImage(image, tag);

boolean value = eyes.checkImage(image, tag, ignoreMismatch);

boolean value = eyes.checkImage(path);

boolean value = eyes.checkImage(path, tag);

boolean value = eyes.checkImage(path, tag, ignoreMismatch);
 ``` 

 #### Parameters 
 ###### image 
  
 Type:BufferedImage 
  
 An image in a buffer. 
  
  ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### ignoreMismatch 
  
 Type:boolean 
  
 This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
  ###### path 
  
 Type:String 
  
 The file system path to a file that contains the image. 
  
  ###### image 
  
 Type:byte\[\] 
  
 The image as a byte stream (as it appears in the PNG image file). 
  
 #### Return value 
Type: boolean

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method. 
### checkRegion method
Checks a particular region of the checkpoint image.

#### Syntax 
 ``` 
boolean value = eyes.checkRegion(image, region, tag, ignoreMismatch);

eyes.checkRegion(image, region, tag);
eyes.checkRegion(image, region);
 ``` 

 #### Parameters 
 ###### image 
  
 Type:BufferedImage 
  
 An image stored in a buffer in PNG format. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### ignoreMismatch 
  
 Type:boolean 
  
 This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
 #### Return value 
Type: boolean

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method. 
### clearProperties method
Clears any custom key name/value properties.

#### Syntax 
 ``` 
eyes.clearProperties();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void 
### close method
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

#### Syntax 
 ``` 
TestResults result = eyes.close();

TestResults result = eyes.close(throwEx);
 ``` 

 #### Parameters 
 ###### throwEx 
  
 Type:boolean 
  
 If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed. 
  
 #### Return value 
Type: [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object. 
### closeAsync method
Call this method or [Eyes.close](#close-method) at the end of the test. This call is provided for compatibiity with SDKs that support a runner. For this SDK has the same effect as calling [Eyes.close](#close-method) with a false (no exception) parameter but it does not return a test result.

#### Syntax 
 ``` 
eyes.closeAsync();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void 
### getAgentId method
Use this method to retrieve the name and version of the SDK.

#### Syntax 
 ``` 
String value = eyes.getAgentId();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getApiKey method
Use this method to retrieve your Eyes license key that you set with [setApiKey](#setapikey-method), or was extracted from the APPLITOOLS\_API\_KEY environment variable.

#### Syntax 
 ``` 
String value = eyes.getApiKey();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getAppName method
Use this method to retrieve the name of the application property.

#### Syntax 
 ``` 
String value = eyes.getAppName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getBaselineBranchName method
Use this method to retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
String value = eyes.getBaselineBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getBaselineEnvName method
Returns the name of the baseline environment defined for this test run.

#### Syntax 
 ``` 
String value = eyes.getBaselineEnvName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String

Returns the value most recently set by a call to [setBaselineEnvName](#setbaselineenvname-method), or a value of null if the baseline environment name has not been assigned in this run. 
### getBatch method
Use this method to retrieve the batch information for tests.

#### Syntax 
 ``` 
BatchInfo value = eyes.getBatch();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### getBranchName method
Use this method to retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
String value = eyes.getBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getConfiguration method
Use this method to retrieve the current configuration object. This will be the most recent configuration object set using [setConfiguration](#setconfiguration-method), or the initial default configuration object.
If you want to change an Eyes configuration that has already been configured, then the standard way of doing so is to use the following pattern:

*   Get the current configuration using [Eyes.getConfiguration](#) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.setConfiguration](#setconfiguration-method).

#### Syntax 
 ``` 
Configuration value = eyes.getConfiguration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration) 
### getDebugScreenshotsPath method
Use this method to retrieve the folder path where saved checkpoint images are stored (if enabled).

#### Syntax 
 ``` 
String value = eyes.getDebugScreenshotsPath();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### getDebugScreenshotsPrefix method
Use this method to retrieve the prefix added to the file names of locally stored checkpoint images (if enabled).

#### Syntax 
 ``` 
String value = eyes.getDebugScreenshotsPrefix();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### getHostApp method
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax 
 ``` 
String value = eyes.getHostApp();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getHostOS method
Use this method to retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
String value = eyes.getHostOS();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getIsDisabled method
Use this method to retrieve whether or not interactions with Eyes are ignored.
You can enable and disable Eyes using the [setIsDisabled](#setisdisabled-method) method.

#### Syntax 
 ``` 
boolean value = eyes.getIsDisabled();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual. 
### getIsOpen method
Use this to know if the Eyes instance is currently open.

#### Syntax 
 ``` 
boolean value = eyes.getIsOpen();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method), [Eyes.abortAsync](#abortasync-method) or [Eyes.abortIfNotClosed](#abortifnotclosed-method) have not yet been called. 
### getMatchLevel method
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
MatchLevel value = eyes.getMatchLevel();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [MatchLevel](./matchlevel)
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### getParentBranchName method
Use this method to retrieve the parent branch, from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
String value = eyes.getParentBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getProxy method
Use this method to retrieve the settings used to access the Eyes proxy server.

#### Syntax 
 ``` 
AbstractProxySettings value = eyes.getProxy();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: AbstractProxySettings

The value returned is a [ProxySettings](./proxysettings) object or null if no proxy is set. 
### getSaveDebugScreenshots method
Use this method to retrieve whether or not checkpoint images are copied to a local file (for debugging).

#### Syntax 
 ``` 
boolean value = eyes.getSaveDebugScreenshots();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### getSaveDiffs method
Use this method to retrieve if steps that have mismatches are automatically saved to the baseline or not.

#### Syntax 
 ``` 
Boolean value = eyes.getSaveDiffs();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Boolean

returns true if steps that have mismatches are automatically saved to the baseline. 
### getSaveNewTests method
Use this method to retrieve whether or not 'new' tests are saved to the baseline by default.

#### Syntax 
 ``` 
boolean value = eyes.getSaveNewTests();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getScaleRatio method
Use this method to retrieve the scale ratio to be applied to images before matching.

#### Syntax 
 ``` 
double value = eyes.getScaleRatio();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: double 
### getServerUrl method
Use this method to retrieve the URL of the Eyes server used to process the captured images.

#### Syntax 
 ``` 
URI value = eyes.getServerUrl();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: URI 
### getViewportSize method
Use this method to retrieve The value that was set for the viewport.
If the viewport is not set explicitly using e.g. using [Eyes.setViewportSize](#setviewportsize-method), then this method may only be called after a call to [Eyes.open](#open-method)
#### Syntax 
 ``` 
RectangleSize value = eyes.getViewportSize();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RectangleSize](./rectanglesize) 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
eyes.open(appName, testName, dimensions);
eyes.open(appName, testName);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:String 
  
 The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used. 
  
  ###### testName 
  
 Type:String 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### dimensions 
  
 Type:[RectangleSize](./rectanglesize) 
  
 If this parameter is not provided, and the viewport was not set using the [setViewportSize](#setviewportsize-method) method, then the viewport size is taken from the dimensions of the image of the first checkpoint. For the image SDK this is used to identify the baseline and does not affect the way the checkpoint image is processed in any other way. 
  
 #### Return value 
Type: void

 #### Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.closeAsync](#closeasync-method) (in case of a normal completion) or [Eyes.abortAsync](#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](#) again to start a new test on the same Eyes instance. 
### setAgentId method
Use this method to set the name and version of the SDK.
This method is only relevant for users that write their own SDK.

#### Syntax 
 ``` 
Configuration value = eyes.setAgentId(agentId);
 ``` 

 #### Parameters 
 ###### agentId 
  
 Type:String 
  
 The id of the agent in the format 'name/1.2.3'. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
To take effect, this method must be called before the call to [open](#open-method). 
### setApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
Configuration value = eyes.setApiKey(apiKey);
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:String 
  
 A string that is your API Key. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### setAppName method
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
Configuration value = eyes.setAppName(appName);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:String 
  
 The application name. This may be any string. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### setBaselineBranchName method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
Configuration value = eyes.setBaselineBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The name of the baseline branch to use. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
Configuration value = eyes.setBaselineEnvName(baselineEnvName);
 ``` 

 #### Parameters 
 ###### baselineEnvName 
  
 Type:String 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setBatch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
eyes.setBatch( new BatchInfo(name));
 ``` 

 #### Parameters 
 ###### batch 
  
 Type:[BatchInfo](./batchinfo) 
  
 An object of the class [BatchInfo](./batchinfo) that describes the batch. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
Call this method once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch. 
### setBranchName method
Use this method to set the branch used for the baseline of this run.
If the branch does not exist when the test starts, then it will be created. If a baseline exists that has the same properties in the parent branch (i.e. the same application name, test name and environment), then the parent branch will provide the intial baseline for the newly created branch. By default, the parent branch is the default branch. You can specify the parent branch explicitly using [setParentBranchName](#setparentbranchname-method) method.

#### Syntax 
 ``` 
Configuration value = eyes.setBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The name of the branch from which the baseline will be taken and saved. This may be any string. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setConfiguration method
Use this method to configure Eyes based on a configuration object.

#### Syntax 
 ``` 
eyes.setConfiguration(config);
 ``` 

 #### Parameters 
 ###### config 
  
 Type:[Configuration](./configuration) 
  
 A configuration object that has the various properties/methods set to the required values. 
  
 #### Return value 
Type: void

 #### Remarks 
The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Set the properties you want to set up, using the various set methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [Eyes.setConfiguration](#) method with the configuration object.
*   Call the [Eyes.open](#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [Eyes.setConfiguration](#) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [Eyes.getConfiguration](#getconfiguration-method) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.setConfiguration](#). 
### setDebugScreenshotsPath method
Use this method to set the folder path where locally saved checkpoint images should be stored (if enabled).

#### Syntax 
 ``` 
eyes.setDebugScreenshotsPath(pathToSave);
 ``` 

 #### Parameters 
 ###### pathToSave 
  
 Type:String 
  
 A pathname where saved checkpoint images should be stored. 
  
 #### Return value 
Type: void

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### setDebugScreenshotsPrefix method
Use this method to set the prefix that should be added to the file names for locally stored checkpoint images (if enabled).

#### Syntax 
 ``` 
eyes.setDebugScreenshotsPrefix(prefix);
 ``` 

 #### Parameters 
 ###### prefix 
  
 Type:String 
  
 A prefix to be added to the saved checkpoint images filename. 
  
 #### Return value 
Type: void

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### setExplicitViewportSize method
Use this method to set the viewport size to be used to select the appropriate baseline.

#### Syntax 
 ``` 
eyes.setExplicitViewportSize(explicitViewportSize);
 ``` 

 #### Parameters 
 ###### explicitViewportSize 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The size of the viewport. A value of null disables the explicit size. 
  
 #### Return value 
Type: void 
### setHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting app is undefined. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
Configuration value = eyes.setHostApp(hostApp);
 ``` 

 #### Parameters 
 ###### hostApp 
  
 Type:String 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
Configuration value = eyes.setHostOS(hostOS);
 ``` 

 #### Parameters 
 ###### hostOS 
  
 Type:String 
  
 The value to be used for the Host OS property. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setIsDisabled method
Use this method to set whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
eyes.setIsDisabled(isDisabled);
 ``` 

 #### Parameters 
 ###### isDisabled 
  
 Type:boolean 
  
 If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
  
  ###### isDisabled 
  
 Type:Boolean 
  
 If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
  
 #### Return value 
Type: void 
### setMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
Configuration value = eyes.setMatchLevel(matchLevel);
 ``` 

 #### Parameters 
 ###### matchLevel 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [NONE](./matchlevel) 
 *   [STRICT](./matchlevel) 
 *   [LAYOUT](./matchlevel) 
 *   [CONTENT](./matchlevel) 
 *   [EXACT](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.
The newly created branch inherits the baselines and annotations of the parent. If no parent is defined, then the new branch will inherit the baselines from the default branch.

#### Syntax 
 ``` 
Configuration value = eyes.setParentBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The branch name. This may be any string. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
Configuration value = eyes.setProxy(abstractProxySettings);
 ``` 

 #### Parameters 
 ###### abstractProxySettings 
  
 Type:AbstractProxySettings 
  
 An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setSaveDebugScreenshots method
Use this method to set whether or not checkpoint images should be copied to a local file (typically for troubleshooting).

#### Syntax 
 ``` 
eyes.setSaveDebugScreenshots(saveDebugScreenshots);
 ``` 

 #### Parameters 
 ###### saveDebugScreenshots 
  
 Type:boolean 
  
 If set to true, then checkpoint images is saved to a local directory. 
  
 #### Return value 
Type: void 
### setSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
Configuration value = eyes.setSaveDiffs(saveDiffs);
 ``` 

 #### Parameters 
 ###### saveDiffs 
  
 Type:Boolean 
  
 If this has a value of true, then the baseline will be updated with checkpoints that have mismatches. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
Configuration value = eyes.setSaveNewTests(saveNewTests);
 ``` 

 #### Parameters 
 ###### saveNewTests 
  
 Type:boolean 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setScaleRatio method
Use this method to set the scale ratio to be applied to images before matching.
Typically used to compensate for different vertical and horizontal pixels density on some devices.

#### Syntax 
 ``` 
eyes.setScaleRatio(scaleRatio);
 ``` 

 #### Parameters 
 ###### scaleRatio 
  
 Type:Double 
  
 The scale ratio to use. 
  
 #### Return value 
Type: void 
### setServerUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
eyes.setServerUrl('https://myEyesServer');
eyes.setServerUrl(new URI('https://myEyesServer');
 ``` 

 #### Parameters 
 ###### serverUrl 
  
 Type:String 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
  ###### serverUrl 
  
 Type:URI 
  
 The URI of your Eyes server in URI format. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setViewportSize method
Set the default viewport size property. Eyes uses this if a subsequent call to [open](#open-method) is done without a viewport size.
This property will be displayed by the Test Manager along with the other test information. The value is also taken into consideration when finding a matching baseline. When using the Image SDK, the viewport size does not impact the image matching.

#### Syntax 
 ``` 
Configuration value = Eyes.setViewportSize(size);
 ``` 

 #### Parameters 
 ###### size 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter.

This method is a static method.
        

This class does not have any properties.