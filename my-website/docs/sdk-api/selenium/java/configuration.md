# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes-method) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. 
 ### Import statement 
``` 
import com.applitools.eyes.selenium.Configuration;
 
 ``` 
### Constructor 
### Configuration method
The constructor for the [Configuration](./configuration-method) class. This object isset upand then passed to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method before the call to the [Eyes.open](./eyes#open-method) method.

#### Syntax 
 ``` 
Configuration config = new Configuration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### addBrowser method
Request that the checkpoint be rendered by the Ultrafast Grid using a particular target desktop or mobile device browser.
The following types of targets can be specified by passing different types of parameters:

*   Desktop browser: The page is rendered using a desktop browser you specify. The set of supported browsers is defined by the enum [`BrowserType`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-browsertype-selenium-java.html-method). To request a browser from this list pass a [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method) object, as shown for parameter desktopBrowserInfo below. You can also request a browser directly using the browserType parameter as shown below.
*   Emulated mobile device: The page is rendered using Chrome device emulation. The set of supported devices is defined by the enum [`DeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-devicename-selenium-java.html-method). To request a device from this list pass a [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method) object, as shown for parameter chromeEmulationInfo below.
*   Simulated iOS mobile device: The page is rendered using a Safari browser running on a mobile device simulator. The set of supported devices is defined by the enum [`IosDeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-iosdevicename-selenium-java.html-method). To request a device from this list pass an [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method) object, as shown for parameter iosDeviceInfo below.

When requesting a Desktop browser you also specify the required viewport size. When specifying a mobile device the viewport size is based on the device screen size, and you simply specify if you want to render using portrait (vertical) or landscape (horizontal) screen orientation.

You may define multiple targets with different browsers/devices and viewports/orientations by calling this method as many times as required. Eyes will produce a test results for each such configuration. Alternatively, pass a list of browsers and devices to the method [addBrowsers](#addbrowsers-method).

#### Syntax 
 ``` 
Configuration configval = config.addBrowser(desktopBrowserInfo);

Configuration configval = config.addBrowser(chromeEmulationInfo);

Configuration configval = config.addBrowser(iosDeviceInfo);

Configuration configval = config.addBrowser(width, height, browserType, baselineEnvName);

Configuration configval = config.addBrowser(width, height, browserType);
 ``` 

 #### Parameters 
 ###### desktopBrowserInfo 
  
 Type:[DesktopBrowserInfo](./desktopbrowserinfo) 
  
 Which desktop browser type and viewport size to use. 
  
   Java 
     /* test suite setup */   
         suiteConfig = new Configuration()  
             .addBrowser(new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.EDGE_CHROMIUM))  
     /* ... other configurations */  ;  
    /* 
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.setConfiguration(suiteConfig); 
  
  ###### chromeEmulationInfo 
  
 Type:[ChromeEmulationInfo](./chromeemulationinfo) 
  
 Which mobile device to emulate and its vertical or horizontal orientation. 
  
   Java 
     /* test suite setup */   
         suiteConfig = new Configuration()  
             .addBrowser(new ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.LANDSCAPE))  
     /* ... other configurations */  ;  
    /* 
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.setConfiguration(suiteConfig); 
  
  ###### iosDeviceInfo 
  
 Type:[IosDeviceInfo](./iosdeviceinfo) 
  
 Defines the mobile device to be simulated and its vertical or horizontal orientation. 
  
   Java 
     /* test suite setup */   
         suiteConfig = new Configuration()  
             .addBrowser(new IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.PORTRAIT))  
     /* ... other configurations */  ;  
    /* 
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.setConfiguration(suiteConfig); 
  
  ###### width 
  
 Type:int 
  
 The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail. 
  
  ###### Use this in conjunction with the browserType parameter. 
  
 height 
  
 Type:int 
  
  ###### The height of the browser viewport for this target. There is no height limit. 
  
 Use this in conjunction with the browserType parameter. 
  
 browserType 
  
  ###### Type:[BrowserType](./browsertype) 
  
 The type of browser for this target. 
  
 Java 
  
  ######     /* test suite setup */   
         suiteConfig = new Configuration()  
             .addBrowser(viewPortWidth, viewPortHeight, BrowserType.CHROME)   
     /* ... other configurations */  ;  
         /* 
          * Assign the configuration to all newly created Eyes instances 
     */ 
         eyes = new Eyes(runner); 
         eyes.setConfiguration(suiteConfig); 
  
  ###### baselineEnvName 
  
   Type:String 
  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 Use this in conjunction with the browserType parameter. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration or parameter has been provided. The viewport passed to the [Eyes.open](./eyes#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript. 
### addBrowsers method
Request that the checkpoint be rendered by the Ultrafast Grid using the specified desktop browsers and viewport sizes.

#### Syntax 
 ``` 
Configuration configval = config.addBrowsers(browserInfos);
 ``` 

 #### Parameters 
 ###### browserInfos 
  
 Type:IRenderingBrowserInfo... 
  
 One or more browser or device configuration definitions passed as an array or multiple parameters. 
  
  ###### Define the browser or device configurations using instances of one or more of the following classes: 
  
 *   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser. 
 *   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device. 
 *   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
        
 You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [AddBrowser](#addbrowser-method). 
 #### Example  
Java

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
### addDeviceEmulation method
Request that the checkpoint be rendered by the Ultrafast Grid using Chrome mobile emulation.

#### Syntax 
 ``` 
Configuration configval = config.addDeviceEmulation(deviceName, orientation);

Configuration configval = config.addDeviceEmulation(deviceName);

Configuration configval = config.addDeviceEmulation(deviceName, baselineEnvName);

Configuration configval = config.addDeviceEmulation(deviceName, orientation, baselineEnvName);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, from the list of devices defined by [DeviceName](./devicename). 
  
  ###### orientation 
  
 Type:[ScreenOrientation](./screenorientation) 
  
 Whether the device is in portrait or landscape mode. 
  
  ###### baselineEnvName 
  
 Type:String 
  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### getAccessibilityValidation method
Use this method to retrieve the accessibility testing level.

#### Syntax 
 ``` 
AccessibilitySettings configval = config.getAccessibilityValidation();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AccessibilitySettings](./accessibilitysettings)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### getAgentId method
Returns the value configured by [setAgentId](#setagentid-method).

#### Syntax 
 ``` 
String configval = config.getAgentId();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getApiKey method
Use this method to retrieve your Eyes license key that you set with [setApiKey](./eyes#setapikey-method), or was extracted from the APPLITOOLS\_API\_KEY environment variable.

#### Syntax 
 ``` 
String configval = config.getApiKey();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getAppName method
Returns the value configured by [setAppName](#setappname-method) or [setAppName](./eyes#setappname-method).

#### Syntax 
 ``` 
String configval = config.getAppName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getBaselineBranchName method
Returns the value configured by [setBaselineBranchName](#setbaselinebranchname-method).

#### Syntax 
 ``` 
String configval = config.getBaselineBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getBaselineEnvName method
Returns the value configured by [setBaselineEnvName](#setbaselineenvname-method).

#### Syntax 
 ``` 
String configval = config.getBaselineEnvName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getBatch method
Returns the value configured by the [setBatch](#setbatch-method) method.

#### Syntax 
 ``` 
BatchInfo configval = config.getBatch();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### getBranchName method
Returns the branchname configured by [setBranchName](#setbranchname-method).

#### Syntax 
 ``` 
String configval = config.getBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getDeviceInfo method
Retrieve the name of the device being rendered on the Ultrafast Grid, if it was configured explicitly by the user.

#### Syntax 
 ``` 
String configval = config.getDeviceInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getForceFullPageScreenshot method
Use this method to retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
Boolean configval = config.getForceFullPageScreenshot();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Boolean 
### getHideCaret method
Use this method to retrieve whether Eyes hides the cursor before the screenshot is captured or not.

#### Syntax 
 ``` 
boolean configval = config.getHideCaret();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHideScrollbars method
Use this method to retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
boolean configval = config.getHideScrollbars();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHostApp method
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax 
 ``` 
String configval = config.getHostApp();
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
String configval = config.getHostOS();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getHostingAppInfo method
Get the value of the hostingappinfo that was set using the [Configuration.setHostingAppInfo](#sethostingappinfo-method) method.

#### Syntax 
 ``` 
String configval = config.getHostingAppInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getIgnoreCaret method
Use this method to retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
boolean configval = config.getIgnoreCaret();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getIgnoreDisplacements method
Use this method to set whether Eyes ignores image features that have been displaced.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
boolean configval = config.getIgnoreDisplacements();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getMatchLevel method
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
MatchLevel configval = config.getMatchLevel();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [MatchLevel](./matchlevel)
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### getMatchTimeout method
Use this method to retrieve the maximum amount of time Eyes will try to perform a match on the fully captured image.
If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered.

#### Syntax 
 ``` 
int configval = config.getMatchTimeout();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getOsInfo method
Get the value of the hostingappinfo that was set using the [Configuration.setOsInfo](#setosinfo-method) method.

#### Syntax 
 ``` 
String configval = config.getOsInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getParentBranchName method
Returns the value configured by [setParentBranchName](#setparentbranchname-method).

#### Syntax 
 ``` 
String configval = config.getParentBranchName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getProxy method
Use this method to retrieve the settings used to access the Eyes proxy server.

#### Syntax 
 ``` 
AbstractProxySettings configval = config.getProxy();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: AbstractProxySettings

The value returned is a [ProxySettings](./proxysettings) object or null if no proxy is set. 
### getSaveDiffs method
Returns the value configured by [setSaveDiffs](#setsavediffs-method).

#### Syntax 
 ``` 
Boolean configval = config.getSaveDiffs();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Boolean 
### getSaveNewTests method
Use this method to retrieve whether or not 'new' tests are saved to the baseline by default.

#### Syntax 
 ``` 
boolean configval = config.getSaveNewTests();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getServerUrl method
Use this method to retrieve the URL of the Eyes server used to process the captured images.

#### Syntax 
 ``` 
URI configval = config.getServerUrl();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: URI 
### getStitchMode method
Returns the value configured by [setStitchMode](#setstitchmode-method).

#### Syntax 
 ``` 
StitchMode configval = config.getStitchMode();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [StitchMode](./stitchmode) 
### getStitchOverlap method
Use this method to retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
int configval = config.getStitchOverlap();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getTestName method
Returns the value configured by [setTestName](#settestname-method).

#### Syntax 
 ``` 
String configval = config.getTestName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getViewportSize method
Returns the value configured by [setViewportSize](#setviewportsize-method).

#### Syntax 
 ``` 
RectangleSize configval = config.getViewportSize();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RectangleSize](./rectanglesize) 
### getVisualGridOptions method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
List<VisualGridOption> configval = config.getVisualGridOptions();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: List<[VisualGridOption](./visualgridoption)\> 
### getWaitBeforeScreenshots method
Returns the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
int configval = config.getWaitBeforeScreenshots();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### isSendDom method
Returns whether the DOM is being sent to the server or not.

#### Syntax 
 ``` 
Boolean configval = config.isSendDom();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Boolean 
### setAccessibilityValidation method
Use this method to set the accessibility testing level to use.

#### Syntax 
 ``` 
Configuration configval = config.setAccessibilityValidation(accessibilitySettings);
 ``` 

 #### Parameters 
 ###### accessibilitySettings 
  
 Type:[AccessibilitySettings](./accessibilitysettings) 
  
 The required accessibility settings. A value of null will disable accessibility checking. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### setAgentId method
Use this method to set the name and version of the SDK.

#### Syntax 
 ``` 
Configuration configval = config.setAgentId(agentId);
 ``` 

 #### Parameters 
 ###### agentId 
  
 Type:String 
  
 The agent id to be configured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
Configuration configval = config.setApiKey(apiKey);
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:String 
  
 A string that is your API Key. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### setAppName method
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
Configuration configval = config.setAppName(appName);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:String 
  
 The application name to be configured for the test. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### setBaselineBranchName method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
Configuration configval = config.setBaselineBranchName(baselineBranchName);
 ``` 

 #### Parameters 
 ###### baselineBranchName 
  
 Type:String 
  
 The baseline branch name to be configured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](./eyes#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
Configuration configval = config.setBaselineEnvName(baselineEnvName);
 ``` 

 #### Parameters 
 ###### baselineEnvName 
  
 Type:String 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBatch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
Configuration configval = config.setBatch(batch);
 ``` 

 #### Parameters 
 ###### batch 
  
 Type:[BatchInfo](./batchinfo) 
  
 An object that defines the batch configuration. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBranchName method
Use this method to set the branch used for the baseline of this run.

#### Syntax 
 ``` 
Configuration configval = config.setBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The branch name to be used by the configuration. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBrowsersInfo method
Sets the devices to be rendered on the Ultrafast Grid.
The method sets the full list of all the browsers to be rendered on the Ultrafast Grid, removing any previously defined browsers. This method differs from the methods [addBrowser](#addbrowser-method) and [addDeviceEmulation](#adddeviceemulation-method), which build the list of browsers and devices incrementally (i.e. each call to addXXXX adds more browsers to the list of browsers to be rendered). If you call [setBrowsersInfo](#) after calling any of the addXXXX methods then the devices configured by the addXXXX will be lost. You may call the addXXXX methods after the [setBrowsersInfo](#) method to add more browsers to the list of browsers to be rendered.

#### Syntax 
 ``` 
Configuration configval = config.setBrowsersInfo(browsersInfo);
 ``` 

 #### Parameters 
 ###### browsersInfo 
  
 Type:List<[RenderBrowserInfo](./renderbrowserinfo)\> 
  
 List of objects that define browsers and emulated devices to be rendered. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setDeviceInfo method
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax 
 ``` 
Configuration configval = config.setDeviceInfo(deviceInfo);
 ``` 

 #### Parameters 
 ###### deviceInfo 
  
 Type:String 
  
 The name of the device - this is displayed in the Device column in the Test Manager. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setFeatures method
Use this method to enable various Eyes features.

#### Syntax 
 ``` 
Configuration configval = config.setFeatures(feature, features);
 ``` 

 #### Parameters 
 ###### feature 
  
 Type:[Feature](./feature) 
  
 One or more features to set. 
  
  ###### features 
  
 Type:[Feature](./feature)... 
  
 One or more features to set. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
The following values may be passed to this method:

[USE\_PREDEFINED\_DEVICE\_INFO](./feature)

If this feature is set, then Eyes uses internal information regarding mobile devices instead of the information provided by Appium.

Some versions of Appium have inaccurate information, such as screen size and pixel scale ratio, on certain mobile devices. If you have issues with capturing correct images on a mobile device, try calling [Configuration.setFeatures](#), passing a value of [Feature.USE\_PREDEFINED\_DEVICE\_INFO](./feature), for example:

    suiteConfig.setFeatures(Feature.USE_PREDEFINED_DEVICE_INFO)
    This instructs Eyes to use information stored in Eyes about the mobile devices that have been tested and are known to work correctly.

[NO\_SWITCH\_WITHOUT\_FRAME\_CHAIN](./feature)

This option may help in cases where rendering fails because of a clash between the test program's use of the WebDriver to access frames and the SDK's attempt to take a screenshot.

The recommended way to access the Selenium WebDriver is as follows:

    originalWebDriver = new ChromeDriver();
    WebDriver webDriver = eyes.open(originalWebDriver, appName, testName, viewport)
    webDriver.get(url);
    

The code creates a WebDriver instance (originalWebDriver) and passes this to the method [Eyes.open](./eyes#open-method). The method returns a clone of originalWebDriver that the test assigns to the variable webDriver. Thereafter, the program should use webDriver to access Selenium and not originalWebDriver.

This pattern enables Eyes to be aware of changes in the state of the browser, and it can use this information during the screen capture process.

If the test must use the originalWebDriver object and not webDriver, this can cause the screen capture to fail. If this happens, we recommend that you try to eliminate such failures by calling [Configuration.setFeatures](#), passing as a parameter the value [Feature.NO\_SWITCH\_WITHOUT\_FRAME\_CHAIN](./feature).

Note that this problem sometimes occurs when the originalWebDriver is used to change the context to an internal frame in the window for some reason. The recomended way to check a nested frame nested is by calling the [SeleniumCheckSettings.frame](./checksettings#frame-method) method, without switching into the frame, as follows:

    eyes.check(Target.frame(frame1Locator)) 
### setForceFullPageScreenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
Configuration configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
 ``` 

 #### Parameters 
 ###### forceFullPageScreenshot 
  
 Type:boolean 
  
 If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHideCaret method
Use this method to set whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
Configuration configval = config.setHideCaret(hideCaret);
 ``` 

 #### Parameters 
 ###### hideCaret 
  
 Type:boolean 
  
 If this paramter has a value of true, then the cursor will be hidden before the image is captured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](#setignorecaret-method) or [SeleniumCheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### setHideScrollbars method
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
Configuration configval = config.setHideScrollbars(hideScrollbars);
 ``` 

 #### Parameters 
 ###### hideScrollbars 
  
 Type:boolean 
  
 If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
Configuration configval = config.setHostApp(hostApp);
 ``` 

 #### Parameters 
 ###### hostApp 
  
 Type:String 
  
 The value to be used for the Host App property. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
Configuration configval = config.setHostOS(hostOS);
 ``` 

 #### Parameters 
 ###### hostOS 
  
 Type:String 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostingAppInfo method
Set the value that shold be displayed in the Browser column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the hosting application property that governs the baseline chosen for the test. The hosting application property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostApp](#sethostapp-method) or [setHostApp](./eyes#sethostapp-method). This also overwrite the value displayed in the Browser column of the Test Manager unless the [setHostingAppInfo](#) is used.

#### Syntax 
 ``` 
Configuration configval = config.setHostingAppInfo(hostingAppInfo);
 ``` 

 #### Parameters 
 ###### hostingAppInfo 
  
 Type:String 
  
 hostappinfo.params.sethostappinfo 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
Configuration configval = config.setIgnoreCaret(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:boolean 
  
 If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using [setHideCaret](./eyes#sethidecaret-method) or [setHideCaret](#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 
### setIgnoreDisplacements method
Use this method to set whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
Configuration configval = config.setIgnoreDisplacements(isIgnoreDisplacements);
 ``` 

 #### Parameters 
 ###### isIgnoreDisplacements 
  
 Type:boolean 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel) 
### setLayoutBreakpoints method
Configure the SDK to capture multiple DOM images for multiple viewport sizes.
When the test loads a page into the test browser, the test browser loads the page, executes any JavaScript loaded with that page, and creates a DOM. The SDK then sends this DOM to the Ultrafast Grid, where it is rendered for each configured execution environment. When the Ultrafast Grid sizes the browser, device emulator, or simulator to match the viewport size of the execution environment, all CSS is applied so that any viewport-width-dependent layout will have the expected effect. However, the on-page JavaScript is not executed. If the JavaScript impacts the DOM and is viewport-width-dependent, then the page may be rendered incorrectly.

This method allows you to request that the SDK resize the test browser viewport to multiple viewport widths. Resizing the test browser viewport triggers re-execution of the on-page JavaScript, and the creation of a viewport-width-specific DOM. The SDK then sends all of these DOMs to the Ultrafast Grid and the Ultrafast Grid renders each execution environment using the DOM that matches the environment viewport width execution environment.

Depending on the parameters you pass to the method, the SDK either extracts a DOM for every distinct viewport size configured or extracts a DOM for each viewport size that you specify.

For more information see [Handling viewport-dependent JavaScript](https://applitools.com/docs/topics/sdk/viewport-dependent-js.html).

#### Syntax 
 ``` 
Configuration configval = config.setLayoutBreakpoints(shouldSet);

Configuration configval = config.setLayoutBreakpoints(breakpoints);
 ``` 

 #### Parameters 
 ###### shouldSet 
  
 Type:boolean 
  
 Pass a value of true to enable this feature. 
  
  ###### breakpoints 
  
 Type:int... 
  
 Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.layoutBreakpoints](./checksettings#layoutbreakpoints-method) method. 
### setMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
Configuration configval = config.setMatchLevel(matchLevel);
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

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setMatchTimeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
Configuration configval = config.setMatchTimeout(matchTimeout);
 ``` 

 #### Parameters 
 ###### matchTimeout 
  
 Type:int 
  
 The timeout to set in milliseconds. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### setOsInfo method
Set the value that shold be displayed in the OS column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the host OS property that governs the baseline chosen for the test. The host OS property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostOS](#sethostos-method) or [setHostOS](./eyes#sethostos-method). This also overwrite the value displayed in the OS column of the Test Manager unless the [setOsInfo](#) is used.

#### Syntax 
 ``` 
Configuration configval = config.setOsInfo(osInfo);
 ``` 

 #### Parameters 
 ###### osInfo 
  
 Type:String 
  
 The value to be displayed in the OS column of the Test Results page of the Test Manager. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
Configuration configval = config.setParentBranchName(parentBranchName);
 ``` 

 #### Parameters 
 ###### parentBranchName 
  
 Type:String 
  
 The parent branch name to be configured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
Configuration configval = config.setProxy(proxy);
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:AbstractProxySettings 
  
 An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
Configuration configval = config.setSaveDiffs(saveDiffs);
 ``` 

 #### Parameters 
 ###### saveDiffs 
  
 Type:Boolean 
  
 Set to true to configure Save Diffs functionality. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
Configuration configval = config.setSaveNewTests(saveNewTests);
 ``` 

 #### Parameters 
 ###### saveNewTests 
  
 Type:boolean 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSendDom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
Configuration configval = config.setSendDom(sendDom);
 ``` 

 #### Parameters 
 ###### sendDom 
  
 Type:boolean 
  
 A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### setServerUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
Configuration configval = config.setServerUrl(serverUrl);
 ``` 

 #### Parameters 
 ###### serverUrl 
  
 Type:String 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setStitchMode method
Use this method to set the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
Configuration configval = config.setStitchMode(stitchMode);
 ``` 

 #### Parameters 
 ###### stitchMode 
  
 Type:[StitchMode](./stitchmode) 
  
 The stitch mode to use. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setStitchOverlap method
Use this method to set the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
Configuration configval = config.setStitchOverlap(stitchOverlap);
 ``` 

 #### Parameters 
 ###### stitchOverlap 
  
 Type:int 
  
 The width of the stitch overlap in pixels. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setTestName method
Use this method to set the name of the test.

#### Syntax 
 ``` 
Configuration configval = config.setTestName(testName);
 ``` 

 #### Parameters 
 ###### testName 
  
 Type:String 
  
 The test name to be configured for the test. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setViewportSize method
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
Configuration configval = config.setViewportSize(viewportSize);
 ``` 

 #### Parameters 
 ###### viewportSize 
  
 Type:[RectangleSize](./rectanglesize) 
  
 An object that defines the width and height of the test browser viewport in pixels. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setVisualGridOptions method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
Configuration configval = config.setVisualGridOptions(option, options);
 ``` 

 #### Parameters 
 ###### option 
  
 Type:[VisualGridOption](./visualgridoption) 
  
 The first configuration option for the Ultrafast Grid. 
  
  ###### options 
  
 Type:[VisualGridOption](./visualgridoption)... 
  
 Optional additional configuration options for the Ultrafast Grid. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOptions](#)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visualGridOptions](./checksettings#visualgridoptions-method).
        
 ####  Example 
Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
                .setVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig); 
### setWaitBeforeScreenshots method
Use this method to set the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
Configuration configval = config.setWaitBeforeScreenshots(waitBeforeScreenshots);
 ``` 

 #### Parameters 
 ###### waitBeforeScreenshots 
  
 Type:int 
  
 The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.