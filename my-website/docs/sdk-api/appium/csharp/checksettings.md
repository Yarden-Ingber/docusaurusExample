# CheckSettings class

The methods in this class are used as part of the [Check](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator. 
### Accessibility method
Use to define an accessibility region and its type.

#### Syntax 
 ``` 
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
  
 #### Return value 
Type: ICheckSettings

 #### Remarks 
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
Type: ICheckSettings 
### Content method
If called without parameters, sets the match level for this target to . Otherwise, defines that a match level of [Content](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 

``` 
eyes.Check(Target.Window().Content())
eyes.Check(Target.Window().Content(region, regions))
eyes.Check(Target.Window().Content(regions))
``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
 Type:IEnumerable`<Rectangle>`
  
 An array of rectangle objects, each of which defines a region. 
  
 #### Return value 
Type: ICheckSettings

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

The region matchlevel methods [`Strict(regions-method)`](#strict-method), [`Layout(regions-method)`](#layout-method)., [`Content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in appium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in appium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in appium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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
Type: ICheckSettings

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

*   [`checksettings.strictregions (not yet available in appium csharp)`](#)
*   [`checksettings.contentregions (not yet available in appium csharp)`](#)
*   [`checksettings.layoutregions (not yet available in appium csharp)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### Floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ``` 
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
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
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
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given target. 
### Ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
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
  
 Type:IEnumerable`<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
 #### Return value 
Type: ICheckSettings

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
Type: ICheckSettings

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
Type: ICheckSettings

 #### Remarks 
Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel) 
### Layout method
If called without parameters, sets the match level for this target to [Layout](./matchlevel). Otherwise, defines that a match level of [Layout](./matchlevel) should be used for the regions passed as parameters.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Layout())
eyes.Check(Target.Window().Layout(region, regions))
eyes.Check(Target.Window().Layout(regions))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
 Type:IEnumerable`<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
 #### Return value 
Type: ICheckSettings

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

The region matchlevel methods [`Strict(regions-method)`](#strict-method), [`Layout(regions-method)`](#layout-method)., [`Content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in appium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in appium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in appium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
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
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [Eyes.MatchLevel](./eyes#setmatchlevel-method) or [Configuration.SetMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [CheckSettings.Strict](#strict-method)[CheckSettings.Content](#content-method)[CheckSettings.Layout](#layout-method)[CheckSettings.Exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### SendDom method
Enable or disable sending DOM for this checkpoint.
This method overides the global setting of sending/not sending DOM for this checkpoint.

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
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
### Strict method
If called without parameters, sets the match level for this target to [Strict](./matchlevel). Otherwise, defines that a match level of [Strict](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.Window().Strict())
eyes.Check(Target.Window().Strict(region, regions))
eyes.Check(Target.Window().Strict(regions))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:Rectangle\[\] 
  
 An array of rectangle objects, each of which defines a region. 
  
  ###### regions 
  
 Type:IEnumerable`<Rectangle>` 
  
 An array of rectangle objects, each of which defines a region. 
  
 #### Return value 
Type: ICheckSettings

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

The region matchlevel methods [`Strict(regions-method)`](#strict-method), [`Layout(regions-method)`](#layout-method)., [`Content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in appium csharp)(regions)`](#), [`checksettings.layoutregions (not yet available in appium csharp)(regions)`](#)., [`checksettings.contentregions (not yet available in appium csharp)(regions)`](#) should not overlap each other or the regions defined using [`Ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium csharp)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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
Type: ICheckSettings

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
Type: ICheckSettings 
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
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain.