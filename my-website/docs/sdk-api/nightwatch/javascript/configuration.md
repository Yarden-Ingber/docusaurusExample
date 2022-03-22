# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.

### Constructor  
### Configuration method
The constructor for the [Configuration](./configuration-method) class. This object isset upand then passed to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method before the call to the [Eyes.open](./eyes#open-method) method.

#### Syntax 
 ``` 
let config = new Configuration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 

## Properties 
### agentId property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ``` 
config.agentId = configval;
configval = config.agentId;
 ``` 
 
 Type:string 
The agent id to be configured. 
### apiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
config.apiKey = configval;
configval = config.apiKey;
 ``` 
 
 Type:string 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### appName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
config.appName = configval;
configval = config.appName;
 ``` 
 
 Type:string 
The application name to be configured for the test.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### baselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
config.baselineBranchName = configval;
configval = config.baselineBranchName;
 ``` 
 
 Type:string 
The baseline branch name to be configured. 
### baselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [open](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of null if it has not been assigned.

#### Syntax 
 ``` 
config.baselineEnvName = configval;
configval = config.baselineEnvName;
 ``` 
 
 Type:string 
The name of the baseline environment. 
### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
config.batch = configval;
configval = config.batch;
 ``` 
 
 Type:[BatchInfoPlain](./batchinfoplain) 
An object that defines the batch configuration. 
### branchName property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
config.branchName = configval;
configval = config.branchName;
 ``` 
 
 Type:string 
The branch name to be used by the configuration. 
### browsersInfo property
Sets the list of one or more browsers or devices to be rendered on the Ultrafast Grid.
Setting the browsers and devices by assinging to this property defines the complete list of targets overwriting any previously configurations made by using [addBrowser](#addbrowser-method) or [addDeviceEmulation](#adddeviceemulation-method), which build the list of browsers and devices incrementally (i.e. each call to addXXXX adds more browsers to the list of browsers to be rendered). If you call [setBrowsersInfo](#setbrowsersinfo-method) after calling any of the addXXXX methods then the devices configured by the addXXXX will be lost. You may call the addXXXX methods after the [setBrowsersInfo](#setbrowsersinfo-method) method to add more browsers to the list of browsers to be rendered.

#### Syntax 
 ``` 
let suiteConfig = {
  browsersInfo: [
    { height: value1_number, width: value2_number, name: "chrome" },
    { deviceName: "Galaxy Note 3", screenOrientation: "landscape" },
    {
      deviceName: "iPad (7th generation)",
      iosVersion: "latest",
      screenOrientation: "portrait",
    },
  ],
};
eyes.setConfiguration(suiteConfig);
 ``` 
 
 Type: 
 `([DesktopBrowserInfo](./desktopbrowserinfo)|[ChromeEmulationInfo](./chromeemulationinfo)|[IOSDeviceInfo](./iosdeviceinfo))[]` 
 
### forceFullPageScreenshot property
Use this property to set and retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
config.forceFullPageScreenshot = configval;
configval = config.forceFullPageScreenshot;
 ``` 
 
 Type:boolean 
### hideCaret property
Use this property to set and retrieve whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
config.hideCaret = configval;
configval = config.hideCaret;
 ``` 
 
 Type:boolean 
If this paramter has a value of true, then the cursor will be hidden before the image is captured.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### hideScrollbars property
Use this property to set and retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
config.hideScrollbars = configval;
configval = config.hideScrollbars;
 ``` 
 
 Type:boolean 
If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
### hostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
config.hostApp = configval;
configval = config.hostApp;
 ``` 
 
 Type:string 
The value to be used for the Host App property. 
### hostAppInfo property
Set the value that shold be displayed in the Browser column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the hosting application property that governs the baseline chosen for the test. The hosting application property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostApp](#sethostapp-method) or [setHostApp](./eyes#sethostapp-method). This also overwrite the value displayed in the Browser column of the Test Manager unless the undefined is used.

#### Syntax 
 ``` 
config.hostAppInfo = configval;
configval = config.hostAppInfo;
 ``` 
 
 Type:string 
### hostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
config.hostOS = configval;
configval = config.hostOS;
 ``` 
 
 Type:string 
The value to be used for the Host OS Property. 
### hostOSInfo property
Set the value that shold be displayed in the OS column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the host OS property that governs the baseline chosen for the test. The host OS property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostOS](#sethostos-method) or [setHostOS](./eyes#sethostos-method). This also overwrite the value displayed in the OS column of the Test Manager unless the undefined is used.

#### Syntax 
 ``` 
config.hostOSInfo = configval;
configval = config.hostOSInfo;
 ``` 
 
 Type:string 
### matchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
config.matchTimeout = configval;
configval = config.matchTimeout;
 ``` 
 
 Type:number 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in nightwatch javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### parentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
config.parentBranchName = configval;
configval = config.parentBranchName;
 ``` 
 
 Type:string 
The parent branch name to be configured. 
### properties property
Set a list of user-defined properties each of which is a key/value pair.

#### Syntax 
 ``` 
config.properties = configval;
configval = config.properties;
 ``` 
 
 Type:[PropertyDataPlain](./propertydataplain)\[\]

 #### Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method). 
### rotation property
Use this property to set and retrieve the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
config.rotation = configval;
configval = config.rotation;
 ``` 
 
 Type:ImageRotationPlain 
The number of degrees to rotate. 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
### saveDiffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
config.saveDiffs = configval;
configval = config.saveDiffs;
 ``` 
 
 Type:boolean 
Set to true to configure Save Diffs functionality. 
### saveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
config.saveNewTests = configval;
configval = config.saveNewTests;
 ``` 
 
 Type:boolean 
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
### sendDom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
config.sendDom = configval;
configval = config.sendDom;
 ``` 
 
 Type:boolean 
A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### serverUrl property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
config.serverUrl = configval;
configval = config.serverUrl;
 ``` 
 
 Type:string 
The URL of the Eyes server. Pass a value of null to use the default cloud server. 
### stitchMode property
Use this property to set and retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
config.stitchMode = configval;
configval = config.stitchMode;
 ``` 
 
 Type: 
The stitch mode to use. 
 `[StitchMode](./stitchmode)|'Scroll'|'CSS'` 
 
### stitchOverlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
config.stitchOverlap = configval;
configval = config.stitchOverlap;
 ``` 
 
 Type:number 
The width of the stitch overlap in pixels. 
### testName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ``` 
config.testName = configval;
configval = config.testName;
 ``` 
 
 Type:string 
The test name to be configured for the test. 
### viewportSize property
Use this property to set and retrieve the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
config.viewportSize = configval;
configval = config.viewportSize;
 ``` 
 
 Type:[RectangleSizePlain](./rectanglesizeplain) 
An object that defines the width and height of the test browser viewport in pixels. 
### visualGridOptions property
Use this property to set and retrieve configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
config.visualGridOptions = configval;
configval = config.visualGridOptions;
 ``` 
 
 Type: 
 `{ [key: string]: any };` 


 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualgridoptions-method). 
### waitBeforeScreenshots property
Use this property to set and retrieve the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
config.waitBeforeScreenshots = configval;
configval = config.waitBeforeScreenshots;
 ``` 
 
 Type:number 
The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
### addBrowser method
Request that the checkpoint be rendered by the Ultrafast Grid using a particular target desktop or mobile device browser.
The following types of targets can be specified by passing different types of parameters:

*   Desktop browser: The page is rendered using a desktop browser you specify. The set of supported browsers is defined by the enum [`BrowserType`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-browsertype-nightwatch-javascript.html). To request a browser from this list pass a [DesktopBrowserInfo](./desktopbrowserinfo) object, as shown for parameter below. You can also request a browser directly using the parameter as shown below.
*   Emulated mobile device: The page is rendered using Chrome device emulation. The set of supported devices is defined by the enum [`DeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-devicename-nightwatch-javascript.html-method). To request a device from this list pass a [chromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method) object, as shown for parameter below.
*   Simulated iOS mobile device: The page is rendered using a Safari browser running on a mobile device simulator. The set of supported devices is defined by the enum [`IosDeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-iosdevicename-nightwatch-javascript.html-method). To request a device from this list pass an [iosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method) object, as shown for parameter below.

When requesting a Desktop browser you also specify the required viewport size. When specifying a mobile device the viewport size is based on the device screen size, and you simply specify if you want to render using portrait (vertical) or landscape (horizontal) screen orientation.

You may define multiple targets with different browsers/devices and viewports/orientations by calling this method as many times as required. Eyes will produce a test results for each such configuration. Alternatively, pass a list of browsers and devices to the method [addBrowsers](#addbrowsers-method).

#### Syntax 
 ``` 
let configval = config.addBrowser(browserInfo_dsktp);

let configval = config.addBrowser(browserInfo_chrm);

let configval = config.addBrowser(browserInfo_ios);

let configval = config.addBrowser(browserInfo_obj);

let configval = config.addBrowser(width, height, name);

let configval = config.addBrowser(width, height);
 ``` 

 #### Parameters 
 ###### browserInfo\_dsktp 
  
 Type:[DesktopBrowserInfo](./desktopbrowserinfo) 
  
 An object that defines the attributes of the browser and the viewport. 
  
  ###### [DesktopBrowserInfo](./desktopbrowserinfo) 
  
 browserInfo\_chrm 
  
 Type:[ChromeEmulationInfo](./chromeemulationinfo) 
  
  ###### An object that defines the attributes of the browser and the viewport. 
  
 [ChromeEmulationInfo](./chromeemulationinfo) 
  
 browserInfo\_ios 
  
  ###### Type:[IOSDeviceInfo](./iosdeviceinfo) 
  
 An object that defines the attributes of the browser and the viewport. 
  
 [IOSDeviceInfo](./iosdeviceinfo) 
  
  ###### browserInfo\_obj 
  
 Type:{ 
       deviceName: 
         | DeviceName 
         | "BlackBerry Z30" 
    | "Blackberry PlayBook" 
         | "Galaxy A5" 
         | "Galaxy Note 10" 
         | "Galaxy Note 10 Plus" 
         | "Galaxy Note 2" 
         | "Galaxy Note 3" 
    | "Galaxy Note 4" 
         | "Galaxy Note 8" 
         | "Galaxy Note 9" 
         | "Galaxy S10" 
         | "Galaxy S10 Plus" 
         | "Galaxy S3" 
    | "Galaxy S5" 
         | "Galaxy S8" 
         | "Galaxy S8 Plus" 
         | "Galaxy S9" 
         | "Galaxy S9 Plus" 
         | "Kindle Fire HDX" 
    | "LG G6" 
         | "LG Optimus L70" 
         | "Laptop with HiDPI screen" 
         | "Laptop with MDPI screen" 
         | "Laptop with touch" 
         | "Microsoft Lumia 550" 
    | "Microsoft Lumia 950" 
         | "Nexus 10" 
         | "Nexus 4" 
         | "Nexus 5" 
         | "Nexus 5X" 
         | "Nexus 6" 
    | "Nexus 6P" 
         | "Nexus 7" 
         | "Nokia Lumia 520" 
         | "Nokia N9" 
         | "OnePlus 7T" 
         | "OnePlus 7T Pro" 
    | "Pixel 2" 
         | "Pixel 2 XL" 
         | "Pixel 3" 
         | "Pixel 3 XL" 
         | "Pixel 4" 
         | "Pixel 4 XL" 
    | "iPad" 
         | "iPad 6th Gen" 
         | "iPad 7th Gen" 
         | "iPad Air 2" 
         | "iPad Mini" 
         | "iPad Pro" 
    | "iPhone 11" 
         | "iPhone 11 Pro" 
         | "iPhone 11 Pro Max" 
         | "iPhone 4" 
         | "iPhone 5/SE" 
         | "iPhone 6/7/8" 
    | "iPhone 6/7/8 Plus" 
         | "iPhone X" 
         | "iPhone XR" 
         | "iPhone XS" 
         | "iPhone XS Max"; 
       screenOrientation?: ScreenOrientation | "landscape" | "portrait"; 
  ######     };  
  
 An object that defines the attributes of the browser and the viewport. 
  
     { 
       deviceName: 
    | DeviceName 
         | "BlackBerry Z30" 
         | "Blackberry PlayBook" 
         | "Galaxy A5" 
         | "Galaxy Note 10" 
         | "Galaxy Note 10 Plus" 
    | "Galaxy Note 2" 
         | "Galaxy Note 3" 
         | "Galaxy Note 4" 
         | "Galaxy Note 8" 
         | "Galaxy Note 9" 
         | "Galaxy S10" 
    | "Galaxy S10 Plus" 
         | "Galaxy S3" 
         | "Galaxy S5" 
         | "Galaxy S8" 
         | "Galaxy S8 Plus" 
         | "Galaxy S9" 
    | "Galaxy S9 Plus" 
         | "Kindle Fire HDX" 
         | "LG G6" 
         | "LG Optimus L70" 
         | "Laptop with HiDPI screen" 
         | "Laptop with MDPI screen" 
    | "Laptop with touch" 
         | "Microsoft Lumia 550" 
         | "Microsoft Lumia 950" 
         | "Nexus 10" 
         | "Nexus 4" 
         | "Nexus 5" 
    | "Nexus 5X" 
         | "Nexus 6" 
         | "Nexus 6P" 
         | "Nexus 7" 
         | "Nokia Lumia 520" 
         | "Nokia N9" 
    | "OnePlus 7T" 
         | "OnePlus 7T Pro" 
         | "Pixel 2" 
         | "Pixel 2 XL" 
         | "Pixel 3" 
         | "Pixel 3 XL" 
    | "Pixel 4" 
         | "Pixel 4 XL" 
         | "iPad" 
         | "iPad 6th Gen" 
         | "iPad 7th Gen" 
         | "iPad Air 2" 
    | "iPad Mini" 
         | "iPad Pro" 
         | "iPhone 11" 
         | "iPhone 11 Pro" 
         | "iPhone 11 Pro Max" 
         | "iPhone 4" 
    | "iPhone 5/SE" 
         | "iPhone 6/7/8" 
         | "iPhone 6/7/8 Plus" 
         | "iPhone X" 
         | "iPhone XR" 
         | "iPhone XS" 
    | "iPhone XS Max"; 
       screenOrientation?: ScreenOrientation | "landscape" | "portrait"; 
     };  
  
 width 
  
  ###### Type:number 
  
 The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail. 
  
 Use this in conjunction with the parameter. 
  
  ###### height 
  
 Type:number 
  
 The height of the browser viewport for this target. There is no height limit. 
  
  ###### Use this in conjunction with the parameter. 
  
 name 
  
 Type:[BrowserType](./browsertype) \[Optional\] 
  
  ###### The type of browser for this target. 
  
 JavaScript 
  
         suiteConfig = new Configuration()  
             .addBrowser(viewPortWidth, viewPortHeight, BrowserType.CHROME)   
  ######     /* ... other configurations */  ;  
         /* 
          * Assign the configuration to all newly created Eyes instances 
          */ 
         eyes = new Eyes(runner); 
         eyes.setConfiguration(suiteConfig); 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration has been provided. The viewport passed to the [Eyes.open](./eyes#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript. 
### addBrowsers method
Request that the checkpoint be rendered by the Ultrafast Grid using the specified desktop browsers and viewport sizes.

#### Syntax 
 ``` 
let configval = config.addBrowsers(browsersInfo);
 ``` 

 #### Parameters 
 ###### browsersInfo 
  
 Type:( 
       | DesktopBrowserInfo 
       | ChromeEmulationInfo 
       | IOSDeviceInfo 
  | { 
           deviceName: 
             | DeviceName 
             | "BlackBerry Z30" 
             | "Blackberry PlayBook" 
             | "Galaxy A5" 
        | "Galaxy Note 10" 
             | "Galaxy Note 10 Plus" 
             | "Galaxy Note 2" 
             | "Galaxy Note 3" 
             | "Galaxy Note 4" 
             | "Galaxy Note 8" 
        | "Galaxy Note 9" 
             | "Galaxy S10" 
             | "Galaxy S10 Plus" 
             | "Galaxy S3" 
             | "Galaxy S5" 
             | "Galaxy S8" 
        | "Galaxy S8 Plus" 
             | "Galaxy S9" 
             | "Galaxy S9 Plus" 
             | "Kindle Fire HDX" 
             | "LG G6" 
             | "LG Optimus L70" 
        | "Laptop with HiDPI screen" 
             | "Laptop with MDPI screen" 
             | "Laptop with touch" 
             | "Microsoft Lumia 550" 
             | "Microsoft Lumia 950" 
             | "Nexus 10" 
        | "Nexus 4" 
             | "Nexus 5" 
             | "Nexus 5X" 
             | "Nexus 6" 
             | "Nexus 6P" 
             | "Nexus 7" 
        | "Nokia Lumia 520" 
             | "Nokia N9" 
             | "OnePlus 7T" 
             | "OnePlus 7T Pro" 
             | "Pixel 2" 
             | "Pixel 2 XL" 
        | "Pixel 3" 
             | "Pixel 3 XL" 
             | "Pixel 4" 
             | "Pixel 4 XL" 
             | "iPad" 
             | "iPad 6th Gen" 
        | "iPad 7th Gen" 
             | "iPad Air 2" 
             | "iPad Mini" 
             | "iPad Pro" 
             | "iPhone 11" 
             | "iPhone 11 Pro" 
        | "iPhone 11 Pro Max" 
             | "iPhone 4" 
             | "iPhone 5/SE" 
             | "iPhone 6/7/8" 
             | "iPhone 6/7/8 Plus" 
             | "iPhone X" 
        | "iPhone XR" 
             | "iPhone XS" 
             | "iPhone XS Max"; 
           screenOrientation?: ScreenOrientation | "landscape" | "portrait"; 
         } 
     )[];  
  ######  
 One or more browser or device configuration definitions passed as an array or multiple parameters. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
You can use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [addBrowser](#addbrowser-method). 
### addDeviceEmulation method
Request that the checkpoint be rendered by the Ultrafast Grid using Chrome mobile emulation.

#### Syntax 
 ``` 
let configval = config.addDeviceEmulation(deviceName, screenOrientation);

let configval = config.addDeviceEmulation(deviceName);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, from the list of devices defined by [DeviceName](./devicename). 
  
  ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional\] 
  
 Whether the device is in portrait or landscape mode. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### addProperty method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html) by these properties in the Test Manager.. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](#) method, [Configuration.setProperties](#setproperties-method) method or [Configuration.properties](#properties-property) property.

#### Syntax 
 ``` 
let configval = config.addProperty(name, value);

let configval = config.addProperty(prop);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value associated with the name. 
  
  ###### prop 
  
 Type:[PropertyDataPlain](./propertydataplain) 
  
 [PropertyDataPlain](./propertydataplain) 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method). 
### clearProperties method
Clears any custom key name/value properties.

#### Syntax 
 ``` 
let configval = config.clearProperties();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration) 
### getAccessibilityValidation method
Use this method to retrieve the accessibility testing level.

#### Syntax 
 ``` 
let configval = config.getAccessibilityValidation();
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
let configval = config.getAgentId();
config.agentId = configval;
configval = config.agentId;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getApiKey method
Use this method to retrieve your Eyes license key that you set with [setApiKey](./eyes#setapikey-method), or was extracted from the APPLITOOLS\_API\_KEY environment variable.

#### Syntax 
 ``` 
let configval = config.getApiKey();
config.apiKey = configval;
configval = config.apiKey;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getAppName method
Returns the value configured by [setAppName](#setappname-method) or [setAppName](./eyes#setappname-method).

#### Syntax 
 ``` 
let configval = config.getAppName();
config.appName = configval;
configval = config.appName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getBaselineBranchName method
Returns the value configured by [setBaselineBranchName](#setbaselinebranchname-method).

#### Syntax 
 ``` 
let configval = config.getBaselineBranchName();
config.baselineBranchName = configval;
configval = config.baselineBranchName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getBaselineEnvName method
Returns the value configured by [setBaselineEnvName](#setbaselineenvname-method).

#### Syntax 
 ``` 
let configval = config.getBaselineEnvName();
config.baselineEnvName = configval;
configval = config.baselineEnvName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getBatch method
Returns the value configured by the [setBatch](#setbatch-method) method.

#### Syntax 
 ``` 
let configval = config.getBatch();
config.batch = configval;
configval = config.batch;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [BatchInfo](./batchinfo) 
### getBranchName method
Returns the branchname configured by [setBranchName](#setbranchname-method).

#### Syntax 
 ``` 
let configval = config.getBranchName();
config.branchName = configval;
configval = config.branchName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getDeviceInfo method
Retrieve the name of the device being rendered on the Ultrafast Grid, if it was configured explicitly by the user.

#### Syntax 
 ``` 
let configval = config.getDeviceInfo();
config.deviceInfo = configval;
configval = config.deviceInfo;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getForceFullPageScreenshot method
Use this method to retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
let configval = config.getForceFullPageScreenshot();
config.forceFullPageScreenshot = configval;
configval = config.forceFullPageScreenshot;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHideCaret method
Use this method to retrieve whether Eyes hides the cursor before the screenshot is captured or not.

#### Syntax 
 ``` 
let configval = config.getHideCaret();
config.hideCaret = configval;
configval = config.hideCaret;
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
let configval = config.getHideScrollbars();
config.hideScrollbars = configval;
configval = config.hideScrollbars;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getHostApp method
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax 
 ``` 
let configval = config.getHostApp();
config.hostApp = configval;
configval = config.hostApp;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getHostOS method
Use this method to retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
let configval = config.getHostOS();
config.hostOS = configval;
configval = config.hostOS;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getIgnoreCaret method
Use this method to retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
let configval = config.getIgnoreCaret();
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
let configval = config.getIgnoreDisplacements();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getIsDisabled method
Use this method to retrieve whether or not interactions with Eyes are ignored.
You can enable and disable Eyes using the [setIsDisabled](./eyes#setisdisabled-method) method.

#### Syntax 
 ``` 
let configval = config.getIsDisabled();
config.getIsDisabled = configval;
configval = config.getIsDisabled;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

If true, then all calls to Eyes are ignored, if false then all calls to Eyes work as usual. 
### getMatchLevel method
Use this method to retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
let configval = config.getMatchLevel();
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
let configval = config.getMatchTimeout();
config.matchTimeout = configval;
configval = config.matchTimeout;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getParentBranchName method
Returns the value configured by [setParentBranchName](#setparentbranchname-method).

#### Syntax 
 ``` 
let configval = config.getParentBranchName();
config.parentBranchName = configval;
configval = config.parentBranchName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getProperties method
Returns the set of user-defined properties.

#### Syntax 
 ``` 
let configval = config.getProperties();
config.properties = configval;
configval = config.properties;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [PropertyData](./propertydata)\[\] 
### getProxy method
Use this method to retrieve the settings used to access the Eyes proxy server.

#### Syntax 
 ``` 
let configval = config.getProxy();
config.proxy = configval;
configval = config.proxy;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ProxySettings](./proxysettings) 
### getRotation method
Use this method to retrieve the amount the image is rotated before matching in degrees.

#### Syntax 
 ``` 
let configval = config.getRotation();
config.rotation = configval;
configval = config.rotation;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ImageRotation](./imagerotation) 
### getSaveDiffs method
Returns the value configured by [setSaveDiffs](#setsavediffs-method).

#### Syntax 
 ``` 
let configval = config.getSaveDiffs();
config.saveDiffs = configval;
configval = config.saveDiffs;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getSaveNewTests method
Use this method to retrieve whether or not 'new' tests are saved to the baseline by default.

#### Syntax 
 ``` 
let configval = config.getSaveNewTests();
config.saveNewTests = configval;
configval = config.saveNewTests;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getScaleRatio method
Use this method to retrieve the scale ratio to be applied to images before matching.

#### Syntax 
 ``` 
let configval = config.getScaleRatio();
config.scaleRatio = configval;
configval = config.scaleRatio;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getScrollRootElement method
Returns the element to which [Configuration.setHideScrollbars](#sethidescrollbars-method) applies to.

#### Syntax 
 ``` 
let configval = config.getScrollRootElement();
config.scrollRootElement = configval;
configval = config.scrollRootElement;
 ``` 
 
 Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.

Selector

Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;type:string}.
        
 ####  Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

    Element|Selector

Returns the value most recently set using [Configuration.setScrollRootElement](#setscrollrootelement-method), or returns an undefined value if this method was not called.

#### Type definitions

Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.

Selector

Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;type:string}. 
### getSendDom method
Use this method to retrieve if DOM information is being sent for checkpoints.

#### Syntax 
 ``` 
let configval = config.getSendDom();
config.sendDom = configval;
configval = config.sendDom;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getServerUrl method
Use this method to retrieve the URL of the Eyes server used to process the captured images.

#### Syntax 
 ``` 
let configval = config.getServerUrl();
config.serverUrl = configval;
configval = config.serverUrl;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getStitchMode method
Returns the value configured by [setStitchMode](#setstitchmode-method).

#### Syntax 
 ``` 
let configval = config.getStitchMode();
config.stitchMode = configval;
configval = config.stitchMode;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [StitchMode](./stitchmode) 
### getStitchOverlap method
Use this method to retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
let configval = config.getStitchOverlap();
config.stitchOverlap = configval;
configval = config.stitchOverlap;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getTestName method
Returns the value configured by [setTestName](#settestname-method).

#### Syntax 
 ``` 
let configval = config.getTestName();
config.testName = configval;
configval = config.testName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getViewportSize method
Returns the value configured by [setViewportSize](#setviewportsize-method).

#### Syntax 
 ``` 
let configval = config.getViewportSize();
config.viewportSize = configval;
configval = config.viewportSize;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RectangleSize](./rectanglesize) 
### getVisualGridOptions method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
let configval = config.getVisualGridOptions();
config.visualGridOptions = configval;
configval = config.visualGridOptions;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:{ [key: string]: any }; 
### getWaitBeforeScreenshots method
Returns the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
let configval = config.getWaitBeforeScreenshots();
config.waitBeforeScreenshots = configval;
configval = config.waitBeforeScreenshots;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### setAccessibilityValidation method
Use this method to set the accessibility testing level to use.

#### Syntax 
 ``` 
let configval = config.setAccessibilityValidation(accessibilityValidation);
 ``` 

 #### Parameters 
 ###### accessibilityValidation 
  
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
let configval = config.setAgentId(agentId);
config.agentId = configval;
configval = config.agentId;
 ``` 

 #### Parameters 
 ###### agentId 
  
 Type:string 
  
 The agent id to be configured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
let configval = config.setApiKey(apiKey);
config.apiKey = configval;
configval = config.apiKey;
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:string 
  
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
let configval = config.setAppName(appName);
config.appName = configval;
configval = config.appName;
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:string 
  
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
let configval = config.setBaselineBranchName(baselineBranchName);
config.baselineBranchName = configval;
configval = config.baselineBranchName;
 ``` 

 #### Parameters 
 ###### baselineBranchName 
  
 Type:string 
  
 The baseline branch name to be configured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](./eyes#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
let configval = config.setBaselineEnvName(baselineEnvName);
config.baselineEnvName = configval;
configval = config.baselineEnvName;
 ``` 

 #### Parameters 
 ###### baselineEnvName 
  
 Type:string 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBatch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
let configval = config.setBatch(batch);
config.batch = configval;
configval = config.batch;
 ``` 

 #### Parameters 
 ###### batch 
  
 Type:[BatchInfoPlain](./batchinfoplain) 
  
 An object that defines the batch configuration. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBranchName method
Use this method to set the branch used for the baseline of this run.

#### Syntax 
 ``` 
let configval = config.setBranchName(branchName);
config.branchName = configval;
configval = config.branchName;
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:string 
  
 The branch name to be used by the configuration. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBrowsersInfo method
Sets the devices to be rendered on the Ultrafast Grid.
The method sets the full list of all the browsers to be rendered on the Ultrafast Grid, removing any previously defined browsers. This method differs from the methods [addBrowser](#addbrowser-method) and [addDeviceEmulation](#adddeviceemulation-method), which build the list of browsers and devices incrementally (i.e. each call to addXXXX adds more browsers to the list of browsers to be rendered). If you call [setBrowsersInfo](#) after calling any of the addXXXX methods then the devices configured by the addXXXX will be lost. You may call the addXXXX methods after the [setBrowsersInfo](#) method to add more browsers to the list of browsers to be rendered.

#### Syntax 
 ``` 
let configval = config.setBrowsersInfo(browsersInfo);
config.browsersInfo = configval;
configval = config.browsersInfo;
 ``` 

 #### Parameters 
 ###### browsersInfo 
  
 Type:( 
       | DesktopBrowserInfo 
       | ChromeEmulationInfo 
       | IOSDeviceInfo 
  | { 
           deviceName: 
             | DeviceName 
             | "BlackBerry Z30" 
             | "Blackberry PlayBook" 
             | "Galaxy A5" 
        | "Galaxy Note 10" 
             | "Galaxy Note 10 Plus" 
             | "Galaxy Note 2" 
             | "Galaxy Note 3" 
             | "Galaxy Note 4" 
             | "Galaxy Note 8" 
        | "Galaxy Note 9" 
             | "Galaxy S10" 
             | "Galaxy S10 Plus" 
             | "Galaxy S3" 
             | "Galaxy S5" 
             | "Galaxy S8" 
        | "Galaxy S8 Plus" 
             | "Galaxy S9" 
             | "Galaxy S9 Plus" 
             | "Kindle Fire HDX" 
             | "LG G6" 
             | "LG Optimus L70" 
        | "Laptop with HiDPI screen" 
             | "Laptop with MDPI screen" 
             | "Laptop with touch" 
             | "Microsoft Lumia 550" 
             | "Microsoft Lumia 950" 
             | "Nexus 10" 
        | "Nexus 4" 
             | "Nexus 5" 
             | "Nexus 5X" 
             | "Nexus 6" 
             | "Nexus 6P" 
             | "Nexus 7" 
        | "Nokia Lumia 520" 
             | "Nokia N9" 
             | "OnePlus 7T" 
             | "OnePlus 7T Pro" 
             | "Pixel 2" 
             | "Pixel 2 XL" 
        | "Pixel 3" 
             | "Pixel 3 XL" 
             | "Pixel 4" 
             | "Pixel 4 XL" 
             | "iPad" 
             | "iPad 6th Gen" 
        | "iPad 7th Gen" 
             | "iPad Air 2" 
             | "iPad Mini" 
             | "iPad Pro" 
             | "iPhone 11" 
             | "iPhone 11 Pro" 
        | "iPhone 11 Pro Max" 
             | "iPhone 4" 
             | "iPhone 5/SE" 
             | "iPhone 6/7/8" 
             | "iPhone 6/7/8 Plus" 
             | "iPhone X" 
        | "iPhone XR" 
             | "iPhone XS" 
             | "iPhone XS Max"; 
           screenOrientation?: ScreenOrientation | "landscape" | "portrait"; 
         } 
     )[];  
  ######  
 List of objects that define browsers and emulated devices to be rendered. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setDeviceInfo method
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax 
 ``` 
let configval = config.setDeviceInfo(deviceInfo);
config.deviceInfo = configval;
configval = config.deviceInfo;
 ``` 

 #### Parameters 
 ###### deviceInfo 
  
 Type:string 
  
 The name of the device - this is displayed in the Device column in the Test Manager. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setForceFullPageScreenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
let configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
config.forceFullPageScreenshot = configval;
configval = config.forceFullPageScreenshot;
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
let configval = config.setHideCaret(hideCaret);
config.hideCaret = configval;
configval = config.hideCaret;
 ``` 

 #### Parameters 
 ###### hideCaret 
  
 Type:boolean 
  
 If this paramter has a value of true, then the cursor will be hidden before the image is captured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### setHideScrollbars method
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
let configval = config.setHideScrollbars(hideScrollbars);
config.hideScrollbars = configval;
configval = config.hideScrollbars;
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
let configval = config.setHostApp(hostApp);
config.hostApp = configval;
configval = config.hostApp;
 ``` 

 #### Parameters 
 ###### hostApp 
  
 Type:string 
  
 The value to be used for the Host App property. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
let configval = config.setHostOS(hostOS);
config.hostOS = configval;
configval = config.hostOS;
 ``` 

 #### Parameters 
 ###### hostOS 
  
 Type:string 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
let configval = config.setIgnoreCaret(ignoreCaret);
 ``` 

 #### Parameters 
 ###### ignoreCaret 
  
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
let configval = config.setIgnoreDisplacements(ignoreDisplacements);
 ``` 

 #### Parameters 
 ###### ignoreDisplacements 
  
 Type:boolean 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel) 
### setIsDisabled method
Use this method to set whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
let configval = config.setIsDisabled(isDisabled);
config.setIsDisabled = configval;
configval = config.setIsDisabled;
 ``` 

 #### Parameters 
 ###### isDisabled 
  
 Type:boolean 
  
 If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
let configval = config.setMatchLevel(matchLevel);
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
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setMatchTimeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
let configval = config.setMatchTimeout(matchTimeout);
config.matchTimeout = configval;
configval = config.matchTimeout;
 ``` 

 #### Parameters 
 ###### matchTimeout 
  
 Type:number 
  
 The timeout to set in milliseconds. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in nightwatch javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
let configval = config.setParentBranchName(parentBranchName);
config.parentBranchName = configval;
configval = config.parentBranchName;
 ``` 

 #### Parameters 
 ###### parentBranchName 
  
 Type:string 
  
 The parent branch name to be configured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setProperties method
Set a list of user-defined properties each of which is a key/value pair.

#### Syntax 
 ``` 
let configval = config.setProperties(properties);
config.properties = configval;
configval = config.properties;
 ``` 

 #### Parameters 
 ###### properties 
  
 Type:[PropertyDataPlain](./propertydataplain)\[\] 
  
 List of propertydata objects. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method). 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
let configval = config.setProxy(proxy);

let configval = config.setProxy(url, username, password, isHttpOnly);

let configval = config.setProxy(url, username, password);

let configval = config.setProxy(url, username);

let configval = config.setProxy(url);

let configval = config.setProxy(isEnabled);
config.proxy = configval;
configval = config.proxy;
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:[ProxySettingsPlain](./proxysettingsplain) 
  
 An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
  
  ###### url 
  
 Type:string 
  
 The proxy URL to be used by the serverConnector. If it has a value of null then no proxy is set. 
  
  ###### username 
  
 Type:string \[Optional\] 
  
 The string to pass as the username. 
  
  ###### password 
  
 Type:string \[Optional\] 
  
 The string to pass as the password. 
  
  ###### isHttpOnly 
  
 Type:boolean \[Optional\] 
  
 A value of true specifies that the SDK should communicate with the server using an http tunnel. Use this if your http proxy blocks https communication. 
  
  ###### isEnabled 
  
 Type:false 
  
 If this parameter is provided, then it must have a value of false and it means that use of the proxy is disabled. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setRotation method
Use this method to set the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
let configval = config.setRotation(rotation_lit);

let configval = config.setRotation(rotation_obj);
config.rotation = configval;
configval = config.rotation;
 ``` 
 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270
 #### Parameters 
 ###### rotation\_lit 
  
 Type:ImageRotationPlain 
  
 The number of degrees to rotate. 
  
  ###### A literal object that defines the amount to rotate. 
  
 #### Type definitions 
  
 ImageRotationPlain 
  
  ###### The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
  
 rotation\_obj 
  
 Type:[ImageRotation](./imagerotation) 
  
  ###### The number of degrees to rotate. 
  
 A class object that defines the amount to rotate. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
let configval = config.setSaveDiffs(saveDiffs);
config.saveDiffs = configval;
configval = config.saveDiffs;
 ``` 

 #### Parameters 
 ###### saveDiffs 
  
 Type:boolean 
  
 Set to true to configure Save Diffs functionality. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
let configval = config.setSaveNewTests(saveNewTests);
config.saveNewTests = configval;
configval = config.saveNewTests;
 ``` 

 #### Parameters 
 ###### saveNewTests 
  
 Type:boolean 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setScaleRatio method
Use this method to set the scale ratio to be applied to images before matching.

#### Syntax 
 ``` 
let configval = config.setScaleRatio(scaleRatio);
config.scaleRatio = configval;
configval = config.scaleRatio;
 ``` 

 #### Parameters 
 ###### scaleRatio 
  
 Type:number 
  
 The scale ratio to use. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setScrollRootElement method
Use this method to set the element to which [setHideScrollbars](#sethidescrollbars-method) will be applied.

#### Syntax 
 ``` 
let configval = config.setScrollRootElement(scrollRootElement_ele);

let configval = config.setScrollRootElement(scrollRootElement_sel);
config.scrollRootElement = configval;
configval = config.scrollRootElement;
 ``` 
 
 Element

Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult.
        
 ####  Parameters 
 ###### scrollRootElement\_ele 
  
 Type:Element 
  
 The element that should be scrolled. 
  
  ###### An element whose position and bounding rectangle defines the region. 
  
 #### Type definitions 
  
 Element 
  
  ###### Used to identify an HTML element defined as |{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}|import('nightwatch').NightwatchTypedCallbackResult. 
  
 scrollRootElement\_sel 
  
 Type:Selector 
  
  ###### The element that should be scrolled. 
  
 A selector to an element whose position and bounding rectangle defines the region. 
  
 #### Type definitions 
  
  ###### Selector 
  
 Used to identify an HTML element defined as |{locateStrategy:import('nightwatch').LocateStrategy;selector:'string'}|string|{selector:string;type:string}. 
  
 #### Return value 
Type: [Configuration](./configuration) 
### setSendDom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
let configval = config.setSendDom(sendDom);
config.sendDom = configval;
configval = config.sendDom;
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
let configval = config.setServerUrl(serverUrl);
config.serverUrl = configval;
configval = config.serverUrl;
 ``` 

 #### Parameters 
 ###### serverUrl 
  
 Type:string 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setStitchMode method
Use this method to set the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
let configval = config.setStitchMode(stitchMode);
config.stitchMode = configval;
configval = config.stitchMode;
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
let configval = config.setStitchOverlap(stitchOverlap);
config.stitchOverlap = configval;
configval = config.stitchOverlap;
 ``` 

 #### Parameters 
 ###### stitchOverlap 
  
 Type:number 
  
 The width of the stitch overlap in pixels. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setTestName method
Use this method to set the name of the test.

#### Syntax 
 ``` 
let configval = config.setTestName(testName);
config.testName = configval;
configval = config.testName;
 ``` 

 #### Parameters 
 ###### testName 
  
 Type:string 
  
 The test name to be configured for the test. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setViewportSize method
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
let configval = config.setViewportSize(viewportSize);
config.viewportSize = configval;
configval = config.viewportSize;
 ``` 

 #### Parameters 
 ###### viewportSize 
  
 Type:[RectangleSizePlain](./rectanglesizeplain) 
  
 An object that defines the width and height of the test browser viewport in pixels. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setVisualGridOption method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
let configval = config.setVisualGridOption();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
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

You can set this option globally using the method [Configuration.setVisualGridOption](#)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualgridoptions-method).
        
 ####  Example 
JavaScript

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
let configval = config.setWaitBeforeScreenshots(waitBeforeScreenshots);
config.waitBeforeScreenshots = configval;
configval = config.waitBeforeScreenshots;
 ``` 

 #### Parameters 
 ###### waitBeforeScreenshots 
  
 Type:number 
  
 The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
  
