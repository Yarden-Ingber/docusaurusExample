# CheckSettingsPlain class

The methods in this type are used as part of the [check](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this type on the returned object, chaining them one after the other using the '.' operator.
        

 
 ### accessibilityRegions property
Define multiple accessibility regions and their types.
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).

#### Syntax 
 ``` 
eyes.check({ accessibilityRegions: value });
 ``` 
 
 Type: 
 `( | { region: RegionPlain | WebElement | Selector; type?: AccessibilityRegionTypePlain; } | RegionPlain | WebElement | Selector )[];` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}.

AccessibilityRegionTypePlain

This type allows passing strings instead of enumerated values, for the list of enum values see [AccessibilityRegionType](./accessibilityregiontype).

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}. 
 ### contentRegions property
Defines that a match level of [Content](./matchlevel) should be used for the region(s) passed as parameter(s).

#### Syntax 
 ``` 
eyes.check({ contentRegions: value });
 ``` 
 
 Type: 
The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
 `(RegionPlain|WebElement|Selector)[]` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}.
        
 ####  Remarks 
You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`strictRegions(regions-method)`](#strictregions-method), [`layoutRegions(regions-method)`](#layoutregions-method)., [`contentRegions(regions-method)`](#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in selenium4 javascript)(regions)`](#). [`ignoreRegions(regions-method)`](#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
 ### floatingRegions property
Define multiple floating regions for this target.

#### Syntax 
 ``` 
eyes.check({ floatingRegions: value });
 ``` 
 
 Type: 
The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
 `( | { region: RegionPlain | WebElement | Selector; maxUpOffset?: number; maxDownOffset?: number; maxLeftOffset?: number; maxRightOffset?: number; } | RegionPlain | WebElement | Selector )[];` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}.

RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}. 
 ### frames property
Define the full frame hierarchy to the direct parent frame of the HTML element to be checked.

#### Syntax 
 ``` 
eyes.check({ frames: value });
 ``` 
 
 Type: 
An array of frame elements or frame selectors, as defined by the type, that represent the top to bottom hierarchy of frames to the frame that encloses the region or element to be checked. 
 `( | { frame: WebElement | Selector | string | number; scrollRootElement?: WebElement | Selector; } | WebElement | Selector | string | number )[];` 
 
 Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}.

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}.

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}. 
 ### fully property
Defines if the screenshot for this target should be extended to contain the entire element or region being checked, even if it extends the borders of the viewport.

#### Syntax 
 ``` 
eyes.check({ fully: value });
 ``` 
 
 Type:boolean 
If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true.
        
 ####  Remarks 
