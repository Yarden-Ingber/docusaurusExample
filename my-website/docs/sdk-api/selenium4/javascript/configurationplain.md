# ConfigurationPlain class

This type is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style.
        

 
 ### agentId property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ``` 
config = { agentId: value_string };
 ``` 
 
 Type:string 
The agent id to be configured. 
 ### agentId property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ``` 
config = { agentId: value_string };
 ``` 
 
 Type:string 
The agent id to be configured. 
 ### apiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
config = { apiKey: value_string };
 ``` 
 
 Type:string 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
 ### apiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
config = { apiKey: value_string };
 ``` 
 
 Type:string 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
 ### appName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
config = { appName: value_string };
 ``` 
 
 Type:string 
The application name to be configured for the test.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
 ### appName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
config = { appName: value_string };
 ``` 
 
 Type:string 
The application name to be configured for the test.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
 ### baselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
config = { baselineBranchName: value_string };
 ``` 
 
 Type:string 
The baseline branch name to be configured. 
 ### baselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
config = { baselineBranchName: value_string };
 ``` 
 
 Type:string 
The baseline branch name to be configured. 
 ### baselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [open](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of null if it has not been assigned.

#### Syntax 
 ``` 
config = { baselineEnvName: value_string };
 ``` 
 
 Type:string 
The name of the baseline environment. 
 ### baselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [open](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of null if it has not been assigned.

#### Syntax 
 ``` 
config = { baselineEnvName: value_string };
 ``` 
 
 Type:string 
The name of the baseline environment. 
 ### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
config = { batch: value_BatchInfoPlain };
 ``` 
 
 Type:[BatchInfoPlain](./batchinfoplain) 
An object that defines the batch configuration. 
 ### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
config = { batch: value_BatchInfoPlain };
 ``` 
 
 Type:[BatchInfoPlain](./batchinfoplain) 
An object that defines the batch configuration. 
 ### branchName property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
config = { branchName: value_string };
 ``` 
 
 Type:string 
The branch name to be used by the configuration. 
 ### branchName property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ``` 
config = { branchName: value_string };
 ``` 
 
 Type:string 
The branch name to be used by the configuration. 
 ### browsersInfo property
Sets the list of one or more browsers or devices to be rendered on the Ultrafast Grid.
Setting the browsers and devices by assinging to this property defines the complete list of targets overwriting any previously configurations made by using [addBrowser](./configuration#addbrowser-method) or [addDeviceEmulation](./configuration#adddeviceemulation-method), which build the list of browsers and devices incrementally (i.e. each call to addXXXX adds more browsers to the list of browsers to be rendered). If you call [setBrowsersInfo](./configuration#setbrowsersinfo-method) after calling any of the addXXXX methods then the devices configured by the addXXXX will be lost. You may call the addXXXX methods after the [setBrowsersInfo](./configuration#setbrowsersinfo-method) method to add more browsers to the list of browsers to be rendered.

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
 
 ### browsersInfo property
Sets the devices to be rendered on the Ultrafast Grid.
The method sets the full list of all the browsers to be rendered on the Ultrafast Grid, removing any previously defined browsers. This method differs from the methods [addBrowser](./configuration#addbrowser-method) and [addDeviceEmulation](./configuration#adddeviceemulation-method), which build the list of browsers and devices incrementally (i.e. each call to addXXXX adds more browsers to the list of browsers to be rendered). If you call [setBrowsersInfo](./configuration#setbrowsersinfo-method) after calling any of the addXXXX methods then the devices configured by the addXXXX will be lost. You may call the addXXXX methods after the [setBrowsersInfo](./configuration#setbrowsersinfo-method) method to add more browsers to the list of browsers to be rendered.

#### Syntax 
 ``` 
config = { browsersInfo: value };
 ``` 
 
 Type: 
List of objects that define browsers and emulated devices to be rendered. 
 `([DesktopBrowserInfo](./desktopbrowserinfo)|[ChromeEmulationInfo](./chromeemulationinfo)|[IOSDeviceInfo](./iosdeviceinfo))[]` 
 
 ### deviceInfo property
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax 
 ``` 
