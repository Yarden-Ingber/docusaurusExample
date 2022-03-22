# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by assigning it to the [\[Eyes configuration\]](../classes-gen/class_eyes/method-eyes-setconfiguration-imagesappkit-objectivec.html) property.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. 
 ### Import statement 
``` 
@import EyesImagesAppKit
 
 ``` 
### Constructor 
### init method
The constructor for the [Configuration](./configuration-method) class. This object isset upand then passed to the [\[Eyes configuration\]](../class_eyes/method-eyes-setconfiguration-imagesappkit-objectivec.html-method) method before the call to the [\[Eyes openWithApplicationName\]](./eyes#open-method) method.

#### Syntax 
 ``` 
Configuration* config = [Configuration new];
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration)\*

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        

 
 ### accessibilityValidation property
Use this property to set and retrieve the accessibility testing level to use.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilitySettings* configval; // give relevant initial value
config.accessibilityValidation  = configval
configval = config.accessibilityValidation
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic, nullable) AccessibilitySettings *accessibilityValidation 
 ``` 
 
 Type:[AccessibilitySettings](./accessibilitysettings)\*

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### accessibilityValidation property
Use this property to set and retrieve the accessibility testing level to use.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilitySettings* configval; // give relevant initial value
config.accessibilityValidation  = configval
configval = config.accessibilityValidation
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic, nullable) AccessibilitySettings *accessibilityValidation 
 ``` 
 
 Type:[AccessibilitySettings](./accessibilitysettings)\* 
The required accessibility settings. A value of nil will disable accessibility checking.
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### agentId property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.agentId  = configval
configval = config.agentId
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *agentId 
 ``` 
 
 Type:NSString\* 
The agent id to be configured. 
 ### agentId property
Use this property to set and retrieve the name and version of the SDK.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.agentId  = configval
configval = config.agentId
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *agentId 
 ``` 
 
 Type:NSString\* 
The agent id to be configured. 
 ### apiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.apiKey  = configval
configval = config.apiKey
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *apiKey 
 ``` 
 
 Type:NSString\* 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [openWithApplicationName](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
 ### apiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.apiKey  = configval
configval = config.apiKey
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *apiKey 
 ``` 
 
 Type:NSString\* 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [openWithApplicationName](./eyes#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
 ### appName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.appName  = configval
configval = config.appName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *appName 
 ``` 
 
 Type:NSString\* 
The application name to be configured for the test.
        
 ####  Remarks 
If you call this method, it must be called before the call to [\[Eyes openWithApplicationName\]](./eyes#open-method). In the call to [\[Eyes openWithApplicationName\]](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a nil, then the value set here will be used. 
 ### appName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.appName  = configval
configval = config.appName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *appName 
 ``` 
 
 Type:NSString\* 
The application name to be configured for the test.
        
 ####  Remarks 
If you call this method, it must be called before the call to [\[Eyes openWithApplicationName\]](./eyes#open-method). In the call to [\[Eyes openWithApplicationName\]](./eyes#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a nil, then the value set here will be used. 
 ### baselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.baselineBranchName  = configval
configval = config.baselineBranchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *baselineBranchName 
 ``` 
 
 Type:NSString\* 
The baseline branch name to be configured. 
 ### baselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.baselineBranchName  = configval
configval = config.baselineBranchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *baselineBranchName 
 ``` 
 
 Type:NSString\* 
The baseline branch name to be configured. 
 ### baselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [openWithApplicationName](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of nil if it has not been assigned.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.baselineEnvName  = configval
configval = config.baselineEnvName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *baselineEnvName 
 ``` 
 
 Type:NSString\* 
The name of the baseline environment. 
 ### baselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [openWithApplicationName](./eyes#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of nil if it has not been assigned.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.baselineEnvName  = configval
configval = config.baselineEnvName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *baselineEnvName 
 ``` 
 
 Type:NSString\* 
The name of the baseline environment. 
 ### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ##### Call syntax 
 ``` 
BatchInfo* configval; // give relevant initial value
config.batch  = configval
configval = config.batch
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic) BatchInfo *batch 
 ``` 
 
 Type:[BatchInfo](./batchinfo)\* 
An object that defines the batch configuration. 
 ### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ##### Call syntax 
 ``` 
BatchInfo* configval; // give relevant initial value
config.batch  = configval
configval = config.batch
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic) BatchInfo *batch 
 ``` 
 
 Type:[BatchInfo](./batchinfo)\* 
An object that defines the batch configuration. 
 ### branchName property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.branchName  = configval
configval = config.branchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *branchName 
 ``` 
 
 Type:NSString\* 
The branch name to be used by the configuration. 
 ### branchName property
Use this property to set and retrieve the branch used for the baseline of this run.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.branchName  = configval
configval = config.branchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *branchName 
 ``` 
 
 Type:NSString\* 
The branch name to be used by the configuration. 
 ### hostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.hostApp  = configval
configval = config.hostApp
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *hostApp 
 ``` 
 
 Type:NSString\* 
The value to be used for the Host App property. 
 ### hostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.hostApp  = configval
configval = config.hostApp
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *hostApp 
 ``` 
 
 Type:NSString\* 
The value to be used for the Host App property. 
 ### hostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.hostOS  = configval
configval = config.hostOS
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *hostOS 
 ``` 
 
 Type:NSString\* 
The value to be used for the Host OS Property. 
 ### hostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.hostOS  = configval
configval = config.hostOS
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *hostOS 
 ``` 
 
 Type:NSString\* 
The value to be used for the Host OS Property. 
 ### ignoreCaret property
Use this property to set and retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.ignoreCaret  = configval
configval = config.ignoreCaret
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL ignoreCaret 
 ``` 
 
 Type:BOOL 
If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
 ### ignoreCaret property
Use this property to set and retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.ignoreCaret  = configval
configval = config.ignoreCaret
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL ignoreCaret 
 ``` 
 
 Type:BOOL 
If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
 ### ignoreDisplacements property
Use this property to set and retrieve whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.ignoreDisplacements  = configval
configval = config.ignoreDisplacements
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL ignoreDisplacements 
 ``` 
 
 Type:BOOL

 #### Remarks 
Ignore displacements is only active when using a Match level of [MatchLevelStrict](./matchlevel) or [MatchLevelContent](./matchlevel) 
 ### ignoreDisplacements property
Use this property to set and retrieve whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.ignoreDisplacements  = configval
configval = config.ignoreDisplacements
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL ignoreDisplacements 
 ``` 
 
 Type:BOOL 
If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [MatchLevelStrict](./matchlevel) or [MatchLevelContent](./matchlevel) 
 ### matchLevel property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ##### Call syntax 
 ``` 
MatchLevel configval; // give relevant initial value
config.matchLevel  = configval
configval = config.matchLevel
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) MatchLevel matchLevel 
 ``` 
 
 Type:[MatchLevel](./matchlevel) 
Available match level values are:

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
 ### matchLevel property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ##### Call syntax 
 ``` 
MatchLevel configval; // give relevant initial value
config.matchLevel  = configval
configval = config.matchLevel
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) MatchLevel matchLevel 
 ``` 
 
 Type:[MatchLevel](./matchlevel) 
Available match level values are:

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
 ### matchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger configval; // give relevant initial value
config.matchTimeout  = configval
configval = config.matchTimeout
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) NSInteger matchTimeout 
 ``` 
 
 Type:NSInteger 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in imagesappkit objectivec)`](#)You can also overide the timeout for a specific test using the check fluent [`timeoutInSeconds method`](#timeout-method) 
 ### matchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger configval; // give relevant initial value
config.matchTimeout  = configval
configval = config.matchTimeout
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) NSInteger matchTimeout 
 ``` 
 
 Type:NSInteger 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`eyes.checkwindow (not yet available in imagesappkit objectivec)`](#)You can also overide the timeout for a specific test using the check fluent [`timeoutInSeconds method`](#timeout-method) 
 ### parentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.parentBranchName  = configval
configval = config.parentBranchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *parentBranchName 
 ``` 
 
 Type:NSString\* 
The parent branch name to be configured. 
 ### parentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.parentBranchName  = configval
configval = config.parentBranchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *parentBranchName 
 ``` 
 
 Type:NSString\* 
The parent branch name to be configured. 
 ### proxy property
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ##### Call syntax 
 ``` 
AbstractProxySettings* configval; // give relevant initial value
config.proxy  = configval
configval = config.proxy
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic) AbstractProxySettings *proxy 
 ``` 
 
 Type:[AbstractProxySettings](./proxysettings)\* 
An object created from the [AbstractProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
 ### saveDiffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.saveDiffs  = configval
configval = config.saveDiffs
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveDiffs 
 ``` 
 
 Type:BOOL 
Set to true to configure Save Diffs functionality. 
 ### saveDiffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.saveDiffs  = configval
configval = config.saveDiffs
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveDiffs 
 ``` 
 
 Type:BOOL 
Set to true to configure Save Diffs functionality. 
 ### saveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.saveNewTests  = configval
configval = config.saveNewTests
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveNewTests 
 ``` 
 
 Type:BOOL 
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
 ### saveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL configval; // give relevant initial value
config.saveNewTests  = configval
configval = config.saveNewTests
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveNewTests 
 ``` 
 
 Type:BOOL 
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
 ### serverUrl property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.serverUrl  = configval
configval = config.serverUrl
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *serverUrl 
 ``` 
 
 Type:NSString\* 
The URL of the Eyes server. Pass a value of nil to use the default cloud server. 
 ### serverUrl property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.serverUrl  = configval
configval = config.serverUrl
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *serverUrl 
 ``` 
 
 Type:NSString\* 
The URL of the Eyes server. Pass a value of nil to use the default cloud server. 
 ### stitchOverlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger configval; // give relevant initial value
config.stitchOverlap  = configval
configval = config.stitchOverlap
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) NSInteger stitchOverlap 
 ``` 
 
 Type:NSInteger 
The width of the stitch overlap in pixels. 
 ### stitchOverlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger configval; // give relevant initial value
config.stitchOverlap  = configval
configval = config.stitchOverlap
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) NSInteger stitchOverlap 
 ``` 
 
 Type:NSInteger 
The width of the stitch overlap in pixels. 
 ### testName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.testName  = configval
configval = config.testName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *testName 
 ``` 
 
 Type:NSString\* 
The test name to be configured for the test. 
 ### testName property
Use this property to set and retrieve the name of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* configval; // give relevant initial value
config.testName  = configval
configval = config.testName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *testName 
 ``` 
 
 Type:NSString\* 
The test name to be configured for the test. 
 ### viewportSize property
Use this property to set and retrieve the viewport size to be used by the browser for the test.

#### Syntax 
 ##### Call syntax 
 ``` 
CGSize configval; // give relevant initial value
config.viewportSize  = configval
configval = config.viewportSize
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) CGSize viewportSize 
 ``` 
 
 Type:CGSize 
An object that defines the width and height of the test browser viewport in pixels. 
 ### viewportSize property
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ##### Call syntax 
 ``` 
CGSize configval; // give relevant initial value
config.viewportSize  = configval
configval = config.viewportSize
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) CGSize viewportSize 
 ``` 
 
 Type:CGSize 
An object that defines the width and height of the test browser viewport in pixels.