# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Require statement 
``` 
const {Eyes} = require('@applitools/eyes-images');
 
 ``` 
### Constructor 
### Eyes method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
let eyes = new Eyes();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class. 
### abort method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
let result = await eyes.abort();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Promise<?[TestResults](./testresults)>

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### abortIfNotClosed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
let result = await eyes.abortIfNotClosed();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Promise<?[TestResults](./testresults)>

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### addProperty method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [Eyes.addProperty](#-method) method, [Configuration.addProperty](./configuration#addproperty-method) method or [Configuration.setProperties](./configuration#setproperties-method) method.

#### Syntax 
 ``` 
eyes.addProperty(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value associated with the name. 
  
 #### Return value 
Type:

 #### Remarks 
*   Set multiple properties by calling [Eyes.addProperty](#) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run. 
### check method
Run a checkpoint. Uses Fluent arguments to specify the various parameters.
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [ImagesCheckSettings](./checksettings) class.

#### Syntax 
 ``` 
let result = await eyes.check(name, checkSettings);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### checkSettings 
  
 Type: 
  
     ImagesCheckSettings|CheckSettings 
  
  ###### The fluent API calls, starting with one of the [Target](./target) methods. 
  
 #### Return value 
Type: `Promise<boolean>`

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.
        
 ####  Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### checkImage method
Run a checkpoint on an image that you provide as a parameter.

#### Syntax 
 ``` 
let result = await eyes.checkImage(base64String, name, ignoreMismatch);

let result = await eyes.checkImage(base64String, name);

let result = await eyes.checkImage(base64String);

let result = await eyes.checkImage(url, name, ignoreMismatch);

let result = await eyes.checkImage(url, name);

let result = await eyes.checkImage(url);

let result = await eyes.checkImage(filePath, name, ignoreMismatch);

let result = await eyes.checkImage(filePath, name);

let result = await eyes.checkImage(filePath);

let result = await eyes.checkImage(imageBuffer, name, ignoreMismatch);

let result = await eyes.checkImage(imageBuffer, name);

let result = await eyes.checkImage(imageBuffer);
 ``` 

 #### Parameters 
 ###### base64String 
  
 Type:string 
  
 The checkpoint image in PNG format, encoded in base64. 
  
  ###### name 
  
 Type:string \[Optional\] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### ignoreMismatch 
  
 Type:boolean \[Optional\] 
  
 This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
  ###### url 
  
 Type:string 
  
 A string with the URL of the checkpoint image. The image must be in PNG format. 
  
  ###### filePath 
  
 Type:string 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
  ###### imageBuffer 
  
 Type:Buffer 
  
 The checkpoint image as an object in PNG format. 
  
 #### Return value 
Type: `Promise<boolean>`

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.
        
 ####  Remarks 
This method can take three different types of string: a base64 image, a URL, and a file path. It inspects the format of the data to decide if what it has is an image, a URL, or a filepath. 
### checkRegion method
Checks a particular region of the checkpoint image.

#### Syntax 
 ``` 
let result = await eyes.checkRegion(base64String, region, name, ignoreMismatch);

let result = await eyes.checkRegion(base64String, region, name);

let result = await eyes.checkRegion(base64String, region);

let result = await eyes.checkRegion(url, region, name, ignoreMismatch);

let result = await eyes.checkRegion(url, region, name);

let result = await eyes.checkRegion(url, region);

let result = await eyes.checkRegion(filePath, region, name, ignoreMismatch);

let result = await eyes.checkRegion(filePath, region, name);

let result = await eyes.checkRegion(filePath, region);

let result = await eyes.checkRegion(imageBuffer, region, name, ignoreMismatch);

let result = await eyes.checkRegion(imageBuffer, region, name);

let result = await eyes.checkRegion(imageBuffer, region);
 ``` 
 
 RegionObject

