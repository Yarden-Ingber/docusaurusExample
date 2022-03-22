# Eyes class
This class provides the main methods used to execute tests and checkpoints.
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import Eyes
 
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
Type: [Eyes](./eyes)

Use the object returned to call the various methods provided by the Eyes class. 
### driver property
Use this property to retrieve and set the driver returned by the call to the [open](#open-method) method.
Typically, you should make all calls to the webdriver using this driver, which wraps the webdriver. This allows Eyes to be aware of calls being made to the webdriver, and enables a number of features.

#### Syntax 
 ``` 
value = eyes.driver
 ``` 
 
 Type:EyesWebDriver 
### is_open property
Use this to know if the Eyes instance is currently open.

#### Syntax 
 ``` 
value = eyes.is_open
 ``` 
 
 Type:bool 
Return True if the [Eyes.open](#open-method) method has been called on an eyes instance, and [Eyes.close](#close-method) or [Eyes.abort\_if\_not\_closed](#abortifnotclosed-method) have not yet been called. 
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
 
 Type:[BatchInfo](./batchinfo) 
An object of the class [BatchInfo](./batchinfo) that describes the batch.
        
 ####  Remarks 
Set this property once before the calls to the [open](#open-method) method for all tests that are supposed to be part of this batch. 
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
### fail_on_new_test property
If true, Eyes will raise an exception if there is a new test (i.e. a test without a corresponding baseline image).
You can use this flag if you don't intend to add new tests, and you want to catch a case where a new test is created by accident, for example because someone changed the name of the application, test, or one of the execution environment properties.

#### Syntax 
 ``` 
eyes.fail_on_new_test  = value
value = eyes.fail_on_new_test
 ``` 
 
 Type:bool 
Set to True treat new tests as failed tests. 
### force_full_page_screenshot property
Use this property to set and retrieve whether or not Eyes does scrolling and stitching on pages whose size is greater than the viewport.

#### Syntax 
 ``` 
eyes.force_full_page_screenshot  = value
value = eyes.force_full_page_screenshot
 ``` 
 
 Type:bool 
If this paramter has a value of True, then Eyes will do scrolling and stitching if necessary. If False, then the result is browser dependent. 
### hide_scrollbars property
Use this property to set and retrieve whether Eyes hides the scrollbars before capturing screenshots or not.
This is useful for eliminating false mismatches that are due to differences in the scrollbar position when the checkpoint is captured.

#### Syntax 
 ``` 
eyes.hide_scrollbars  = value
value = eyes.hide_scrollbars
 ``` 
 
 Type:bool 
If set to True then hide the scrollbars. Otherwise, don't hide the scrollbars. 
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
### is_disabled property
Use this property to set and retrieve whether or not interactions with Eyes will be silently ignored.

#### Syntax 
 ``` 
eyes.is_disabled  = value
value = eyes.is_disabled
 ``` 
 
 Type:bool 
If this has a value of True then all method calls to the SDK are ignored. Otherwise, all methods work as usual. 
### match_level property
Use this property to set and retrieve the default match level to be used for subsequent checkpoints in the test.

#### Syntax 
 ``` 
eyes.match_level  = value
value = eyes.match_level
 ``` 
 
 Type:Text 
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
You can overide the default timeout set by this property for a specific set checkpoint by passing a timeout to one of the check\_XXXX methods that support a timeout parameter, e.g. [`check_window`](#checkwindow-method)You can also overide the timeout for a specific test using the check fluent [`checksettings.timeout (not yet available in selenium python)`](#) 
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
A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent.
        
 ####  Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it. 
### send_dom property
Returns whether the DOM is being sent to the server or not.

#### Syntax 
 ``` 
eyes.send_dom  = value
value = eyes.send_dom
 ``` 
 
 Type:bool 
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
### stitch_mode property
Use this property to set and retrieve the type of stitching used for full page screenshots.

#### Syntax 
 ``` 
eyes.stitch_mode  = value
value = eyes.stitch_mode
 ``` 
 
 Type:Text 
The stitch mode to use. 
### wait_before_screenshots property
Use this property to set and retrieve the amount of time in milliseconds that Eyes will wait before capturing a screenshot.
When a large image is captured with multiple sub-images using scrolling and stitching, Eyes will wait the amount of time specified by this method before capturing each sub-image.

#### Syntax 
 ``` 
eyes.wait_before_screenshots  = value
value = eyes.wait_before_screenshots
 ``` 
 
 Type:int 
The time to wait in milliseconds. Passing a value of less than or equal to zero will cause the default value to be used. 
### abort_if_not_closed method
When a test is aborted, and it may be that not all of its checkpoints have excuted, call this method instead of [close](#close-method) methods so that it will have an Aborted status in the Eyes Test Manager.

#### Syntax 
 ``` 
value = eyes.abort_if_not_closed()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: None

 #### Remarks 
If you call this method on a test that was opened but not closed, then then test will have an aborted status in the Eyes Test Manager. If you call it after the test has been succesfully closed, then the call is ignored. 
### add_property method
Adds a user-defined key name/value property that will be associated with tests.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager.. You can set properties using the [Eyes.add\_property](#-method) method.

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
*   You should not assign a given value to a property more than once in a given test run. 
### check_region method
Checks a particular region of the checkpoint window.

#### Syntax 
 ``` 
value = eyes.check_region(region, tag, match_timeout, target, stitch_content)

value = eyes.check_region(region, tag, match_timeout, target)

value = eyes.check_region(region, tag, match_timeout)

value = eyes.check_region(region, tag)

value = eyes.check_region(region)
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 A non-empty region representing the screen region to check in screenshot pixel coordinates. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### target 
  
 Type:[Target](./target) \[Optional : default = None \] 
  
 An object that defines floating and ignores regions and other configuration options. 
  
  ###### stitch\_content 
  
 Type:bool \[Optional : default = False \] 
  
 If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered. 
  
 #### Return value 
Type: None 
### check_region_by_element method
Run a checkpoint only on a specific region defined by an element.

#### Syntax 
 ``` 
value = eyes.check_region_by_element(element, tag, match_timeout, target, stitch_content)

value = eyes.check_region_by_element(element, tag, match_timeout, target)

value = eyes.check_region_by_element(element, tag, match_timeout)

value = eyes.check_region_by_element(element, tag)

value = eyes.check_region_by_element(element)
 ``` 

 #### Parameters 
 ###### element 
  
 Type:AnyWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### target 
  
 Type:[Target](./target) \[Optional : default = None \] 
  
 An object that defines floating and ignores regions and other configuration options. 
  
  ###### stitch\_content 
  
 Type:bool \[Optional : default = False \] 
  
 If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered. 
  
 #### Return value 
Type: None 
### check_region_in_frame_by_selector method
Check only a specific region in a specific frame.

#### Syntax 
 ``` 
value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag, match_timeout, target, stitch_content)

value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag, match_timeout, target)

value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag, match_timeout)

value = eyes.check_region_in_frame_by_selector(frame_reference, by, value, tag)

value = eyes.check_region_in_frame_by_selector(frame_reference, by, value)
 ``` 

 #### Parameters 
 ###### frame\_reference 
  
 Type:FrameReference 
  
 A Selenium reference to the frame element. This can be anything acceptable by the Selenium switch\_to.frame(). 
  
  ###### by 
  
 Type:Text 
  
 An element selector which is chosen using the Selenium By class. 
  
  ###### value 
  
 Type:Text 
  
 The value identifying the element using the 'by' type. 
  
  ###### tag 
  
 Type:Text \[Optional : default = None \] 
  
 The tag defines a name for the checkpoint in the Eyes Test Manager. The name may be any string and serves to identify the step to the user in the Test manager. You may change the tag value without impacting testing in any way since Eyes does _not_ use the tag to identify the baseline step that corresponds to the checkpoint - Eyes matches steps based on their content and position in the sequences of images of the test. See [How Eyes compares checkpoints and baseline images](https://applitools.com/docs/topics/general-concepts/how-eyes-compares-checkpoints.html) for details. 
  
  ###### match\_timeout 
  
 Type:int \[Optional : default = -1 \] 
  
 The retry time in milliseconds. If there is a mismatch, then Eyes will recapture and recheck the checkpoint until the timeout limit. This can help avoid mismatches in cases where the capture was done before the page was fully rendered. Passing a value of -1 will force the default timeout. 
  
  ###### target 
  
 Type:[Target](./target) \[Optional : default = None \] 
  
 An object that defines floating and ignores regions and other configuration options. 
  
  ###### stitch\_content 
  
 Type:bool \[Optional : default = False \] 
  
 If the application window is larger than the viewport, and this parameter is True, then the entire page content is rendered. If this parameter is False, then only the viewport is rendered. 
  
 #### Return value 
Type: None 
### check_window method
Runs a checkpoint of the entire application (e.g. browser) window.

#### Syntax 
 ``` 
value = eyes.check_window(tag, match_timeout, target)

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
  
  ###### target 
  
 Type:[Target](./target) \[Optional : default = None \] 
  
 An object that defines floating and ignores regions and other configuration options. 
  
 #### Return value 
Type: None 
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
### get_viewport_size method
Use this method to retrieve The value that was set for the viewport.
If the viewport is not set explicitly using e.g. using [Eyes.set\_viewport\_size](#setviewportsize-method), then this method may only be called after a call to [Eyes.open](#open-method)
#### Syntax 
 ``` 
value = eyes.get_viewport_size()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: ViewPort

The viewport size in the form {'width': 800, 'height': 600}. 
### open method
Call this method to start a test, before calling any of the check methods.

#### Syntax 
 ``` 
outdriver = eyes.open(driver, app_name, test_name, viewport_size)

outdriver = eyes.open(driver, app_name, test_name)
 ``` 

 #### Parameters 
 ###### driver 
  
 Type:AnyWebDriver 
  
 The web driver. 
  
  ###### app\_name 
  
 Type:Text 
  
 The application name. This may be any string. 
  
  ###### test\_name 
  
 Type:Text 
  
 The name of the test. This