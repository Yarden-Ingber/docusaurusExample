# AppiumCheckSettings class

The methods in this class are used as part of the [check](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
import com.applitools.eyes.appium.AppiumCheckSettings;
 
 ``` 
 
### accessibility method
Use to define an accessibility region and its type.

#### Syntax 
 ``` 
eyes.check(Target.window().accessibility(region, regionType))
eyes.check(Target.window().accessibility(regionSelector, regionType))
eyes.check(Target.window().accessibility(element, regionType))
eyes.check(Target.window().accessibility(regionType, elementsToIgnore))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### regionType 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The accessibility type of the region. 
  
  ###### regionSelector 
  
 Type:By 
  
 A selector that specified one or more elements. The bounding rectangle of each element, defines an accessibility region to be analyzed. 
  
  ###### element 
  
 Type:WebElement 
  
 An element bounding rectangle that defines an accessibility region to be analyzed. 
  
  ###### elementsToIgnore 
  
 Type:WebElement\[\] 
  
 A list of elements for which areas should not be tested for accessibility. 
  
 #### Return value 
Type: ICheckSettings

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### beforeRenderScreenshotHook method
Use this to supply a JavaScript snippet that should be executed on the Ultrafast Grid before the DOM is rendered.

#### Syntax 
 ``` 
eyes.check(Target.window().beforeRenderScreenshotHook(hook))
 ``` 

 #### Parameters 
 ###### hook 
  
 Type:String 
  
 A string with legal JavaScript code. 
  
 #### Return value 
Type: ICheckSettings 
### content method
If called without parameters, sets the match level for this target to . Otherwise, defines that a match level of [CONTENT](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.check(Target.window().content(region, regions))
eyes.check(Target.window().content(regions))
eyes.check(Target.window().content())
eyes.check(Target.window().content(element, elements))
eyes.check(Target.window().content(elements))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:[Region](./region)... 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
  ###### regions 
  
 Type:[Region](./region)\[\] 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
  ###### element 
  
 Type:WebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### elements 
  
 Type:WebElement... 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
  ###### elements 
  
 Type:WebElement\[\] 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`setMatchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`setMatchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in appium java)(regions)`](#), [`checksettings.layoutregions (not yet available in appium java)(regions)`](#)., [`checksettings.contentregions (not yet available in appium java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### cut method
Use this to exclude the footer from the captured checkpoint image.

#### Syntax 
 ``` 
eyes.check(Target.window().cut(type, selector))
 ``` 

 #### Parameters 
 ###### type 
  
 Type:[ElementType](./elementtype) 
  
 Always pass a value of ElementType.Footer 
  
  ###### selector 
  
 Type:By 
  
 A selector to the elment to exclude 
  
 #### Return value 
Type: [AppiumCheckSettings](./checksettings) 
### exact method
Sets the match level for this target to [EXACT](./matchlevel).
This match level is very sensative to differences in images. Do not use unless you have a very specific purpose.

#### Syntax 
 ``` 
eyes.check(Target.window().exact())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: ICheckSettings

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
eyes.check(Target.window().floating(maxOffset, regions))
eyes.check(Target.window().floating(region, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))
eyes.check(Target.window().floating(element, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset))
 ``` 

 #### Parameters 
 ###### maxOffset 
  
 Type:int 
  
 The maximum amount that the region can shift in any direction and still be considered matching. 
  
  ###### regions 
  
 Type:[Region](./region)... 
  
 One or more region definitions. 
  
  ###### region 
  
 Type:[Region](./region) 
  
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
  
  ###### element 
  
 Type:WebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
### fully method
Defines if the screenshot for this target should be extended to contain the entire element or region being checked, even if it extends the borders of the viewport.

#### Syntax 
 ``` 
eyes.check(Target.window().fully())
eyes.check(Target.window().fully(fully))
 ``` 

 #### Parameters 
 ###### fully 
  
 Type:Boolean 
  
 If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true. 
  
 #### Return value 
Type: [AppiumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [Configuration.setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. You can use the [AppiumCheckSettings.scrollRootElement](#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target. 
### ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.check(Target.window().ignore(region, regions))
eyes.check(Target.window().ignore(regions))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:[Region](./region)... 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
  ###### regions 
  
 Type:[Region](./region)\[\] 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions. 
### ignoreCaret method
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ``` 
eyes.check(Target.window().ignoreCaret(ignoreCaret))
eyes.check(Target.window().ignoreCaret())
 ``` 

 #### Parameters 
 ###### ignoreCaret 
  
 Type:boolean 
  
 If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method or [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) method. 
### ignoreDisplacements method
Sets whether Test Manager should intially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
eyes.check(Target.window().ignoreDisplacements(ignoreDisplacements))
eyes.check(Target.window().ignoreDisplacements())
 ``` 

 #### Parameters 
 ###### ignoreDisplacements 
  
 Type:boolean 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: ICheckSettings

 #### Remarks 
Ignore displacements is only active when using a Match level of [STRICT](./matchlevel) or [CONTENT](./matchlevel) 
### layout method
If called without parameters, sets the match level for this target to [LAYOUT](./matchlevel). Otherwise, defines that a match level of [LAYOUT](./matchlevel) should be used for the regions passed as parameters.

#### Syntax 
 ``` 
eyes.check(Target.window().layout(region, regions))
eyes.check(Target.window().layout(regions))
eyes.check(Target.window().layout())
eyes.check(Target.window().layout(elements))
eyes.check(Target.window().layout(element, elements))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:[Region](./region)... 
  
 Zero or more additional rectangle objects separated by commas or passed as an array. 
  
  ###### regions 
  
 Type:[Region](./region)\[\] 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
  ###### elements 
  
 Type:WebElement\[\] 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
  ###### element 
  
 Type:WebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### elements 
  
 Type:WebElement... 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`eyes$setmatchlevel`](#).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`checksettings$matchlevel`](#)
*   [`checksettings$strict`](#)
*   [`checksettings$content`](#)
*   [`checksettings$layout`](#)
*   [`checksettings$exact`](#)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`eyes$setmatchlevel`](#) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`checksettings$strict(regions)`](#), [`checksettings$layout(regions)`](#)., [`checksettings$content(regions)`](#). [`checksettings$strictregions(regions)`](#), [`checksettings$layoutregions(regions)`](#)., [`checksettings$contentregions(regions)`](#) should not overlap each other or the regions defined using [`checksettings$ignoreregion(regions)`](#). [`checksettings$ignoreregions(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### matchLevel method
Use this method to set the default match level (the type of matching) to use for this target when matching the captured image to the baseline image.

#### Syntax 
 ``` 
eyes.check(Target.window().matchLevel(matchLevel))
 ``` 

 #### Parameters 
 ###### matchLevel 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
 *   [NONE](./matchlevel) 
 *   [STRICT](./matchlevel) 
 *   [LAYOUT](./matchlevel) 
 *   [CONTENT](./matchlevel) 
 *   [EXACT](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [AppiumCheckSettings.strict](#strict-method)[AppiumCheckSettings.content](#content-method)[AppiumCheckSettings.layout](#layout-method)[AppiumCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### scrollRootElement method
Normally, Eyes will select the most appropriate element to scroll to execute the [fully](#fully-method) method. You can use the [scrollRootElement](#) method to specify the element to scroll explicitly.

#### Syntax 
 ``` 
eyes.check(Target.window().scrollRootElement(elementId))
eyes.check(Target.window().scrollRootElement(selector))
eyes.check(Target.window().scrollRootElement(element))
 ``` 

 #### Parameters 
 ###### elementId 
  
 Type:String 
  
 The ID of the element that should be scrolled. 
  
  ###### selector 
  
 Type:By 
  
 A By selector to the element that should be scrolled. 
  
  ###### element 
  
 Type:WebElement 
  
 The element that should be scrolled. 
  
 #### Return value 
Type: [AppiumCheckSettings](./checksettings)

The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
### statusBarExists method
Use this method to inform Eyes that the status bar is visible so that Eyes can exclude it from the checkpoint. Required for ioS 13.x.
On mobile devices, the device status bar can change visually from test to test independently of the application under test. To avoid false mismatches, Eyes detects and excludes the status bar from the checkpoint. On iOS 13.x Eyes does not have a way to know if there is a status bar or not so you need to call this method if the status bar is visible. Once you have informed Eyes that the status bar is visible, Eyes takes the necessary steps to ensure that it is excluded from the checkpoint image.

#### Syntax 
 ``` 
eyes.check(Target.window().statusBarExists())
eyes.check(Target.window().statusBarExists(statusBarExists))
 ``` 

 #### Parameters 
 ###### statusBarExists 
  
 Type:boolean 
  
 Set to true if there is a status bar on the screen. 
  
 #### Return value 
Type: [AppiumCheckSettings](./checksettings) 
### strict method
If called without parameters, sets the match level for this target to [STRICT](./matchlevel). Otherwise, defines that a match level of [STRICT](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.check(Target.window().strict(region, regions))
eyes.check(Target.window().strict(regions))
eyes.check(Target.window().strict())
eyes.check(Target.window().strict(element, elements))
eyes.check(Target.window().strict(elements))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### regions 
  
 Type:[Region](./region)... 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
  ###### regions 
  
 Type:[Region](./region)\[\] 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
  ###### element 
  
 Type:WebElement 
  
 An element whose position and bounding rectangle defines the region. 
  
  ###### elements 
  
 Type:WebElement... 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
  ###### elements 
  
 Type:WebElement\[\] 
  
 One or more elements, each of whose bounding rectangle defines a region. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`setMatchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`setMatchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in appium java)(regions)`](#), [`checksettings.layoutregions (not yet available in appium java)(regions)`](#)., [`checksettings.contentregions (not yet available in appium java)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in appium java)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### timeout method
Defines the timeout to use when acquiring and comparing screenshots for this target.

#### Syntax 
 ``` 
eyes.check(Target.window().timeout(timeoutMilliseconds))
 ``` 

 #### Parameters 
 ###### timeoutMilliseconds 
  
 Type:int 
  
 The timeout to use in milliseconds. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setMatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism. 
### variationGroupId method
Set the variation group ID for this checkpoint.
For a description of the use of variation groups see [Baseline variation groups](https://applitools.com/docs/features/baseline-variations-groups.html).

#### Syntax 
 ``` 
eyes.check(Target.window().variationGroupId(variationGroupId))
 ``` 

 #### Parameters 
 ###### variationGroupId 
  
 Type:String 
  
 The value of the variation group ID to be set. 
  
 #### Return value 
Type: ICheckSettings 
### visualGridOptions method
Use this method to set configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
eyes.check(Target.window().visualGridOptions(options))
 ``` 

 #### Parameters 
 ###### options 
  
 Type:[VisualGridOption](./visualgridoption)... 
  
 One or more options for configuring the Ultrafast Grid. 
  
 #### Return value 
Type: ICheckSettings

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOptions](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [AppiumCheckSettings.visualGridOptions](#).
        
 ####  Example 
Java

    eyes.check(
            Target.window()
                    .visualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))); 
### withName method
Assigns a name to the checkpoint.

#### Syntax 
 ``` 
eyes.check(Target.window().withName(name))
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The name to be given to this check point. 
  
 #### Return value 
Type: ICheckSettings

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain.