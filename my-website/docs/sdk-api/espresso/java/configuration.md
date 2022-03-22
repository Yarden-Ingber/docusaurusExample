# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes-method) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.config.Configuration;
 
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
### cloneConfig method
Returns a clone of the configuration object.

#### Syntax 
 ``` 
Configuration configval = config.cloneConfig();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)

A cloned [Configuration](./configuration) object. 
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
IConfigurationSetter configval = config.setAccessibilityValidation(accessibilitySettings);
 ``` 

 #### Parameters 
 ###### accessibilitySettings 
  
 Type:[AccessibilitySettings](./accessibilitysettings) 
  
 The required accessibility settings. A value of null will disable accessibility checking. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### setAgentId method
Use this method to set the name and version of the SDK.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setAgentId(agentId);
 ``` 

 #### Parameters 
 ###### agentId 
  
 Type:String 
  
 The agent id to be configured. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setApiKey method
Use this method to set your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
IConfigurationSetter configval = config.setApiKey(apiKey);
 ``` 

 #### Parameters 
 ###### apiKey 
  
 Type:String 
  
 A string that is your API Key. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### setAppName method
Use this method to set the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setAppName(appName);
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:String 
  
 The application name to be configured for the test. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](./eyes#open-method). In the call to [Eyes.open](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### setBaselineBranchName method
Use this method to set the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setBaselineBranchName(baselineBranchName);
 ``` 

 #### Parameters 
 ###### baselineBranchName 
  
 Type:String 
  
 The baseline branch name to be configured. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBaselineEnvName method
Use this method to set the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet `<OS, Browser, Viewport>`. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by calling this method, passing the name of the environment as a parameter. If the name is undefined in the server when this test runs, and this property is assigned before then call to [open](./eyes#open-method), then the name will be created and defined on the server with values of the current test environment.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setBaselineEnvName(baselineEnvName);
 ``` 

 #### Parameters 
 ###### baselineEnvName 
  
 Type:String 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBatch method
Use this method to set the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setBatch(batch);
 ``` 

 #### Parameters 
 ###### batch 
  
 Type:[BatchInfo](./batchinfo) 
  
 An object that defines the batch configuration. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBranchName method
Use this method to set the branch used for the baseline of this run.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setBranchName(branchName);
 ``` 

 #### Parameters 
 ###### branchName 
  
 Type:String 
  
 The branch name to be used by the configuration. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setForceFullPageScreenshot method
Use this method to set whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setForceFullPageScreenshot(forceFullPageScreenshot);
 ``` 

 #### Parameters 
 ###### forceFullPageScreenshot 
  
 Type:boolean 
  
 If this paramter has a value of true, then Eyes will do scrolling and stitching if necessary. If false, then the result is browser dependent. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHideCaret method
Use this method to set whether Eyes should hide the cursor before the screenshot is captured.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to differences between the checkpoint and the basline and, therefore, to false mismatch reports. If you enable hiding the curser, Eyes will turn the cursor off before capturing the image, eliminating the possibility that this will happen.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setHideCaret(hideCaret);
 ``` 

 #### Parameters 
 ###### hideCaret 
  
 Type:boolean 
  
 If this paramter has a value of true, then the cursor will be hidden before the image is captured. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using this method instead of [Eyes.setIgnoreCaret](./eyes#setignorecaret-method), [Configuration.setIgnoreCaret](#setignorecaret-method) or [EspressoCheckSettings.ignoreCaret](./checksettings#ignorecaret-method), since this method/property eliminates cursor related artifacts instead of detecting and ignoring them. 
### setHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setHostApp(hostApp);
 ``` 

 #### Parameters 
 ###### hostApp 
  
 Type:String 
  
 The value to be used for the Host App property. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setHostOS(hostOS);
 ``` 

 #### Parameters 
 ###### hostOS 
  
 Type:String 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setIgnoreCaret(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:boolean 
  
 If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
We recommend using [setHideCaret](./eyes#sethidecaret-method), [setHideCaret](#sethidecaret-method) or [hideCaret](./checksettings#hidecaret-method) since this eliminates cursor related artifacts instead of detecting and ignoring them. 
### setIgnoreDisplacements method
Use this method to set whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setIgnoreDisplacements(isIgnoreDisplacements);
 ``` 

 #### Parameters 
 ###### isIgnoreDisplacements 
  
 Type:boolean 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel) 
### setMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setMatchLevel(matchLevel);
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
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setMatchTimeout method
Use this method to set the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this method to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setMatchTimeout(matchTimeout);
 ``` 

 #### Parameters 
 ###### matchTimeout 
  
 Type:int 
  
 The timeout to set in milliseconds. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
You can overide the default timeout set by this method for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`checkWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setParentBranchName(parentBranchName);
 ``` 

 #### Parameters 
 ###### parentBranchName 
  
 Type:String 
  
 The parent branch name to be configured. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setProxy(proxy);
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:AbstractProxySettings 
  
 An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setSaveDiffs(saveDiffs);
 ``` 

 #### Parameters 
 ###### saveDiffs 
  
 Type:Boolean 
  
 Set to true to configure Save Diffs functionality. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSaveNewTests method
Use this method to set whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setSaveNewTests(saveNewTests);
 ``` 

 #### Parameters 
 ###### saveNewTests 
  
 Type:boolean 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSendDom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setSendDom(sendDom);
 ``` 

 #### Parameters 
 ###### sendDom 
  
 Type:boolean 
  
 A value of true means that DOM information will be sent. A value of false means that DOM information will not be sent. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### setServerUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setServerUrl(serverUrl);
 ``` 

 #### Parameters 
 ###### serverUrl 
  
 Type:String 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setStitchOverlap method
Use this method to set the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setStitchOverlap(stitchOverlap);
 ``` 

 #### Parameters 
 ###### stitchOverlap 
  
 Type:int 
  
 The width of the stitch overlap in pixels. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setTestName method
Use this method to set the name of the test.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setTestName(testName);
 ``` 

 #### Parameters 
 ###### testName 
  
 Type:String 
  
 The test name to be configured for the test. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setViewportSize method
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
IConfigurationSetter configval = config.setViewportSize(viewportSize);
 ``` 

 #### Parameters 
 ###### viewportSize 
  
 Type:[RectangleSize](./rectanglesize) 
  
 An object that defines the width and height of the test browser viewport in pixels. 
  
 #### Return value 
Type: IConfigurationSetter

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.