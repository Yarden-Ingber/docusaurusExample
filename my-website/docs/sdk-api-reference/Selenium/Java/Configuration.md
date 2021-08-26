# Configuration

This class is used to create a configuration object that is used to configure an [Eyes](./Eyes) object by passing it to the [Eyes.setConfiguration](./Eyes#setconfiguration) method.

You can use this configuration object instead of using the various [Eyes](./Eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

## Configuration
The constructor for the [Configuration](./Configuration) class. This object isset upand then passed to the [Eyes.setConfiguration](./Eyes#setconfiguration) method before the call to the [Eyes.open](./Eyes#open) method.

#### Syntax

```java
Configuration config = new Configuration();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the setXXXX methods of the [Configuration](./Configuration) class.

## addBrowser

Request that the checkpoint be rendered by the Ultrafast Grid using a particular target desktop or mobile device browser.

The following types of targets can be specified by passing different types of parameters:

* Desktop browser: The page is rendered using a desktop browser you specify. The set of supported browsers is defined by the enum [BrowserType](./BrowserType). To request a browser from this list pass a [DesktopBrowserInfo](./DesktopBrowserInfo) object, as shown for parameter desktopBrowserInfo below. You can also request a browser directly using the browserType parameter as shown below.
* Emulated mobile device: The page is rendered using Chrome device emulation. The set of supported devices is defined by the enum [DeviceName](./DeviceName). To request a device from this list pass a [ChromeEmulationInfo](./ChromeEmulationInfo) object, as shown for parameter chromeEmulationInfo below.
* Simulated iOS mobile device: The page is rendered using a Safari browser running on a mobile device simulator. The set of supported devices is defined by the enum [IosDeviceName](./IosDeviceName). To request a device from this list pass an [IosDeviceInfo](./IosDeviceInfo) object, as shown for parameter iosDeviceInfo below.
When requesting a Desktop browser you also specify the required viewport size. When specifying a mobile device the viewport size is based on the device screen size, and you simply specify if you want to render using portrait (vertical) or landscape (horizontal) screen orientation.

You may define multiple targets with different browsers/devices and viewports/orientations by calling this method as many times as required. Eyes will produce a test results for each such configuration. Alternatively, pass a list of browsers and devices to the method [addBrowsers](./Configuration#addbrowsers).

#### Syntax

```java
Configuration configval = config.addBrowser(desktopBrowserInfo);

Configuration configval = config.addBrowser(chromeEmulationInfo);

Configuration configval = config.addBrowser(iosDeviceInfo);

Configuration configval = config.addBrowser(width, height, browserType, baselineEnvName);

Configuration configval = config.addBrowser(width, height, browserType);
```

#### Parameters
desktopBrowserInfo<br/>
Type: [DesktopBrowserInfo](./DesktopBrowserInfo)<br/>
Which desktop browser type and viewport size to use.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.EDGE_CHROMIUM)) 
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

chromeEmulationInfo<br/>
Type: [ChromeEmulationInfo](./ChromeEmulationInfo)<br/>
Which mobile device to emulate and its vertical or horizontal orientation.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(new ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.LANDSCAPE)) 
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

iosDeviceInfo<br/>
Type: [IosDeviceInfo](./IosDeviceInfo)<br/>
Defines the mobile device to be simulated and its vertical or horizontal orientation.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(new IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.PORTRAIT)) 
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

width<br/>
Type: `int`<br/>
The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

Use this in conjunction with the browserType parameter.

height<br/>
Type: `int`<br/>
The height of the browser viewport for this target. There is no height limit.

Use this in conjunction with the browserType parameter.

browserType<br/>
Type: [BrowserType](./BrowserType)<br/>
The type of browser for this target.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(viewPortWidth, viewPortHeight, BrowserType.CHROME)  
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

baselineEnvName<br/>
Type: `String`<br/>
The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

Use this in conjunction with the browserType parameter.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration or parameter has been provided. The viewport passed to the [Eyes.open](./Eyes#open) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript.

## addBrowsers
Request that the checkpoint be rendered by the Ultrafast Grid using the specified desktop browsers and viewport sizes.

#### Syntax

```java
Configuration configval = config.addBrowsers(browserInfos);
```

#### Parameters
browserInfos<br/>
Type:`IRenderingBrowserInfo...`<br/>
One or more browser or device configuration definitions passed as an array or multiple parameters.

Define the browser or device configurations using instances of one or more of the following classes:

* [DesktopBrowserInfo](./DesktopBrowserInfo): to run the test on a desktop browser.
* [IosDeviceInfo](./IosDeviceInfo): to run the test on a Simulated iOS mobile device.
* [ChromeEmulationInfo](./ChromeEmulationInfo): to run the test using on an emulated mobile device.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the setXXXX methods of the [Configuration](./Configuration) class.

#### Remarks
You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [addBrowser](#addbrowser).

#### Example

```java
/* test suite setup */  
   IRenderingBrowserInfo[] browserList = {
           new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.FIREFOX),
           new ChromeEmulationInfo(DeviceName.Galaxy_Note_3, ScreenOrientation.LANDSCAPE),
           new IosDeviceInfo(IosDeviceName.iPhone_8, ScreenOrientation.PORTRAIT)
   };
    suiteConfig = new Configuration() 
        .addBrowsers(browserList) 
/* ... other configurations */  ; 
   /*
    * Assign the configuration to all newly created Eyes instances
    */
   eyes = new Eyes(runner);
   eyes.setConfiguration(suiteConfig);
```

## addDeviceEmulation
Request that the checkpoint be rendered by the Ultrafast Grid using Chrome mobile emulation.

#### Syntax

```java
Configuration configval = config.addDeviceEmulation(deviceName, orientation);

Configuration configval = config.addDeviceEmulation(deviceName);

Configuration configval = config.addDeviceEmulation(deviceName, baselineEnvName);

Configuration configval = config.addDeviceEmulation(deviceName, orientation, baselineEnvName);
```

#### Parameters
deviceName<br/>
Type:[DeviceName](./DeviceName)<br/>
The name of the device, from the list of devices defined by [DeviceName](./DeviceName).

orientation<br/>
Type: [ScreenOrientation](./ScreenOrientation)<br/>
Whether the device is in portrait or landscape mode.

baselineEnvName<br/>
Type: `String`<br/>
The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## getAccessibilityValidation
Use this method to retrieve the accessibility testing level.

#### Syntax

```java
AccessibilitySettings configval = config.getAccessibilityValidation();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [AccessibilitySettings](./AccessibilitySettings)

#### Remarks
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

## getAgentId
Returns the value configured by [setAgentId](#setagentid).

#### Syntax

```java
String configval = config.getAgentId();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getApiKey
Use this method to retrieve your Eyes license key that you set with [setApiKey](./Eyes#setapikey), or was extracted from the `APPLITOOLS_API_KEY` environment variable.

#### Syntax

```java
String configval = config.getApiKey();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getAppName
Returns the value configured by [setAppName](#setappname) or [Eyes.setAppName](./Eyes#setappmame).

#### Syntax

```java
String configval = config.getAppName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getBaselineBranchName
Returns the value configured by [setBaselineBranchName](#setbaselinebranchname).

#### Syntax

```java
String configval = config.getBaselineBranchName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getBaselineEnvName
Returns the value configured by [setBaselineEnvName](#setbaselineenvname).

#### Syntax

```java
String configval = config.getBaselineEnvName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getBatch
Returns the value configured by the [setBatch](#setbatch) method.

#### Syntax

```java
BatchInfo configval = config.getBatch();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [BatchInfo](./BatchInfo)

## getBranchName
Returns the branchname configured by [setBranchName](#setbranchname).

#### Syntax

```java
String configval = config.getBranchName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getDeviceInfo
Retrieve the name of the device being rendered on the Ultrafast Grid, if it was configured explicitly by the user.

#### Syntax

```java
String configval = config.getDeviceInfo();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getForceFullPageScreenshot
Use this method to retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax

```java
Boolean configval = config.getForceFullPageScreenshot();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `Boolean`

## getHideCaret
Use this method to retrieve whether Eyes hides the cursor before the screenshot is captured or not.

#### Syntax

```java
boolean configval = config.getHideCaret();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getHideScrollbars
Use this method to retrieve whether Eyes hides the scrollbars before capturing screenshots or not.

This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax

```java
boolean configval = config.getHideScrollbars();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getHostApp
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax

```java
String configval = config.getHostApp();
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
String configval = config.getHostOS();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getHostingAppInfo
Get the value of the hostingappinfo that was set using the [Configuration.setHostingAppInfo](./Configuration#sethostingappinfo) method.

#### Syntax

```java
String configval = config.getHostingAppInfo();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getIgnoreCaret
Use this method to retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax

```java
boolean configval = config.getIgnoreCaret();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getIgnoreDisplacements
Use this method to set whether Eyes ignores image features that have been displaced.

The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is displayed. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax

```java
boolean configval = config.getIgnoreDisplacements();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getMatchLevel
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax

```java
MatchLevel configval = config.getMatchLevel();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [MatchLevel](./MatchLevel)

#### Remarks
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

## getMatchTimeout
Use this method to retrieve the maximum amount of time Eyes will try to perform a match on the fully captured image.

If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered.

#### Syntax

```java
int configval = config.getMatchTimeout();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `int`

## getOsInfo
Get the value of the hostingappinfo that was set using the [Configuration.setOsInfo](./Configuration#setosinfo) method.

#### Syntax

```java
String configval = config.getOsInfo();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getParentBranchName
Returns the value configured by [setParentBranchName](#setparentbranchname).

#### Syntax

```java
String configval = config.getParentBranchName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getProxy
Use this method to retrieve the settings used to access the Eyes proxy server.

#### Syntax

```java
AbstractProxySettings configval = config.getProxy();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [AbstractProxySettings](./AbstractProxySettings)<br/>
The value returned is a [ProxySettings](./ProxySettings) object or null if no proxy is set.

## getSaveDiffs
Returns the value configured by [setSaveDiffs](#setsavediffs).

#### Syntax

```java
Boolean configval = config.getSaveDiffs();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `Boolean`

## getSaveNewTests
Use this method to retrieve whether or not 'new' tests are saved to the baseline by default.

#### Syntax

```java
boolean configval = config.getSaveNewTests();
```

Note: This method is a static method.

#### Parameters
This method does not take any parameters.

#### Return value
Type: `boolean`

## getServerUrl
Use this method to retrieve the URL of the Eyes server used to process the captured images.

#### Syntax

```java
URI configval = config.getServerUrl();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `URI`

## getStitchMode
Returns the value configured by [setStitchMode](#setstitchmode).

#### Syntax

```java
StitchMode configval = config.getStitchMode();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [StitchMode](./StitchMode)

## getStitchOverlap
Use this method to retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax

```java
int configval = config.getStitchOverlap();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `int`

## getTestName
Returns the value configured by [setTestName](#settestname).

#### Syntax

```java
String configval = config.getTestName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getViewportSize
Returns the value configured by [setViewportSize](#setviewportsize).

#### Syntax

```java
RectangleSize configval = config.getViewportSize();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [RectangleSize](./RectangleSize)

## getVisualGridOptions
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax

```java
List<VisualGridOption> configval = config.getVisualGridOptions();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: List<[VisualGridOption](./VisualGridOption)>

## getWaitBeforeScreenshots
Returns the amount of time in milliseconds that Eyes will wait before capturing a screenshot.

When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax

```java
int configval = config.getWaitBeforeScreenshots();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `int`

## isSendDom
Returns whether the DOM is being sent to the server or not.

#### Syntax

```java
Boolean configval = config.isSendDom();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `Boolean`

## setAccessibilityValidation
Use this method to set the accessibility testing level to use.

#### Syntax

```java
Configuration configval = config.setAccessibilityValidation(accessibilitySettings);
```

#### Parameters
accessibilitySettings<br/>
Type: [AccessibilitySettings](./AccessibilitySettings)<br/>
The required accessibility settings. A value of null will disable accessibility checking.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

## setAgentId
Use this method to set the name and version of the SDK.

#### Syntax

```java
Configuration configval = config.setAgentId(agentId);
```

#### Parameters
agentId<br/>
Type: `String`<br/>
The agent id to be configured.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setApiKey
Use this method to set your Eyes license key.

To obtain your API key, see [How to obtain your API key](https://applitools.com/docs/topics/overview/obtain-api-key.html).

#### Syntax

```java
Configuration configval = config.setApiKey(apiKey);
```

#### Parameters
apiKey<br/>
Type: `String`<br/>
A string that is your API Key.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
Set this immediately after the Eyes object is created (before calling [Eyes.open](./Eyes#open)). If you have an environment variable called `APPLITOOLS_API_KEY` that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value.

## setAppName
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax

```java
Configuration configval = config.setAppName(appName);
```

#### Parameters
appName<br/>
Type: `String`<br/>
The application name to be configured for the test.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
If you call this method, it must be called before the call to [Eyes.open](./Eyes#open). In the call to [Eyes.open](./Eyes#open), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a `null`, then the value set here will be used.

## setBaselineBranchName
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax

```java
Configuration configval = config.setBaselineBranchName(baselineBranchName);
```

#### Parameters
baselineBranchName<br/>
Type: `String`<br/>
The baseline branch name to be configured.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setBaselineEnvName
Use this method to set the name of the environment that will be used to determine the baseline.

Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [Eyes.open](./Eyes#open), then the name will be created and defined on the server with values of the current test environment.

#### Syntax

```java
Configuration configval = config.setBaselineEnvName(baselineEnvName);
```

#### Parameters
baselineEnvName<br/>
Type: `String`<br/>
The name of the baseline environment.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setBatch
Use this method to set the batch information for this test.

In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax

```java
Configuration configval = config.setBatch(batch);
```

#### Parameters
batch<br/>
Type: [BatchInfo](./BatchInfo)<br/>
An object that defines the batch configuration.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setBranchName
Use this method to set the branch used for the baseline of this run.

#### Syntax

```java
Configuration configval = config.setBranchName(branchName);
```

#### Parameters
branchName<br/>
Type: `String`<br/>
The branch name to be used by the configuration.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setBrowsersInfo
Sets the devices to be rendered on the Ultrafast Grid.

The method sets the full list of all the browsers to be rendered on the Ultrafast Grid, removing any previously defined browsers. This method differs from the methods [addBrowser](#addbrowser) and [addDeviceEmulation](#adddeviceemulation), which build the list of browsers and devices incrementally (i.e. each call to addXXXX adds more browsers to the list of browsers to be rendered). If you call [setBrowsersInfo](#setbrowsersinfo) after calling any of the addXXXX methods then the devices configured by the addXXXX will be lost. You may call the addXXXX methods after the [setBrowsersInfo](#setbrowsersinfo) method to add more browsers to the list of browsers to be rendered.

#### Syntax

```java
Configuration configval = config.setBrowsersInfo(browsersInfo);
```

#### Parameters
browsersInfo<br/>
Type: List<[RenderBrowserInfo](./RenderBrowserInfo)><br/>
List of objects that define browsers and emulated devices to be rendered.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setDeviceInfo
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax

```java
Configuration configval = config.setDeviceInfo(deviceInfo);
```

#### Parameters
deviceInfo<br/>
Type: `String`<br/>
The name of the device - this is displayed in the Device column in the Test Manager.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setFeatures
Use this method to enable various Eyes features.

#### Syntax

```java
Configuration configval = config.setFeatures(feature, features);
```

#### Parameters
feature<br/>
Type: [Feature](#TODO)<br/>
One or more features to set.

features<br/>
Type: [Feature...](#TODO)<br/>
One or more features to set.

#### Return value
Type: [Configuration](./Configuration)

#### Remarks
The following values may be passed to this method:<br/>
[USE_PREDEFINED_DEVICE_INFO](#TODO)<br/>
If this feature is set, then Eyes uses internal information regarding mobile devices instead of the information provided by Appium.<br/>
Some versions of Appium have inaccurate information, such as screen size and pixel scale ratio, on certain mobile devices. If you have issues with capturing correct images on a mobile device, try calling [Configuration.setFeatures](./Configuration#setfeatures), passing a value of [Feature.USE_PREDEFINED_DEVICE_INFO](#TODO), for example:

```java
suiteConfig.setFeatures(Feature.USE_PREDEFINED_DEVICE_INFO)
```

This instructs Eyes to use information stored in Eyes about the mobile devices that have been tested and are known to work correctly.

[NO_SWITCH_WITHOUT_FRAME_CHAIN](#TODO)<br/>
This option may help in cases where rendering fails because of a clash between the test program's use of the WebDriver to access frames and the SDK's attempt to take a screenshot.<br/>
The recommended way to access the Selenium WebDriver is as follows:

```java
originalWebDriver = new ChromeDriver();
WebDriver webDriver = eyes.open(originalWebDriver, appName, testName, viewport)
webDriver.get(url);
```

The code creates a WebDriver instance (originalWebDriver) and passes this to the method [Eyes.open](./Eyes#open). The method returns a clone of originalWebDriver that the test assigns to the variable webDriver. Thereafter, the program should use webDriver to access Selenium and not originalWebDriver.

This pattern enables Eyes to be aware of changes in the state of the browser, and it can use this information during the screen capture process.

If the test must use the originalWebDriver object and not webDriver, this can cause the screen capture to fail. If this happens, we recommend that you try to eliminate such failures by calling [Configuration.setFeatures](./Configuration#setfeatures), passing as a parameter the value [Feature.NO_SWITCH_WITHOUT_FRAME_CHAIN](#TODO).

Note that this problem sometimes occurs when the originalWebDriver is used to change the context to an internal frame in the window for some reason. The recomended way to check a nested frame nested is by calling the [SeleniumCheckSettings.frame](./SeleniumCheckSettings#frame) method, without switching into the frame, as follows:

```java
eyes.check(Target.frame(frame1Locator))
```

## setForceFullPageScreenshot
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax

```java
Configuration configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
```

#### Parameters
forceFullPageScreenshot<br/>
Type: `boolean`<br/>
If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setHideCaret
Use this method to set whether Eyes should hide the cursor before the screenshot is captured.

If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax

```java
Configuration configval = config.setHideCaret(hideCaret);
```

#### Parameters
hideCaret<br/>
Type: `boolean`<br/>
If this paramter has a value of true, then the cursor will be hidden before the image is captured.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
We recommend using this method instead of [Eyes.setIgnoreCaret](./Eyes#setignorecaret), [Configuration.setIgnoreCaret](./Configuration#setignorecaret) or [SeleniumCheckSettings.ignoreCaret](./SeleniumCheckSettings#ignorecaret), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them.

## setHideScrollbars
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.

This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax

```java
Configuration configval = config.setHideScrollbars(hideScrollbars);
```

#### Parameters
hideScrollbars<br/>
Type: `boolean`<br/>
If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setHostApp
Use this method to set the name of the hosting application property.

The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the Browser column.

#### Syntax

```java
Configuration configval = config.setHostApp(hostApp);
```

#### Parameters
hostApp<br/>
Type: `String`<br/>
The value to be used for the Host App property.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setHostOS
Use this method to set the name of the hosting operating system property.

The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the OS column.

#### Syntax

```java
Configuration configval = config.setHostOS(hostOS);
```

#### Parameters
hostOS<br/>
Type: `String`<br/>
The value to be used for the Host OS Property.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setHostingAppInfo
Set the value that shold be displayed in the Browser column of the Test Results page of the Test Manager.

Setting this value does not not impact the hosting application property that governs the baseline chosen for the test. The hosting application property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostApp](#sethostapp) or [Eyes.setHostApp](./Eyes#sethostapp). This also overwrite the value displayed in the Browser column of the Test Manager unless the [setHostingAppInfo](#sethostingappinfo) is used.

#### Syntax

```java
Configuration configval = config.setHostingAppInfo(hostingAppInfo);
```

#### Parameters
hostingAppInfo<br/>
Type: `String`<br/>
hostappinfo.params.sethostappinfo

#### Return value
Type: [Configuration](./Configuration)

## setIgnoreCaret
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax

```java
Configuration configval = config.setIgnoreCaret(value);
```

#### Parameters
value<br/>
Type: `boolean`<br/>
If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
We recommend using [setHideCaret](#sethidecaret) or [Eyes.setHideCaret](./Eyes#sethidecaret) since this eliminates cursor related artifacts instead of detecting and ignoring them.

## setIgnoreDisplacements
Use this method to set whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.

The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is displayed. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax

```java
Configuration configval = config.setIgnoreDisplacements(isIgnoreDisplacements);
```

#### Parameters
isIgnoreDisplacements<br/>
Type: `boolean`<br/>
If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
Ignore displacements is only active when using a Match level of [STRICT](#TODO) or [CONTENT](#TODO)

## setLayoutBreakpoints
Configure the SDK to capture multiple DOM images for multiple viewport sizes.

When the test loads a page into the test browser, the test browser loads the page, executes any JavaScript loaded with that page, and creates a DOM. The SDK then sends this DOM to the Ultrafast Grid, where it is rendered for each configured execution environment. When the Ultrafast Grid sizes the browser, device emulator, or simulator to match the viewport size of the execution environment, all CSS is applied so that any viewport-width-dependent layout will have the expected effect. However, the on-page JavaScript is not executed. If the JavaScript impacts the DOM and is viewport-width-dependent, then the page may be rendered incorrectly.

This method allows you to request that the SDK resize the test browser viewport to multiple viewport widths. Resizing the test browser viewport triggers re-execution of the on-page JavaScript, and the creation of a viewport-width-specific DOM. The SDK then sends all of these DOMs to the Ultrafast Grid and the Ultrafast Grid renders each execution environment using the DOM that matches the environment viewport width execution environment.

Depending on the parameters you pass to the method, the SDK either extracts a DOM for every distinct viewport size configured or extracts a DOM for each viewport size that you specify.

For more information see [Handling viewport-dependent JavaScript](https://applitools.com/docs/topics/sdk/viewport-dependent-js.html).

#### Syntax

```java
Configuration configval = config.setLayoutBreakpoints(shouldSet);

Configuration configval = config.setLayoutBreakpoints(breakpoints);
```

#### Parameters
shouldSet<br/>
Type: `boolean`<br/>
Pass a value of true to enable this feature.

breakpoints<br/>
Type: `int...`<br/>
Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width.

#### Return value
Type: [Configuration](./Configuration)

#### Remarks
This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.layoutBreakpoints](./SeleniumCheckSettings#layoutbreakpoints) method.

## setMatchLevel
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax

```java
Configuration configval = config.setMatchLevel(matchLevel);
```

#### Parameters
matchLevel<br/>
Type: [MatchLevel](./MatchLevel)<br/>
Available match level values are:
* [NONE](#TODO)
* [STRICT](#TODO)
* [LAYOUT](#TODO)
* [CONTENT](#TODO)
* [EXACT](#TODO)

For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see Eyes match levels.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html).

## setMatchTimeout
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.

Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax

```java
Configuration configval = config.setMatchTimeout(matchTimeout);
```

#### Parameters
matchTimeout<br/>
Type: `int`<br/>
The timeout to set in milliseconds.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check_XXXX methods that support a timeout parameter, e.g. [Eyes.checkWindow](./Eyes#checkwindow) you can also overide the timeout for a specific test using the check fluent [SeleniumCheckSettings.timeout](./SeleniumCheckSettings#timeout) method

## setOsInfo
Set the value that shold be displayed in the OS column of the Test Results page of the Test Manager.

Setting this value does not not impact the host OS property that governs the baseline chosen for the test. The host OS property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostOS](#sethostos) or [Eyes.setHostOS](./Eyes#sethostos). This also overwrite the value displayed in the OS column of the Test Manager unless the [setOsInfo](#setosinfo) is used.

#### Syntax

```java
Configuration configval = config.setOsInfo(osInfo);
```

#### Parameters
osInfo<br/>
Type: `String`<br/>
The value to be displayed in the OS column of the Test Results page of the Test Manager.

#### Return value
Type: [Configuration](./Configuration)

## setParentBranchName
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax

```java
Configuration configval = config.setParentBranchName(parentBranchName);
```

#### Parameters
parentBranchName<br/>
Type: `String`<br/>
The parent branch name to be configured.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setProxy
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.

By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax

```java
Configuration configval = config.setProxy(proxy);
```

#### Parameters
proxy<br/>
Type: AbstractProxySettings<br/>
An object created from the [ProxySettings](./ProxySettings) class that contains the user name, password, URI and port.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setSaveDiffs
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.

In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

:::caution

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

:::

#### Syntax

```java
Configuration configval = config.setSaveDiffs(saveDiffs);
```

#### Parameters
saveDiffs<br/>
Type: `Boolean`<br/>
Set to true to configure Save Diffs functionality.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setSaveNewTests
Use this method to set whether or not 'new' tests are saved to the baseline by default.

This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax

```java
Configuration configval = config.setSaveNewTests(saveNewTests);
```

#### Parameters
saveNewTests<br/>
Type: `boolean`<br/>
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior).

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setSendDom
Use this method to set if DOM information should be sent for checkpoints.

The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax

```java
Configuration configval = config.setSendDom(sendDom);
```

#### Parameters
sendDom<br/>
Type: `boolean`<br/>
A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

#### Remarks
Sending DOM information is enabed by default, so use this method only if you have to disable it.

## setServerUrl
Use this method to set the URL of the Eyes server used to process the captured images.

Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable `APPLITOOLS_SERVER_URL` to the server URL then Eyes uses that value as the default.

#### Syntax

```java
Configuration configval = config.setServerUrl(serverUrl);
```

#### Parameters
serverUrl<br/>
Type: `String`<br/>
The URL of the Eyes server. Pass a value of null to use the default cloud server.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setStitchMode
Use this method to set the type of stitching used for full page screenshots.

#### Syntax

```java
Configuration configval = config.setStitchMode(stitchMode);
```

#### Parameters
stitchMode<br/>
Type: [StitchMode](./StitchMode)<br/>
The stitch mode to use.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setStitchOverlap
Use this method to set the overlap between sub-images when a scrolled window is stitched.

#### Syntax

```java
Configuration configval = config.setStitchOverlap(stitchOverlap);
```

#### Parameters
stitchOverlap<br/>
Type: `int`<br/>
The width of the stitch overlap in pixels.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setTestName
Use this method to set the name of the test.

#### Syntax

```java
Configuration configval = config.setTestName(testName);
```

#### Parameters
testName<br/>
Type: `String`<br/>
The test name to be configured for the test.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setViewportSize
Set the viewport size to be used by the browser for the test.

#### Syntax

```java
Configuration configval = config.setViewportSize(viewportSize);
```

#### Parameters
viewportSize<br/>
Type: [RectangleSize](./RectangleSize)<br/>
An object that defines the width and height of the test browser viewport in pixels.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.

## setVisualGridOptions
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax

```java
Configuration configval = config.setVisualGridOptions(option, options);
```

#### Parameters
option<br/>
Type: [VisualGridOption](./VisualGridOption)<br/>
The first configuration option for the Ultrafast Grid.

options<br/>
Type: [VisualGridOption...](./VisualGridOption)<br/>
Optional additional configuration options for the Ultrafast Grid.


#### Return value
Type: [Configuration](./Configuration)

#### Remarks
The following configuration key/value pairs are currently supported:

`chromeHeadless`<br/>
Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

`polyfillAdoptedStyleSheets`<br/>
Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option<br/>
polyfillAdoptedStyleSheets to a value of true or false:
* Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
* Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOptions](./Configuration#setvisualgridoptions)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visualGridOptions](./SeleniumCheckSettings#visualgridoptions).

#### Example

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
            .setVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

## setWaitBeforeScreenshots
Use this method to set the amount of time in milliseconds that Eyes will wait before capturing a screenshot.

When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax

```java
Configuration configval = config.setWaitBeforeScreenshots(waitBeforeScreenshots);
```

#### Parameters
waitBeforeScreenshots<br/>
Type: `int`<br/>
The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.

#### Return value
Type: [Configuration](./Configuration)<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./Configuration) class.