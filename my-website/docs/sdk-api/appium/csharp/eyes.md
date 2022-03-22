# Eyes class
This class provides the main methods used to execute tests and checkpoints.

### Constructor  
### Eyes method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
Eyes eyes = new Eyes();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class. 

## Properties 
### IsOpen property
Use this to know if the Eyes instance is currently open.

#### Syntax 
 ``` 
bool value = eyes.IsOpen;
 ``` 
 
 Type:bool 
Return true if the [Eyes.Open](#open-method) method has been called on an eyes instance, and [Eyes.Close](#close-method), [Eyes.Abort](#abort-method), [Eyes.AbortAsync](#abortasync-method) or [Eyes.AbortIfNotClosed](#abortifnotclosed-method) have not yet been called. 
### AgentId property
Use this property to set and retrieve the name and version of the SDK.
This method is only relevant for users that write their own SDK.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.AgentId  = value;
value = eyes.AgentId
 ``` 
 
 Type:string

 #### Remarks 
To take effect, this property must be assigned before the call to [Open](#open-method). 
### ApiKey property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.ApiKey  = value;
value = eyes.ApiKey
 ``` 
 
 Type:string

 #### Remarks 
Set this immediately after the Eyes object is created (before calling [Open](#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### AppName property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.AppName  = value;
value = eyes.AppName
 ``` 
 
 Type:string

 #### Remarks 
If you call this method, it must be called before the call to [Eyes.Open](#open-method). In the call to [Eyes.Open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a null, then the value set here will be used. 
### BaselineBranchName property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.BaselineBranchName  = value;
value = eyes.BaselineBranchName
 ``` 
 
 Type:string 
### BaselineEnvName property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [Open](#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of null if it has not been assigned.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.BaselineEnvName  = value;
value = eyes.BaselineEnvName
 ``` 
 
 Type:string 
### Batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
eyes.Batch = new BatchInfo(name)
 ``` 
 
 Type:[BatchInfo](./batchinfo)
        
 ####  Remarks 
Set this property once before the calls to the [Open](#open-method) method for all tests that are supposed to be part of this batch. 
### BranchName property
Use this property to set and retrieve the branch used for the baseline of this run.
If the branch does not exist when the test starts, then it will be created. If a baseline exists that has the same properties in the parent branch (i.e. the same application name, test name and environment), then the parent branch will provide the intial baseline for the newly created branch. By default, the parent branch is the default branch. You can specify the parent branch explicitly using [ParentBranchName](#setparentbranchname-property) property.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.BranchName  = value;
value = eyes.BranchName
 ``` 
 
 Type:string 
### HostApp property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.HostApp  = value;
value = eyes.HostApp
 ``` 
 
 Type:string 
### HostOS property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.HostOS  = value;
value = eyes.HostOS
 ``` 
 
 Type:string 
### IgnoreCaret property
Use this property to set and retrieve whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
bool value; // give relevant initial value
eyes.IgnoreCaret  = value;
value = eyes.IgnoreCaret
 ``` 
 
 Type:bool 
### IsDisabled property
Use this property to set and retrieve whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
bool value; // give relevant initial value
eyes.IsDisabled  = value;
value = eyes.IsDisabled
 ``` 
 
 Type:bool 
### MatchLevel property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
MatchLevel value; // give relevant initial value
eyes.MatchLevel  = value;
value = eyes.MatchLevel
 ``` 
 
 Type:[MatchLevel](./matchlevel)
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### MatchTimeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
TimeSpan value; // give relevant initial value
eyes.MatchTimeout  = value;
value = eyes.MatchTimeout
 ``` 
 
 Type:TimeSpan

 #### Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`CheckWindow`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`Timeout method`](#timeout-method) 
### ParentBranchName property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.
The newly created branch inherits the baselines and annotations of the parent. If no parent is defined, then the new branch will inherit the baselines from the default branch.

#### Syntax 
 ``` 
string value; // give relevant initial value
eyes.ParentBranchName  = value;
value = eyes.ParentBranchName
 ``` 
 
 Type:string 
### Proxy property
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
WebProxy value; // give relevant initial value
eyes.Proxy  = value;
value = eyes.Proxy
 ``` 
 
 Type:WebProxy 
### SaveDiffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
bool? value; // give relevant initial value
eyes.SaveDiffs  = value;
value = eyes.SaveDiffs
 ``` 
 
 Type:bool? 
### SaveNewTests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
bool value; // give relevant initial value
eyes.SaveNewTests  = value;
value = eyes.SaveNewTests
 ``` 
 
 Type:bool 
### ScaleRatio property
Use this property to set and retrieve the scale ratio to be applied to images before matching.
Typically used to compensate for different vertical and horizontal pixels density on some devices.

#### Syntax 
 ``` 
double value; // give relevant initial value
eyes.ScaleRatio  = value;
value = eyes.ScaleRatio
 ``` 
 
 Type:double 
### ServerUrl property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
eyes.ServerUrl  = new System.Uri('https://myEyesServer'); //setter
System.Uri uri = eyes.ServerUrl;                          //getter
 ``` 
 
 Type:string 
### Abort method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [Close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
TestResults value = eyes.Abort();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)
        
 ####  Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### AbortAsync method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [Close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
eyes.AbortAsync();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### AbortIfNotClosed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [Close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
TestResults value = eyes.AbortIfNotClosed();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)
        
 ####  Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### AddProperty method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [Eyes.AddProperty](#-method) method.

#### Syntax 
 ``` 
eyes.AddProperty(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value associated with the name. 
  
 #### Return value 
Type: void

 #### Remarks 
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.AddProperty](./batchinfo#addproperty-method). 
### Check method
Run a checkpoint. Uses Fluent arguments to specify the various parameters.
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [CheckSettings](./checksettings) class.

#### Syntax 
 ``` 
eyes.Check(checkSettings);
eyes.Check(name, checkSettings);
 ``` 

 #### Parameters 
 ###### checkSettings 
  
 Type:ICheckSettings 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
  ###### name 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: void

 #### Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### CheckWindow method
Runs a checkpoint of the entire application (e.g. browser) window.

#### Syntax 
 ``` 
eyes.CheckWindow(name);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: void 
### ClearProperties method
Clears any custom key name/value properties.

#### Syntax 
 ``` 
eyes.ClearProperties();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void 
### Close method
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

#### Syntax 
 ``` 
TestResults result = eyes.Close();

TestResults result = eyes.Close(throwEx);
 ``` 

 #### Parameters 
 ###### throwEx 
  
 Type:bool 
  
 If this parameter has a value of true, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to false, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a true value was passed. 
  
 #### Return value 
Type: [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object. 
### GetConfiguration method
Use this method to retrieve the current configuration object. This will be the most recent configuration object set using [SetConfiguration](#setconfiguration-method), or the initial default configuration object.
If you want to change an Eyes configuration that has already been configured, then the standard way of doing so is to use the following pattern:

*   Get the current configuration using [Eyes.GetConfiguration](#) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.SetConfiguration](#setconfiguration-method).

#### Syntax 
 ``` 
Configuration value = eyes.GetConfiguration();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration) 
### Open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
RemoteWebDriver outdriver = eyes.Open(driver, appName, testName);
 ``` 

 #### Parameters 
 ###### driver 
  
 Type:RemoteWebDriver 
  
 The web driver. 
  
  ###### appName 
  
 Type:string 
  
 The application name. This may be any string. You can set the application name for all tests using the [Configuration.SetAppName](./configuration#setappname-method) method or [Eyes.AppName](#setappname-property) property. If you do so, then set this parameter to a value of null to indicate that the configuration default should be used. 
  
  ###### testName 
  
 Type:string 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
 #### Return value 
Type: RemoteWebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.
        
 ####  Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.Close](#close-method) (in case of a normal completion) or [Eyes.AbortAsync](#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.Open](#) again to start a new test on the same Eyes instance. 
### SetConfiguration method
Use this method to configure Eyes based on a configuration object.

#### Syntax 
 ``` 
eyes.SetConfiguration(configuration);
 ``` 

 #### Parameters 
 ###### configuration 
  
 Type:IConfiguration 
  
 A configuration object that has the various properties/methods set to the required values. 
  
 #### Return value 
Type: void

 #### Remarks 
The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Assign to the properties you want to set up, and call the various methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [Eyes.SetConfiguration](#) method with the configuration object.
*   Call the [Eyes.Open](#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [Eyes.SetConfiguration](#) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [Eyes.GetConfiguration](#getconfiguration-method) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.SetConfiguration](#).
        
  
.