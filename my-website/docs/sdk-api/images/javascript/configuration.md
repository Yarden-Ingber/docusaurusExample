# Configuration class

This class is used to create a configuration object that is used to configure an [Eyes](./eyes) object by passing it to the [Eyes.setConfiguration](./eyes#setconfiguration-method) method.
You can use this configuration object instead of using the various [Eyes](./eyes) methods and properties that set the same attributes. Typically you set up a Configuration object by calling its setXXXX methods chained with a '.' in a Fluent coding style. In this class, some attributes can be set by both a property and a set command. The properties allow you simple direct access to assign to and retrieve the attribute. The corresponding set method allows you to set multiple attributes using a Fluent style. 
 ### Require statement 
``` 
const {Configuration} = require('@applitools/eyes-images');
 
 ``` 
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
### addProperty method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](#) method or [Configuration.setProperties](#setproperties-method) method.

#### Syntax 
 ``` 
let configval = config.addProperty(property);

let configval = config.addProperty(propertyName, propertyValue);
 ``` 
 
 PropertyDataObject

The type PropertyDataObject is defined as: {name:string,value:string}.
        
 ####  Parameters 

###### property 
  
 Type: 
  
     PropertyData|PropertyDataObject 
  
  ###### An object of type [PropertyData](./propertydata), or an object of the form {name: string, value: string}. The name and value of the added property are derived from the passed object. 
  
 #### Type definitions 
  
 PropertyDataObject 
  
  ###### The type PropertyDataObject is defined as: {name:string,value:string}. 
  
 propertyName 
  
 Type:string 
  
  ###### The name of the property. 
  
 propertyValue 
  
 Type:string 
  
  ###### The value associated with the name. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run. 
### cloneConfig method
Returns a clone of the configuration object.

#### Syntax 
 ``` 
let configval = config.cloneConfig();
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
let configval = config.getAccessibilityValidation();
 ``` 
 
 AccessibilitySettings

The type AccessibilitySettings is defined as: {level:[AccessibilityLevel](./accessibilitylevel),guidelinesVersion:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)}
 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: AccessibilitySettings

#### Type definitions

AccessibilitySettings

The type AccessibilitySettings is defined as: {level:[AccessibilityLevel](./accessibilitylevel),guidelinesVersion:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)}

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### getAgentId method
Returns the value configured by [setAgentId](#setagentid-method).

#### Syntax 
 ``` 
let configval = config.getAgentId();
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
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getHostApp method
Use this method to retrieve the name that is being used for the host application (browser) property.

#### Syntax 
 ``` 
let configval = config.getHostApp();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getHostOS method
Use this method to retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
let configval = config.getHostOS();
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
### getParentBranchName method
Returns the value configured by [setParentBranchName](#setparentbranchname-method).

#### Syntax 
 ``` 
let configval = config.getParentBranchName();
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
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ProxySettings](./proxysettings) 
### getSaveDiffs method
Returns the value configured by [setSaveDiffs](#setsavediffs-method).

#### Syntax 
 ``` 
let configval = config.getSaveDiffs();
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
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getTestName method
Returns the value configured by [setTestName](#settestname-method).

#### Syntax 
 ``` 
let configval = config.getTestName();
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
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RectangleSize](./rectanglesize) 
### setAccessibilityValidation method
Use this method to set the accessibility testing level to use.

#### Syntax 
 ``` 
let configval = config.setAccessibilityValidation(value);
 ``` 
 
 AccessibilitySettings

The type AccessibilitySettings is defined as: {level:[AccessibilityLevel](./accessibilitylevel),guidelinesVersion:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)}
 #### Parameters 
 ###### value 
  
 Type:AccessibilitySettings 
  
 The required accessibility settings. A value of null will disable accessibility checking. 
  
  ###### Type definitions 
  
 AccessibilitySettings 
  
 The type AccessibilitySettings is defined as: {level:[AccessibilityLevel](./accessibilitylevel),guidelinesVersion:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)} 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### setAgentId method
Use this method to set the name and version of the SDK.

#### Syntax 
 ``` 
let configval = config.setAgentId(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setApiKey(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setAppName(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setBaselineBranchName(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setBaselineEnvName(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setBatch(value);
 ``` 
 
 BatchInfoObject

The type BatchInfoObject is defined as: {id:(string|undefined),name:(string|undefined),startedAt:(Date|string|undefined),sequenceName:(string|undefined),notifyOnCompletion:(boolean|undefined)}.
        
 ####  Parameters 
 ###### value 
  
 Type: 
  
     BatchInfo|BatchInfoObject 
  
  ###### An object that defines the batch configuration. 
  
 #### Type definitions 
  
 BatchInfoObject 
  
  ###### The type BatchInfoObject is defined as: {id:(string|undefined),name:(string|undefined),startedAt:(Date|string|undefined),sequenceName:(string|undefined),notifyOnCompletion:(boolean|undefined)}. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setBranchName method
Use this method to set the branch used for the baseline of this run.

#### Syntax 
 ``` 
let configval = config.setBranchName(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The branch name to be used by the configuration. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setDeviceInfo method
Set the name of the device being rendered on the Ultrafast Grid.

#### Syntax 
 ``` 
let configval = config.setDeviceInfo(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The name of the device - this is displayed in the Device column in the Test Manager. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostApp method
Use this method to set the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting app is undefined. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
config.setHostApp(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value to be used for the Host App property. 
  
 #### Return value 
Type:

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setHostOS method
Use this method to set the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. By default, the hosting OS is undefined. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
config.setHostOS(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value to be used for the Host OS Property. 
  
 #### Return value 
Type:

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setIgnoreCaret method
Use this method to set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
let configval = config.setIgnoreCaret(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:boolean 
  
 If set to true, then Eyes does extra processing to eliminate artifacts introduced by blinking cursors. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setIgnoreDisplacements method
Use this method to set whether Test Manager should initially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
let configval = config.setIgnoreDisplacements(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setIsDisabled(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:boolean 
  
 If this has a value of true then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setMatchLevel method
Use this method to set the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
let configval = config.setMatchLevel(value);
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
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### setParentBranchName method
Use this method to set the parent branch from which newly created branches get their initial baseline.

#### Syntax 
 ``` 
let configval = config.setParentBranchName(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
 ``` 

 #### Parameters 
 ###### properties 
  
 Type:[PropertyData](./propertydata)\[\] 
  
 List of propertydata objects. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
 ####  Remarks 
*   Set multiple properties by calling [Eyes.addProperty](./eyes#addproperty-method) or [Configuration.addProperty](#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run. 
### setProxy method
Use this method to configure Eyes so that it will interact with the Eyes server via a proxy.
By default, the SDK interacts directly with the Eyes server. If necessary, you can define a proxy server so that the SDK will interact with the proxy server, and the proxy server will relay the interaction to the Eyes server.

#### Syntax 
 ``` 
let configval = config.setProxy(value);
 ``` 
 
 ProxySettingsObject

The type ProxySettingsObject is defined as: {url:string,username:(string|undefined),password:(string|undefined)}.
        
 ####  Parameters 
 ###### value 
  
 Type: 
  
     ProxySettings|ProxySettingsObject|string|boolean 
  
  ###### An object created from the [ProxySettings](./proxysettings) class that contains the user name, password, URI and port. 
  
 #### Type definitions 
  
 ProxySettingsObject 
  
  ###### The type ProxySettingsObject is defined as: {url:string,username:(string|undefined),password:(string|undefined)}. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setSaveDiffs method
Use this method to set if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
let configval = config.setSaveDiffs(value);
 ``` 

 #### Parameters 
 ###### value 
  
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
let configval = config.setSaveNewTests(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:boolean 
  
 If set to false, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to true, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setServerUrl method
Use this method to set the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
let configval = config.setServerUrl(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The URL of the Eyes server. Pass a value of null to use the default cloud server. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setTestName method
Use this method to set the name of the test.

#### Syntax 
 ``` 
let configval = config.setTestName(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The test name to be configured for the test. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class. 
### setViewportSize method
Set the viewport size to be used by the browser for the test.

#### Syntax 
 ``` 
let configval = config.setViewportSize(value);
 ``` 
 
 RectangleSizeObject

The type RectangleSizeObject is defined as: {width:number,height:number}.
        
 ####  Parameters 
 ###### value 
  
 Type: 
  
     RectangleSize|RectangleSizeObject 
  
  ###### An object that defines the width and height of the test browser viewport in pixels. 
  
 #### Type definitions 
  
 RectangleSizeObject 
  
  ###### The type RectangleSizeObject is defined as: {width:number,height:number}. 
  
 #### Return value 
Type: [Configuration](./configuration)

The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the [Configuration](./configuration) class.
        
  
