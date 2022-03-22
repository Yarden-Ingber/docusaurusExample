# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes-method) object by passing it to the [Eyes.SetConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.

### Constructor  
### Configuration method
The constructor for the [Configuration](./configuration-method) class. This object isset upand then passed to the [Eyes.SetConfiguration](./eyes#setconfiguration-method) method before the call to the [Eyes.Open](./eyes#open-method) method.

#### Syntax 
 ``` 
Configuration config = new Configuration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 

## Properties 
### AccessibilityValidation property
Use this property to set and retrieve the accessibility testing level to use.

#### Syntax 
 ``` 
AccessibilitySettings configval; // give relevant initial value
config.AccessibilityValidation  = configval;
configval = config.AccessibilityValidation
 ``` 
 
 Type:[AccessibilitySettings](./accessibilitysettings)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### AgentId property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.AgentId  = configval;
configval = config.AgentId
 ``` 
 
 Type:string 
### ApiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
string configval; // give relevant initial value
config.ApiKey  = configval;
configval = config.ApiKey
 ``` 
 
 Type:string

 #### Remarks 
Set this immediately after the Eyes object is created (before calling [Open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### AppName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.AppName  = configval;
configval = config.AppName
 ``` 
 
 Type:string

 #### Remarks 
If you call this method, it must be called before the call to [Eyes.Open](./eyes#open-method). In the call to [Eyes.Open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### BaselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.BaselineBranchName  = configval;
configval = config.BaselineBranchName
 ``` 
 
 Type:string 
### BaselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [Open](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of null if it has not been assigned.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.BaselineEnvName  = configval;
configval = config.BaselineEnvName
 ``` 
 
 Type:string 
### Batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
BatchInfo configval; // give relevant initial value
config.Batch  = configval;
configval = config.Batch
 ``` 
 
 Type:[BatchInfo](./batchinfo) 
### BranchName property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.BranchName  = configval;
configval = config.BranchName
 ``` 
 
 Type:string 
### HideCaret property
Use this property to set and retrieve whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
bool configval; // give relevant initial value
config.HideCaret  = configval;
configval = config.HideCaret
 ``` 
 
 Type:bool

 #### Remarks 
We recommend using this method instead of [Eyes.IgnoreCaret](./eyes#setignorecaret-method), [Configuration.SetIgnoreCaret](#setignorecaret-method) or [SeleniumCheckSettings.IgnoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### HideScrollbars property
Use this property to set and retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
bool configval; // give relevant initial value
config.HideScrollbars  = configval;
configval = config.HideScrollbars
 ``` 
 
 Type:bool 
### HostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.HostApp  = configval;
configval = config.HostApp
 ``` 
 
 Type:string 
### HostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.HostOS  = configval;
configval = config.HostOS
 ``` 
 
 Type:string 
### IgnoreCaret property
Use this property to set and retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
bool configval; // give relevant initial value
config.IgnoreCaret  = configval;
configval = config.IgnoreCaret
 ``` 
 
 Type:bool

 #### Remarks 
We recommend using [HideCaret](./eyes#sethidecaret-method) or [SetHideCaret](#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 
### IgnoreDisplacements property
Use this property to set and retrieve whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
bool configval; // give relevant initial value
config.IgnoreDisplacements  = configval;
configval = config.IgnoreDisplacements
 ``` 
 
 Type:bool

 #### Remarks 
Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel) 
### LayoutBreakpoints property
Configure the SDK to capture multiple DOM images for multiple viewport sizes.
When the test loads a page into the test browser, the test browser loads the page, executes any JavaScript loaded with that page, and creates a DOM. The SDK then sends this DOM to the Ultrafast Grid, where it is rendered for each configured execution environment. When the Ultrafast Grid sizes the browser, device emulator, or simulator to match the viewport size of the execution environment, all CSS is applied so that any viewport-width-dependent layout will have the expected effect. However, the on-page JavaScript is not executed. If the JavaScript impacts the DOM and is viewport-width-dependent, then the page may be rendered incorrectly.

This method allows you to request that the SDK resize the test browser viewport to multiple viewport widths. Resizing the test browser viewport triggers re-execution of the on-page JavaScript, and the creation of a viewport-width-specific DOM. The SDK then sends all of these DOMs to the Ultrafast Grid and the Ultrafast Grid renders each execution environment using the DOM that matches the environment viewport width execution environment.

Depending on the parameters you pass to the method, the SDK either extracts a DOM for every distinct viewport size configured or extracts a DOM for each viewport size that you specify.

For more information see [Handling viewport-dependent JavaScript](https://applitools.com/docs/topics/sdk/viewport-dependent-js.html).

#### Syntax 
 ``` 
int configval; // give relevant initial value
config.LayoutBreakpoints  = configval;
configval = config.LayoutBreakpoints
 ``` 
 
 Type:int

 #### Remarks 
This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.LayoutBreakpoints](./checksettings#layoutbreakpoints-method) method. 
### MatchLevel property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
MatchLevel configval; // give relevant initial value
config.MatchLevel  = configval;
configval = config.MatchLevel
 ``` 
 
 Type:[MatchLevel](./matchlevel)
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### MatchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
TimeSpan configval; // give relevant initial value
config.MatchTimeout  = configval;
configval = config.MatchTimeout
 ``` 
 
 Type:TimeSpan

 #### Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes$checkwindow`](#)You can also overide the timeout for a specific test using the check fluent [`checksettings$timeout`](#) 
### ParentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.ParentBranchName  = configval;
configval = config.ParentBranchName
 ``` 
 
 Type:string 
### SaveDiffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
bool? configval; // give relevant initial value
config.SaveDiffs  = configval;
configval = config.SaveDiffs
 ``` 
 
 Type:bool? 
### SaveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
bool configval; // give relevant initial value
config.SaveNewTests  = configval;
configval = config.SaveNewTests
 ``` 
 
 Type:bool 
### SendDom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
bool configval; // give relevant initial value
config.SendDom  = configval;
configval = config.SendDom
 ``` 
 
 Type:bool

 #### Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### ServerUrl property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.ServerUrl  = configval;
configval = config.ServerUrl
 ``` 
 
 Type:string 
### StitchMode property
Use this property to set and retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
StitchModes configval; // give relevant initial value
config.StitchMode  = configval;
configval = config.StitchMode
 ``` 
 
 Type:[StitchModes](./stitchmode) 
### StitchOverlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
int configval; // give relevant initial value
config.StitchOverlap  = configval;
configval = config.StitchOverlap
 ``` 
 
 Type:int 
### TestName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.TestName  = configval;
configval = config.TestName
 ``` 
 
 Type:string 
### ViewportSize property
Use this property to set and retrieve the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
RectangleSize configval; // give relevant initial value
config.ViewportSize  = configval;
configval = config.ViewportSize
 ``` 
 
 Type:[RectangleSize](./rectanglesize) 
### VisualGridOptions property
Use this property to set and retrieve configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
VisualGridOption[] configval; // give relevant initial value
config.VisualGridOptions  = configval;
configval = config.VisualGridOptions
 ``` 
 
 Type:[VisualGridOption](./visualgridoption)\[\]

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.SetVisualGridOptions](#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](./checksettings#visualgridoptions-method). 
### WaitBeforeScreenshots property
Use this property to set and retrieve the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
int configval; // give relevant initial value
config.WaitBeforeScreenshots  = configval;
configval = config.WaitBeforeScreenshots
 ``` 
 
 Type:int 
### AddBrowser method
Request that the checkpoint be rendered by the Ultrafast Grid using a particular target desktop or mobile device browser.
The following types of targets can be specified by passing different types of parameters:

*   Desktop browser: The page is rendered using a desktop browser you specify. The set of supported browsers is defined by the enum [`BrowserType`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-browsertype-selenium-csharp.html-method). To request a browser from this list pass a [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method) object, as shown for parameter desktopBrowserInfo below. You can also request a browser directly using the browserType parameter as shown below.
*   Emulated mobile device: The page is rendered using Chrome device emulation. The set of supported devices is defined by the enum [`DeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-devicename-selenium-csharp.html-method). To request a device from this list pass a [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method) object, as shown for parameter below.
*   Simulated iOS mobile device: The page is rendered using a Safari browser running on a mobile device simulator. The set of supported devices is defined by the enum [`IosDeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-iosdevicename-selenium-csharp.html-method). To request a device from this list pass an [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method) object, as shown for parameter below.

When requesting a Desktop browser you also specify the required viewport size. When specifying a mobile device the viewport size is based on the device screen size, and you simply specify if you want to render using portrait (vertical) or landscape (horizontal) screen orientation.

You may define multiple targets with different browsers/devices and viewports/orientations by calling this method as many times as required. Eyes will produce a test results for each such configuration. Alternatively, pass a list of browsers and devices to the method [AddBrowsers](#addbrowsers-method).

#### Syntax 
 ``` 
IConfiguration configval = config.AddBrowser(desktopBrowserInfo);

IConfiguration configval = config.AddBrowser(emulationInfo);

IConfiguration configval = config.AddBrowser(deviceInfo);

IConfiguration configval = config.AddBrowser(width, height, browserType, baselineEnvName);

IConfiguration configval = config.AddBrowser(width, height, browserType);
 ``` 

 #### Parameters 
 ###### desktopBrowserInfo 
  
 Type:[DesktopBrowserInfo](./desktopbrowserinfo) 
  
 Which desktop browser type and viewport size to use. 
  
  ###### C# 
  
     /* test suite setup */   
         suiteConfig = (Configuration) new Configuration()  
             .AddBrowser(new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.EDGE_CHROMIUM))  
             /* ... other configurations */  ;  
    /*  
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.SetConfiguration(suiteConfig); 
  
  ###### emulationInfo 
  
 Type:[ChromeEmulationInfo](./chromeemulationinfo) 
  
 Which mobile device to emulate and its vertical or horizontal orientation. 
  
  ###### C# 
  
     /* test suite setup */   
         suiteConfig = (Configuration) new Configuration()  
             .AddBrowser(new ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.Landscape))  
             /* ... other configurations */  ;  
    /*  
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.SetConfiguration(suiteConfig); 
  
  ###### deviceInfo 
  
 Type:[IosDeviceInfo](./iosdeviceinfo) 
  
 Defines the mobile device to be simulated and its vertical or horizontal orientation. 
  
  ###### C# 
  
     /* test suite setup */   
         suiteConfig = (Configuration) new Configuration()  
             .AddBrowser(new IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.Portrait))  
             /* ... other configurations */  ;  
    /*  
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.SetConfiguration(suiteConfig); 
  
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
  
 C# 
  
  ######     /* test suite setup */   
         suiteConfig = (Configuration) new Configuration()  
             /* ... other configurations */  ;  
         /*  
          * Assign the configuration to all newly created Eyes instances 
          */ 
    eyes = new Eyes(runner); 
         eyes.SetConfiguration(suiteConfig); 
  
 baselineEnvName 
  
 Type:string \[Optional : default = null \] 
  ######  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 Use this in conjunction with the browserType parameter. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration or parameter has been provided. The viewport passed to the [Eyes.Open](./eyes#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript. 
### AddBrowsers method
Request that the checkpoint be rendered by the Ultrafast Grid using the specified desktop browsers and viewport sizes.

#### Syntax 
 ``` 
IConfiguration configval = config.AddBrowsers(browsersInfo);
 ``` 

 #### Parameters 
 ###### browsersInfo 
  
 Type:IRenderBrowserInfo\[\] 
  
 One or more browser or device configuration definitions passed as an array or multiple parameters. 
  
  ###### Define the browser or device configurations using instances of one or more of the following classes: 
  
 *   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser. 
 *   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device. 
 *   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
        
 You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [AddBrowser](#addbrowser-method). 
 #### Example  
C#

    /* test suite setup */  
       IRenderBrowserInfo[] browserList =
       {
           new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.FIREFOX),
           new ChromeEmulationInfo(DeviceName.Galaxy_Note_3, ScreenOrientation.Landscape),
           new IosDeviceInfo(IosDeviceName.iPhone_8, ScreenOrientation.Portrait)
       };
        suiteConfig = (Configuration) new Configuration() 
            .AddBrowsers(browserList) 
            /* ... other configurations */  ; 
       /* 
        * Assign the configuration to all newly created Eyes instances
        */
       eyes = new Eyes(runner);
       eyes.SetConfiguration(suiteConfig); 
### AddDeviceEmulation method
Request that the checkpoint be rendered by the Ultrafast Grid using Chrome mobile emulation.

#### Syntax 
 ``` 
IConfiguration configval = config.AddDeviceEmulation(deviceName, screenOrientation, baselineEnvName);

IConfiguration configval = config.AddDeviceEmulation(deviceName, screenOrientation);

IConfiguration configval = config.AddDeviceEmulation(deviceName);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, from the list of devices defined by [DeviceName](./devicename). 
  
  ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.Portrait \] 
  
 Whether the device is in portrait or landscape mode. 
  
  ###### baselineEnvName 
  
 Type:string \[Optional : default = null \] 
  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### Clone method
Returns a clone of the configuration object.

#### Syntax 
 ``` 
Applitools.Configuration configval = config.Clone();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Applitools.[Configuration](./configuration)

A cloned [Configuration](./configuration) object. 
### SetAccessibilityValidation method
Use this method to set the accessibility testing level to use.

#### Syntax 
 ``` 
IConfiguration configval = config.SetAccessibilityValidation(value);
config.AccessibilityValidation  = configval;
 = config.AccessibilityValidation;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:[AccessibilitySettings](./accessibilitysettings) 
  
 The required accessibility settings. A value of null will disable accessibility checking. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### SetAgentId method
Use this method to set the name and version of the SDK.

#### Syntax 
 ``` 
IConfiguration configval = config.SetAgentId(value);
config.AgentId  = configval;
 = config.AgentId;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The agent id to be configured. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
IConfiguration configval = config.SetApiKey(value);
config.ApiKey  = configval;
 = config.ApiKey;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 A string that is your API Key. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [Open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### SetAppName method
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
IConfiguration configval = config.SetAppName(value);
config.AppName  = configval;
 = config.AppName;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The application name to be configured for the test. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.Open](./eyes#open-method). In the call to [Eyes.Open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### SetBaselineBranchName method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
IConfiguration configval = config.SetBaselineBranchName(value);
config.BaselineBranchName  = configval;
 = config.BaselineBranchName;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The baseline branch name to be configured. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [Open](./eyes#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ```
IConfiguration configval = config.SetBaselineEnvName(value);
config.BaselineEnvName  = configval;
 = config.BaselineEnvName;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetBatch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
IConfiguration configval = config.SetBatch(value);
config.Batch  = configval;
 = config.Batch;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:[BatchInfo](./batchinfo) 
  
 An object that defines the batch configuration. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetBranchName method
Use this method to set the branch used for the baseline of this run.

#### Syntax 
 ``` 
IConfiguration configval = config.SetBranchName(value);
config.BranchName  = configval;
 = config.BranchName;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The branch name to be used by the configuration. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetForceFullPageScreenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
IConfiguration configval = config.SetForceFullPageScreenshot(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetHideCaret method
Use this method to set whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
IConfiguration configval = config.SetHideCaret(value);
config.HideCaret  = configval;
 = config.HideCaret;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 If this paramter has a value of true, then the cursor will be hidden before the image is captured. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.IgnoreCaret](./eyes#setignorecaret-method), [Configuration.SetIgnoreCaret](#setignorecaret-method) or [SeleniumCheckSettings.IgnoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### SetHideScrollbars method
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
IConfiguration configval = config.SetHideScrollbars(value);
config.HideScrollbars  = configval;
 = config.HideScrollbars;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
IConfiguration configval = config.SetHostApp(value);
config.HostApp  = configval;
 = config.HostApp;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value to be used for the Host App property. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
IConfiguration configval = config.SetHostOS(value);
config.HostOS  = configval;
 = config.HostOS;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
IConfiguration configval = config.SetIgnoreCaret(value);
config.IgnoreCaret  = configval;
 = config.IgnoreCaret;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using [HideCaret](./eyes#sethidecaret-method) or [SetHideCaret](#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 
### SetIgnoreDisplacements method
Use this method to set whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
IConfiguration configval = config.SetIgnoreDisplacements(value);
config.IgnoreDisplacements  = configval;
 = config.IgnoreDisplacements;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel) 
### SetLayoutBreakpoints method
Configure the SDK to capture multiple DOM images for multiple viewport sizes.
When the test loads a page into the test browser, the test browser loads the page, executes any JavaScript loaded with that page, and creates a DOM. The SDK then sends this DOM to the Ultrafast Grid, where it is rendered for each configured execution environment. When the Ultrafast Grid sizes the browser, device emulator, or simulator to match the viewport size of the execution environment, all CSS is applied so that any viewport-width-dependent layout will have the expected effect. However, the on-page JavaScript is not executed. If the JavaScript impacts the DOM and is viewport-width-dependent, then the page may be rendered incorrectly.

This method allows you to request that the SDK resize the test browser viewport to multiple viewport widths. Resizing the test browser viewport triggers re-execution of the on-page JavaScript, and the creation of a viewport-width-specific DOM. The SDK then sends all of these DOMs to the Ultrafast Grid and the Ultrafast Grid renders each execution environment using the DOM that matches the environment viewport width execution environment.

Depending on the parameters you pass to the method, the SDK either extracts a DOM for every distinct viewport size configured or extracts a DOM for each viewport size that you specify.

For more information see [Handling viewport-dependent JavaScript](https://applitools.com/docs/topics/sdk/viewport-dependent-js.html).

#### Syntax 
 ``` 
IConfiguration configval = config.SetLayoutBreakpoints(breakpoints);

IConfiguration configval = config.SetLayoutBreakpoints(value);
config.LayoutBreakpoints  = configval;
 = config.LayoutBreakpoints;
 ``` 

 #### Parameters 
 ###### breakpoints 
  
 Type:int\[\] 
  
 Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width. 
  
  ###### value 
  
 Type:int\[\] 
  
 Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width. 
  
 #### Return value 
Type: IConfiguration

 #### Remarks 
This method sets the default for all checkpoints on all tests that are configured using this Configuration object. This default can be overridden for a specific checkpoint by using the [SeleniumCheckSettings.LayoutBreakpoints](./checksettings#layoutbreakpoints-method) method. 
### SetMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
IConfiguration configval = config.SetMatchLevel(value);
config.MatchLevel  = configval;
 = config.MatchLevel;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [None](./matchlevel) 
 *   [Strict](./matchlevel) 
 *   [Layout](./matchlevel) 
 *   [Content](./matchlevel) 
 *   [Exact](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### SetMatchTimeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
IConfiguration configval = config.SetMatchTimeout(value);
config.MatchTimeout  = configval;
 = config.MatchTimeout;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:TimeSpan 
  
 The timeout to set in seconds. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`CheckWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`Timeout method`](#timeout-method) 
### SetParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
IConfiguration configval = config.SetParentBranchName(value);
config.ParentBranchName  = configval;
 = config.ParentBranchName;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The parent branch name to be configured. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
IConfiguration configval = config.SetProxy(proxy);

IConfiguration configval = config.SetProxy(value);
config.Proxy  = configval;
 = config.Proxy;
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:WebProxy 
  
 An object that provides the user credentials. 
  
  ###### value 
  
 Type:WebProxy 
  
 An object that provides the user credentials. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
IConfiguration configval = config.SetSaveDiffs(value);
config.SaveDiffs  = configval;
 = config.SaveDiffs;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool? 
  
 Set to true to configure Save Diffs functionality. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
IConfiguration configval = config.SetSaveNewTests(value);
config.SaveNewTests  = configval;
 = config.SaveNewTests;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetSendDom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
IConfiguration configval = config.SetSendDom(value);
config.SendDom  = configval;
 = config.SendDom;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:bool 
  
 A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### SetServerUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
IConfiguration configval = config.SetServerUrl(value);
config.ServerUrl  = configval;
 = config.ServerUrl;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetStitchMode method
Use this method to set the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
IConfiguration configval = config.SetStitchMode(value);
config.StitchMode  = configval;
 = config.StitchMode;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:[StitchModes](./stitchmode) 
  
 The stitch mode to use. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetStitchOverlap method
Use this method to set the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
IConfiguration configval = config.SetStitchOverlap(value);
config.StitchOverlap  = configval;
 = config.StitchOverlap;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:int 
  
 The width of the stitch overlap in pixels. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetTestName method
Use this method to set the name of the test.

#### Syntax 
 ``` 
IConfiguration configval = config.SetTestName(value);
config.TestName  = configval;
 = config.TestName;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The test name to be configured for the test. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetViewportSize method
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
IConfiguration configval = config.SetViewportSize(width, height);

IConfiguration configval = config.SetViewportSize(value);
config.ViewportSize  = configval;
 = config.ViewportSize;
 ``` 

 #### Parameters 
 ###### width 
  
 Type:int 
  
 The width of the test browser viewport in pixels. 
  
  ###### height 
  
 Type:int 
  
 The height of the test browser viewport in pixels. 
  
  ###### value 
  
 Type:[RectangleSize](./rectanglesize) 
  
 An object that defines the width and height of the test browser viewport in pixels. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### SetVisualGridOptions method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
IConfiguration configval = config.SetVisualGridOptions(options);
config.VisualGridOptions  = configval;
 = config.VisualGridOptions;
 ``` 

 #### Parameters 
 ###### options 
  
 Type:[VisualGridOption](./visualgridoption)\[\] 
  
 One or more configuration options for the Ultrafast Grid. 
  
 #### Return value 
Type: IConfiguration

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.SetVisualGridOptions](#)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](./checksettings#visualgridoptions-method).
        
 ####  Example 
C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .SetVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig); 
### SetWaitBeforeScreenshots method
Use this method to set the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
IConfiguration configval = config.SetWaitBeforeScreenshots(value);
config.WaitBeforeScreenshots  = configval;
 = config.WaitBeforeScreenshots;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:int 
  
 The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
  
 #### Return value 
Type: IConfiguration

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
  
