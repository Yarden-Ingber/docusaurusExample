# Eyes
This class provides the main methods used to execute tests and checkpoints.

## Eyes
This is the constructor for the Eyes class.

This is the main class used for executing checkpoints using Eyes.


#### Syntax

```java
Eyes eyes = new Eyes();

Eyes eyes = new Eyes(runner);
```

#### Parameters
runner<br/>
Type: [EyesRunner](./EyesRunner)<br/>
If this parameter is provided, it must be an instance of either the [ClassicRunner](./ClassicRunner) or [VisualGridRunner](./VisualGridRunner) classes. If a [VisualGridRunner](./VisualGridRunner) is passed then the image will be rendered using the Ultrafast Grid. If this parameter is not provided, then DOM rendering is done using the local browser defined by the driver parameter passed to the [Eyes.open](./Eyes#open) method.

#### Return value
Type: [Eyes](./Eyes)<br/>
Use the object returned to call the various methods provided by the Eyes class.

## abort
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [closeAsync](#closeAsync) or [close](#close) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax

```java
TestResults value = eyes.abort();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [TestResults](./TestResults)

#### Remarks
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

## abortAsync
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [closeAsync](#closeAsync) or [close](#close) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax

```java
eyes.abortAsync();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `void`

#### Remarks
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

## abortIfNotClosed
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [closeAsync](#closeAsync) or [close](#close) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax

```java
TestResults value = eyes.abortIfNotClosed();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [TestResults](./TestResults)

#### Remarks
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored.

## addProperty
Adds a user-defined key name/value property that will be associated with tests.

A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html) by these properties in the Test Manager.. You can set properties using the [Eyes.addProperty](./Eyes#addProperty) method.

#### Syntax

```java
eyes.addProperty(name, value);
```

#### Parameters
name<br/>
Type: `String`<br/>
The name of the property.

value<br/>
Type: `String`<br/>
The value associated with the name.

#### Return value
Type: `void`

#### Remarks
* You should not assign a given value to a property more than once in a given test run.
* You can also associate properties with a batch using [BatchInfo.addProperty](./BatchInfo#addproperty).

## check
Run a checkpoint. Uses Fluent arguments to specify the various parameters.

To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./Target) class, then, optionally, chain one or more methods from the [SeleniumCheckSettings](./SeleniumCheckSettings) class.

#### Syntax

```java
eyes.check(checkSettings);
eyes.check(tag, checkSettings);
```

#### Parameters
checkSettings<br/>
Type: [ICheckSettings](./ICheckSettings)<br/>
The fluent API calls, starting with one of the [Target](./Target) methods.

tag<br/>
Type: `String`<br/>
The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does not use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

checkSettings<br/>
Type: [ICheckSettings...](./ICheckSettings)<br/>
One or more check settings, as an array or a comma separated list.

#### Return value
Type: `void`

#### Remarks
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).

## checkElement
Run a checkpoint on the area of a particular element.

#### Syntax

```java
eyes.checkElement(element);
eyes.checkElement(element, tag);
eyes.checkElement(element, matchTimeout, tag);
eyes.checkElement(selector);
eyes.checkElement(selector, tag);
eyes.checkElement(selector, matchTimeout, tag);
```

#### Parameters
element<br/>
Type: `WebElement`<br/>
An element whose position and bounding rectangle defines the region.

tag<br/>
Type: `String`<br/>
The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does not use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout<br/>
Type: `int`<br/>
The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

selector<br/>
Type: `By`<br/>
An object that defines a selector for the region.

#### Return value
Type: `void`

## checkFrame
Run a checkpoint on the area of a particular frame.

#### Syntax

```java
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
frameNameOrId<br/>
Type: `String`<br/>
The name or id of the frame element.

tag<br/>
Type: `String`<br/>
The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does not use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout<br/>
Type: `int`<br/>
The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

frameIndex<br/>
Type: `int`<br/>
A Selenium frame index.

frameReference<br/>
Type: `WebElement`<br/>
An object that references the frame.

framePath<br/>
Type: `String[]`<br/>
The path of the frame to check. This is a fully defined, top-down list of frame names or IDs, where each frame is nested in the previous frame.

framesPath<br/>
Type: `String[]`<br/>
The path of the frame to check. This is a fully defined, top-down list of frame names or IDs, where each frame is nested in the previous frame.

#### Return value
Type: `void`

## checkRegion
Checks a particular region of the checkpoint window.

#### Syntax

```java
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
region<br/>
Type: [Region](./Region)<br/>
A non-empty region representing the screen region to check in screenshot pixel coordinates.

matchTimeout<br/>
Type: `int`<br/>
The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

tag<br/>
Type: `String`<br/>
The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does not use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

element<br/>
Type: `WebElement`<br/>
The element which represents the region to check.

stitchContent<br/>
Type: `boolean`<br/>
If the application window is larger than the viewport, and this parameter is true, then the entire page content is rendered. If this parameter is false, then only the viewport is rendered.

selector<br/>
Type: `By`<br/>
An object that defines a selector for the region.

#### Return value
Type: `void`

## checkWindow
Runs a checkpoint of the entire application (e.g. browser) window.

#### Syntax

```java
eyes.checkWindow();
eyes.checkWindow(tag);
eyes.checkWindow(matchTimeout, tag);
eyes.checkWindow(tag, fully);
```

#### Parameters
tag<br/>
Type: `String`<br/>
The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does not use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details.

matchTimeout<br/>
Type: `int`<br/>
The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout.

fully<br/>
Type: `boolean`<br/>
Set to true to capture the full browser page and not just the viewport.

#### Return value
Type: `void`

## clearProperties
Clears any custom key name/value properties.

#### Syntax

```java
eyes.clearProperties();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `void`

## close
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

If your tests can run concurrently and you don't need to wait for the results before starting the next test, then it is highly recommended that you call the method [Eyes.closeAsync](./Eyes#closeasync) instead of this method. the call to [closeAsync](./Eyes#closeasync) ends the test without waiting for the results and the next test can start immediately, greatly reducing overall test time. When you use [closeAsync](./Eyes#closeasync), you obtain the results by calling [getAllTestResults](./ClassicRunner#getalltestresults) after all the tests have run.

#### Syntax

```java
TestResults result = eyes.close();

TestResults result = eyes.close(shouldThrowException);
```

#### Parameters
shouldThrowException<br/>
Type: `boolean`<br/>
If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed.

#### Return value
Type: [TestResults](./TestResults)<br/>
The result of the test can be obtained from the object returned. See [TestResults](./TestResults) class for a list of what information can be obtained from this object.

## closeAsync
Call this method or [Eyes.close](#close) at the end of the test. The call to [closeAsync](#closeAsync) terminates the sequence of checkpoints and returns immediately, without waiting for the test results.

Unlike the method [close](#close), this method does not wait for results to be available and does not return test results. The test results for this test can be obtained, along with all the other test results, when the runner is terminated by calling the method [VisualGridRunner.getAllTestResults](./VisualGridRunner#getalltestresults).

#### Syntax

```java
eyes.closeAsync();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `void`

## getAgentId
Use this method to retrieve the name and version of the SDK.

#### Syntax

```java
String value = eyes.getAgentId();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getApiKey
Use this method to retrieve your Eyes license key that you set with [setApiKey](#setApiKey), or was extracted from the `APPLITOOLS_API_KEY` environment variable.

#### Syntax

```java
String value = eyes.getApiKey();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getAppName
Use this method to retrieve the name of the application property.

#### Syntax

```java
String value = eyes.getAppName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getBaselineBranchName
Use this method to retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax

```java
String value = eyes.getBaselineBranchName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getBaselineEnvName
Returns the name of the baseline environment defined for this test run.

#### Syntax

```java
String value = eyes.getBaselineEnvName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`<br/>
Returns the value most recently set by a call to [setBaselineEnvName](#setBaselineEnvName), or a value of null if the baseline environment name has not been assigned in this run.

## getBatch
Use this method to retrieve the batch information for tests.

#### Syntax

```java
BatchInfo value = eyes.getBatch();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [BatchInfo](./BatchInfo)

## getBranchName
Use this method to retrieve the branch used for the baseline of this run.

#### Syntax

```java
String value = eyes.getBranchName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getConfiguration
Use this method to retrieve the current configuration object. This will be the most recent configuration object set using [setConfiguration](#setConfiguration), or the initial default configuration object.

If you want to change an Eyes configuration that has already been configured, then the standard way of doing so is to use the following pattern:

1. Get the current configuration using [Eyes.getConfiguration](#getConfiguration) to a local variable.
2. Make changes to the local configuration value.
3. Assign the local configuration object to the Eyes instance using [Eyes.setConfiguration](#setConfiguration).

#### Syntax

```java
com.applitools.eyes.selenium.Configuration value = eyes.getConfiguration();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `com.applitools.eyes.selenium.Configuration`

## getDebugScreenshotsPath
Use this method to retrieve the folder path where saved checkpoint images are stored (if enabled).

#### Syntax

```java
String value = eyes.getDebugScreenshotsPath();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

#### Remarks
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setSaveDebugScreenshots) method.

## getDebugScreenshotsPrefix
Use this method to retrieve the prefix added to the file names of locally stored checkpoint images (if enabled).

#### Syntax

```java
String value = eyes.getDebugScreenshotsPrefix();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

#### Remarks
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setSaveDebugScreenshots) method.

## getDevicePixelRatio
Use this method to retrieve the screen pixel ratio.

#### Syntax

```java
double value = eyes.getDevicePixelRatio();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `double`

## getDriver
Use this method to retrieve the driver returned by the call to the [open](#open) method.

Typically, you should make all calls to the webdriver using this driver, which wraps the webdriver. This allows Eyes to be aware of calls being made to the webdriver, and enables a number of features.

#### Syntax

```java
WebDriver value = eyes.getDriver();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `WebDriver`

## getForceFullPageScreenshot
Use this method to retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax

```java
boolean value = eyes.getForceFullPageScreenshot();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getHideCaret
Use this method to retrieve whether Eyes hides the cursor before the screenshot is captured or not.

#### Syntax

```java
boolean value = eyes.getHideCaret();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getHideScrollbars
hidescrollbars.get

hidescrollbars

#### Syntax

```java
boolean value = eyes.getHideScrollbars();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getHostApp
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax

```java
String value = eyes.getHostApp();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getHostOS
Use this method to retrieve the name of the hosting operating system property.

The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the OS column.

#### Syntax

```java
String value = eyes.getHostOS();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getIgnoreCaret
Use this method to retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax

```java
boolean value = eyes.getIgnoreCaret();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getIsDisabled
Use this method to retrieve whether or not interactions with Eyes are ignored.

You can enable and disable Eyes using the [setIsDisabled](#setIsDisabled) method.

#### Syntax

```java
boolean value = eyes.getIsDisabled();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`<br/>
If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual.

## getIsOpen
Use this to know if the Eyes instance is currently open.

#### Syntax

```java
boolean value = eyes.getIsOpen();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`<br/>
Return true if the [Eyes.open](./Eyes#open) method has been called on an eyes instance, and [Eyes.close](./Eyes#close), [Eyes.abort](./Eyes#abort), [Eyes.abortAsync](./Eyes#abortasync) or [Eyes.abortIfNotClosed](./Eyes#abortifnotclosed) have not yet been called.

## getMatchLevel
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax

```java
MatchLevel value = eyes.getMatchLevel();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [MatchLevel](./MatchLevel)

#### Remarks
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

## getMatchTimeout
Use this method to retrieve the maximum amount of time Eyes will try to perform a match on the fully captured image.

If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. The default timeout can be set by the [setMatchTimeout](#setMatchTimeout) method.

#### Syntax

```java
int value = eyes.getMatchTimeout();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `int`

## getParentBranchName
Use this method to retrieve the parent branch, from which newly created branches get their initial baseline.

#### Syntax

```java
String value = eyes.getParentBranchName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getProxy
Use this method to retrieve the settings used to access the Eyes proxy server.

#### Syntax

```java
AbstractProxySettings value = eyes.getProxy();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: AbstractProxySettings<br/>
The value returned is a [ProxySettings](./ProxySettings) object or null if no proxy is set.

## getRotation
Use this method to retrieve the rotation applied to checkpoint images before matching.

#### Syntax

```java
ImageRotation value = eyes.getRotation();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [ImageRotation](./ImageRotation)<br/>
The rotation in degrees.

## getSaveDebugScreenshots
Use this method to retrieve whether or not checkpoint images are copied to a local file (for debugging).

#### Syntax

```java
boolean value = eyes.getSaveDebugScreenshots();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

#### Remarks
Enable and disable saving screenshots to the local disk using the [setSaveDebugScreenshots](#setSaveDebugScreenshots) method.

## getSaveDiffs
Use this method to retrieve if steps that have mismatches are automatically saved to the baseline or not.

#### Syntax

```java
Boolean value = eyes.getSaveDiffs();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `Boolean`<br/>
returns true if steps that have mismatches are automatically saved to the baseline.

## getSaveNewTests
Use this method to retrieve whether or not 'new' tests are saved to the baseline by default.

#### Syntax

```java
boolean value = eyes.getSaveNewTests();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getScaleRatio
Use this method to retrieve the scale ratio to be applied to images before matching.

#### Syntax

```java
double value = eyes.getScaleRatio();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `double`

## getScrollToRegion
Use this method to retrieve whether or not Eyes scrolls a region into view before capturing the image.

#### Syntax

```java
boolean value = eyes.getScrollToRegion();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getServerUrl
Use this method to retrieve the URL of the Eyes server used to process the captured images.

#### Syntax

```java
URI value = eyes.getServerUrl();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `URI`

## getStitchMode
Use this method to retrieve the type of stitching used for full page screenshots.

#### Syntax

```java
StitchMode value = eyes.getStitchMode();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [StitchMode](./StitchMode)<br/>
The value returned can be either [CSS](#TODO) or [SCROLL](#TODO).

## getStitchOverlap
Use this method to retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax

```java
int value = eyes.getStitchOverlap();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `int`<br/>
The stiching overlap in pixels.

## getViewportSize
Use this method to retrieve The value that was set for the viewport.

If the viewport is not set explicitly using e.g. using [Eyes.setViewportSize](./Eyes#setviewportsize), then this method may only be called after a call to [Eyes.open](./Eyes#open)

#### Syntax

```java
RectangleSize value = eyes.getViewportSize();

RectangleSize value = eyes.getViewportSize(driver);
```

Note: This method has both static and non static overloads.

#### Parameters
driver<br/>
Type: `WebDriver`<br/>
The driver returned from the call to open.

#### Return value
Type: [RectangleSize](./RectangleSize)

## getWaitBeforeScreenshots
Returns the amount of time in milliseconds that Eyes will wait before capturing a screenshot.

When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax

```java
int value = eyes.getWaitBeforeScreenshots();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `int`<br/>
The time Eyes waits before taking a screenshot, in milliseconds.

## isSendDom
Returns whether the DOM is being sent to the server or not.

#### Syntax

```java
boolean value = eyes.isSendDom();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## locate
Use this method to search the current browser viewport for one or more graphics regions defined by visual locators.

#### Syntax

```java
List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
Map<String, List<Region>> locRegions5 = eyes.locate(VisualLocator.names(names_A).first()); 
```

#### Parameters
visualLocatorSettings<br/>
Type: [VisualLocatorSettings](./VisualLocatorSettings)<br/>
An object that defines the required visual locator names and how many instances of each locator should be found. This object is created using a series of calls on a [VisualLocator](./VisualLocator) object in a fluent API style. See the example below for more details.

#### Return value
Type: `Map<String, List<Region>>`<br/>
Returns a mapping between the locator names passed as a parameter [name](./VisualLocator#name) or [names](./VisualLocator#names) methods and the regions in the viewport where the graphic images defined by those locator names were detected.

If the image of a particular locator name is not found in the viewport, the locator is mapped to a zero length array. If a locator name is passed, and a locator of that name has not been defined on the Eyes server, the returned locator will be mapped to a value of null instead of an array.

and each value is an object that contains the text found and its bounding rectangle.

#### Remarks
The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

#### Example
The example below includes two calls to the method [Eyes.locate](./Eyes#locate). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:
* Pass a locator string to the method [name](./VisualLocator#name).
* Pass a list of strings to the method [names](./VisualLocator#names).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:
* To retrieve a maximum of one region for each locator append a call to [first](./VisualLocatorSettings#first).
* To retrieve all regions for all locators append a call to ([all](./VisualLocatorSettings#all)).

```java
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
```

## open
Call this method to start a test, before calling any of the check methods.

#### Syntax

```java
WebDriver outdriver = eyes.open(webDriver);

WebDriver outdriver = eyes.open(driver, appName, testName);

WebDriver outdriver = eyes.open(driver, appName, testName, viewportSize);
```

#### Parameters
webDriver<br/>
Type: `WebDriver`<br/>
The web driver.

driver<br/>
Type: `WebDriver`<br/>
The web driver.

appName<br/>
Type: `String`<br/>
The application name. This may be any string. You can set the application name for all tests using the [Configuration.setAppName](./Configuration#setappname) method or [Eyes.setAppName](./Eyes#setappname) method. If you do so, then set this parameter to a value of `null` to indicate that the configuration default should be used.

testName<br/>
Type: `String`<br/>
The name of the test. This name must be unique within the scope of the application name. It may be any string.

viewportSize<br/>
Type: [RectangleSize](./RectangleSize)<br/>
The size of the viewport

Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details.

#### Return value
Type: `WebDriver`<br/>
The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.

#### Remarks
After making a call to this method, you must eventually terminate the test by calling [Eyes.closeAsync](./Eyes#closeasync) (in case of a normal completion) or [Eyes.abortAsync](./Eyes#abortasync) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](./Eyes#open) again to start a new test on the same Eyes instance.

## setAgentId
Use this method to set the name and version of the SDK.

This method is only relevant for users that write their own SDK.

#### Syntax

```java
eyes.setAgentId(agentId);
```

#### Parameters
agentId<br/>
Type: `String`<br/>
The id of the agent in the format 'name/1.2.3'.

#### Return value
Type: `void`

#### Remarks
To take effect, this method must be called before the call to [open](#open).

## setApiKey
Use this method to set your Eyes license key.

To obtain your API key, see [How to obtain your API key](https://applitools.com/docs/topics/overview/obtain-api-key.html).

#### Syntax

```java
eyes.setApiKey(apiKey);
```

#### Parameters
apiKey<br/>
Type: `String`<br/>
A string that is your API Key.

#### Return value
Type: `void`

#### Remarks
Set this immediately after the Eyes object is created (before calling [open](#open)). If you have an environment variable called `APPLITOOLS_API_KEY` that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

## setAppName
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax

```java
eyes.setAppName(appName);
```

#### Parameters
appName<br/>
Type: `String`<br/>
The application name. This may be any string.

#### Return value
Type: `void`

#### Remarks
If you call this method, it must be called before the call to [Eyes.open](./Eyes#open). In the call to [Eyes.open](./Eyes#open), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used.