config = { deviceInfo: value_string };
 ``` 
 
 Type:string 
The name of the device - this is displayed in the Device column in the Test Manager. 
 ### forceFullPageScreenshot property
Use this property to set and retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
config = { forceFullPageScreenshot: value_boolean };
 ``` 
 
 Type:boolean 
 ### forceFullPageScreenshot property
Use this property to set and retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
config = { forceFullPageScreenshot: value_boolean };
 ``` 
 
 Type:boolean 
If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent. 
 ### hideCaret property
Use this property to set and retrieve whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
config = { hideCaret: value_boolean };
 ``` 
 
 Type:boolean 
If this paramter has a value of true, then the cursor will be hidden before the image is captured.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
 ### hideCaret property
Use this property to set and retrieve whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
config = { hideCaret: value_boolean };
 ``` 
 
 Type:boolean 
If this paramter has a value of true, then the cursor will be hidden before the image is captured.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) or [CheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
 ### hideScrollbars property
Use this property to set and retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
config = { hideScrollbars: value_boolean };
 ``` 
 
 Type:boolean 
If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
 ### hideScrollbars property
Use this property to set and retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
config = { hideScrollbars: value_boolean };
 ``` 
 
 Type:boolean 
If set to true then hide the scrollbars. Otherwise, don't hide the scrollbars. 
 ### hostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
config = { hostApp: value_string };
 ``` 
 
 Type:string 
The value to be used for the Host App property. 
 ### hostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
config = { hostApp: value_string };
 ``` 
 
 Type:string 
The value to be used for the Host App property. 
 ### hostAppInfo property
Set the value that shold be displayed in the Browser column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the hosting application property that governs the baseline chosen for the test. The hosting application property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostApp](./configuration#sethostapp-method) or [setHostApp](./eyes#sethostapp-method). This also overwrite the value displayed in the Browser column of the Test Manager unless the undefined is used.

#### Syntax 
 ``` 
config = { hostAppInfo: value_string };
 ``` 
 
 Type:string 
 ### hostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
config = { hostOS: value_string };
 ``` 
 
 Type:string 
The value to be used for the Host OS Property. 
 ### hostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
config = { hostOS: value_string };
 ``` 
 
 Type:string 
The value to be used for the Host OS Property. 
 ### hostOSInfo property
Set the value that shold be displayed in the OS column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the host OS property that governs the baseline chosen for the test. The host OS property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [setHostOS](./configuration#sethostos-method) or [setHostOS](./eyes#sethostos-method). This also overwrite the value displayed in the OS column of the Test Manager unless the undefined is used.

#### Syntax 
 ``` 
config = { hostOSInfo: value_string };
 ``` 
 
 Type:string 
 ### matchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
config = { matchTimeout: value_number };
 ``` 
 
 Type:number 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in selenium4 javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
 ### matchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
