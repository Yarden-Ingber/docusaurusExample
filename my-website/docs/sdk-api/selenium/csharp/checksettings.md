# SeleniumCheckSettings class

The methods in this class are used as part of the [Check](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator. 
### Accessibility method
Use to define an accessibility region and its type.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Accessibility(regionSelector, regionType))
eyes.Check(Target.Window().Accessibility(element, regionType))
eyes.Check(Target.Window().Accessibility(regionType, elements))
eyes.Check(Target.Window().Accessibility(region))
eyes.Check(Target.Window().Accessibility(region, regionType))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:AccessibilityRegionByRectangle 
  
 An object of this class. 
  
  ###### region 
  
 Type:Rectangle 
  
 The position and size of the region. 
  
  ###### regionType 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The accessibility type of the region. 
  
  ###### regionSelector 
  
 Type:By 
  
 A selector that specified one or more elements. The bounding rectangle of each element, defines an accessibility region to be analyzed. 
  
  ###### element 
  
 Type:IWebElement 
  
 An element bounding rectangle that defines an accessibility region to be analyzed. 
  
  ###### elements 
  
 Type:IWebElement\[\] 
  
 One or more element bounding rectangle that defines an accessibility region to be analyzed. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### BeforeRenderScreenshotHook method
Use this to supply a JavaScript snippet that should be executed on the Ultrafast Grid before the DOM is rendered.

#### Syntax 
 ``` 
eyes.Check(Target.Window().BeforeRenderScreenshotHook(hook))
 ``` 

 #### Parameters 
 ###### hook 
  
 Type:string 
  
 A string with legal JavaScript code. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
### Content method
If called without parameters, sets the match level for this target to . Otherwise, defines that a match level of [Content](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Content(selector, selectors))
eyes.Check(Target.Window().Content(selectors))
eyes.Check(Target.Window().Content(element, elements))
eyes.Check(Target.Window().Content(elements))
eyes.Check(Target.Window().Content(region, regions))
eyes.Check(Target.Window().Content(regions))
eyes.Check(Target.Window().Content())
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
  Type: `IEnumerable<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### selector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
  ###### selectors 
  
 Type:By\[\] 
  
 An array of selector objects that define regions. 
  
  ###### selectors 
  
 Type: `IEnumerable<By>`
  
 An array of selector objects that define regions. 
  
  ###### element 
  
 Type:IWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### elements 
  
 Type:IWebElement\[\] 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
  ###### elements 
  
 Type: `IEnumerable<IWebElement>`
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`MatchLevel`](#matchlevel-method)
*   [`Strict`](#strict-method)
*   [`Content`](#content-method)
*   [`Layout`](#layout-method)
*   [`Exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`MatchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`Strict(regions-method)`](#strict-method), [`Layout(regions-method)`](#layout-method)., [`Content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in selenium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in selenium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in selenium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in selenium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### Exact method
Sets the match level for this target to [Exact](./matchlevel).
This match level is very sensative to differences in images. Do not use unless you have a very specific purpose.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Exact())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods that set a target default match level:

