# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Require statement 
``` 
const {Eyes} = require('const EyesSDK = require('eyes.selenium'))');
 
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
### abortIfNotClosed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
eyes.abortIfNotClosed();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

 #### Remarks 
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
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value associated with the name. 
  
 #### Return value 
Type:

 #### Remarks 
*   You should not assign a given value to a property more than once in a given test run. 
### check method
Run a checkpoint. Uses Fluent arguments to specify the various parameters.
To define the region of the check point, and to configure special processing, pass a chain of method calls from the [Target](./target) class as the target parameter.

#### Syntax 
 ``` 
let result = await eyes.check(name, target);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### target 
  
 Type:[Target](./target) 
  
 t b d what this is 
  
 #### Return value 
Type: `Promise<Boolean>`


 #### Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### checkElement method
Run a checkpoint on the area of a particular element.

#### Syntax 
 ``` 
let result = await eyes.checkElement(element, matchTimeout, tag);
 ``` 

 #### Parameters 
 ###### element 
  
 Type:EyesRemoteWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### tag 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: `Promise<Boolean>`
 
### checkElementBy method
Run a checkpoint only on elements identified by a locator.

#### Syntax 
 ``` 
let result = await eyes.checkElementBy(locator, matchTimeout, tag);
 ``` 

 #### Parameters 
 ###### locator 
  
 Type:webdriver.By 
  
 locator - The element to check. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### tag 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: `Promise<Boolean>`
 
### checkFrame method
Run a checkpoint on the area of a particular frame.

#### Syntax 
 ``` 
let result = await eyes.checkFrame(element, matchTimeout, tag);
 ``` 

 #### Parameters 
 ###### element 
  
 Type:EyesRemoteWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### tag 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: `Promise<Boolean>`
 
### checkRegion method
Checks a particular region of the checkpoint window.

#### Syntax 
 ``` 
let result = await eyes.checkRegion(region, tag, matchTimeout);
 ``` 

 #### Parameters 
 ###### region 
  
 Type:{ left: number; top: number; width: number; height: number };  
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### tag 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### matchTimeout 
  
 Type:number 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
 #### Return value 
Type: `Promise<Boolean>`
 
### checkRegionBy method
Run a checkpoint only on a specific region in the window identified by a locator.

#### Syntax 
 ``` 
let result = await eyes.checkRegionBy(by, tag, matchTimeout);
 ``` 

 #### Parameters 
 ###### by 
  
 Type: 
  
     webdriver.WebElement|EyesRemoteWebElement 
  
  ###### An element selector which is chosen using the Selenium By class. 
  
 tag 
  
 Type:string 
  
  ###### The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 matchTimeout 
  
 Type:number 
  
  ###### The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
 #### Return value 
Type: `Promise<Boolean>`
 
### checkRegionByElement method
Run a checkpoint only on a specific region defined by an element.

#### Syntax 
 ``` 
let result = await eyes.checkRegionByElement(element, tag, matchTimeout);
 ``` 

 #### Parameters 
 ###### element 
  
 Type: 
  
     webdriver.WebElement|EyesRemoteWebElement 
  
  ###### An element whose position and bounding rectangle defines the region. 
  
 tag 
  
 Type:string 
  
  ###### The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 matchTimeout 
  
 Type:number 
  
  ###### The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
 #### Return value 
Type: `Promise<Boolean>`
 
### checkWindow method
Runs a checkpoint of the entire application (e.g. browser) window.

#### Syntax 
 ``` 
await eyes.checkWindow(tag, matchTimeout);
 ``` 

 #### Parameters 
 ###### tag 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### matchTimeout 
  
 Type:int 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
 #### Return value 
Type: Promise 
### close method
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

#### Syntax 
 ``` 
let result = await eyes.close(throwEx);
 ``` 

 #### Parameters 
 ###### throwEx 
  
 Type:boolean 
  
 If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed. 
  
 #### Return value 
Type: `Promise<TestResult>`


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
Type: string 
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
### getDefaultMatchTimeout method
Use this method to retrieve the maximum amount of time Eyes will try to perform a match on the fully captured image.
If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. The default timeout can be set by the [setDefaultMatchTimeout](#setmatchtimeout-method) method.

#### Syntax 
 ``` 
let value = eyes.getDefaultMatchTimeout();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getForceFullPageScreenshot method
Use this method to retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
let value = eyes.getForceFullPageScreenshot();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getForcedImageRotation method
Use this method to retrieve the rotation applied to checkpoint images before matching.

#### Syntax 
 ``` 
let value = eyes.getForcedImageRotation();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int

The rotation in degrees. 
### getHideScrollbars method
hidescrollbars.get
hidescrollbars
#### Syntax 
 ``` 
let value = eyes.getHideScrollbars();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHostOS method
Use this method to retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
let value = eyes.getHostOS();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getHostingApp method
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax 
 ``` 
let value = eyes.getHostingApp();
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

Return true if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method) or [Eyes.abortIfNotClosed](#abortifnotclosed-method) have not yet been called. 
### getMatchLevel method
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
eyes.getMatchLevel();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

 #### Remarks 
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
Type: string

The value returned is in URL format, or null if no proxy is set. 
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
### getScrollRootElement method
Returns the element to which [Eyes.setHideScrollbars](#sethidescrollbars-method) will be applied

#### Syntax 
 ``` 
let value = eyes.getScrollRootElement();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: webdriver.WebElement

Returns either the value most recently set using [Eyes.setScrollRootElement](#setscrollrootelement-method), or returns an undefined value if this method was not called. 
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
### getStitchMode method
Use this method to retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
let value = eyes.getStitchMode();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [StitchMode](./stitchmode).Scroll or Stitchmode.CSS

The value returned can be either [CSS](./stitchmode) or [Scroll](./stitchmode). 
### getViewportSize method
Use this method to retrieve The value that was set for the viewport.
If the viewport is not set explicitly using e.g. using [Eyes.setViewportSize](#setviewportsize-method), then this method may only be called after a call to [Eyes.open](#open-method)
#### Syntax 
 ``` 
let result = await eyes.getViewportSize();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: `Promise<{ width: number; height: number; }>` 
### getWaitBeforeScreenshots method
Returns the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
let value = eyes.getWaitBeforeScreenshots();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number

The time Eyes waits before taking a screenshot, in milliseconds. 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
let result = await eyes.open(driver, appName, testName, viewportSize);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:string 
  
 The application name. This may be any string. 
  
  ###### testName 
  
 Type:string 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### viewportSize 
  
 Type:{ width: number; height: number };  
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details. 
  
  ###### driver 
  
 Type:WebDriver 
  
 The web driver. 
  
 #### Return value 
Type: `Promise<WebDriver>`

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.
        
 ####  Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abortIfNotClosed](#abortifnotclosed-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](#) again to start a new test on the same Eyes instance. 
### replaceWindow method
Replace the captured image and associated metadata for a checkpoint with an image provided as a parameter.

#### Syntax 
 ``` 
await eyes.replaceWindow(stepIndex, screenshot, tag, title, userInputs);
 ``` 

 #### Parameters 
 ###### stepIndex 
  
 Type:number 
  
 The zero-based index of the step in which to replace the actual image. 
  
  ###### screenshot 
  
 Type:Buffer 
  
 The PNG bytes of the updated screenshot. 
  
  ###### tag 
  
 Type:string 
  
 The updated tag for the checkpoint. 
  
  ###### title 
  
 Type:string 
  
 The updated `<title>` tag for the checkpoint. 
  
  ###### userInputs 
  
 Type:Trigger\[\] 
  
 The updated userInputs for the checkpoint. 
  
 #### Return value 
Type: `Promise<void>`


A promise which resolves when replacing is done, or rejects if an error occurs. 
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
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](#open-method), then the name will be created and defined on the server with values of the current test environment.

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
eyes.setBatch();
eyes.setBatch(batchOrName);
eyes.setBatch(batchOrName, batchId);
eyes.setBatch(batchOrName, batchId, batchDate);
eyes.setBatch({ id: string, name: string, startedAt: string });
 ``` 

 #### Parameters 
 ###### batchOrName 
  
 Type:string | { id: string; name: string; startedAt: string };  
  
 This parameter can be either a batch name string or an object. If it is an object, then it must have the following fields: 
  
  ###### *   id: A unique identifier for all batches. 
 *   name: The batch name that will be displayed in the Test Editor batch panel. 
 *   startedAt : When the batch started (e.g. the current time). This should be in a format generated by Date().toUTCString(). 
  
 If the parameter is a non-empty string, then it will be used as the batch name of the internally defined batch object. If the parameter value is falsy, and the environment value APPLITOOLS\_BATCH\_NAME is defined, then the value of the environment variable will be used as the batch name. Otherwise, an internal name will be generated. 
  
  ###### batchId 
  
 Type:string 
  
 If the first parameter is a batch name string (and not a BatchInfo object), then the value passed for this parameter will be used as the id of the created object. All tests that have the same batch ID will appear in the Test results in the same batch. If the value is a falsy value or is not passed and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the ID. Otherwise, an internal id will be generated. 
  
  ###### batchDate 
  
 Type:string 
  
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
### setDefaultMatchTimeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
eyes.setDefaultMatchTimeout(timeout);
 ``` 

 #### Parameters 
 ###### timeout 
  
 Type:number 
  
 The timeout to set in milliseconds. 
  
 #### Return value 
Type:

 #### Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### setForceFullPageScreenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
eyes.setForceFullPageScreenshot(force);
 ``` 

 #### Parameters 
 ###### force 
  
 Type:boolean 
  
 If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent. 
  
 #### Return value 
Type: 
### setForcedImageRotation method
Use this method to set the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
eyes.setForcedImageRotation(degrees);
 ``` 

 #### Parameters 
 ###### degrees 
  
 Type:number 
  
 The number of degrees to rotate. 
  
 #### Return value 
Type: 
### setHideScrollbars method
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
eyes.setHideScrollbars(hide);
 ``` 

 #### Parameters 
 ###### hide 
  
 Type:boolean 
  
 If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
  
 #### Return value 
Type: 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
eyes.setHostOS(os);
 ``` 

 #### Parameters 
 ###### os 
  
 Type:string 
  
 The value to be used for the Host OS property. 
  
 #### Return value 
Type: 
### setHostingApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
eyes.setHostingApp(hostingApp);
 ``` 

 #### Parameters 
 ###### hostingApp 
  
 Type:string 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: 
### setIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
eyes.setIgnoreCaret(ignoreCaret);
 ``` 

 #### Parameters 
 ###### ignoreCaret 
  
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
eyes.setMatchLevel(level);
 ``` 

 #### Parameters 
 ###### level 
  
 Type: 
  
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
eyes.setProxy(url, username, password);
 ``` 

 #### Parameters 
 ###### url 
  
 Type:string 
  
 The proxy URL to be used by the serverConnector. If it has a value of then no proxy is set. 
  
  ###### username 
  
 Type:string 
  
 The string to pass as the username. 
  
  ###### password 
  
 Type:string 
  
 The string to pass as the password. 
  
 #### Return value 
Type: 
### setSaveDebugScreenshots method
Use this method to set whether or not checkpoint images should be copied to a local file (typically for troubleshooting).

#### Syntax 
 ``` 
eyes.setSaveDebugScreenshots(saveDebugScreenshots, pathToSave);
 ``` 

 #### Parameters 
 ###### saveDebugScreenshots 
  
 Type:boolean 
  
 If set to true, then checkpoint images is saved to a local directory. 
  
  ###### pathToSave 
  
 Type:string 
  
 The file system path where debug screenshots should be saved. 
  
 #### Return value 
Type: 
### setSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
eyes.setSaveNewTests(shouldSave);
 ``` 

 #### Parameters 
 ###### shouldSave 
  
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
 ``` 

 #### Parameters 
 ###### scaleRatio 
  
 Type:number 
  
 The scale ratio to use. 
  
 #### Return value 
Type: 
### setScrollRootElement method
Use this method to set the element to which [setHideScrollbars](#sethidescrollbars-method) will be applied.

#### Syntax 
 ``` 
eyes.setScrollRootElement(element);
 ``` 

 #### Parameters 
 ###### element 
  
 Type: 
  
     webdriver.WebElement|webdriver.By|EyesRemoteWebElement 
  
  ###### The element or element descriptor. 
  
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
Type: 
### setViewportSize method
Set the default viewport size property. Eyes uses this if a subsequent call to [open](#open-method) is done without a viewport size. This also changes the browser viewport size to the given size immediately, instead of when [open](#open-method) is called.
This property will be displayed by the Test Manager along with the other test information. The value is also taken into consideration when finding a matching baseline.

#### Syntax 
 ``` 
Eyes.setViewportSize(size);
 ``` 

 #### Parameters 
 ###### size 
  
 Type:{ width: number; height: number };  
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 #### Return value 
Type:

 #### Remarks 
*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [setForceFullPageScreenshot](#setforcefullpagescreenshot-method) method so that the full page image is tested.

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
  
 Type:number 
  
 The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
  
 #### Return value 
Type: