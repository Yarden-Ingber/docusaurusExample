# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.SetConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style.

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
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`CheckWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`Timeout method`](#timeout-method) 
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
### TestName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ``` 
string configval; // give relevant initial value
config.TestName  = configval;
configval = config.TestName
 ``` 
 
 Type:string 
### Clone method
Returns a clone of the configuration object.

#### Syntax 
 ``` 
Configuration configval = config.Clone();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)

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
config.Proxy  = configval;
 = config.Proxy;
 ``` 

 #### Parameters 
 ###### proxy 
  
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
        
  
