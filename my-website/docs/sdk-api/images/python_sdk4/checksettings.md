# ImagesCheckSettings class

The methods in this class are used as part of the [check](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, chaining them one after the other using the '.' operator. 
### accessibility method
Use to define an accessibility region and its type.

#### Syntax 
 ``` 
eyes.Check(Target.window().accessibility(region))
eyes.Check(Target.window().accessibility(region, type))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### type 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The accessibility type of the region. 
  
 #### Return value 
Type: Self

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### content method
If called without parameters, sets the match level for this target to . Otherwise, defines that a match level of [CONTENT](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.window().content(regions))
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:[Region](./region) 
  
 One or more region definitions. 
  
 #### Return value 
Type: Self

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

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in images python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in images python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in images python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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
This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`match_level`](#setmatchlevel-method).

For a given target you may call only one of the following methods that set a target default match level:

*   [`match_level`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings.strictregions (not yet available in images python_sdk4)`](#)
*   [`checksettings.contentregions (not yet available in images python_sdk4)`](#)
*   [`checksettings.layoutregions (not yet available in images python_sdk4)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ``` 
eyes.check(name,Target().image(img).floating(max_offset, region))
eyes.check(name,Target().image(img).floating(region, max_up_offset, max_down_offset, max_left_offset, max_right_offset))
 ``` 

 #### Parameters 
 ###### max\_offset 
  
 Type:int 
  
 The maximum amount that the region can shift in any direction and still be considered matching. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines the region. 
  
  ###### region 
  
 Type:[Region](./region) 
  
 An object that defines the region. 
  
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
Type: Self

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
### ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.check(name, Target().image(img).ignore(regions))
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:[Region](./region) 
  
 One or more region definitions. 
  
 #### Return value 
Type: Self

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
eyes.Check(Target.window().layout(regions))
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:[Region](./region) 
  
 Zero or more additional rectangle objects separated by commas or passed as an array. 
  
 #### Return value 
Type: Self

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

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in images python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in images python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in images python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

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
The value provided here overrides the default match level, or the global value set for this target using [Eyes.match\_level](./eyes#setmatchlevel-method) or [Configuration.set\_match\_level](./configuration#setmatchlevel-method). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [ImagesCheckSettings.strict](#strict-method)[ImagesCheckSettings.content](#content-method)[ImagesCheckSettings.layout](#layout-method)[ImagesCheckSettings.exact](#exact-method)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### strict method
If called without parameters, sets the match level for this target to [STRICT](./matchlevel). Otherwise, defines that a match level of [STRICT](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ``` 
eyes.Check(Target.window().strict(regions))
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:[Region](./region) 
  
 One or more region definitions. 
  
 #### Return value 
Type: Self

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

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in images python_sdk4)(regions)`](#), [`checksettings.layoutregions (not yet available in images python_sdk4)(regions)`](#)., [`checksettings.contentregions (not yet available in images python_sdk4)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images python_sdk4)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
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