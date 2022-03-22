# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Import statement 
``` 
from applitools.selenium import Eyes
 
 ``` 
### Constructor 
### Eyes method
This is the constructor for the [Eyes](./eyes) class.
This is the main class used for executing checkpoints using Eyes.

#### Syntax 
 ``` 
eyes = Eyes(runner)

eyes = Eyes()
 ``` 

 #### Parameters 
 ###### runner 
  
 Type:Union\[Text,[VisualGridRunner](./visualgridrunner),[ClassicRunner](./classicrunner),None\] \[Optional : default = None \] 
  
 If this parameter is provided, it must be an instance of either the [ClassicRunner](./classicrunner-method) or [VisualGridRunner](./visualgridrunner-method) classes. If a [VisualGridRunner](./visualgridrunner-method) is passed then the image will be rendered using the Ultrafast Grid. If this parameter is not provided, then DOM rendering is done using the local browser defined by the driver parameter passed to the [Eyes.open](#open-method) method. 
  
 #### Return value 
Type: None

Use the object returned to call the various methods provided by the Eyes class. 

## Properties 
### device_pixel_ratio property
Use this property to retrieve and set the screen pixel ratio.

#### Syntax 
 ``` 
value = eyes.device_pixel_ratio
 ``` 
 
 Type:int 
### driver property
Use this property to retrieve and set the driver returned by the call to the [open](#open-method) method.
Typically, you should make all calls to the webdriver using this driver, which wraps the webdriver. This allows Eyes to be aware of calls being made to the webdriver, and enables a number of features.

#### Syntax 
 ``` 
value = eyes.driver
 ``` 
 
 Type:EyesWebDriver 
### baseline_env_name property
Use this property to set and retrieve the name of the environment that will be used to determine the baseline.
Eyes stores a set of mappings from an environment name to an environment E, where E is defined as a triplet <OS, Browser, ViewportSize>. You can specify that Eyes uses the baseline defined by the environment name instead of the test environment by assigning this property the name of the environment. If the name is undefined in the server when this test runs, and this property is assigned before the call to [open](#open-method), then the name will be created and defined with the values of the current test environment. Reading this property returns the currently defined value for the current test run or a value of None if it has not been assigned.

#### Syntax 
 ``` 
eyes.baseline_env_name  = value
value = eyes.baseline_env_name
 ``` 
 
 Type:Text 
The name of the baseline environment. 
### ignore_caret property
Use this property to retrieve and set whether or not Eyes eliminates mismatches due to blinking cursor artifacts.

#### Syntax 
 ``` 
value = eyes.ignore_caret
 ``` 
 
 Type:bool 
### is_open property
Use this to know if the Eyes instance is currently open.

#### Syntax 
 ``` 
value = eyes.is_open
 ``` 
 
 Type:bool 
Return True if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method), [Eyes.abort](#abort-method), [Eyes.abort\_async](#abortasync-method) or [Eyes.abort\_if\_not\_closed](#abortifnotclosed-method) have not yet been called. 
### is_send_dom property
Returns whether the DOM is being sent to the server or not.

#### Syntax 
 ``` 
value = eyes.send_dom
 ``` 
 
 Type:bool 
### api_key property
Use this property to set and retrieve your Eyes license key.
To obtain your API key, see [How to obtain your API key.](https://applitools.com/docs/topics/overview/obtain-api-key.html)
#### Syntax 
 ``` 
eyes.api_key  = value
value = eyes.api_key
 ``` 
 
 Type:Text 
A string that is your API Key.
        
 ####  Remarks 
Set this immediately after the Eyes object is created (before calling [open](#open-method)). If you have an environment variable called APPLITOOLS\_API\_KEY that is set to the value of your API key, then you do not need to call this method, and Eyes will take the string from the environment value. 
### app_name property
Use this property to set and retrieve the value of the application name property. The application name is one of the 5 properties that define the baseline.

#### Syntax 
 ``` 
eyes.app_name  = value
value = eyes.app_name
 ``` 
 
 Type:Text 
The application name. This may be any string.
        
 ####  Remarks 
If you call this method, it must be called before the call to [Eyes.open](#open-method). In the call to [Eyes.open](#open-method), if you provide the application parameter, then it will override the value set here. If you don't provide the parameter or pass a None, then the value set here will be used. 
### baseline_branch_name property
Use this property to set and retrieve the name of the branch the baseline reference will be taken from and where new and accepted steps will be saved to.

#### Syntax 
 ``` 
eyes.baseline_branch_name  = value
value = eyes.baseline_branch_name
 ``` 
 
 Type:Text 
The name of the baseline branch to use. 
### batch property
Use this property to set and retrieve the batch information for this test.
In the Test Manager, all the results of tests that were executed as a single batch are displayed together and can be managed and operated on as a group. See [How to organize your tests with batches](https://applitools.com/docs/topics/working-with-test-batches/working-with-test-batches-in-overview.html) and [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example.

#### Syntax 
 ``` 
eyes.batch =  BatchInfo(name)
 ``` 
 
 Type:[](./batchinfo)[BatchInfo](./batchinfo) 
An object of the class [BatchInfo](./batchinfo) that describes the batch.
        
 ####  Remarks 
Set this property once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch. 
### is_disabled property
Use this property to set and retrieve whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
eyes.is_disabled  = value
value = eyes.is_disabled
 ``` 
 
 Type:bool 
If this has a value of True then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
### configure property
Use this to directly configure the eyes object using any of the methods exposed by the [Configuration](./configuration) class.
The [Configuration](./configuration) methods support a Fluent API, so you can chain multiple methods of the [Configuration](./configuration) class to set multiple configuration options.

#### Syntax 
 ``` 
eyes.configure.set_match_level(MatchLevel.LAYOUT)
 ``` 
 
 Type:[Configuration](./configuration) 
### agent_id property
Use this property to set and retrieve the name and version of the SDK.
This method is only relevant for users that write their own SDK.

#### Syntax 
 ``` 
eyes.agent_id  = value
value = eyes.agent_id
 ``` 
 
 Type:Text 
The id of the agent in the format 'name/1.2.3'.
        
 ####  Remarks 
To take effect, this property must be assigned before the call to [open](#open-method). 
### branch_name property
Use this property to set and retrieve the branch used for the baseline of this run.
If the branch does not exist when the test starts, then it will be created. If a baseline exists that has the same properties in the parent branch (i.e. the same application name, test name and environment), then the parent branch will provide the intial baseline for the newly created branch. By default, the parent branch is the default branch. You can specify the parent branch explicitly using [parent\_branch\_name](#setparentbranchname-property) property.

#### Syntax 
 ``` 
eyes.branch_name  = value
value = eyes.branch_name
 ``` 
 
 Type:Text 
The name of the branch from which the baseline will be taken and saved. This may be any string. 
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
### host_app property
Use this property to set and retrieve the name of the hosting application property.
The hosting app, along with the HostOS property and ViewportSize, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the host application (browser) that the test uses. When running a test with the Ultrafast Grid, when the browser configuration is a desktop browser, the specified browser is the hosting app. When the browser configuration is a mobile device, the hosting app is Chrome. The Test Manager displays this value as the _Browser_ column.

#### Syntax 
 ``` 
eyes.host_app  = value
value = eyes.host_app
 ``` 
 
 Type:Text 
The value to be used for the Host OS Property. 
### host_os property
Use this property to set and retrieve the name of the hosting operating system property.
The HostOS, along with the hosting app and viewport size, determines which baseline will be used as the basis for comparing checkpoint images. When running without the Ultrafast Grid, by default, Eyes uses the Operating System on which the test executes. When running a test using the Ultrafast Grid, the operating system depends on the browser configuration. The Test Manager displays this value as the _OS_ column.

#### Syntax 
 ``` 
eyes.host_os  = value
value = eyes.host_os
 ``` 
 
 Type:Text 
The value to be used for the Host OS property. 
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
### match_timeout property
Use this property to set and retrieve the maximum time Eyes will try to perform a match on the fully captured image.
Since a browser can take time to render a page (because it is complex, or because of slow network speeds), if Eyes detects mismatches, it will initially assume that the mismatch is because the render has not completed yet, and it will retry the match after a short wait. You can use this property to determine how much time Eyes spends retrying the matching before declaring a mismatch.

#### Syntax 
 ``` 
eyes.match_timeout  = value
value = eyes.match_timeout
 ``` 
 
 Type:int 
The timeout to set in milliseconds.
        
 ####  Remarks 
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`check_window`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`timeout method`](#timeout-method) 
### parent_branch_name property
Use this property to set and retrieve the parent branch from which newly created branches get their initial baseline.
The newly created branch inherits the baselines and annotations of the parent. If no parent is defined, then the new branch will inherit the baselines from the default branch.

#### Syntax 
 ``` 
eyes.parent_branch_name  = value
value = eyes.parent_branch_name
 ``` 
 
 Type:Text 
The branch name. This may be any string. 
### rotation property
Use this property to set and retrieve the rotation to apply to the checkpoint images before matching.
Typically, this is used to switch between portrait and landscope modes (90 degrees).

#### Syntax 
 ``` 
eyes.rotation  = value
value = eyes.rotation
 ``` 
 
 Type:Union\[int,float\] 
The number of degrees to rotate. 
### save_debug_screenshots property
Use this property to set and retrieve whether or not checkpoint images should be copied to a local file (typically for troubleshooting).

#### Syntax 
 ``` 
eyes.save_debug_screenshots  = value
value = eyes.save_debug_screenshots
 ``` 
 
 Type:bool 
If set to true, then checkpoint images is saved to a local directory. 
### save_diffs property
Use this property to set and retrieve if steps that have mismatches should be automatically saved to the baseline or not.
In the usual workflow, if Eyes finds mismatches, you use the Test Manager to view the mismatches, accept or reject the steps with mismatches, and then update the baseline with the images captured in the accepted steps. This method allows you to instruct Eyes that where steps have mismatches, or where there are new or missing steps, the corresponding steps in the baseline should be updated with the images captured in this run of the test.

Using this method completely overwrites your baseline. It is preferable to see the results in the Test Manager and, if necessary, to accept all differences there. If you do use this method, remember to remove the call to this method once the baseline is ready for use in the normal way.

#### Syntax 
 ``` 
eyes.save_diffs  = value
value = eyes.save_diffs
 ``` 
 
 Type:bool 
If this has a value of true, then the baseline will be updated with checkpoints that have mismatches. 
### save_new_tests property
Use this property to set and retrieve whether or not 'new' tests are saved to the baseline by default.
This option is enabled by default (i.e. new tests are saved automatically to the baseline), so use this method to disable the default behavior.

#### Syntax 
 ``` 
eyes.save_new_tests  = value
value = eyes.save_new_tests
 ``` 
 
 Type:bool 
If set to False, then the user will need to save the baseline explicitly in the Test Manager for new tests to be saved to the baseline. If set to True, then Eyes will automatically create a baseline for tests with a status of 'new' (the default behavior). 
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
### send_dom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
eyes.send_dom  = value
value = eyes.send_dom
 ``` 
 
 Type:bool

 #### Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### send_dom property
Use this property to set and retrieve if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
eyes.send_dom  = value
value = eyes.send_dom
 ``` 
 
 Type:bool

 #### Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### server_url property
Use this property to set and retrieve the URL of the Eyes server used to process the captured images.
Use this if you have a dedicated cloud or an on-premise server. By default, the test will run on the public cloud. If you set the environment variable APPLITOOLS\_SERVER\_URL to the server URL then Eyes uses that value as the default.

#### Syntax 
 ``` 
eyes.server_url  = 'https://myEyesServer' #setter
value = eyes.server_url                   #getter
 ``` 
 
 Type:Text 
The URL of the Eyes server. Pass a value of None to use the default cloud server. 
### stitch_overlap property
Use this property to set and retrieve the overlap between sub-images when a scrolled window is stitched.

#### Syntax 
 ``` 
eyes.stitch_overlap  = value
value = eyes.stitch_overlap
 ``` 
 
 Type:int 
The width of the stitch overlap in pixels. 
### viewport_size property
The value that was set for the viewport.

#### Syntax 
 ``` 
eyes.viewport_size  = value
value = eyes.viewport_size
 ``` 
 
 Type:[RectangleSize](./rectanglesize) 
### abort method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close\_async](#closeasync-method) or [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
eyes.abort()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### abort_async method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close\_async](#closeasync-method) or [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
eyes.abort_async()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### abort_if_not_closed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close\_async](#closeasync-method) or [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

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
To define the region of the check point, and to configure special processing, pass a chain of method calls as a parameter. First, choose a method from the [Target](./target) class, then, optionally, chain one or more methods from the [SeleniumCheckSettings](./checksettings) class.

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
  
 Type:[SeleniumCheckSettings](./checksettings) 
  
 The fluent API calls, starting with one of the [Target](./target) methods. 
  
 #### Return value 
Type: [MatchResult](./matchresult)
        
 ####  Remarks 
For a detailed description of how to use this method see [The Eyes SDK check Fluent API](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html). 
### check_element method
Run a checkpoint on the area of a particular element.

#### Syntax 
 ``` 
value = eyes.check_element(element, tag, match_timeout)

value = eyes.check_element(element, tag)

value = eyes.check_element(element)
 ``` 

 #### Parameters 
 ###### element 
  
 Type:Union\[Text,List,Tuple,WebElement,EyesWebElement\] 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
 #### Return value 
Type: [MatchResult](./matchresult) 
### check_frame method
Run a checkpoint on the area of a particular frame.

#### Syntax 
 ``` 
value = eyes.check_frame(frame_reference, tag, match_timeout)

value = eyes.check_frame(frame_reference, tag)

value = eyes.check_frame(frame_reference)
 ``` 
 
 FrameReference

The type FrameReference is defined as: Union\[FrameNameOrId,FrameIndex,AnyWebElement\].
        
 ####  Parameters 
 ###### frame\_reference 
  
 Type:FrameReference 
  
 An object that references the frame. 
  
  ###### Type definitions 
  
 FrameReference 
  
 The type FrameReference is defined as: Union\[FrameNameOrId,FrameIndex,AnyWebElement\]. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
 #### Return value 
Type: [MatchResult](./matchresult) 
### check_region method
Checks a particular region of the checkpoint window.

#### Syntax 
 ``` 
value = eyes.check_region(region, tag, match_timeout, stitch_content)

value = eyes.check_region(region, tag, match_timeout)

value = eyes.check_region(region, tag)

value = eyes.check_region(region)
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Union\[[Region](./region),Text,List,Tuple,WebElement,EyesWebElement\] 
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### stitch\_content 
  
 Type:bool \[Optional : default = False \] 
  
 If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered. 
  
 #### Return value 
Type: [MatchResult](./matchresult) 
### check_window method
Runs a checkpoint of the entire application (e.g. browser) window.

#### Syntax 
 ``` 
value = eyes.check_window(tag, match_timeout, fully)

value = eyes.check_window(tag, match_timeout)

value = eyes.check_window(tag)

value = eyes.check_window()
 ``` 

 #### Parameters 
 ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### fully 
  
 Type:bool \[Optional : default = None \] 
  
 Set to True to capture the full browser page and not just the viewport. 
  
 #### Return value 
Type: [MatchResult](./matchresult) 
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
If your tests can run concurrently and you don't need to wait for the results before starting the next test, then it is highly recommended that you call the method [Eyes.close\_async](#closeasync-method) instead of this method. the call to [close\_async](#closeasync-method) ends the test without waiting for the results and the next test can start immediately, greatly reducing overall test time. When you use [close\_async](#closeasync-method), you obtain the results by calling [get\_all\_test\_results](./classicrunner#getalltestresults-method) after all the tests have run.

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
### close_async method
Call this method or [Eyes.close](#close-method) at the end of the test. The call to [close\_async](#) terminates the sequence of checkpoints and returns immediately, without waiting for the test results.
Unlike the method [close](#close-method), this method does not wait for results to be available and does not return test results. The test results for this test can be obtained, along with all the other test results, when the runner is terminated by calling the method [VisualGridRunner.get\_all\_test\_results](./visualgridrunner#getalltestresults-method).

#### Syntax 
 ``` 
eyes.close_async()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
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
### get_viewport_size method
Use this method to retrieve The value that was set for the viewport.
If the viewport is not set explicitly using e.g. using [Eyes.set\_viewport\_size](#setviewportsize-method), then this method may only be called after a call to [Eyes.open](#open-method)
#### Syntax 
 ``` 
value = eyes.get_viewport_size(driver)
eyes.viewport_size  = value
value = eyes.viewport_size
 ``` 
 
 AnyWebDriver

The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object.
        
 ####  Parameters 
 ###### driver 
  
 Type:AnyWebDriver 
  
 The driver returned from the call to open. 
  
  ###### Type definitions 
  
 AnyWebDriver 
  
 The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object. 
  
 #### Return value 
Type: ViewPort

The viewport size in the form {'width': 800, 'height': 600}.

#### Type definitions

ViewPort

The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\] 
### locate method
Use this method to search the current browser viewport for one or more graphics regions defined by visual locators.

#### Syntax 
 ``` 
names_a = ["locator_1a", "locator_1b", "locator_1c"]
loc_regions_5 = eyes.locate(VisualLocator.names(names_a).first())  
 ``` 
 
 LOCATORS\_TYPE

A mapping of each locator to the region identified for that locator.
        
 ####  Parameters 
 ###### visual\_locator\_settings 
  
 Type:[VisualLocatorSettings](./visuallocatorsettings) 
  
 An object that defines the required visual locator names and how many instances of each locator should be found. This object is created using a series of calls on a [VisualLocator](./visuallocator) object in a fluent API style. See the example below for more details. 
  
 #### Return value 
Type: LOCATORS\_TYPE

Returns a mapping between the locator names passed as a parameter [name](./visuallocator#name-method) or [names](./visuallocator#names-method) methods and the regions in the viewport where the graphic images defined by those locator names were detected.

If the image of a particular locator name is not found in the viewport, the locator is mapped to a zero length array. If a locator name is passed, and a locator of that name has not been defined on the Eyes server, the returned locator will be mapped to a value of None instead of an array.

and each value is an object that contains the text found and its bounding rectangle.

#### Type definitions

LOCATORS\_TYPE

A mapping of each locator to the region identified for that locator.
        
 ####  Remarks
        
 The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.
 #### Example  
The example below includes two calls to the method [Eyes.locate](#). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:

*   Pass a locator string to the method [name](./visuallocatorsettings#name-method).
*   Pass a list of strings to the method [names](./visuallocatorsettings#names-method).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:

*   To retrieve a maximum of one region for each locator append a call to [first](./visuallocatorsettings#first-method).
*   To retrieve all regions for all locators append a call to ([all](./visuallocatorsettings#all-method)).

Python

    # return a zero or one locator for each of the three locators defined as parameters to name()
    loc_regions_6 = eyes.locate(
        (VisualLocator.name("locator_a")
            .name("locator_b")
            .name("locator_c")
            .first()))
    # return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    locator_list_1 = ["locator_1a", "locator_1b", "locator_1c"]
    locator_list_2 = ["locator_2a", "locator_2b", "locator_2c"]
    loc_regions_7 = eyes.locate(
        (VisualLocator.names(locator_list_1)
            .names(locator_list_1)
            .name("another locator")
            .all()))
    
    locators_regions = eyes.locate(VisualLocator.names(["locator_a", "locator_b", "locator_c"]).all())
    # Loop through all the locators and click on the center of their region
    for locator_info in locators_regions:
        for locator, region in locator_info:
            x = region.left + region.width/2
            y = region.top + region.height/2
            print("loc = ", locator, " x = ", x, " y = ", y)

//... 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
outdriver = eyes.open(driver, app_name, test_name, viewport_size)

outdriver = eyes.open(driver, app_name, test_name)

outdriver = eyes.open(driver, app_name)

outdriver = eyes.open(driver)
 ``` 
 
 AnyWebDriver

The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object.
        
 ####  Parameters 
 ###### driver 
  
 Type:AnyWebDriver 
  
 The web driver. 
  
  ###### Type definitions 
  
 AnyWebDriver 
  
 The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object. 
  
  ###### app\_name 
  
 Type:Text \[Optional : default = None \] 
  
 The application name. This may be any string. You can set the application name for all tests using the [Configuration.set\_app\_name](./configuration#setappname-method) method or [Eyes.app\_name](#setappname-property) property. If you do so, then set this parameter to a value of None to indicate that the configuration default should be used. 
  
  ###### test\_name 
  
 Type:Text \[Optional : default = None \] 
  
 The name of the test. This name must be unique within the scope of the application name. It may be any string. 
  
  ###### viewport\_size 
  
 Type:ViewPort \[Optional : default = None \] 
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 Defines the viewport size of the browser that will be set before the start of the test. If this parameter is not provided then the viewport size will be based on the current browser window size. See [Using viewports in Eyes](https://applitools.com/docs/topics/general-concepts/using-viewports-in-eyes.html) for more details. 
  
  ###### Passing a value of None specifies that the default viewport size should be used. If [Eyes.set\_viewport\_size](#setviewportsize-method) is called before the call to this method, then the default is determined by the value set by that method. If it is not called, then the default viewport size is system and application dependent. 
  
 #### Type definitions 
  
 ViewPort 
  
  ###### The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\] 
  
 #### Return value 
Type: EyesWebDriver

The returned web driver is a clone of the driver passed as a parameter. It is recomended that you use the web driver object returned by this method in all further calls to the web driver. This allows Eyes to record these interactions and play them back in the Eyes Test Manager.
        
 ####  Remarks 
After making a call to this method, you must eventually terminate the test by calling [Eyes.close\_async](#closeasync-method) (in case of a normal completion) or [Eyes.abort\_async](#abortasync-method) (in case of an aborted test). If you want to run another test, then it is recomended to do this with a newly created Eyes instance to avoid side effects. However, in principle, it is legal to call [Eyes.open](#) again to start a new test on the same Eyes instance. 
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
### set_viewport_size method
Set the default viewport size property. Eyes uses this if a subsequent call to [open](#open-method) is done without a viewport size. This also changes the browser viewport size to the given size immediately, instead of when [open](#open-method) is called.
This property will be displayed by the Test Manager along with the other test information. The value is also taken into consideration when finding a matching baseline.

#### Syntax 
 ``` 
value = Eyes.set_viewport_size(driver, size)
Eyes.viewport_size  = value
python_sdk4: eyes.viewport_size Warning : void return value None on overload - ignored - assumed its a private setter.
 ``` 
 
 AnyWebDriver

The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object.
        
 ####  Parameters 
 ###### driver 
  
 Type:AnyWebDriver 
  
 The driver returned from the call to open. 
  
  ###### Type definitions 
  
 AnyWebDriver 
  
 The type AnyWebDriver is defined as: Union\[EyesWebDriver,WebDriver\]. This object can be used in the same way as the Selenium driver object. 
  
  ###### size 
  
 Type:ViewPort 
  
 The size of the viewport 
  
  ###### The size of the viewport passed as an object. 
  
 The size of the viewport passed as an object {'width':, 'height':} 
  
 #### Type definitions 
  
  ###### ViewPort 
  
 The type ViewPort is defined as: Union\[Dict\[Text,int\],[RectangleSize](./rectanglesize)\] 
  
 #### Return value 
Type: None

 #### Remarks 
*   Call this method before the call to [Eyes.open](#open-method). Then, when calling the open method, don't pass the viewportSize parameter. If the viewport size is set to be smaller than the actual content, then scrolling should typically be enabled by calling [set\_force\_full\_page\_screenshot](./configuration#setforcefullpagescreenshot-method) method so that the full page image is tested.

This method is a static method.
        
  
.