config = { matchTimeout: value_number };
 ``` 
 
 Type:number 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in selenium4 javascript)`](#)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
 ### parentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
config = { parentBranchName: value_string };
 ``` 
 
 Type:string 
The parent branch name to be configured. 
 ### parentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
config = { parentBranchName: value_string };
 ``` 
 
 Type:string 
The parent branch name to be configured. 
 ### properties property
Set a list of user-defined properties each of which is a key/value pair.

#### Syntax 
 ``` 
config = { properties: [value1_PropertyDataPlain, value2_PropertyDataPlain] };
 ``` 
 
 Type:[PropertyDataPlain](./propertydataplain)\[\]

 #### Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method). 
 ### properties property
Set a list of user-defined properties each of which is a key/value pair.

#### Syntax 
 ``` 
config = { properties: [value1_PropertyDataPlain, value2_PropertyDataPlain] };
 ``` 
 
 Type:[PropertyDataPlain](./propertydataplain)\[\] 
List of propertydata objects.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.addProperty](./batchinfo#addproperty-method). 
 ### proxy property
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
config = { proxy: value_ProxySettingsPlain };
 ``` 
 
 Type:[ProxySettingsPlain](./proxysettingsplain) 
An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
 ### rotation property
Use this property to set and retrieve the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
config = { rotation: value_ImageRotationPlain };
 ``` 
 
 Type:ImageRotationPlain 
The number of degrees to rotate. 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
 ### rotation property
Use this property to set and retrieve the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
config = { rotation: value_ImageRotationPlain };
 ``` 
 
 Type:ImageRotationPlain 
The number of degrees to rotate. 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
 ### saveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
config = { saveNewTests: value_boolean };
 ``` 
 
 Type:boolean 
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
 ### saveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
config = { saveNewTests: value_boolean };
 ``` 
 
 Type:boolean 
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
 ### scaleRatio property
Use this property to set and retrieve the scale ratio to be applied to images before matching.

#### Syntax 
 ``` 
config = { scaleRatio: value_number };
 ``` 
 
 Type:number 
The scale ratio to use. 
 ### scrollRootElement property
Use this property to set and retrieve the element to which [setHideScrollbars](./configuration#sethidescrollbars-method) will be applied.

#### Syntax 
 ``` 
config = { scrollRootElement: value };
 ``` 
 
 Type: 
The element that should be scrolled. 
 `WebElement|Selector` 
 
 Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}. 
 ### sendDom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
config = { sendDom: value_boolean };
 ``` 
 
 Type:boolean 
A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
 ### sendDom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
config = { sendDom: value_boolean };
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
config = { serverUrl: value_string };
 ``` 
 
 Type:string 
The URL of the Eyes server. Pass a value of null to use the default cloud server. 
 ### serverUrl property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
config = { serverUrl: value_string };
 ``` 
 
 Type:string 
The URL of the Eyes server. Pass a value of null to use the default cloud server. 
 ### stitchMode property
Use this property to set and retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
config = { stitchMode: value_StitchModePlain };
 ``` 
 
 Type:StitchModePlain 
The stitch mode to use. 
 StitchModePlain

This type allows passing strings instead of enumerated values, for the list of enum values see [StitchMode](./stitchmode). 
 ### stitchMode property
Use this property to set and retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
config = { stitchMode: value_StitchModePlain };
 ``` 
 
 Type:StitchModePlain 
The stitch mode to use. 
 StitchModePlain

This type allows passing strings instead of enumerated values, for the list of enum values see [StitchMode](./stitchmode). 
 ### stitchOverlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
config = { stitchOverlap: value_number };
 ``` 
 
 Type:number 
The width of the stitch overlap in pixels. 
 ### stitchOverlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
config = { stitchOverlap: value_number };
 ``` 
 
 Type:number 
The width of the stitch overlap in pixels. 
 ### testName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ``` 
config = { testName: value_string };
 ``` 
 
 Type:string 
The test name to be configured for the test. 
 ### testName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ``` 
config = { testName: value_string };
 ``` 
 
 Type:string 
The test name to be configured for the test. 
 ### viewportSize property
Use this property to set and retrieve the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
config = { viewportSize: value_RectangleSizePlain };
 ``` 
 
 Type:[RectangleSizePlain](./rectanglesizeplain) 
An object that defines the width and height of the test browser viewport in pixels. 
 ### viewportSize property
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
config = { viewportSize: value_RectangleSizePlain };
 ``` 
 
 Type:[RectangleSizePlain](./rectanglesizeplain) 
An object that defines the width and height of the test browser viewport in pixels. 
 ### visualGridOptions property
Use this property to set and retrieve configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
config = { visualGridOptions: value };
 ``` 
 
 Type:Record<string,any>

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualgridoptions-method). 
 ### visualGridOptions property
Use this property to set and retrieve configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
config = { visualGridOptions: value };
 ``` 
 
 Type:Record<string,any>

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#setvisualgridoptions-method)

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
 ### waitBeforeScreenshots property
Use this property to set and retrieve the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
config = { waitBeforeScreenshots: value_number };
 ``` 
 
 Type:number 
The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
 ### waitBeforeScreenshots property
Use this property to set and retrieve the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
config = { waitBeforeScreenshots: value_number };
 ``` 
 
 Type:number 
The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used.