This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method or [Configuration.setForceFullPageScreenshot](./configuration#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchMode.CSS](./stitchmode-method) or [StitchMode.SCROLL](./stitchmode-method) is determined by the global default or the value set using, [Eyes.setStitchMode](./eyes#setstitchmode-method) or [Configuration.setStitchMode](./configuration#setstitchmode-method) You can use the [CheckSettings.scrollRootElement](./checksettings#scrollrootelement-method) method to specify which element should be scrolled to render all of the content of the page. You may only specify one such element per checkpoint. You may only call this method once in a given target. 
 ### ignoreCaret property
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ``` 
eyes.check({ ignoreCaret: value });
 ``` 
 
 Type:boolean 
If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored.
        
 ####  Remarks 
You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method or [Configuration.setIgnoreCaret](./configuration#setignorecaret-method) method. 
 ### ignoreDisplacements property
Sets whether Test Manager should intially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ``` 
eyes.check({ ignoreDisplacements: value });
 ``` 
 
 Type:boolean 
If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed.
        
 ####  Remarks 
Ignore displacements is only active when using a Match level of [Strict](./matchlevel) or [Content](./matchlevel) 
 ### ignoreRegions property
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.check({ ignoreRegions: value });
 ``` 
 
 Type: 
A region defined by one of the possible types. 
 `(RegionPlain|WebElement|Selector)[]` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)
        
 ####  Remarks 
You may call this method multiple times in a given chain. Ignore regions should not overlap each other or other types of regions (i.e. floating or match level regions). 
 ### layoutBreakpoints property
Configure the SDK to capture multiple DOM images for multiple viewport sizes.
When the test loads a page into the test browser, the test browser loads the page, executes any JavaScript loaded with that page, and creates a DOM. The SDK then sends this DOM to the Ultrafast Grid, where it is rendered for each configured execution environment. When the Ultrafast Grid sizes the browser, device emulator, or simulator to match the viewport size of the execution environment, all CSS is applied so that any viewport-width-dependent layout will have the expected effect. However, the on-page JavaScript is not executed. If the JavaScript impacts the DOM and is viewport-width-dependent, then the page may be rendered incorrectly.

This method allows you to request that the SDK resize the test browser viewport to multiple viewport widths. Resizing the test browser viewport triggers re-execution of the on-page JavaScript, and the creation of a viewport-width-specific DOM. The SDK then sends all of these DOMs to the Ultrafast Grid and the Ultrafast Grid renders each execution environment using the DOM that matches the environment viewport width execution environment.

Depending on the parameters you pass to the method, the SDK either extracts a DOM for every distinct viewport size configured or extracts a DOM for each viewport size that you specify.

For more information see [Handling viewport-dependent JavaScript](https://applitools.com/docs/topics/sdk/viewport-dependent-js.html).

#### Syntax 
 ``` 
eyes.check({ layoutBreakpoints: value });
 ``` 
 
 Type: 
You can either pass a boolean value or a number. Pass a value of true to enable this feature. Pass one or more viewport widths explicitly, and the JavaScript is executed and the DOM is extracted for each viewport width. For each target, the Ultrafast Grid uses the DOM extracted with the widest viewport that is smaller than the viewport width. For example, if the values 640, 768 and 1024 are passed, then targets with a width between 640 and 767 (inclusive) use the DOM extracted at 640. Similarly, targets between 768 and 1023 use the DOM extracted at 768. Targets that have a width smaller than the smallest defined width use a DOM extracted at one less than the smallest DOM width (639 in this example). Targets that have a width larger than the largest width defined (1024 in this example) use the DOM extracted at the largest width. If no width is specified, then a separate DOM is extracted for each distinct execution environment viewport width. 
 `boolean|number[]` 


 #### Remarks 
This method enables and sets breakpoints for the current checkpoint. It overrides the default values when the test is configured with a previous use of undefined. 
 ### layoutRegions property
Defines that a match level of [Layout](./matchlevel) should be used for the region(s) passed as parameter(s).

#### Syntax 
 ``` 
eyes.check({ layoutRegions: value });
 ``` 
 
 Type: 
One or more region descriptors or selectors in one of the defined types. 
 `(RegionPlain|WebElement|Selector)[]` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)
        
 ####  Remarks 
You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`strictRegions(regions-method)`](#strictregions-method), [`layoutRegions(regions-method)`](#layoutregions-method)., [`contentRegions(regions-method)`](#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in selenium4 javascript)(regions)`](#). [`ignoreRegions(regions-method)`](#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
 ### matchLevel property
Use this property to set and retrieve the default match level (the type of matching) to use for this target when matching the captured image to the baseline image.

#### Syntax 
 ``` 
eyes.check({ matchLevel: value });
 ``` 
 
 Type:MatchLevelPlain 
Available match level values are: 
 MatchLevelPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [MatchLevel](./matchlevel).
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method) or [Configuration.setMatchLevel](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [CheckSettings.strict](./checksettings#strict-method)[CheckSettings.content](./checksettings#content-method)[CheckSettings.layout](./checksettings#layout-method)[CheckSettings.exact](./checksettings#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
 ### name property
Assigns a name to the checkpoint.

#### Syntax 
 ``` 
eyes.check({ name: value });
 ``` 
 
 Type:string 
The name to be given to this check point.
        
 ####  Remarks 
You may only call this method once in a given chain. 
 ### region property
Requests that only a region within a selected i-frame should be matched.

#### Syntax 
 ``` 
eyes.check(Target.frame(frameSelector).region);
 ``` 
 
 Type: 
 
 `RegionPlain|WebElement|Selector` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)
        
 ####  Remarks 
The parameter to the method specifies the region to be matched. The enclosing frame(s) are selected by the previous calls in the chain to [Target.frame](./target#frame-method). You may only use this method in the chain if the first method in the chain is [Target.frame](./target#frame-method). You may not call it if the first method in the chain is [Target.window](./target#window-method) or [Target.region](./target#region-method). To match a region within a window, use the method [Target.region](./target#region-method) as the first method in the Target chain. You may only call this method once in a given chain. 
 ### scrollRootElement property
Normally, Eyes will select the most appropriate element to scroll to execute the [fully](./checksettings#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly.

#### Syntax 
 ``` 
eyes.check({ scrollRootElement: value });
 ``` 
 
 Type: 
This object defines the element to be scrolled. 
 `WebElement|Selector` 
 
 Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}. 
 ### sendDom property
Enable or disable sending DOM for this checkpoint.
This method overides the global setting of sending/not sending DOM for this checkpoint. The global setting is set using [setSendDom](./eyes#setsenddom-method).

#### Syntax 
 ``` 
eyes.check({ sendDom: value });
 ``` 
 
 Type:boolean 
If a vlaue of true is passed then send DOM information for this checkpoint even if sending DOM is disabled globally. 
 ### strictRegions property
Defines that a match level of [Strict](./matchlevel) should be used for the region(s) passed as parameter(s).

#### Syntax 
 ``` 
eyes.check({ strictRegions: value });
 ``` 
 
 Type: 
The value returned is the object that called the method. You can use it to call other methods supported by the object class. 
 `(RegionPlain|WebElement|Selector)[]` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)

Selector

Used to identify an HTML element defined as |import('selenium-webdriver').Locator|{using:string;value:string}|string|{selector:string;type:string}.
        
 ####  Remarks 
You may define multiple regions that have an explicit match level by calling this method multiple times, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`strictRegions(regions-method)`](#strictregions-method), [`layoutRegions(regions-method)`](#layoutregions-method)., [`contentRegions(regions-method)`](#contentregions-method) should not overlap each other or the regions defined using [`checksettings.ignore (not yet available in selenium4 javascript)(regions)`](#). [`ignoreRegions(regions-method)`](#ignoreregions-method). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
 ### timeout property
Defines the timeout to use when acquiring and comparing screenshots for this target.

#### Syntax 
 ``` 
eyes.check({ timeout: value });
 ``` 
 
 Type:number 
The timeout to use in milliseconds.
        
 ####  Remarks 
You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setMatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism. 
 ### variationGroupId property
Set the variation group ID for this checkpoint.
For a description of the use of variation groups see [Baseline variation groups](https://applitools.com/docs/features/baseline-variations-groups.html).

#### Syntax 
 ``` 
eyes.check({ variationGroupId: value });
 ``` 
 
 Type:string 
The value of the variation group ID to be set. 
 ### visualGridOptions property
Use this property to set and retrieve configuration values for the Ultrafast Grid.

#### Syntax 
 ``` 
eyes.check({ visualGridOptions: value });
 ``` 
 
 Type: 
 `{ [key: string]: any };` 


 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.setVisualGridOption](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [CheckSettings.visualGridOption](./checksettings#visualgridoptions-method).
        
 ####  Example 
JavaScript

    eyes.check(
            Target.window()
                    .visualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true)));