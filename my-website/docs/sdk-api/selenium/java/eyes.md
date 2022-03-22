# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Import statement 
``` 
import com.applitools.eyes.selenium.Eyes;
 
 ``` 
### Constructor 
### Eyes method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
Eyes eyes = new Eyes();

Eyes eyes = new Eyes(runner);
 ``` 

 #### Parameters 
 ###### runner 
  
 Type:EyesRunner 
  
 If this parameter is provided, it must be an instance of either the [ClassicRunner](./classicrunner-method) or [VisualGridRunner](./visualgridrunner-method) classes. If a [VisualGridRunner](./visualgridrunner-method) is passed then the image will be rendered using the Ultrafast Grid. If this parameter is not provided, then DOM rendering is done using the local browser defined by the driver parameter passed to the [Eyes.open](#open-method) method. 
  
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
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [SeleniumCheckSettings](./checksettings) class.

#### Syntax 
 ``` 
eyes.check(checkSettings);
eyes.check(tag, checkSettings);
 ``` 

 #### Parameters 
 ###### checkSettings 
  
 Type:ICheckSettings 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
  ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### checkSettings 
  
 Type:ICheckSettings... 
  
 One or more check settings, as an array or a comma separated list. 
  
 #### Return value 
Type: void

 #### Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### checkElement method
Run a checkpoint on the area of a particular element.

#### Syntax 
 ``` 
eyes.checkElement(element);
eyes.checkElement(element, tag);
eyes.checkElement(element, matchTimeout, tag);
eyes.checkElement(selector);
eyes.checkElement(selector, tag);
eyes.checkElement(selector, matchTimeout, tag);
 ``` 

 #### Parameters 
 ###### element 
  
 Type:WebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### selector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
 #### Return value 
Type: void 
### checkFrame method
Run a checkpoint on the area of a particular frame.

#### Syntax 
 ``` 
eyes.checkFrame(frameNameOrId);
eyes.checkFrame(frameNameOrId, tag);
eyes.checkFrame(frameNameOrId, matchTimeout, tag);
eyes.checkFrame(frameIndex);
eyes.checkFrame(frameIndex, tag);
eyes.checkFrame(frameIndex, matchTimeout, tag);
eyes.checkFrame(frameReference);
eyes.checkFrame(frameReference, tag);
eyes.checkFrame(frameReference, matchTimeout, tag);
eyes.checkFrame(framePath, matchTimeout, tag);
eyes.checkFrame(framesPath, tag);
eyes.checkFrame(framesPath);
 ``` 

 #### Parameters 
 ###### frameNameOrId 
  
 Type:String 
  
 The name or id of the frame element. 
  
  ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### frameIndex 
  
 Type:int 
  
 A Selenium frame index. 
  
  ###### frameReference 
  
 Type:WebElement 
  
 An object that references the frame. 
  
  ###### framePath 
  
 Type:String\[\] 
  
 The path of the frame to check. This is a fully defined, top-down list of frame names or IDs, where each frame is nested in the previous frame. 
  
  ###### framesPath 
  
 Type:String\[\] 
  
 The path of the frame to check. This is a fully defined, top-down list of frame names or IDs, where each frame is nested in the previous frame. 
  
 #### Return value 
Type: void 
### checkRegion method
Checks a particular region of the checkpoint window.

#### Syntax 
 ``` 
eyes.checkRegion(region);
eyes.checkRegion(region, matchTimeout, tag);
eyes.checkRegion(element);
eyes.checkRegion(element, stitchContent);
eyes.checkRegion(element, tag);
eyes.checkRegion(element, tag, stitchContent);
eyes.checkRegion(element, matchTimeout, tag);
eyes.checkRegion(element, matchTimeout, tag, stitchContent);
eyes.checkRegion(selector);
eyes.checkRegion(selector, stitchContent);
eyes.checkRegion(selector, tag);
eyes.checkRegion(selector, tag, stitchContent);
eyes.checkRegion(selector, matchTimeout, tag);
eyes.checkRegion(selector, matchTimeout, tag, stitchContent);
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### element 
  
 Type:WebElement 
  
 The element which represents the region to check. 
  
  ###### stitchContent 
  
 Type:boolean 
  
 If the application window is larger than the viewport, and this parameter is true, then the entire page content is rendered. If this parameter is false, then only the viewport is rendered. 
  
  ###### selector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
 #### Return value 
Type: void 
### checkWindow method
Runs a checkpoint of the entire application (e.g. browser) window.

#### Syntax 
 ``` 
eyes.checkWindow();
eyes.checkWindow(tag);
eyes.checkWindow(matchTimeout, tag);
eyes.checkWindow(tag, fully);
 ``` 

 #### Parameters 
 ###### tag 
  
 Type:String 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### fully 
  
 Type:boolean 
  
 Set to true to capture the full browser page and not just the viewport. 
  
 #### Return value 
Type: void 
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
If your tests can run concurrently and you don't need to wait for the results before starting the next test, then it is highly recommended that you call the method [Eyes.closeAsync](#closeasync-method) instead of this method. the call to [closeAsync](#closeasync-method) ends the test without waiting for the results and the next test can start immediately, greatly reducing overall test time. When you use [closeAsync](#closeasync-method), you obtain the results by calling [getAllTestResults](./classicrunner#getalltestresults-method) after all the tests have run.

#### Syntax 
 ``` 
TestResults result = eyes.close();

TestResults result = eyes.close(shouldThrowException);
 ``` 

 #### Parameters 
 ###### shouldThrowException 
  
 Type:boolean 
  
 If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed. 
  
 #### Return value 
Type: [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object. 
### closeAsync method
Call this method or [Eyes.close](#close-method) at the end of the test. The call to [closeAsync](#) terminates the sequence of checkpoints and returns immediately, without waiting for the test results.
Unlike the method [close](#close-method), this method does not wait for results to be available and does not return test results. The test results for this test can be obtained, along with all the other test results, when the runner is terminated by calling the method [VisualGridRunner.getAllTestResults](./visualgridrunner#getalltestresults-method).

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
com.applitools.eyes.selenium.Configuration value = eyes.getConfiguration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: com.applitools.eyes.selenium.[Configuration](./configuration) 
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
### getDevicePixelRatio method
Use this method to retrieve the screen pixel ratio.

#### Syntax 
 ``` 
double value = eyes.getDevicePixelRatio();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: double 
### getDriver method
Use this method to retrieve the driver returned by the call to the [open](#open-method) method.
Typically, you should make all calls to the webdriver using this driver, which wraps the webdriver. This allows Eyes to be aware of calls being made to the webdriver, and enables a number of features.

#### Syntax 
 ``` 
WebDriver value = eyes.getDriver();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: WebDriver 
### getForceFullPageScreenshot method
Use this method to retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
boolean value = eyes.getForceFullPageScreenshot();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHideCaret method
Use this method to retrieve whether Eyes hides the cursor before the screenshot is captured or not.

#### Syntax 
 ``` 
boolean value = eyes.getHideCaret();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHideScrollbars method
hidescrollbars.get
hidescrollbars
#### Syntax 
 ``` 
boolean value = eyes.getHideScrollbars();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
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
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
String value = eyes.getHostOS();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getIgnoreCaret method
Use this method to retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
boolean value = eyes.getIgnoreCaret();
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
### getMatchTimeout method
Use this method to retrieve the maximum amount of time Eyes will try to perform a match on the fully captured image.
If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. The default timeout can be set by the [setMatchTimeout](#setmatchtimeout-method) method.

#### Syntax 
 ``` 
int value = eyes.getMatchTimeout();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
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
### getRotation method
Use this method to retrieve the rotation applied to checkpoint images before matching.

#### Syntax 
 ``` 
ImageRotation value = eyes.getRotation();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ImageRotation](./imagerotation)

The rotation in degrees. 
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
### getScrollToRegion method
Use this method to retrieve whether or not Eyes scrolls a region into view before capturing the image.

#### Syntax 
 ``` 
boolean value = eyes.getScrollToRegion();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
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
### getStitchMode method
Use this method to retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
StitchMode value = eyes.getStitchMode();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [StitchMode](./stitchmode)

The value returned can be either [CSS](./stitchmode) or [SCROLL](./stitchmode). 
### getStitchOverlap method
Use this method to retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
int value = eyes.getStitchOverlap();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int

The stiching overlap in pixels. 
### getViewportSize method
Use this method to retrieve The value that was set for the viewport.
If the viewport is not set explicitly using e.g. using [Eyes.setViewportSize](#setviewportsize-method), then this method may only be called after a call to [Eyes.open](#open-method)
#### Syntax 
 ``` 
RectangleSize value = eyes.getViewportSize();

RectangleSize value = eyes.getViewportSize(driver);
 ``` 

 #### Parameters 
 ###### driver 
  
 Type:WebDriver 
  
 The driver returned from the call to open. 
  
 #### Return value 
Type: [RectangleSize](./rectanglesize) 
### getWaitBeforeScreenshots method
Returns the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
int value = eyes.getWaitBeforeScreenshots();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int

The time Eyes waits before taking a screenshot, in milliseconds. 
### isSendDom method
Returns whether the DOM is being sent to the server or not.

#### Syntax 
 ``` 
boolean value = eyes.isSendDom();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### locate method
Use this method to search the current browser viewport for one or more graphics regions defined by visual locators.

#### Syntax 
 ``` 
List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
Map<String, List<Region>> locRegions5 = eyes.locate(VisualLocator.names(names_A).first()); 
 ``` 

 #### Parameters 
 ###### visualLocatorSettings 
  
 Type:[VisualLocatorSettings](./visuallocatorsettings) 
  
 An object that defines the required visual locator names and how many instances of each locator should be found. This object is created using a series of calls on a [VisualLocator](./visuallocator) object in a fluent API style. See the example below for more details. 
  
 #### Return value 
Type: Map<String, List<[Region](./region)\>>

Returns a mapping between the locator names passed as a parameter [name](./visuallocator#name-method) or [names](./visuallocator#names-method) methods and the regions in the viewport where the graphic images defined by those locator names were detected.

If the image of a particular locator name is not found in the viewport, the locator is mapped to a zero length array. If a locator name is passed, and a locator of that name has not been defined on the Eyes server, the returned locator will be mapped to a value of null instead of an array.

and each value is an object that contains the text found and its bounding rectangle.
        
 ####  Remarks
        
 The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.
 #### Example  
The example below includes two calls to the method [Eyes.locate](#). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:

*   Pass a locator string to the method [name](./visuallocatorsettings#name-method).
*   Pass a list of strings to the method [names](./visuallocatorsettings#names-method).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:

*   To retrieve a maximum of one region for each locator append a call to [first](./visuallocatorsettings#first-method).
*   To retrieve all regions for all locators append a call to ([all](./visuallocatorsettings#all-method)).

Java

    //return a zero or one locator for each of the three locators defined as parameters to name()
    Map<String, List<Region>> locRegions8 = eyes.locate(
        VisualLocator.name("locator_a")
                     .name("locator_b")
                     .name("locator_c")
                     .first()); 
           
    //return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    List<String> locatorList1 = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
    List<String> locatorList2 = Arrays.asList(new String[]{"locator_2a", "locator_2b", "locator_2c"});
    Map<String, List<Region>> locRegions9 = eyes.locate(
        VisualLocator.names(locatorList1)
                     .names(locatorList2)
                     .name("another locator")
                     .all());
    //loop through all the locators and click on the center of their region
    locRegions7.forEach((locator,regions)-> {
        for (Region region : regions) {
            click(region.getLeft()+region.getWidth()/2, region.getTop()+region.getHeight()/2);
        }
    });

//... 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
WebDriver outdriver = eyes.open(webDriver);

WebDriver outdriver = eyes.open(driver, appName, testName);

WebDriver outdriver = eyes.open(driver, appName, testName, viewportSize);
 ``` 

 #### Parameters 
 ###### webDriver 
  
 Type:WebDriver 
  
 The web driver. 
  
  ###### driver 
  
 Type:WebDriver 
  
 The web driver. 
  
  ###### appName 
  
 Type:String 
  
 The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./configuration#setappname-method) method or [Eyes.setAppName](#setappname-method) method. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used. 
  
  ###### testName 
  
 Type:String 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### viewportSize 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details. 
  
 #### Return value 
Type: WebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.
        
 ####  Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.closeAsync](#closeasync-method) (in case of a normal completion) or [Eyes.abortAsync](#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](#) again to start a new test on the same Eyes instance. 
### setAgentId method
Use this method to set the name and version of the SDK.
This method is only relevant for users that write their own SDK.

#### Syntax 
 ``` 
eyes.setAgentId(agentId);
 ``` 

 #### Parameters 
 ###### agentId 
  
 Type:String 
  
 The id of the agent in the format 'name/1.2.3'. 
  
 #### Return value 
Type: void

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
  
 Type:String 
  
 A string that is your API Key. 
  
 #### Return value 
Type: void

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
  
 Type:String 
  
 The application name. This may be any string. 
  
 #### Return value 
Type: void

 #### Remarks 
If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### setBaselineBranchName method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
eyes.setBaselineBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The name of the baseline branch to use. 
  
 #### Return value 
Type: void 
### setBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
eyes.setBaselineEnvName(baselineEnvName);
 ``` 

 #### Parameters 
 ###### baselineEnvName 
  
 Type:String 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: void 
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
Type: void

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
  
 Type:String 
  
 The name of the branch from which the baseline will be taken and saved. This may be any string. 
  
 #### Return value 
Type: void 
### setConfiguration method
Use this method to configure Eyes based on a configuration object.

#### Syntax 
 ``` 
eyes.setConfiguration(configuration);
 ``` 

 #### Parameters 
 ###### configuration 
  
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
Use this method to set the viewport size to be used to select the appropriate baseline. Calling this method does not change the actual browser viewport size.

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
### setForceFullPageScreenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
eyes.setForceFullPageScreenshot(shouldForce);
 ``` 

 #### Parameters 
 ###### shouldForce 
  
 Type:boolean 
  
 If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent. 
  
 #### Return value 
Type: void 
### setHideCaret method
Use this method to set whether Eyes should hide the cursor before the screenshot is captured.

#### Syntax 
 ``` 
eyes.setHideCaret(hideCaret);
 ``` 

 #### Parameters 
 ###### hideCaret 
  
 Type:boolean 
  
 If this paramter has a value of true, then the cursor will be hidden before the image is captured. 
  
 #### Return value 
Type: void

 #### Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [SeleniumCheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### setHideScrollbars method
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
eyes.setHideScrollbars(shouldHide);
 ``` 

 #### Parameters 
 ###### shouldHide 
  
 Type:boolean 
  
 If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
  
 #### Return value 
Type: void 
### setHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
eyes.setHostApp(hostApp);
 ``` 

 #### Parameters 
 ###### hostApp 
  
 Type:String 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: void 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
eyes.setHostOS(hostOS);
 ``` 

 #### Parameters 
 ###### hostOS 
  
 Type:String 
  
 The value to be used for the Host OS property. 
  
 #### Return value 
Type: void 
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
Type: void

 #### Remarks 
We recommend using [setHideCaret](#sethidecaret-method) or [setHideCaret](./configuration#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 
### setIsDisabled method
Use this method to set whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
eyes.setIsDisabled(isDisabled);
 ``` 

 #### Parameters 
 ###### isDisabled 
  
 Type:Boolean 
  
 If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
  
 #### Return value 
Type: void 
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
  
  ###### *   [NONE](./matchlevel) 
 *   [STRICT](./matchlevel) 
 *   [LAYOUT](./matchlevel) 
 *   [CONTENT](./matchlevel) 
 *   [EXACT](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: void

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setMatchTimeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
eyes.setMatchTimeout(ms);
 ``` 

 #### Parameters 
 ###### ms 
  
 Type:int 
  
 The timeout to set in milliseconds. 
  
 #### Return value 
Type: void

 #### Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.
The newly created branch inherits the baselines and annotations of the parent. If no parent is defined, then the new branch will inherit the baselines from the default branch.

#### Syntax 
 ``` 
eyes.setParentBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The branch name. This may be any string. 
  
 #### Return value 
Type: void 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
eyes.setProxy(proxySettings);
 ``` 

 #### Parameters 
 ###### proxySettings 
  
 Type:AbstractProxySettings 
  
 An object that defines how to connect to the proxy server by providing the user name, password, URI and port. This is an instance of the [ProxySettings](./proxysettings) class. 
  
 #### Return value 
Type: void 
### setRotation method
Use this method to set the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
eyes.setRotation(rotation);
 ``` 

 #### Parameters 
 ###### rotation 
  
 Type:[ImageRotation](./imagerotation) 
  
 The number of degrees to rotate. 
  
 #### Return value 
Type: void 
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
eyes.setSaveDiffs(saveDiffs);
 ``` 

 #### Parameters 
 ###### saveDiffs 
  
 Type:Boolean 
  
 If this has a value of true, then the baseline will be updated with checkpoints that have mismatches. 
  
 #### Return value 
Type: void 
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
Type: void 
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
### setScrollToRegion method
Use this method to set whether or not Eyes scrolls a region into view before capturing the checkpoint.

#### Syntax 
 ``` 
eyes.setScrollToRegion(shouldScroll);
 ``` 

 #### Parameters 
 ###### shouldScroll 
  
 Type:boolean 
  
 If set to true, then before a region is matched, Eyes will automatically scroll to the region. If set to false, then Eyes will not scroll. 
  
 #### Return value 
Type: void 
### setSendDom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
eyes.setSendDom(isSendDom);
 ``` 

 #### Parameters 
 ###### isSendDom 
  
 Type:boolean 
  
 A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent. 
  
 #### Return value 
Type: void

 #### Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
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
  
  ###### serverUri 
  
 Type:URI 
  
 The URI of your Eyes server in URI format. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: void 
### setStitchMode method
Use this method to set the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
eyes.setStitchMode(mode);
 ``` 

 #### Parameters 
 ###### mode 
  
 Type:[StitchMode](./stitchmode) 
  
 The stitch mode to use. 
  
 #### Return value 
Type: void 
### setStitchOverlap method
Use this method to set the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
eyes.setStitchOverlap(pixels);
 ``` 

 #### Parameters 
 ###### pixels 
  
 Type:int 
  
 The width of the stitch overlap in pixels. 
  
 #### Return value 
Type: void 
### setViewportSize method
Set the default viewport size property. Eyes uses this if a subsequent call to [open](#open-method) is done without a viewport size. This also changes the browser viewport size to the given size immediately, instead of when [open](#open-method) is called.
This property will be displayed by the Test Manager along with the other test information. The value is also taken into consideration when finding a matching baseline.

#### Syntax 
 ``` 
Eyes.setViewportSize(driver, size);
 ``` 

 #### Parameters 
 ###### driver 
  
 Type:WebDriver 
  
 The driver returned from the call to open. 
  
  ###### size 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 #### Return value 
Type: void

 #### Remarks 
*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [setForceFullPageScreenshot](#setforcefullpagescreenshot-method) method or [setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method so that the full page image is tested.

This method is a static method. 
### setWaitBeforeScreenshots method
Use this method to set the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
eyes.setWaitBeforeScreenshots(waitBeforeScreenshots);
 ``` 

 #### Parameters 
 ###### waitBeforeScreenshots 
  
 Type:int 
  
 The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
  
 #### Return value 
Type: void

This class does not have any properties.