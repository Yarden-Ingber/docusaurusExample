# SeleniumCheckSettings class

The methods in this class are used as part of the [check](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
from applitools.selenium.fluent import SeleniumCheckSettings
 
 ``` 
 
### accessibility method
Use to define an accessibility region and its type.

#### Syntax 
 ``` 
eyes.Check(Target.window().accessibility(region))
eyes.Check(Target.window().accessibility(css_selector, type))
eyes.Check(Target.window().accessibility(by, type))
eyes.Check(Target.window().accessibility(element, type))
eyes.Check(Target.window().accessibility(region, type))
 ``` 
 
 CssSelector

The type CssSelector is defined as: Text.
        
 ####  Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 A selector that specified one or more elements. The bounding rectangle of each element, defines an accessibility region to be analyzed. 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### type 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The accessibility type of the region. 
  
  ###### by 
  
 Type:BySelector 
  
 A selector that specified one or more elements. The bounding rectangle of each element, defines an accessibility region to be analyzed. 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An element bounding rectangle that defines an accessibility region to be analyzed. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### before_render_screenshot_hook method
Use this to supply a JavaScript snippet that should be executed on the Ultrafast Grid before the DOM is rendered.

#### Syntax 
 ``` 
eyes.Check(Target.window().before_render_screenshot_hook(hook))
 ``` 

 #### Parameters 
 ###### hook 
  
 Type:Text 
  
 A string with legal JavaScript code. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
### content method
If called without parameters, sets the match level for this target to . Otherwise, defines that a match level of [CONTENT](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.window().content(by))
eyes.Check(Target.window().content(element))
eyes.Check(Target.window().content(css_selector))
eyes.Check(Target.window().content(region))
 ``` 
 
 BySelector

The type BySelector is defined as: List\[SeleniumBy,Text\].
        
 ####  Parameters 
 ###### by 
  
 Type:BySelector 
  
 Any legal Selenium By request passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 Any legal CSS selector, for example .myClass 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`match_level`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`match_level`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in selenium python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in selenium python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in selenium python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in selenium python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### exact method
Sets the match level for this target to [EXACT](./matchlevel).
This match level is very sensative to differences in images. Do not use unless you have a very specific purpose.

#### Syntax 
 ``` 
eyes.Check(Target.window().exact())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type:

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`eyes$setmatchlevel`](#).

For a given target you may call only one of the following methods that set a target default match level:

*   [`checksettings$matchlevel`](#)
*   [`checksettings$strict`](#)
*   [`checksettings$content`](#)
*   [`checksettings$layout`](#)
*   [`checksettings$exact`](#)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings$strictRegions`](#)
*   [`checksettings$contentRegions`](#)
*   [`checksettings$layoutRegions`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ``` 
eyes.Check(Target.window().floating(max_offset, region))
eyes.Check(Target.window().floating(region, max_up_offset, max_down_offset, max_left_offset, max_right_offset))
 ``` 
 
 FLOATING\_VALUES

The type FLOATING\_VALUES is defined as: Union\[[Region](./region),CssSelector,AnyWebElement,BySelector\].
        
 ####  Parameters 
 ###### max\_offset 
  
 Type:int 
  
 The maximum amount that the region can shift in any direction and still be considered matching. 
  
  ###### region 
  
 Type:FLOATING\_VALUES 
  
 An object that defines the region. 
  
  ###### Type definitions 
  
 FLOATING\_VALUES 
  
 The type FLOATING\_VALUES is defined as: Union\[[Region](./region),CssSelector,AnyWebElement,BySelector\]. 
  
  ###### max\_up\_offset 
  
 Type:int 
  
 The maximum amount that the region can shift upwards and still be considered matching. 
  
  ###### max\_down\_offset 
  
 Type:int 
  
 The maximum amount that the region can shift downwards and still be considered matching. 
  
  ###### max\_left\_offset 
  
 Type:int 
  
 The maximum amount that the region can shift to the left and still be considered matching. 
  
  ###### max\_right\_offset 
  
 Type:int 
  
 The maximum amount that the region can shift to the right and still be considered matching. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
### frame method
Select a frame that is a direct descendent of a frame selected previously in the chain.

#### Syntax 
 ``` 
eyes.Check(Target.window().frame(frame_name_or_id))
eyes.Check(Target.window().frame(element))
eyes.Check(Target.window().frame(index))
eyes.Check(Target.window().frame(by))
 ``` 
 
 FrameNameOrId

The type FrameNameOrId is defined as: Text.
        
 ####  Parameters 
 ###### frame\_name\_or\_id 
  
 Type:FrameNameOrId 
  
 The name or id of the frame element. 
  
  ###### Type definitions 
  
 FrameNameOrId 
  
 The type FrameNameOrId is defined as: Text. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 The element object of the frame. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### index 
  
 Type:FrameIndex 
  
 The index of the frame element as defined by Selenium. 
  
  ###### Type definitions 
  
 FrameIndex 
  
 The type FrameIndex is defined as: int. 
  
  ###### by 
  
 Type:BySelector 
  
 Any legal Selenium By request. 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only use this method in the chain if the first method in the chain is [frame](./target#frame-method). You may not call it if the first method in the chain is [window](./target#window-method) or [region](./target#region-method). Call this method multiple times to descend a hierarchy of embedded frames. 
### fully method
Defines if the screenshot for this target should be extended to contain the entire element or region being checked, even if it extends the borders of the viewport.

#### Syntax 
 ``` 
eyes.Check(Target.window().fully(fully))
eyes.Check(Target.window().fully())
 ``` 

 #### Parameters 
 ###### fully 
  
 Type:bool \[Optional : default = True \] 
  
 If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method overrides the global default or the most recent value set by the [Configuration.set\_force\_full\_page\_screenshot](./configuration#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchMode.CSS](./stitchmode-method) or [StitchMode.Scroll](./stitchmode-method) is determined by the global default or the value set using, [Configuration.set\_stitch\_mode](./configuration#setstitchmode-method) You can use the [SeleniumCheckSettings.scroll\_root\_element](#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target. 
### ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.Check(Target.window().ignore(by))
eyes.Check(Target.window().ignore(element))
eyes.Check(Target.window().ignore(css_selector))
eyes.Check(Target.window().ignore(region))
 ``` 
 
 BySelector

The type BySelector is defined as: List\[SeleniumBy,Text\].
        
 ####  Parameters 
 ###### by 
  
 Type:BySelector 
  
 Any legal Selenium By request passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 Any legal CSS selector, for example .myClass 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions. 
### ignore_caret method
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ``` 
eyes.Check(Target.window().ignore_caret(ignore))
eyes.Check(Target.window().ignore_caret())
 ``` 

 #### Parameters 
 ###### ignore 
  
 Type:bool \[Optional : default = True \] 
  
 If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Configuration.set\_ignore\_caret](./configuration#setignorecaret-method) method. 
### ignore_displacements method
Sets whether Test Manager should intially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
eyes.Check(Target.window().ignore_displacements(should_ignore))
eyes.Check(Target.window().ignore_displacements())
 ``` 

 #### Parameters 
 ###### should\_ignore 
  
 Type:bool \[Optional : default = True \] 
  
 If a value of True is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: Self

 #### Remarks 
Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel) 
### layout method
If called without parameters, sets the match level for this target to [LAYOUT](./matchlevel). Otherwise, defines that a match level of [LAYOUT](./matchlevel) should be used for the regions passed as parameters.

#### Syntax 
 ``` 
eyes.Check(Target.window().layout(by))
eyes.Check(Target.window().layout(element))
eyes.Check(Target.window().layout(css_selector))
eyes.Check(Target.window().layout(region))
 ``` 
 
 BySelector

The type BySelector is defined as: List\[SeleniumBy,Text\].
        
 ####  Parameters 
 ###### by 
  
 Type:BySelector 
  
 Any legal Selenium By request passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 Any legal CSS selector, for example .myClass 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`match_level`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`match_level`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in selenium python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in selenium python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in selenium python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in selenium python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### match_level method
Use this method to set the default match level (the type of matching) to use for this target when matching the captured image to the baseline image.

#### Syntax 
 ``` 
eyes.Check(Target.window().match_level(match_level))
 ``` 

 #### Parameters 
 ###### match\_level 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [NONE](./matchlevel) 
 *   [STRICT](./matchlevel) 
 *   [LAYOUT](./matchlevel) 
 *   [CONTENT](./matchlevel) 
 *   [EXACT](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [Eyes.match\_level](./eyes#setmatchlevel-method) or [Configuration.set\_match\_level](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [SeleniumCheckSettings.strict](#strict-method)[SeleniumCheckSettings.content](#content-method)[SeleniumCheckSettings.layout](#layout-method)[SeleniumCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### region method
Requests that only a region within a selected i-frame should be matched.

#### Syntax 
 ``` 
eyes.Check(Target.window().region(region))
eyes.Check(Target.window().region(css_selector))
eyes.Check(Target.window().region(element))
eyes.Check(Target.window().region(by))
 ``` 
 
 CssSelector

The type CssSelector is defined as: Text.
        
 ####  Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines the region. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 Any legal CSS selector, for example .myClass 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An object which defines a region. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### by 
  
 Type:BySelector 
  
 Any legal Selenium By request passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The parameter to the method specifies the region to be matched. The enclosing frame(s) are selected by the previous calls in the chain to [Target.frame](./target#frame-method). You may only use this method in the chain if the first method in the chain is [Target.frame](./target#frame-method). You may not call it if the first method in the chain is [Target.window](./target#window-method) or [Target.region](./target#region-method). To match a region within a window, use the method [Target.region](./target#region-method) as the first method in the Target chain. You may only call this method once in a given chain. 
### scroll_root_element method
Normally, Eyes will select the most appropriate element to scroll to execute the [fully](#fully-method) method. You can use the [scroll\_root\_element](#) method to specify the element to scroll explicitly.

#### Syntax 
 ``` 
eyes.Check(Target.window().scroll_root_element(element))
eyes.Check(Target.window().scroll_root_element(selector))
eyes.Check(Target.window().scroll_root_element(by))
 ``` 
 
 AnyWebElement

The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\].
        
 ####  Parameters 
 ###### element 
  
 Type:AnyWebElement 
  
 The element that should be scrolled. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### selector 
  
 Type:CssSelector 
  
 A CSS selector to the element that should be scrolled. 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### by 
  
 Type:BySelector 
  
 A By Locator to the element that should be scrolled. 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
### send_dom method
Enable or disable sending DOM for this checkpoint.
This method overides the global setting of sending/not sending DOM for this checkpoint. The global setting is set using [send\_dom](./eyes#setsenddom-method).

#### Syntax 
 ``` 
eyes.Check(Target.window().send_dom(senddom))
eyes.Check(Target.window().send_dom())
 ``` 

 #### Parameters 
 ###### senddom 
  
 Type:bool \[Optional : default = True \] 
  
 If a vlaue of True is passed then send DOM information for this checkpoint even if sending DOM is disabled globally. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
### strict method
If called without parameters, sets the match level for this target to [STRICT](./matchlevel). Otherwise, defines that a match level of [STRICT](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.window().strict(by))
eyes.Check(Target.window().strict(element))
eyes.Check(Target.window().strict(css_selector))
eyes.Check(Target.window().strict(region))
 ``` 
 
 BySelector

The type BySelector is defined as: List\[SeleniumBy,Text\].
        
 ####  Parameters 
 ###### by 
  
 Type:BySelector 
  
 Any legal Selenium By request passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 Any legal CSS selector, for example .myClass 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`match_level`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`match_level`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in selenium python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in selenium python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in selenium python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in selenium python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### timeout method
Defines the timeout to use when acquiring and comparing screenshots for this target.

#### Syntax 
 ``` 
eyes.Check(Target.window().timeout(timeout))
 ``` 

 #### Parameters 
 ###### timeout 
  
 Type:int 
  
 The timeout to use in milliseconds. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [match\_timeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism. 
### variation_group_id method
Set the variation group ID for this checkpoint.
For a description of the use of variation groups see [Baseline variation groups](https://applitools.com/docs/features/baseline-variations-groups.html).

#### Syntax 
 ``` 
eyes.Check(Target.window().variation_group_id(variation_group_id))
 ``` 

 #### Parameters 
 ###### variation\_group\_id 
  
 Type:Text 
  
 The value of the variation group ID to be set. 
  
 #### Return value 
Type: Self 
### visual_grid_options method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
eyes.Check(Target.window().visual_grid_options(options))
 ``` 

 #### Parameters 
 ###### options 
  
 Type:[VisualGridOption](./visualgridoption) 
  
 One or more options for configuring the Ultrafast Grid. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)
        
 ####  Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of False to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of True or False:

*   Setting a value of True instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of False instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.set\_visual\_grid\_options](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visual\_grid\_options](#).
        
 ####  Example 
Python

    eyes.check(
        Target.window()
        .visual_grid_options(VisualGridOption("polyfillAdoptedStyleSheets", True))) 
### with_name method
Assigns a name to the checkpoint.

#### Syntax 
 ``` 
eyes.Check(Target.window().with_name(name))
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text 
  
 The name to be given to this check point. 
  
 #### Return value 
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain.