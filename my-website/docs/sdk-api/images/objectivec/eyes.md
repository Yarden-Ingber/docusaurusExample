# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 
### Constructor 
### init method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
Eyes* eyes = [Eyes new];
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Eyes](./eyes)\*

Use the object returned to call the various methods provided by the Eyes class. 
### initWithRunner method
This is the constructor for the [Eyes](./eyes) class when using a runner.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ##### Call syntax 
 ``` 
EyesBase* eyes = [[Eyes alloc] initWithRunner  : runner   ];
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)initWithRunner:(EyesRunner *)runner 
 ``` 

 #### Parameters 
 ###### runner 
  
 Type:EyesRunner\* 
  
 If this parameter is provided, it must be an instance of the [ClassicRunner](./classicrunner) class. 
  
 #### Return value 
Type: EyesBase\*

Use the object returned to call the various methods provided by the Eyes class. 

## Properties 
### apiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.apiKey  = value
value = eyes.apiKey
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic) NSString *apiKey 
 ``` 
 
 Type:NSString\* 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [openWithApplicationName](#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### baselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.baselineBranchName  = value
value = eyes.baselineBranchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *baselineBranchName 
 ``` 
 
 Type:NSString\* 
The name of the baseline branch to use. 
### baselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [openWithApplicationName](#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of nil if it has not been assigned.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.baselineEnvName  = value
value = eyes.baselineEnvName
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic, nullable) NSString *baselineEnvName 
 ``` 
 
 Type:NSString\* 
The name of the baseline environment. 
### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ##### Call syntax 
 ``` 
BatchInfo* value; // give relevant initial value
eyes.batch  = value
value = eyes.batch
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic, nullable) BatchInfo *batch 
 ``` 
 
 Type:[BatchInfo](./batchinfo)\* 
An object of the class [BatchInfo](./batchinfo) that describes the batch.
        
 ####  Remarks 
Set this property once before the calls to the [openWithApplicationName](#open-method) method for all tests that are supposed to be part of this batch. 
### branchName property
Use this property to set and retrieve the branch used for the baseline of this run.
If the branch does not exist when the test starts, then it will be created. If a baseline exists that has the same properties in the parent branch (i.e. the same application name, test name and environment), then the parent branch will provide the intial baseline for the newly created branch. By default, the parent branch is the default branch. You can specify the parent branch explicitly using [parentBranchName](#setparentbranchname-property) property.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.branchName  = value
value = eyes.branchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *branchName 
 ``` 
 
 Type:NSString\* 
The name of the branch from which the baseline will be taken and saved. This may be any string. 
### configuration property
Use this method to configure Eyes based on a configuration object.

#### Syntax 
 ##### Call syntax 
 ``` 
Configuration* value; // give relevant initial value
eyes.configuration  = value
value = eyes.configuration
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic) Configuration *configuration 
 ``` 
 
 Type:[Configuration](./configuration)\* 
A configuration object that has the various properties/methods set to the required values.
        
 ####  Remarks 
The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Assign to the properties you want to set up, and call the various methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [\[Eyes configuration\]](#-method) method with the configuration object.
*   Call the [\[Eyes openWithApplicationName\]](#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [\[Eyes configuration\]](#-method) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [\[Eyes configuration\]](method-eyes-getconfiguration-images-objectivec.html) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [\[Eyes configuration\]](#-method). 
### debugScreenshotsPath property
Use this property to set and retrieve the folder path where locally saved checkpoint images should be stored (if enabled).

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.debugScreenshotsPath  = value
value = eyes.debugScreenshotsPath
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nonnull) NSString *debugScreenshotsPath 
 ``` 
 
 Type:NSString\*

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [saveDebugScreenshots](#setsavedebugscreenshots-property) property. 
### debugScreenshotsPrefix property
Use this property to set and retrieve the prefix that should be added to the file names for locally stored checkpoint images (if enabled).

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.debugScreenshotsPrefix  = value
value = eyes.debugScreenshotsPrefix
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nonnull) NSString *debugScreenshotsPrefix 
 ``` 
 
 Type:NSString\*

 #### Remarks 
Enable and disable saving screenshots to the local disk using the [saveDebugScreenshots](#setsavedebugscreenshots-property) property. 
### deviceInfo property
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.deviceInfo  = value
value = eyes.deviceInfo
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *deviceInfo 
 ``` 
 
 Type:NSString\* 
The name of the device - this is displayed in the Device column in the Test Manager. 
### hostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting app is undefined. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.hostApp  = value
value = eyes.hostApp
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *hostApp 
 ``` 
 
 Type:NSString\* 
The value to be used for the Host OS Property. 
### hostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.hostOS  = value
value = eyes.hostOS
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *hostOS DEPRECATED_MSG_ATTRIBUTE("Use 'osInfo' instead please") 
 ``` 
 
 Type:NSString\* 
The value to be used for the Host OS property. 
### hostingAppInfo property
Set the value that shold be displayed in the Browser column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the hosting application property that governs the baseline chosen for the test. The hosting application property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [hostApp](./configuration#sethostapp-method) or [hostApp](#sethostapp-method). This also overwrite the value displayed in the Browser column of the Test Manager unless the [hostingAppInfo](#) is used.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.hostingAppInfo  = value
value = eyes.hostingAppInfo
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *hostingAppInfo 
 ``` 
 
 Type:NSString\* 
hostappinfo.params.sethostappinfo 
### ignoreCaret property
Use this property to set and retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value; // give relevant initial value
eyes.ignoreCaret  = value
value = eyes.ignoreCaret
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL ignoreCaret 
 ``` 
 
 Type:BOOL 
If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
### matchLevel property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ##### Call syntax 
 ``` 
MatchLevel value; // give relevant initial value
eyes.matchLevel  = value
value = eyes.matchLevel
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) MatchLevel matchLevel 
 ``` 
 
 Type:[MatchLevel](./matchlevel) 
Available match level values are:

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### osInfo property
Set the value that shold be displayed in the OS column of the Test Results page of the Test Manager.
Setting this value does _not_ not impact the host OS property that governs the baseline chosen for the test. The host OS property that governs the baseline of the test is by default defined by Eyes based on the execution environment the test ran on. A user can change the value used for the baseline using the [hostOS](./configuration#sethostos-method) or [hostOS](#sethostos-method). This also overwrite the value displayed in the OS column of the Test Manager unless the [osInfo](#) is used.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.osInfo  = value
value = eyes.osInfo
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *osInfo 
 ``` 
 
 Type:NSString\* 
The value to be displayed in the OS column of the Test Results page of the Test Manager. 
### parentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.
The newly created branch inherits the baselines and annotations of the parent. If no parent is defined, then the new branch will inherit the baselines from the default branch.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.parentBranchName  = value
value = eyes.parentBranchName
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *parentBranchName 
 ``` 
 
 Type:NSString\* 
The branch name. This may be any string. 
### proxy property
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ##### Call syntax 
 ``` 
AbstractProxySettings* value; // give relevant initial value
eyes.proxy  = value
value = eyes.proxy
 ``` 
 
 ##### Declaration 
 ``` 
 (strong, nonatomic, nullable) AbstractProxySettings *proxy 
 ``` 
 
 Type:[AbstractProxySettings](./proxysettings)\* 
[AbstractProxySettings](./proxysettings)\* 
### saveDebugScreenshots property
Use this property to set and retrieve whether or not checkpoint images should be copied to a local file (typically for troubleshooting).

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value; // give relevant initial value
eyes.saveDebugScreenshots  = value
value = eyes.saveDebugScreenshots
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveDebugScreenshots 
 ``` 
 
 Type:BOOL 
If set to true, then checkpoint images is saved to a local directory. 
### saveDiffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value; // give relevant initial value
eyes.saveDiffs  = value
value = eyes.saveDiffs
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveDiffs 
 ``` 
 
 Type:BOOL 
If this has a value of true, then the baseline will be updated with checkpoints that have mismatches. 
### saveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value; // give relevant initial value
eyes.saveNewTests  = value
value = eyes.saveNewTests
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) BOOL saveNewTests 
 ``` 
 
 Type:BOOL 
If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
### serverURL property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value; // give relevant initial value
eyes.serverURL  = value
value = eyes.serverURL
 ``` 
 
 ##### Declaration 
 ``` 
 (copy, nonatomic, nullable) NSString *serverURL 
 ``` 
 
 Type:NSString\* 
The URL of the Eyes server. Pass a value of nil to use the default cloud server. 
### abortIfNotClosed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ##### Call syntax 
 ``` 
 [ eyes abortIfNotClosed    ];
 ``` 
 
 ##### Declaration 
 ``` 
(void)abortIfNotClosed 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### addProperty method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [\[Eyes addProperty\]](#-method) method.

#### Syntax 
 ##### Call syntax 
 ``` 
 [ eyes addProperty  : name value: value   ];
 ``` 
 
 ##### Declaration 
 ``` 
(void)addProperty:(NSString *)name value:(NSString *)value 
 ``` 

 #### Parameters 
 ###### name 
  
 Type:NSString\* 
  
 The name of the property. 
  
  ###### value 
  
 Type:NSString\* 
  
 The value associated with the name. 
  
 #### Return value 
Type: void

 #### Remarks 
*   You should not assign a given value to a property more than once in a given test run. 
### checkImage method
Run a checkpoint on an image that you provide as a parameter.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value =  [ eyes checkImage  : image   ]
;

BOOL value =  [ eyes checkImage  : image tag: tag   ]
;

BOOL value =  [ eyes checkImage  : image tag: tag ignoreMismatch: ignoreMismatch   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(BOOL)checkImage:(UIImage *)image tag:(nullable NSString *)tag ignoreMismatch:(BOOL)ignoreMismatch 
 ``` 

 #### Parameters 
 ###### image 
  
 Type:UIImage\* 
  
 An image stored in a buffer in PNG format. 
  
  ###### tag 
  
 Type:NSString\* 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### ignoreMismatch 
  
 Type:BOOL 
  
 This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of false. To implement retry, on all retry attempts apart from the last, pass this parameter a value of true. When the method returns, check the return value. A returned value of true means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of false means that that the checkpoint did not match. Since this parameter was passed as true, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of false. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
 #### Return value 
Type: BOOL

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method. 
### checkRegion method
Checks a particular region of the checkpoint image.

#### Syntax 
 ##### Call syntax 
 ``` 
 [ eyes checkRegion  : region inImage: image   ];

 [ eyes checkRegion  : region inImage: image tag: tag   ];
 ``` 
 
 ##### Declaration 
 ``` 
(void)checkRegion:(Region *)region inImage:(UIImage *)image tag:(nullable NSString *)tag 
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region)\* 
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### image 
  
 Type:UIImage\* 
  
 An image stored in a buffer in PNG format. 
  
  ###### tag 
  
 Type:NSString\* 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: void

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method. 
### checkWithTag method
Run a checkpoint. Uses Fluent arguments to specify the various parameters.
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [ImagesCheckSettings](./checksettings) class.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value =  [ eyes checkWithTag  : tag andSettings: checkSettings   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(BOOL)checkWithTag:(nullable NSString *)tag andSettings:(id <CheckSettingsProtocol>)checkSettings 
 ``` 

 #### Parameters 
 ###### tag 
  
 Type:NSString\* 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### checkSettings 
  
 Type:`id <CheckSettingsProtocol>`
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
 #### Return value 
Type: BOOL

A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.
        
 ####  Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### close method
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

#### Syntax 
 ##### Call syntax 
 ``` 
TestResults* result =  [ eyes close    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(nullable TestResults *)close:(NSError **)error 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)\*

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object. 
### openWithApplicationName method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ##### Call syntax 
 ``` 
 [ eyes openWithApplicationName  : appName testName: testName   ];

 [ eyes openWithApplicationName  : appName testName: testName viewportSize: viewportSize   ];
 ``` 
 
 ##### Declaration 
 ``` 
(void)openWithApplicationName:(nullable NSString *)appName testName:(nullable NSString *)testName viewportSize:(CGSize)viewportSize 
 ``` 

 #### Parameters 
 ###### appName 
  
 Type:NSString\* 
  
 The application name. This may be any string. You can set the application name for all tests using the [\[Configuration appName\]](../class_configuration/method-configuration-setappname-images-objectivec.html) property. If you do so, then set this parameter to a value of nil to indicate that the configuration default should be used. 
  
  ###### testName 
  
 Type:NSString\* 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### viewportSize 
  
 Type:CGSize 
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details. 
  
 #### Return value 
Type: void

 #### Remarks 
After making a call to this method, you must eventually terminate the test by calling [\[Eyes close\]](#close-method) (in case of a normal completion) or [\[Eyes abortIfNotClosed\]](method-eyes-abortifnotclosed-images-objectivec.html-method) (in case of an aborted test-method). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [\[Eyes openWithApplicationName\]](#-method) again to start a new test on the same Eyes instance.
        
  
.