*   [`MatchLevel`](#matchlevel-method)
*   [`Strict`](#strict-method)
*   [`Content`](#content-method)
*   [`Layout`](#layout-method)
*   [`Exact`](#exact-method)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings.strictregions (not yet available in selenium csharp)`](#)
*   [`checksettings.contentregions (not yet available in selenium csharp)`](#)
*   [`checksettings.layoutregions (not yet available in selenium csharp)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### Floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Floating(regionSelector, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))
eyes.Check(Target.Window().Floating(regionSelector, maxOffset))
eyes.Check(Target.Window().Floating(regionSelector))
eyes.Check(Target.Window().Floating(element, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))
eyes.Check(Target.Window().Floating(element, maxOffset))
eyes.Check(Target.Window().Floating(element))
eyes.Check(Target.Window().Floating(maxOffset, regions))
eyes.Check(Target.Window().Floating(region, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))
 ``` 

 #### Parameters 
 ###### maxOffset 
  
 Type:int 
  
 The maximum amount that the region can shift in any direction and still be considered matching. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 One or more region definitions. 
  
  ###### region 
  
 Type:Rectangle 
  
 An object that defines the region. 
  
  ###### maxUpOffset 
  
 Type:int 
  
 The maximum amount that the region can shift upwards and still be considered matching. 
  
  ###### maxDownOffset 
  
 Type:int 
  
 The maximum amount that the region can shift downwards and still be considered matching. 
  
  ###### maxLeftOffset 
  
 Type:int 
  
 The maximum amount that the region can shift to the left and still be considered matching. 
  
  ###### maxRightOffset 
  
 Type:int 
  
 The maximum amount that the region can shift to the right and still be considered matching. 
  
  ###### regionSelector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
  ###### element 
  
 Type:IWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
### Frame method
Select a frame that is a direct descendent of a frame selected previously in the chain.

#### Syntax 
 ``` 
eyes.Check(Target.frame(by).Frame(by))
eyes.Check(Target.frame(by).Frame(frameNameOrId))
eyes.Check(Target.frame(by).Frame(index))
eyes.Check(Target.frame(by).Frame(frameReference))
 ``` 

 #### Parameters 
 ###### by 
  
 Type:By 
  
 Any legal Selenium By request. 
  
  ###### frameNameOrId 
  
 Type:string 
  
 The name or id of the frame element. 
  
  ###### index 
  
 Type:int 
  
 The index of the frame element as defined by Selenium. 
  
  ###### frameReference 
  
 Type:IWebElement 
  
 A Selenium reference to the frame element. This can be anything acceptable to the Selenium switch to frame method. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only use this method in the chain if the first method in the chain is [Frame](./target#frame-method). You may not call it if the first method in the chain is [Window](./target#window-method) or [Region](./target#region-method). Call this method multiple times to descend a hierarchy of embedded frames. 
### Fully method
Defines if the screenshot for this target should be extended to contain the entire element or region being checked, even if it extends the borders of the viewport.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Fully())
eyes.Check(Target.Window().Fully(fully))
 ``` 

 #### Parameters 
 ###### fully 
  
 Type:bool 
  
 If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method overrides the global default or the most recent value set by the [Eyes.ForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-property) property or [Configuration.SetForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchModes.CSS](./stitchmode-method) or [StitchModes.Scroll](./stitchmode-method) is determined by the global default or the value set using, [Eyes.StitchMode](./eyes#setstitchmode-method) or [Configuration.SetStitchMode](./configuration#setstitchmode-method) You can use the [SeleniumCheckSettings.ScrollRootElement](#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target. 
### Ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.Check(Target.Window().Ignore(selector, selectors))
eyes.Check(Target.Window().Ignore(selectors))
eyes.Check(Target.Window().Ignore(region, regions))
eyes.Check(Target.Window().Ignore(regions))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
  Type: `IEnumerable<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### selector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
  ###### selectors 
  
 Type:By\[\] 
  
 An array of selector objects that define regions. 
  
  ###### selectors 
  
 Type: `IEnumerable<By>`
  
 A collection of selector objects that define regions. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions. 
### IgnoreCaret method
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ``` 
eyes.Check(Target.Window().IgnoreCaret(ignoreCaret))
eyes.Check(Target.Window().IgnoreCaret())
 ``` 

 #### Parameters 
 ###### ignoreCaret 
  
 Type:bool \[Optional : default = true \] 
  
 If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.IgnoreCaret](./eyes#setignorecaret-property) property or [Configuration.SetIgnoreCaret](./configuration#setignorecaret-method) method. 
### IgnoreDisplacements method
Sets whether Test Manager should intially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
eyes.Check(Target.Window().IgnoreDisplacements(ignoreDisplacements))
eyes.Check(Target.Window().IgnoreDisplacements())
 ``` 

 #### Parameters 
 ###### ignoreDisplacements 
  
 Type:bool \[Optional : default = true \] 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel) 
### Layout method
If called without parameters, sets the match level for this target to [Layout](./matchlevel). Otherwise, defines that a match level of [Layout](./matchlevel) should be used for the regions passed as parameters.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Layout(selector, selectors))
eyes.Check(Target.Window().Layout(selectors))
eyes.Check(Target.Window().Layout(element, elements))
eyes.Check(Target.Window().Layout(elements))
eyes.Check(Target.Window().Layout(region, regions))
eyes.Check(Target.Window().Layout(regions))
eyes.Check(Target.Window().Layout())
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
  Type: `IEnumerable<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### selector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
  ###### selectors 
  
 Type:By\[\] 
  
 An array of selector objects that define regions. 
  
  ###### selectors 
  
 Type: `IEnumerable<By>`
  
 An array of selector objects that define regions. 
  
  ###### element 
  
 Type:IWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### elements 
  
 Type:IWebElement\[\] 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
  ###### elements 
  
 Type: `IEnumerable<IWebElement>`
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`MatchLevel`](#matchlevel-method)
*   [`Strict`](#strict-method)
*   [`Content`](#content-method)
*   [`Layout`](#layout-method)
*   [`Exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`MatchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`Strict(regions-method)`](#strict-method), [`Layout(regions-method)`](#layout-method)., [`Content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in selenium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in selenium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in selenium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in selenium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### LayoutBreakpoints method
Configure the SDK to capture multiple DOM images for multiple viewport sizes.
When the test loads a page into the test browser, the test browser loads the page, executes any JavaScript loaded with that page, and creates a DOM. The SDK then sends this DOM to the Ultrafast Grid, where it is rendered for each configured execution environment. When the Ultrafast Grid sizes the browser, device emulator, or simulator to match the viewport size of the execution environment, all CSS is applied so that any viewport-width-dependent layout will have the expected effect. However, the on-page JavaScript is not executed. If the JavaScript impacts the DOM and is viewport-width-dependent, then the page may be rendered incorrectly.

This method allows you to request that the SDK resize the test browser viewport to multiple viewport widths. Resizing the test browser viewport triggers re-execution of the on-page JavaScript, and the creation of a viewport-width-specific DOM. The SDK then sends all of these DOMs to the Ultrafast Grid and the Ultrafast Grid renders each execution environment using the DOM that matches the environment viewport width execution environment.

Depending on the parameters you pass to the method, the SDK either extracts a DOM for every distinct viewport size configured or extracts a DOM for each viewport size that you specify.

For more information see [Handling viewport-dependent JavaScript](https://applitools.com/docs/topics/sdk/viewport-dependent-js.html).

#### Syntax 
 ``` 
eyes.Check(Target.Window().LayoutBreakpoints(breakpoints))
 ``` 

 #### Parameters 
 ###### breakpoints 
  
 Type:int\[\] 
  
 Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)
        
 ####  Remarks 
This method enables and sets breakpoints for the current checkpoint. It overrides the default values when the test is configured with a previous use of [Configuration.LayoutBreakpoints](./configuration#layoutbreakpoints-property) property, [Configuration.SetLayoutBreakpoints](./configuration#setlayoutbreakpoints-method) method or [Configuration.LayoutBreakpoints](./configuration#layoutbreakpoints-property) property. 
### MatchLevel method
Use this method to set the default match level (the type of matching) to use for this target when matching the captured image to the baseline image.

#### Syntax 
 ``` 
eyes.Check(Target.Window().MatchLevel(matchLevel))
 ``` 

 #### Parameters 
 ###### matchLevel 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [None](./matchlevel) 
 *   [Strict](./matchlevel) 
 *   [Layout](./matchlevel) 
 *   [Content](./matchlevel) 
 *   [Exact](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [Eyes.MatchLevel](./eyes#setmatchlevel-method) or [Configuration.SetMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [SeleniumCheckSettings.Strict](#strict-method)[SeleniumCheckSettings.Content](#content-method)[SeleniumCheckSettings.Layout](#layout-method)[SeleniumCheckSettings.Exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### Region method
Requests that only a region within a selected i-frame should be matched.

#### Syntax 
 ``` 
eyes.Check(Target.Frame(frameSelector).Region(rect))
eyes.Check(Target.Frame(frameSelector).Region(by))
eyes.Check(Target.Frame(frameSelector).Region(targetElement))
 ``` 

 #### Parameters 
 ###### rect 
  
 Type:Rectangle 
  
 An object that defines the rectangular area in the window to be matched. 
  
  ###### by 
  
 Type:By 
  
 Any legal Selenium By request. 
  
  ###### targetElement 
  
 Type:IWebElement 
  
 An object which defines a region. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The parameter to the method specifies the region to be matched. The enclosing frame(s) are selected by the previous calls in the chain to [Target.Frame](./target#frame-method). You may only use this method in the chain if the first method in the chain is [Target.Frame](./target#frame-method). You may not call it if the first method in the chain is [Target.Window](./target#window-method) or [Target.Region](./target#region-method). To match a region within a window, use the method [Target.Region](./target#region-method) as the first method in the Target chain. You may only call this method once in a given chain. 
### ScrollRootElement method
Normally, Eyes will select the most appropriate element to scroll to execute the [Fully](#fully-method) method. You can use the [ScrollRootElement](#) method to specify the element to scroll explicitly.

#### Syntax 
 ``` 
eyes.Check(Target.Window().ScrollRootElement(selector))
eyes.Check(Target.Window().ScrollRootElement(element))
 ``` 

 #### Parameters 
 ###### selector 
  
 Type:By 
  
 A By selector to the element that should be scrolled. 
  
  ###### element 
  
 Type:IWebElement 
  
 The element that should be scrolled. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
### SendDom method
Enable or disable sending DOM for this checkpoint.
This method overides the global setting of sending/not sending DOM for this checkpoint. The global setting is set using [SendDom](./eyes#setsenddom-method).

#### Syntax 
 ``` 
eyes.Check(Target.Window().SendDom(sendDom))
eyes.Check(Target.Window().SendDom())
 ``` 

 #### Parameters 
 ###### sendDom 
  
 Type:bool \[Optional : default = true \] 
  
 If a vlaue of true is passed then send DOM information for this checkpoint even if sending DOM is disabled globally. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
### Strict method
If called without parameters, sets the match level for this target to [Strict](./matchlevel). Otherwise, defines that a match level of [Strict](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Strict(selector, selectors))
eyes.Check(Target.Window().Strict(selectors))
eyes.Check(Target.Window().Strict(element, elements))
eyes.Check(Target.Window().Strict(elements))
eyes.Check(Target.Window().Strict(region, regions))
eyes.Check(Target.Window().Strict(regions))
eyes.Check(Target.Window().Strict())
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
  Type: `IEnumerable<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### selector 
  
 Type:By 
  
 An object that defines a selector for the region. 
  
  ###### selectors 
  
 Type:By\[\] 
  
 An array of selector objects that define regions. 
  
  ###### selectors 
  
 Type: `IEnumerable<By>`
  
 An array of selector objects that define regions. 
  
  ###### element 
  
 Type:IWebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### elements 
  
 Type:IWebElement\[\] 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
  ###### elements 
  
 Type: `IEnumerable<IWebElement>` 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`MatchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`MatchLevel`](#matchlevel-method)
*   [`Strict`](#strict-method)
*   [`Content`](#content-method)
*   [`Layout`](#layout-method)
*   [`Exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`MatchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`Strict(regions-method)`](#strict-method), [`Layout(regions-method)`](#layout-method)., [`Content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in selenium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in selenium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in selenium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in selenium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### Timeout method
Defines the timeout to use when acquiring and comparing screenshots for this target.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Timeout(timeout))
 ``` 

 #### Parameters 
 ###### timeout 
  
 Type:TimeSpan 
  
 The timeout to use in TimeSpan units. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [MatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism. 
### VariationGroupId method
Set the variation group ID for this checkpoint.
For a description of the use of variation groups see [Baseline variation groups](https://applitools.com/docs/features/baseline-variations-groups.html).

#### Syntax 
 ``` 
eyes.Check(Target.Window().VariationGroupId(variationGroupId))
 ``` 

 #### Parameters 
 ###### variationGroupId 
  
 Type:string 
  
 The value of the variation group ID to be set. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
### VisualGridOptions method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
eyes.Check(Target.Window().VisualGridOptions(options))
 ``` 

 #### Parameters 
 ###### options 
  
 Type:[VisualGridOption](./visualgridoption)\[\] 
  
 One or more options for configuring the Ultrafast Grid. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)
        
 ####  Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.SetVisualGridOptions](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](#).
        
 ####  Example 
C#

    eyes.Check(
        Target.Window()
        .VisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))); 
### WithName method
Assigns a name to the checkpoint.

#### Syntax 
 ``` 
eyes.Check(Target.Window().WithName(name))
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name to be given to this check point. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain.