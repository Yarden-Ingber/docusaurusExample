# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Import statement 
``` 
from applitools.images import Eyes
 
 ``` 
### Constructor 
### Eyes method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
eyes = Eyes()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: None

Use the object returned to call the various methods provided by the Eyes class. 

## Properties 
### debug_screenshots_path property
Use this property to set and retrieve the folder path where locally saved checkpoint images should be stored (if enabled).

#### Syntax 
 ``` 
eyes.debug_screenshots_path  = value
value = eyes.debug_screenshots_path
 ``` 
 
 Type:Text 
A pathname where saved checkpoint images should be stored.
        
 ####  Remarks 
Enable and disable saving screenshots to the local disk using the [save\_debug\_screenshots](#setsavedebugscreenshots-property) property. 
### debug_screenshots_prefix property
Use this property to set and retrieve the prefix that should be added to the file names for locally stored checkpoint images (if enabled).

#### Syntax 
 ``` 
eyes.debug_screenshots_prefix  = value
value = eyes.debug_screenshots_prefix
 ``` 
 
 Type:Text 
A prefix to be added to the saved checkpoint images filename.
        
 ####  Remarks 
Enable and disable saving screenshots to the local disk using the [save\_debug\_screenshots](#setsavedebugscreenshots-property) property. 
### is_open property
Use this to know if the Eyes instance is currently open.

#### Syntax 
 ``` 
value = eyes.is_open
 ``` 
 
 Type:bool 
Return True if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method) or [Eyes.abort\_if\_not\_closed](#abortifnotclosed-method) have not yet been called. 
### match_level property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
eyes.match_level  = value
value = eyes.match_level
 ``` 
 
 Type:[MatchLevel](./matchlevel) 
Available match level values are:

 #### Remarks 
For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### save_debug_screenshots property
Use this property to set and retrieve whether or not checkpoint images should be copied to a local file (typically for troubleshooting).

#### Syntax 
 ``` 
eyes.save_debug_screenshots  = value
value = eyes.save_debug_screenshots
 ``` 
 
 Type:bool 
If set to true, then checkpoint images is saved to a local directory. 
### scale_ratio property
Use this property to set and retrieve the scale ratio to be applied to images before matching.
Typically used to compensate for different vertical and horizontal pixels density on some devices.

#### Syntax 
 ``` 
eyes.scale_ratio  = value
value = eyes.scale_ratio
 ``` 
 
 Type:float 
The scale ratio to use. 
### configure property
Use this to directly configure the eyes object using any of the methods exposed by the [Configuration](./configuration) class.
The [Configuration](./configuration) methods support a Fluent API, so you can chain multiple methods of the [Configuration](./configuration) class to set multiple configuration options.

#### Syntax 
 ``` 
eyes.configure.set_match_level(MatchLevel.LAYOUT)
 ``` 
 
 Type:[Configuration](./configuration) 
### abort method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
value = eyes.abort()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResults](./testresults)
        
 ####  Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### abort_if_not_closed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
eyes.abort_if_not_closed()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### add_property method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [Eyes.add\_property](#-method) method, [Configuration.add\_property](./configuration#addproperty-method) method, [Configuration.properties](./configuration#setproperties-property) property or [Configuration.properties](./configuration#setproperties-property) property.

#### Syntax 
 ``` 
value = eyes.add_property(name, value)
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text 
  
 The name of the property. 
  
  ###### value 
  
 Type:Text 
  
 The value associated with the name. 
  
 #### Return value 
Type: None

 #### Remarks 
*   Set multiple properties by calling [Eyes.add\_property](#) or [Configuration.add\_property](./configuration#addproperty-method) multiple times with the same property name and with different values.
*   You should not assign a given value to a property more than once in a given test run.
*   You can also associate properties with a batch using [BatchInfo.add\_property](./batchinfo#addproperty-method). 
### check method
Run a checkpoint. Uses Fluent arguments to specify the various parameters.
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [ImagesCheckSettings](./checksettings) class.

#### Syntax 
 ``` 
value = eyes.check(name, check_settings)

value = eyes.check(check_settings)

value = eyes.check(check_settings, name)
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### check\_settings 
  
 Type:[ImagesCheckSettings](./checksettings) 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
  ###### check\_settings 
  
 Type:[ImagesCheckSettings](./checksettings) 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
  ###### check\_settings 
  
 Type:[ImagesCheckSettings](./checksettings) 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
  ###### name 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
 #### Return value 
Type: bool

A return value of True indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of False depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of False, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned False, all the following checkpoints will also return False. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method.
        
 ####  Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### check_image method
Run a checkpoint on an image that you provide as a parameter.

#### Syntax 
 ``` 
value = eyes.check_image(image, tag, ignore_mismatch)

value = eyes.check_image(image, tag)

value = eyes.check_image(image)
 ``` 

 #### Parameters 
 ###### image 
  
 Type:Union\[Image,Text\] 
  
 An image stored in a buffer in PNG format. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### ignore\_mismatch 
  
 Type:bool \[Optional : default = False \] 
  
 This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of False. To implement retry, on all retry attempts apart from the last, pass this parameter a value of True. When the method returns, check the return value. A returned value of True means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of False means that that the checkpoint did not match. Since this parameter was passed as True, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of False. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
 #### Return value 
Type: bool

A return value of True indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of False depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of False, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned False, all the following checkpoints will also return False. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method. 
### check_region method
Checks a particular region of the checkpoint image.

#### Syntax 
 ``` 
value = eyes.check_region(image, region, tag, ignore_mismatch)

value = eyes.check_region(image, region, tag)

value = eyes.check_region(image, region)
 ``` 

 #### Parameters 
 ###### image 
  
 Type:Image 
  
 Either a string that is a path to a file image, or an object of the Image class from the PIL Image module. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### ignore\_mismatch 
  
 Type:bool \[Optional : default = False \] 
  
 This parameter is used to implement retry of a checkpoint. If you are not implementing retry, then don't pass this parameter or pass a value of False. To implement retry, on all retry attempts apart from the last, pass this parameter a value of True. When the method returns, check the return value. A returned value of True means that the checkpoint passed, and you can continue with the next checkpoint. A returned value of False means that that the checkpoint did not match. Since this parameter was passed as True, Eyes will not store the outcome of this checkpoint and will expect that the next image sent is for the current step (i.e. is being retried). On the last retry attempt, pass a value of False. This way, Eyes knows that there will be no more retries, and it will store the results of the last check as the result of the current step. The next checkpoint sent will be treated as the next step. Note that since Eyes allows for new or deleted steps, once there is a mismatch for one step, all subsequent steps will also return a mismatch, and Eyes determines the actual match/mismatch/new/missing status of all the steps when the test is closed. 
  
 #### Return value 
Type: bool

A return value of True indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of False depends on whether this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of False, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned False, all the following checkpoints will also return False. This does not mean that the checkpoint mismatched; it means that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults) returned by the [close](#close-method) method. 
### clear_properties method
Clears any custom key name/value properties.

#### Syntax 
 ``` 
eyes.clear_properties()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### close method
Call this method at the end of the test. This terminates the sequence of checkpoints, and then waits synchronously for the test results and returns them.

#### Syntax 
 ``` 
result = eyes.close(raise_ex)

result = eyes.close()
 ``` 

 #### Parameters 
 ###### raise\_ex 
  
 Type:bool \[Optional : default = True \] 
  
 If this parameter has a value of True, then if there are new, missing, or mismatched steps, an exception will be thrown. If the parameter is set to False, then an exception will not be thrown for the above cases. If the parameter is not passed, then it is as if a True value was passed. 
  
 #### Return value 
Type: [TestResults](./testresults)

The result of the test can be obtained from the object returned. See [TestResults class](./testresults) for a list of what information can be obtained from this object. See [TestResults class](./testresults) for a list of what information can be obtained from this object. 
### get_configuration method
Use this method to retrieve the current configuration object. This will be the most recent configuration object set using [set\_configuration](#setconfiguration-method), or the initial default configuration object.
If you want to change an Eyes configuration that has already been configured, then the standard way of doing so is to use the following pattern:

*   Get the current configuration using [Eyes.get\_configuration](#) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.set\_configuration](#setconfiguration-method).

#### Syntax 
 ``` 
value = eyes.get_configuration()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Configuration](./configuration) 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
outdriver = eyes.open(app_name, test_name, dimension)

outdriver = eyes.open(app_name, test_name)
 ``` 
 
 ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](../../index-gen/class-rectanglesize-images-python_sdk4.html)\]
 #### Parameters 
 ###### app\_name 
  
 Type:Text 
  
 The application name. This may be any string. You can set the application name for all tests using the [Configuration.set\_app\_name](./configuration#setappname-method) method. If you do so, then set this parameter to a value of None to indicate that the configuration default should be used. 
  
  ###### test\_name 
  
 Type:Text 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### dimension 
  
 Type:ViewPort \[Optional : default = None \] 
  
 If this parameter is not provided, and the viewport was not set using the [undefined](undefined), then the viewport size is taken from the dimensions of the image of the first checkpoint. For the image SDK this is used to identify the baseline and does not affect the way the checkpoint image is processed in any other way. 
  
  ###### Type definitions 
  
 ViewPort 
  
 The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](../../index-gen/class-rectanglesize-images-python_sdk4.html)\] 
  
 #### Return value 
Type: None

 #### Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.close](#close-method) (in case of a normal completion) or [Eyes.abort](#abort-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](#) again to start a new test on the same Eyes instance. 
### set_configuration method
Use this method to configure Eyes based on a configuration object.

#### Syntax 
 ``` 
value = eyes.set_configuration(configuration)
 ``` 

 #### Parameters 
 ###### configuration 
  
 Type:[Configuration](./configuration) 
  
 A configuration object that has the various properties/methods set to the required values. 
  
 #### Return value 
Type: None

 #### Remarks 
The typical sequence for configuring a test is:

*   Create a [Configuration](./configuration) object.
*   Assign to the properties you want to set up, and call the various methods.
*   Create an [Eyes](./eyes) instance.
*   Call the [Eyes.set\_configuration](#) method with the configuration object.
*   Call the [Eyes.open](#open-method) method to start the test session.

Once you've changed the configuration of an Eyes instance by calling [Eyes.set\_configuration](#) or by setting a configuration directly on the Eyes instance, if you want to change the configuration, you must use the following sequence:

*   Get the current configuration using [Eyes.get\_configuration](#getconfiguration-method) to a local variable.
*   Make changes to the local configuration value.
*   Assign the local configuration object to the Eyes instance using [Eyes.set\_configuration](#).
        
  