The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType:CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users.
        
 ####  Parameters 
 ###### base64String 
  
 Type:string 
  
 The checkpoint image in PNG format, encoded in base64. 
  
  ###### region 
  
 Type: 
  
     Region|RegionObject 
  
  ###### A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
 #### Type definitions 
  
 RegionObject 
  
  ###### The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType:CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users. 
  
 name 
  
 Type:string \[Optional\] 
  
  ###### The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 ignoreMismatch 
  
 Type:boolean \[Optional\] 
  
  ###### This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
 url 
  
 Type:string 
  
  ###### A string with the URL of the checkpoint image. The image must be in PNG format. 
  
 filePath 
  
 Type:string 
  
  ###### A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
 imageBuffer 
  
 Type:Buffer 
  
  ###### The checkpoint image as an object in PNG format. 
  
 #### Return value 
Type: `Promise<boolean>`

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.
        
 ####  Remarks 
This method can take three different types of string: a base64 image, a URL, and a file path. It inspects the format of the data to decide if what it has is an image, a URL, or a filepath. 
### clearProperties method
Clears any custom key name/value properties.

#### Syntax 
 ``` 
eyes.clearProperties();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### close method
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

#### Syntax 
 ``` 
let result = await eyes.close(throwEx);

let result = await eyes.close();
 ``` 

 #### Parameters 
 ###### throwEx 
  
 Type:boolean \[Optional : default = true \] 
  
 If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed. 
  
 #### Return value 
Type: Promise<[TestResults](./testresults)>

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object. 
### getAgentId method
Use this method to retrieve the name and version of the SDK.

#### Syntax 
 ``` 
let value = eyes.getAgentId();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getApiKey method
Use this method to retrieve your Eyes license key that you set with [setApiKey](#setapikey-method), or was extracted from the APPLITOOLS\_API\_KEY environment variable.

#### Syntax 
 ``` 
let value = eyes.getApiKey();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getAppName method
Use this method to retrieve the name of the application property.

#### Syntax 
 ``` 
let value = eyes.getAppName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getBaselineBranchName method
Use this method to retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
let value = eyes.getBaselineBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getBaselineEnvName method
Returns the name of the baseline environment defined for this test run.

#### Syntax 
 ``` 
let value = eyes.getBaselineEnvName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

Returns the value most recently set by a call to [setBaselineEnvName](#setbaselineenvname-method), or a value of null if the baseline environment name has not been assigned in this run. 
### getBatch method
Use this method to retrieve the batch information for tests.

#### Syntax 
 ``` 
let value = eyes.getBatch();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### getBranchName method
Use this method to retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
let value = eyes.getBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getConfiguration method
Use this method to retrieve the current configuration object. This will be the most recent configuration object set using [setConfiguration](#setconfiguration-method), or the initial default configuration object.
If you want to change an Eyes configuration that has already been configured, then the standard way of doing so is to use the following pattern:

*   Get the current configuration using [Eyes.getConfiguration](#) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.setConfiguration](#setconfiguration-method).

#### Syntax 
 ``` 
let value = eyes.getConfiguration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration) 
### getDebugScreenshotsPath method
Use this method to retrieve the folder path where saved checkpoint images are stored (if enabled).

#### Syntax 
 ``` 
let value = eyes.getDebugScreenshotsPath();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### getDebugScreenshotsPrefix method
Use this method to retrieve the prefix added to the file names of locally stored checkpoint images (if enabled).

#### Syntax 
 ``` 
let value = eyes.getDebugScreenshotsPrefix();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### getDeviceInfo method
Retrieve the name of the device being rendered on the Ultrafast Grid, if it was configured explicitly by the user.

#### Syntax 
 ``` 
let value = eyes.getDeviceInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getHostApp method
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax 
 ``` 
let value = eyes.getHostApp();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getHostOS method
Use this method to retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
let value = eyes.getHostOS();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getIgnoreCaret method
Use this method to retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
let value = eyes.getIgnoreCaret();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getIsDisabled method
Use this method to retrieve whether or not interactions with Eyes are ignored.
You can enable and disable Eyes using the [setIsDisabled](#setisdisabled-method) method.

#### Syntax 
 ``` 
let value = eyes.getIsDisabled();
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
let value = eyes.getIsOpen();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method) or [Eyes.abortIfNotClosed](#abortifnotclosed-method) have not yet been called. 
### getMatchLevel method
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
let value = eyes.getMatchLevel();
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
let value = eyes.getParentBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getProxy method
Use this method to retrieve the settings used to access the Eyes proxy server.

#### Syntax 
 ``` 
let value = eyes.getProxy();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ProxySettings](./proxysettings) 
### getSaveDebugScreenshots method
Use this method to retrieve whether or not checkpoint images are copied to a local file (for debugging).

#### Syntax 
 ``` 
let value = eyes.getSaveDebugScreenshots();
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
let value = eyes.getSaveDiffs();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

returns true if steps that have mismatches are automatically saved to the baseline. 
### getSaveNewTests method
Use this method to retrieve whether or not 'new' tests are saved to the baseline by default.

#### Syntax 
 ``` 
let value = eyes.getSaveNewTests();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getScaleRatio method
Use this method to retrieve the scale ratio to be applied to images before matching.

#### Syntax 
 ``` 
let value = eyes.getScaleRatio();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getServerUrl method
Use this method to retrieve the URL of the Eyes server used to process the captured images.

#### Syntax 
 ``` 
let value = eyes.getServerUrl();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getViewportSize method
Use this method to retrieve The value that was set for the viewport.
If the viewport is not set explicitly using e.g. using [Eyes.setViewportSize](#setviewportsize-method), then this method may only be called after a call to [Eyes.open](#open-method)
#### Syntax 
 ``` 
eyes.getViewportSize();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
await eyes.open(appName, testName, imageSize);
await eyes.open(appName, testName);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:string 
  
 The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used. 
  
  ###### testName 
  
 Type:string 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### imageSize 
  
 Type:[RectangleSize](./rectanglesize) \[Optional\] 
  
 If this parameter is not provided, and the viewport was not set using the [setViewportSize](#setviewportsize-method) method, then the viewport size is taken from the dimensions of the image of the first checkpoint. For the image SDK this is used to identify the baseline and does not affect the way the checkpoint image is processed in any other way. 
  
 #### Return value 
Type: Promise

 #### Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abort](#abort-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](#) again to start a new test on the same Eyes instance. 
### replaceImage method
Use this method to replace an image in a step, along with its metadata.

#### Syntax 
 ``` 
let result = await eyes.replaceImage(stepIndex, image, tag, title, userInputs);

let result = await eyes.replaceImage(stepIndex, image, tag, title);

let result = await eyes.replaceImage(stepIndex, image, tag);

let result = await eyes.replaceImage(stepIndex, image);
 ``` 

 #### Parameters 
 ###### stepIndex 
  
 Type:number 
  
 The index number of the checkpoint (the first checkpoint is zero). 
  
  ###### image 
  
 Type: 
  
     string|Buffer|MutableImage 
  
  ###### The image for this checkpoint in PNG format. 
  
 tag 
  
 Type:string \[Optional\] 
  
  ###### Replace the tag originally defined for the checkpoint.If this parameter is not passed, then the default tag is used. 
  
 title 
  
 Type:string \[Optional\] 
  
  ###### Replace the `<title>` tag in the checkpoint metadata.If this parameter is not passed, then the title in the metadata is undefined. 
  
 userInputs 
  
 Type:Trigger\[\] \[Optional\] 
  
  ###### Replace the list of user actions recorded for this checkpoint.If this parameter is not passed, then this checkpoint does not have any associated user actions. 
  
 #### Return value 
Type: `Promise<boolean>` 
### replaceWindow method
Replace the captured image and associated metadata for a checkpoint with an image provided as a parameter.

#### Syntax 
 ``` 
let result = await eyes.replaceWindow(
  stepIndex,
  screenshot,
  tag,
  title,
  userInputs
);

let result = await eyes.replaceWindow(stepIndex, screenshot, tag, title);

let result = await eyes.replaceWindow(stepIndex, screenshot, tag);

let result = await eyes.replaceWindow(stepIndex, screenshot);
 ``` 

 #### Parameters 
 ###### stepIndex 
  
 Type:number 
  
 The zero-based index of the step in which to replace the actual image. 
  
  ###### screenshot 
  
 Type:Buffer 
  
 The PNG bytes of the updated screenshot. 
  
  ###### tag 
  
 Type:string \[Optional\] 
  
 The updated tag for the checkpoint. 
  
  ###### title 
  
 Type:string \[Optional\] 
  
 The updated `<title>` tag for the checkpoint. 
  
  ###### userInputs 
  
 Type:Trigger\[\] \[Optional\] 
  
 The updated userInputs for the checkpoint. 
  
 #### Return value 
Type: Promise<[MatchResult](./matchresult)>

A promise which, when resolved, takes a value of true as a parameter, if the image matched. Otherwise, it will have a value of false. 
### setAgentId method
Use this method to set the name and version of the SDK.
This method is only relevant for users that write their own SDK.

#### Syntax 
 ``` 
eyes.setAgentId(agentId);
 ``` 

 #### Parameters 
 ###### agentId 
  
 Type:string 
  
 The id of the agent in the format 'name/1.2.3'. 
  
 #### Return value 
Type:

 #### Remarks 
To take effect, this method must be called before the call to [open](#open-method). 
### setApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
eyes.setApiKey(apiKey);
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:string 
  
 A string that is your API Key. 
  
 #### Return value 
Type:

 #### Remarks 
Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### setAppName method
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
eyes.setAppName(appName);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:string 
  
 The application name. This may be any string. 
  
 #### Return value 
Type:

 #### Remarks 
If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### setBaselineBranchName method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
eyes.setBaselineBranchName(baselineBranchName);
 ``` 

 #### Parameters 
 ###### baselineBranchName 
  
 Type:string 
  
 The name of the baseline branch to use. 
  
 #### Return value 
Type: 
### setBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet ``<OS, Browser, Viewport>``. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
eyes.setBaselineEnvName(baselineEnvName);
 ``` 

 #### Parameters 
 ###### baselineEnvName 
  
 Type:string 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: 
### setBatch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
eyes.setBatch(batchOrName, batchId, startedAt);
eyes.setBatch(batchOrName, batchId);
eyes.setBatch(batchOrName);
 ``` 
 
 BatchInfoObject

The type BatchInfoObject is defined as: {id:(string|undefined),name:(string|undefined),startedAt:(Date|string|undefined),sequenceName:(string|undefined),notifyOnCompletion:(boolean|undefined)}.
        
 ####  Parameters 
 ###### batchOrName 
  
 Type: 
  
     BatchInfo|BatchInfoObject|string 
  
  ###### Type definitions 
  
 BatchInfoObject 
  
 The type BatchInfoObject is defined as: {id:(string|undefined),name:(string|undefined),startedAt:(Date|string|undefined),sequenceName:(string|undefined),notifyOnCompletion:(boolean|undefined)}. 
  
  ###### batchId 
  
 Type:string \[Optional\] 
  
 If the first parameter is a batch name string (and not a BatchInfo object), then the value passed for this parameter will be used as the id of the created object. All tests that have the same batch ID will appear in the Test results in the same batch. If the value is a falsy value or is not passed and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the ID. Otherwise, an internal id will be generated. 
  
  ###### startedAt 
  
 Type:string \[Optional\] 
  
 If the value is a falsey value or is not passed, then the current date and time will be used. 
  
 #### Return value 
Type:

 #### Remarks 
Call this method once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch. 
### setBranchName method
Use this method to set the branch used for the baseline of this run.
If the branch does not exist when the test starts, then it will be created. If a baseline exists that has the same properties in the parent branch (i.e. the same application name, test name and environment), then the parent branch will provide the intial baseline for the newly created branch. By default, the parent branch is the default branch. You can specify the parent branch explicitly using [setParentBranchName](#setparentbranchname-method) method.

#### Syntax 
 ``` 
eyes.setBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:string 
  
 The name of the branch from which the baseline will be taken and saved. This may be any string. 
  
 #### Return value 
Type: 
### setConfiguration method
Use this method to configure Eyes based on a configuration object.

#### Syntax 
 ``` 
eyes.setConfiguration(configuration);
 ``` 

 #### Parameters 
 ###### configuration 
  
 Type: 
  
     Configuration|object 
  
  ###### A configuration object that has the various properties/methods set to the required values. 
  
 #### Return value 
Type:

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
  
 Type:string 
  
 A pathname where saved checkpoint images should be stored. 
  
 #### Return value 
Type:

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
  
 Type:string 
  
 A prefix to be added to the saved checkpoint images filename. 
  
 #### Return value 
Type:

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setsavedebugscreenshots-method) method. 
### setDeviceInfo method
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax 
 ``` 
eyes.setDeviceInfo(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The name of the device - this is displayed in the Device column in the Test Manager. 
  
 #### Return value 
Type: 
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
Type: 
### setHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting app is undefined. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
eyes.setHostApp(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
eyes.setHostOS(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value to be used for the Host OS property. 
  
 #### Return value 
Type: 
### setIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
eyes.setIgnoreCaret(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:boolean 
  
 If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
  
 #### Return value 
Type: 
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
  
 #### Return value 
Type: 
### setMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
eyes.setMatchLevel(matchLevel);
 ``` 

 #### Parameters 
 ###### matchLevel 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [None](./matchlevel) 
 *   [Strict](./matchlevel) 
 *   [Layout](./matchlevel) 
 *   [Content](./matchlevel) 
 *   [Exact](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type:

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.
The newly created branch inherits the baselines and annotations of the parent. If no parent is defined, then the new branch will inherit the baselines from the default branch.

#### Syntax 
 ``` 
eyes.setParentBranchName(parentBranchName);
 ``` 

 #### Parameters 
 ###### parentBranchName 
  
 Type:string 
  
 The branch name. This may be any string. 
  
 #### Return value 
Type: 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
eyes.setProxy(proxySettings);
eyes.setProxy(isEnabled);
eyes.setProxy(url, username, password);
eyes.setProxy(url, username);
eyes.setProxy(url);
 ``` 

 #### Parameters 
 ###### proxySettings 
  
 Type:[ProxySettings](./proxysettings) 
  
 An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class. 
  
  ###### isEnabled 
  
 Type:boolean 
  
 If this parameter is provided, then it must have a value of false, and it means that use of the proxy is disabled. 
  
  ###### url 
  
 Type:string 
  
 The proxy URL to be used by the serverConnector. If it has a value of then no proxy is set. 
  
  ###### username 
  
 Type:string \[Optional\] 
  
 The string to pass as the username. 
  
  ###### password 
  
 Type:string \[Optional\] 
  
 The string to pass as the password. 
  
 #### Return value 
Type: 
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
Type: 
### setSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
eyes.setSaveDiffs(saveDiffs);
 ``` 

 #### Parameters 
 ###### saveDiffs 
  
 Type:boolean 
  
 If this has a value of true, then the baseline will be updated with checkpoints that have mismatches. 
  
 #### Return value 
Type: 
### setSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
eyes.setSaveNewTests(saveNewTests);
 ``` 

 #### Parameters 
 ###### saveNewTests 
  
 Type:boolean 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: 
### setScaleRatio method
Use this method to set the scale ratio to be applied to images before matching.
Typically used to compensate for different vertical and horizontal pixels density on some devices.

#### Syntax 
 ``` 
eyes.setScaleRatio(scaleRatio);
eyes.setScaleRatio();
 ``` 

 #### Parameters 
 ###### scaleRatio 
  
 Type:number \[Optional : default = 1 \] 
  
 The scale ratio to use. 
  
 #### Return value 
Type: 
### setServerUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
eyes.setServerUrl("https://myEyesServer");
 ``` 

 #### Parameters 
 ###### serverUrl 
  
 Type:string 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: 
### setViewportSize method
Set the default viewport size property. Eyes uses this if a subsequent call to [open](#open-method) is done without a viewport size.
This property will be displayed by the Test Manager along with the other test information. The value is also taken into consideration when finding a matching baseline. When using the Image SDK, the viewport size does not impact the image matching.

#### Syntax 
 ``` 
await Eyes.setViewportSize(viewportSize);
 ``` 
 
 RectangleSizeObject

The type RectangleSizeObject is defined as: {width:number,height:number}.
        
 ####  Parameters 
 ###### viewportSize 
  
 Type: 
  
     RectangleSize|RectangleSizeObject 
  
  ###### The size of the viewport 
  
 The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
  ###### Type definitions 
  
 RectangleSizeObject 
  
 The type RectangleSizeObject is defined as: {width:number,height:number}. 
  
 #### Return value 
Type: Promise

 #### Remarks 
*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter.

This method is a static method.
        

This class does not have any properties.