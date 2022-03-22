# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes-method) object by passing it to the [Eyes.set\_configuration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style. 
 ### Import statement 
``` 
from applitools.selenium import Configuration
 
 ``` 
### Constructor 
### Configuration method
The constructor for the [Configuration](./configuration-method) class. This object isset upand then passed to the [Eyes.set\_configuration](./eyes#setconfiguration-method) method before the call to the [Eyes.open](./eyes#open-method) method.

#### Syntax 
 ``` 
config = Configuration()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: None

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 

## Properties 
### ignore_caret property
Use this property to set and retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
configval = config.ignore_caret
 ``` 
 
 Type:bool

 #### Remarks 
We recommend using [set\_hide\_caret](#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 

## Properties 
### ignore_caret property
Use this property to retrieve and set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
configval = config.ignore_caret
 ``` 
 
 Type:bool 
### is_send_dom property
Returns whether the DOM is being sent to the server or not.

#### Syntax 
 ``` 
configval = config.send_dom
 ``` 
 
 Type:bool 
### accessibility_validation property
Use this property to set and retrieve the accessibility testing level to use.

#### Syntax 
 ``` 
config.accessibility_validation  = configval
configval = config.accessibility_validation
 ``` 
 
 Type:[AccessibilitySettings](./accessibilitysettings)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### agent_id property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ``` 
config.agent_id  = configval
configval = config.agent_id
 ``` 
 
 Type:Text 
The agent id to be configured. 
### api_key property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
config.api_key  = configval
configval = config.api_key
 ``` 
 
 Type:Text 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### app_name property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
config.app_name  = configval
configval = config.app_name
 ``` 
 
 Type:Text 
The application name to be configured for the test.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a None, then the value set here will be used. 
### baseline_branch_name property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
config.baseline_branch_name  = configval
configval = config.baseline_branch_name
 ``` 
 
 Type:Text 
The baseline branch name to be configured. 
### baseline_env_name property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [open](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of None if it has not been assigned.

#### Syntax 
 ``` 
config.baseline_env_name  = configval
configval = config.baseline_env_name
 ``` 
 
 Type:Text 
The name of the baseline environment. 
### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
config.batch  = configval
configval = config.batch
 ``` 
 
 Type:[BatchInfo](./batchinfo) 
An object that defines the batch configuration. 
### branch_name property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
config.branch_name  = configval
configval = config.branch_name
 ``` 
 
 Type:Text 
The branch name to be used by the configuration. 
### features property
Use this method to enable various Eyes features.

#### Syntax 
 ``` 
config.features  = configval
configval = config.features
 ``` 
 
 Type:Set\[[Feature](./feature)\] 
A feature to set.
        
 ####  Remarks 
The following values may be passed to this method: 
### force_full_page_screenshot property
Use this property to set and retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
config.force_full_page_screenshot  = configval
configval = config.force_full_page_screenshot
 ``` 
 
 Type:bool 
### hide_caret property
Use this property to set and retrieve whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
config.hide_caret  = configval
configval = config.hide_caret
 ``` 
 
 Type:bool 
If this paramter has a value of True, then the cursor will be hidden before the image is captured.
        
 ####  Remarks 
We recommend using this method instead of [Configuration.set\_ignore\_caret](#setignorecaret-method) or [SeleniumCheckSettings.ignore\_caret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### hide_scrollbars property
Use this property to set and retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
config.hide_scrollbars  = configval
configval = config.hide_scrollbars
 ``` 
 
 Type:bool 
If set to True then hide the scrollbars. Otherwise, don't hide the scrollbars. 
### host_app property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
config.host_app  = configval
configval = config.host_app
 ``` 
 
 Type:Text 
The value to be used for the Host App property. 
### host_os property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
config.host_os  = configval
configval = config.host_os
 ``` 
 
 Type:Text 
The value to be used for the Host OS Property. 
### ignore_displacements property
Use this property to set and retrieve whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
config.ignore_displacements  = configval
configval = config.ignore_displacements
 ``` 
 
 Type:bool

 #### Remarks 
Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel) 
### is_disabled property
Use this property to set and retrieve whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
config.is_disabled  = configval
configval = config.is_disabled
 ``` 
 
 Type:bool 
If this has a value of True then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
### match_level property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
config.match_level  = configval
configval = config.match_level
 ``` 
 
 Type:[MatchLevel](./matchlevel) 
Available match level values are:

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### match_timeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
config.match_timeout  = configval
configval = config.match_timeout
 ``` 
 
 Type:int 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`check_window`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### parent_branch_name property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
config.parent_branch_name  = configval
configval = config.parent_branch_name
 ``` 
 
 Type:Text 
The parent branch name to be configured. 
### properties property
Set a list of user-defined properties each of which is a key/value pair.

#### Syntax 
 ``` 
config.properties  = configval
configval = config.properties
 ``` 
 
 Type:List\[Dict\[Text,Text\]\]

 #### Remarks 
*   Set multiple properties by calling [Eyes.add\_property](./eyes#addproperty-method) or [Configuration.add\_property](#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add\_property](./batchinfo#addproperty-method). 
### properties property
Set a list of user-defined properties each of which is a key/value pair.

#### Syntax 
 ``` 
config.properties  = configval
configval = config.properties
 ``` 
 
 Type:List\[Dict\[Text,Text\]\] 
List of propertydata objects.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.add\_property](./eyes#addproperty-method) or [Configuration.add\_property](#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add\_property](./batchinfo#addproperty-method). 
### save_diffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
config.save_diffs  = configval
configval = config.save_diffs
 ``` 
 
 Type:bool 
Set to True to configure Save Diffs functionality. 
### save_new_tests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
config.save_new_tests  = configval
configval = config.save_new_tests
 ``` 
 
 Type:bool 
If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
### send_dom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
config.send_dom  = configval
configval = config.send_dom
 ``` 
 
 Type:bool 
A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### server_url property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
config.server_url  = configval
configval = config.server_url
 ``` 
 
 Type:Text 
The URL of the Eyes server. Pass a value of None to use the default cloud server. 
### stitch_mode property
Use this property to set and retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
config.stitch_mode  = configval
configval = config.stitch_mode
 ``` 
 
 Type:[StitchMode](./stitchmode) 
The stitch mode to use. 
### stitch_overlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
config.stitch_overlap  = configval
configval = config.stitch_overlap
 ``` 
 
 Type:int 
The width of the stitch overlap in pixels. 
### test_name property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ``` 
config.test_name  = configval
configval = config.test_name
 ``` 
 
 Type:Text 
The test name to be configured for the test. 
### viewport_size property
Use this property to set and retrieve the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
config.viewport_size  = configval
configval = config.viewport_size
 ``` 
 
 Type:[RectangleSize](./rectanglesize) 
An object that defines the width and height of the test browser viewport in pixels. 
### visual_grid_options property
Use this property to set and retrieve configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
config.visual_grid_options  = configval
configval = config.visual_grid_options
 ``` 
 
 Type:Tuple\[[VisualGridOption](./visualgridoption)\]

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of False to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of True or False:

*   Setting a value of True instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of False instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.set\_visual\_grid\_options](#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visual\_grid\_options](./checksettings#visualgridoptions-method). 
### wait_before_screenshots property
Use this property to set and retrieve the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
config.wait_before_screenshots  = configval
configval = config.wait_before_screenshots
 ``` 
 
 Type:int 
The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
### add_browser method
Request that the checkpoint be rendered by the Ultrafast Grid using a particular target desktop or mobile device browser.
The following types of targets can be specified by passing different types of parameters:

*   Desktop browser: The page is rendered using a desktop browser you specify. The set of supported browsers is defined by the enum [`BrowserType`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-browsertype-selenium-python_sdk4.html-method). To request a browser from this list pass a [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method) object, as shown for parameter desktop\_browser\_info below. You can also request a browser directly using the browser\_type parameter as shown below.
*   Emulated mobile device: The page is rendered using Chrome device emulation. The set of supported devices is defined by the enum [`DeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-devicename-selenium-python_sdk4.html-method). To request a device from this list pass a [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method) object, as shown for parameter chrome\_emulation\_info below.
*   Simulated iOS mobile device: The page is rendered using a Safari browser running on a mobile device simulator. The set of supported devices is defined by the enum [`IosDeviceName`](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-iosdevicename-selenium-python_sdk4.html-method). To request a device from this list pass an [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method) object, as shown for parameter ios\_device\_info below.

When requesting a Desktop browser you also specify the required viewport size. When specifying a mobile device the viewport size is based on the device screen size, and you simply specify if you want to render using portrait (vertical) or landscape (horizontal) screen orientation.

You may define multiple targets with different browsers/devices and viewports/orientations by calling this method as many times as required. Eyes will produce a test results for each such configuration. Alternatively, pass a list of browsers and devices to the method [add\_browsers](#addbrowsers-method).

#### Syntax 
 ``` 
configval = config.add_browser(desktop_browser_info)

configval = config.add_browser(ios_device_info)

configval = config.add_browser(chrome_emulation_info)

configval = config.add_browser(width, height, browser_type)

configval = config.add_browser(width, height, browser_type, baseline_env_name)
 ``` 

 #### Parameters 
 ###### desktop\_browser\_info 
  
 Type:[DesktopBrowserInfo](./desktopbrowserinfo) 
  
 Which desktop browser type and viewport size to use. 
  
  ###### Python 
  
     # test suite setup   
         suite_config = (Configuration()   
             .add_browser(DesktopBrowserInfo(viewport_width, viewport_height, BrowserType.EDGE_CHROMIUM))   
             # ... other configurations     
     )   
         # 
         # Assign the configuration to all newly created Eyes instances 
         # 
         eyes = Eyes(runner) 
         eyes.set_configuration(suite_config)  
  ######  
 ios\_device\_info 
  
 Type:[IosDeviceInfo](./iosdeviceinfo) 
  
 Defines the mobile device to be simulated and its vertical or horizontal orientation. 
  ######  
 Python 
  
     # test suite setup   
         suite_config = (Configuration()   
             .add_browser(IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.PORTRAIT))   
        # ... other configurations     
          )   
         # 
         # Assign the configuration to all newly created Eyes instances 
         # 
         eyes = Eyes(runner) 
    eyes.set_configuration(suite_config)  
  
 chrome\_emulation\_info 
  
 Type:[ChromeEmulationInfo](./chromeemulationinfo) 
  
  ###### Which mobile device to emulate and its vertical or horizontal orientation. 
  
 Python 
  
     # test suite setup   
         suite_config = (Configuration()   
        .add_browser(ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.LANDSCAPE))   
             # ... other configurations     
          )   
         # 
         # Assign the configuration to all newly created Eyes instances 
         # 
    eyes = Eyes(runner) 
         eyes.set_configuration(suite_config)  
  
 width 
  
 Type:int 
  ######  
 The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail. 
  
 Use this in conjunction with the browser\_type parameter. 
  
 height 
  ######  
 Type:int 
  
 The height of the browser viewport for this target. There is no height limit. 
  
 Use this in conjunction with the browser\_type parameter. 
  ######  
 browser\_type 
  
 Type:[BrowserType](./browsertype) 
  
 The type of browser for this target. 
  ######  
 Python 
  
     # test suite setup   
         suite_config = (Configuration()   
             .add_browser(viewport_width, viewport_height, BrowserType.CHROME)   
        # ... other configurations     
          )   
         # 
         # Assign the configuration to all newly created Eyes instances 
         # 
         eyes = Eyes(runner) 
    eyes.set_configuration(suite_config)  
  
 baseline\_env\_name 
  
 Type:Text 
  
  ###### The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 Use this in conjunction with the browser\_type parameter. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration has been provided. The viewport passed to the [Eyes.open](./eyes#open-method) method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript. 
### add_browsers method
Request that the checkpoint be rendered by the Ultrafast Grid using the specified desktop browsers and viewport sizes.

#### Syntax 
 ``` 
configval = config.add_browsers(renders_info)
 ``` 

 #### Parameters 
 ###### renders\_info 
  
 Type:Union\[[DesktopBrowserInfo](./desktopbrowserinfo),[IosDeviceInfo](./iosdeviceinfo),[ChromeEmulationInfo](./chromeemulationinfo)\] 
  
 One or more browser or device configuration definitions passed as an array or multiple parameters. 
  
  ###### Define the browser or device configurations using instances of one or more of the following classes: 
  
 *   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser. 
 *   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device. 
 *   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device. 
  
  ###### renders\_info 
  
 Type:Union\[[DesktopBrowserInfo](./desktopbrowserinfo),[IosDeviceInfo](./iosdeviceinfo),[ChromeEmulationInfo](./chromeemulationinfo)\] 
  
 One or more browser or device configuration definitions passed as an array or multiple parameters. 
  
  ###### Define the browser or device configurations using instances of one or more of the following classes: 
  
 *   [DesktopBrowserInfo](./desktopbrowserinfo#desktopbrowserinfo-method): to run the test on a desktop browser. 
 *   [IosDeviceInfo](./iosdeviceinfo#iosdeviceinfo-method): to run the test on a Simulated iOS mobile device. 
 *   [ChromeEmulationInfo](./chromeemulationinfo#chromeemulationinfo-method): to run the test using on an emulated mobile device. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks .
        
 #### an use this method to pass a list of configurations instead of configuring each browser device individually using multiple calls to [add\_browser](#addbrowser-method).
 
 #### Example  
Python

    # test suite setup  
        target_list = [
            DesktopBrowserInfo(viewport_width, viewport_height, BrowserType.FIREFOX),
            ChromeEmulationInfo(DeviceName.Galaxy_S3, ScreenOrientation.LANDSCAPE),
            IosDeviceInfo(IosDeviceName.iPhone_8, ScreenOrientation.PORTRAIT)
        ]
        suite_config = (Configuration()  
            .add_browsers(target_list)  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 
### add_device_emulation method
Request that the checkpoint be rendered by the Ultrafast Grid using Chrome mobile emulation.

#### Syntax 
 ``` 
configval = config.add_device_emulation(device_name, orientation)

configval = config.add_device_emulation(device_name)
 ``` 

 #### Parameters 
 ###### device\_name 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, from the list of devices defined by [DeviceName](./devicename). 
  
  ###### orientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.PORTRAIT \] 
  
 Whether the device is in portrait or landscape mode. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### add_property method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html) by these properties in the Test Manager.. You can set properties using the [Eyes.add\_property](./eyes#addproperty-method) method, [Configuration.add\_property](#) method, [Configuration.properties](#setproperties-property) property or [Configuration.properties](#setproperties-property) property.

#### Syntax 
 ``` 
configval = config.add_property(name, value)
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text 
  
 The name of the property. 
  
  ###### value 
  
 Type:Text 
  
 The value associated with the name. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.add\_property](./eyes#addproperty-method) or [Configuration.add\_property](#) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add\_property](./batchinfo#addproperty-method). 
### clear_properties method
Clears any custom key name/value properties.

#### Syntax 
 ``` 
configval = config.clear_properties()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Self 
### clone method
Returns a clone of the configuration object.

#### Syntax 
 ``` 
configval = config.clone()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)

A cloned [Configuration](./configuration) object. 
### set_accessibility_validation method
Use this method to set the accessibility testing level to use.

#### Syntax 
 ``` 
configval = config.set_accessibility_validation(accessibility_settings)
config.accessibility_validation  = configval
configval = config.accessibility_validation
 ``` 

 #### Parameters 
 ###### accessibility\_settings 
  
 Type:[AccessibilitySettings](./accessibilitysettings) \[Optional\] 
  
 The required accessibility settings. A value of None will disable accessibility checking. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### set_agent_id method
Use this method to set the name and version of the SDK.

#### Syntax 
 ``` 
configval = config.set_agent_id(agent_id)
config.agent_id  = configval
configval = config.agent_id
 ``` 

 #### Parameters 
 ###### agent\_id 
  
 Type:Text 
  
 The agent id to be configured. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_api_key method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
configval = config.set_api_key(api_key)
config.api_key  = configval
configval = config.api_key
 ``` 

 #### Parameters 
 ###### api\_key 
  
 Type:Text 
  
 A string that is your API Key. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### set_app_name method
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
configval = config.set_app_name(app_name)
config.app_name  = configval
configval = config.app_name
 ``` 

 #### Parameters 
 ###### app\_name 
  
 Type:Text 
  
 The application name to be configured for the test. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a None, then the value set here will be used. 
### set_baseline_branch_name method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
configval = config.set_baseline_branch_name(baseline_branch_name)
config.baseline_branch_name  = configval
configval = config.baseline_branch_name
 ``` 

 #### Parameters 
 ###### baseline\_branch\_name 
  
 Type:Text 
  
 The baseline branch name to be configured. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_baseline_env_name method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](./eyes#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
configval = config.set_baseline_env_name(baseline_env_name)
config.baseline_env_name  = configval
configval = config.baseline_env_name
 ``` 

 #### Parameters 
 ###### baseline\_env\_name 
  
 Type:Text 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_batch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
configval = config.set_batch(batch)
config.batch  = configval
configval = config.batch
 ``` 

 #### Parameters 
 ###### batch 
  
 Type:[BatchInfo](./batchinfo) 
  
 An object that defines the batch configuration. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_branch_name method
Use this method to set the branch used for the baseline of this run.

#### Syntax 
 ``` 
configval = config.set_branch_name(branch_name)
config.branch_name  = configval
configval = config.branch_name
 ``` 

 #### Parameters 
 ###### branch\_name 
  
 Type:Text 
  
 The branch name to be used by the configuration. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_features method
Use this method to enable various Eyes features.

#### Syntax 
 ``` 
configval = config.set_features(features)
config.features  = configval
configval = config.features
 ``` 

 #### Parameters 
 ###### features 
  
 Type:[Feature](./feature) 
  
 One or more features to set. 
  
 #### Return value 
Type: Self

 #### Remarks 
The following values may be passed to this method: 
### set_force_full_page_screenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
configval = config.set_force_full_page_screenshot(force_full_page_screenshot)
config.force_full_page_screenshot  = configval
configval = config.force_full_page_screenshot
 ``` 

 #### Parameters 
 ###### force\_full\_page\_screenshot 
  
 Type:bool 
  
 If this paramter has a value of True, then Eyes will do scrolling and stitching if necessary. If False, then the result is browser dependent. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_hide_caret method
Use this method to set whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
configval = config.set_hide_caret(hide_caret)
config.hide_caret  = configval
configval = config.hide_caret
 ``` 

 #### Parameters 
 ###### hide\_caret 
  
 Type:bool 
  
 If this paramter has a value of True, then the cursor will be hidden before the image is captured. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using this method instead of [Configuration.set\_ignore\_caret](#setignorecaret-method) or [SeleniumCheckSettings.ignore\_caret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### set_hide_scrollbars method
Use this method to set whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
configval = config.set_hide_scrollbars(hide_scrollbars)
config.hide_scrollbars  = configval
configval = config.hide_scrollbars
 ``` 

 #### Parameters 
 ###### hide\_scrollbars 
  
 Type:bool 
  
 If set to True then hide the scrollbars. Otherwise, don't hide the scrollbars. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_host_app method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
configval = config.set_host_app(host_app)
config.host_app  = configval
configval = config.host_app
 ``` 

 #### Parameters 
 ###### host\_app 
  
 Type:Text 
  
 The value to be used for the Host App property. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_host_os method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
configval = config.set_host_os(host_os)
config.host_os  = configval
configval = config.host_os
 ``` 

 #### Parameters 
 ###### host\_os 
  
 Type:Text 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_ignore_caret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
configval = config.set_ignore_caret(ignore_caret)
config.ignore_caret  = configval
configval = config.ignore_caret
 ``` 

 #### Parameters 
 ###### ignore\_caret 
  
 Type:bool 
  
 If set to True, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using [set\_hide\_caret](#sethidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 
### set_ignore_displacements method
Use this method to set whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
configval = config.set_ignore_displacements(ignore_displacements)
config.ignore_displacements  = configval
configval = config.ignore_displacements
 ``` 

 #### Parameters 
 ###### ignore\_displacements 
  
 Type:bool 
  
 If a value of True is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel) 
### set_match_level method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
configval = config.set_match_level(match_level)
config.match_level  = configval
configval = config.match_level
 ``` 

 #### Parameters 
 ###### match\_level 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [NONE](./matchlevel) 
 *   [STRICT](./matchlevel) 
 *   [LAYOUT](./matchlevel) 
 *   [CONTENT](./matchlevel) 
 *   [EXACT](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### set_match_timeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
configval = config.set_match_timeout(match_timeout)
config.match_timeout  = configval
configval = config.match_timeout
 ``` 

 #### Parameters 
 ###### match\_timeout 
  
 Type:int 
  
 The timeout to set in milliseconds. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`check_window`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### set_parent_branch_name method
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
configval = config.set_parent_branch_name(parent_branch_name)
config.parent_branch_name  = configval
configval = config.parent_branch_name
 ``` 

 #### Parameters 
 ###### parent\_branch\_name 
  
 Type:Text 
  
 The parent branch name to be configured. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_proxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
configval = config.set_proxy(proxy)
config.proxy  = configval
configval = config.proxy
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:[ProxySettings](./proxysettings) \[Optional\] 
  
 An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_save_diffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
configval = config.set_save_diffs(save_diffs)
config.save_diffs  = configval
configval = config.save_diffs
 ``` 

 #### Parameters 
 ###### save\_diffs 
  
 Type:bool 
  
 Set to True to configure Save Diffs functionality. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_save_new_tests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
configval = config.set_save_new_tests(save_new_tests)
config.save_new_tests  = configval
configval = config.save_new_tests
 ``` 

 #### Parameters 
 ###### save\_new\_tests 
  
 Type:bool 
  
 If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_send_dom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
configval = config.set_send_dom(send_dom)
config.send_dom  = configval
configval = config.send_dom
 ``` 

 #### Parameters 
 ###### send\_dom 
  
 Type:bool 
  
 A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### set_server_url method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
configval = config.set_server_url(server_url)
config.server_url  = configval
configval = config.server_url
 ``` 

 #### Parameters 
 ###### server\_url 
  
 Type:Text 
  
 The URL of the Eyes server. Pass a value of None to use the default cloud server. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_stitch_mode method
Use this method to set the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
configval = config.set_stitch_mode(stitch_mode)
config.stitch_mode  = configval
configval = config.stitch_mode
 ``` 

 #### Parameters 
 ###### stitch\_mode 
  
 Type:[StitchMode](./stitchmode) 
  
 The stitch mode to use. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_stitch_overlap method
Use this method to set the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
configval = config.set_stitch_overlap(stitch_overlap)
config.stitch_overlap  = configval
configval = config.stitch_overlap
 ``` 

 #### Parameters 
 ###### stitch\_overlap 
  
 Type:int 
  
 The width of the stitch overlap in pixels. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_test_name method
Use this method to set the name of the test.

#### Syntax 
 ``` 
configval = config.set_test_name(test_name)
config.test_name  = configval
configval = config.test_name
 ``` 

 #### Parameters 
 ###### test\_name 
  
 Type:Text 
  
 The test name to be configured for the test. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_viewport_size method
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
configval = config.set_viewport_size(viewport_size)
config.viewport_size  = configval
configval = config.viewport_size
 ``` 
 
 ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\]
 #### Parameters 
 ###### viewport\_size 
  
 Type:ViewPort 
  
 An object that defines the width and height of the test browser viewport in pixels. 
  
  ###### Type definitions 
  
 ViewPort 
  
 The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\] 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### set_visual_grid_options method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
configval = config.set_visual_grid_options(options)
config.visual_grid_options  = configval
configval = config.visual_grid_options
 ``` 

 #### Parameters 
 ###### options 
  
 Type:[VisualGridOption](./visualgridoption) 
  
 One or more configuration options for the Ultrafast Grid. 
  
 #### Return value 
Type: [Configuration](./configuration)
        
 ####  Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of False to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of True or False:

*   Setting a value of True instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of False instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.set\_visual\_grid\_options](#)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visual\_grid\_options](./checksettings#visualgridoptions-method).
        
 ####  Example 
Python

    # test suite setup  
        suite_config = (Configuration()  
            .set_visual_grid_options(VisualGridOption("polyfillAdoptedStyleSheets", True))  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 
### set_wait_before_screenshots method
Use this method to set the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
configval = config.set_wait_before_screenshots(wait_before_screenshots)
config.wait_before_screenshots  = configval
configval = config.wait_before_screenshots
 ``` 

 #### Parameters 
 ###### wait\_before\_screenshots 
  
 Type:int 
  
 The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
  
