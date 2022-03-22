# ImagesCheckSettings class

The methods in this class are used as part of the [checkWithTag](./eyes#check-method) Fluent API to configure and execute checkpoints.
To use these methods, first create a target object using a method from the [Target](./target) class, then call one or more of the methods in this class on the returned object, using a series of nested calls. 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 
 
### accessibility method
Use to define an accessibility region and its type.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj accessibility  : region type: type   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)accessibility:(Region *)region type:(AccessibilityRegionType)type 
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region)\* 
  
 An object that defines a rectangular area in the window. 
  
  ###### type 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The accessibility type of the region. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### content method
If called without parameters, sets the match level for this target to . Otherwise, defines that a match level of [MatchLevelContent](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj content  : regions   ]
;

id<CheckSettingsProtocol> target =  [ obj content    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)content 
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:NSArray<[Region](./region)\>  
  
 One or more region definitions. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`matchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in images objectivec)(regions)`](#), [`checksettings.layoutregions (not yet available in images objectivec)(regions)`](#)., [`checksettings.contentregions (not yet available in images objectivec)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images objectivec)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### exact method
Sets the match level for this target to [MatchLevelExact](./matchlevel).
This match level is very sensative to differences in images. Do not use unless you have a very specific purpose.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj exact    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)exact 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods that set a target default match level:

*   [`matchLevel`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

To set a match level for a one or more regions within a target use one of the following methods:

*   [`checksettings.strictregions (not yet available in images objectivec)`](#)
*   [`checksettings.contentregions (not yet available in images objectivec)`](#)
*   [`checksettings.layoutregions (not yet available in images objectivec)`](#)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj floating  : regions maxOffset: maxOffset   ]
;

id<CheckSettingsProtocol> target =  [ obj floating  : region maxUpOffset: maxUpOffset maxDownOffset: maxDownOffset maxRightOffset: maxRightOffset maxLeftOffset: maxLeftOffset   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)floating:(Region *)region maxUpOffset:(NSInteger)maxUpOffset maxDownOffset:(NSInteger)maxDownOffset maxRightOffset:(NSInteger)maxRightOffset maxLeftOffset:(NSInteger)maxLeftOffset 
 ``` 

 #### Parameters 
 ###### regions 
  
  Type:NSArray<[Region](./region)\> 
  
 One or more region definitions. 
  
  ###### maxOffset 
  
 Type:NSInteger 
  
 The maximum amount that the region can shift in any direction and still be considered matching. 
  
  ###### region 
  
 Type:[Region](./region)\* 
  
 An object that defines the region. 
  
  ###### maxUpOffset 
  
 Type:NSInteger 
  
 The maximum amount that the region can shift upwards and still be considered matching. 
  
  ###### maxDownOffset 
  
 Type:NSInteger 
  
 The maximum amount that the region can shift downwards and still be considered matching. 
  
  ###### maxRightOffset 
  
 Type:NSInteger 
  
 The maximum amount that the region can shift to the right and still be considered matching. 
  
  ###### maxLeftOffset 
  
 Type:NSInteger 
  
 The maximum amount that the region can shift to the left and still be considered matching. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
### ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj ignore  : regions   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)ignore:(NSArray<Region *> *)regions 
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:NSArray<[Region](./region)\> 
  
 One or more region definitions. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`
 
The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions. 
### ignoreCaret method
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj ignoreCaret  : ignoreCaret   ]
;

id<CheckSettingsProtocol> target =  [ obj ignoreCaret    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)ignoreCaret 
 ``` 

 #### Parameters 
 ###### ignoreCaret 
  
 Type:BOOL 
  
 If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [\[Eyes ignoreCaret\]](../class_eyes/method-eyes-setignorecaret-images-objectivec.html) property or [\[Configuration ignoreCaret\]](../class_configuration/method-configuration-setignorecaret-images-objectivec.html) property. 
### ignoreDisplacements method
Sets whether Test Manager should intially display mismatches for image features that have only been displaced, as opposed to real mismatches.
The Eyes server can distinguish between mismatches that are caused by content that has moved on the page as opposed to content that is new, missing, or has changed. In the Test Manager, the user can choose to hide differences that arise due to displaced content. Use this method to set whether the Test Manager should display differences that Eyes identified as displaced features when first displaying a step, or if Test Manager should hide these differences You can change this behavior from within the Test Manager. Note that this setting only governs what is _displayed_. Eyes still considers a feature that has moved to be a mismatch that needs to be resolved by the user. For more details see [Hide displacement diffs tool](https://applitools.com/docs/topics/test-manager/viewers/tm-diff-displacement.html).

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj ignoreDisplacements    ]
;

id<CheckSettingsProtocol> target =  [ obj ignoreDisplacements  : ignoreDisplacements   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)ignoreDisplacements:(BOOL)ignoreDisplacements 
 ``` 

 #### Parameters 
 ###### ignoreDisplacements 
  
 Type:BOOL 
  
 If a value of true is passed, then mismatches due to displaced content will not be displayed in the Test Manager. Otherwise, they will be displayed. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

 #### Remarks 
Ignore displacements is only active when using a Match level of [MatchLevelStrict](./matchlevel) or [MatchLevelContent](./matchlevel) 
### layout method
If called without parameters, sets the match level for this target to [MatchLevelLayout](./matchlevel). Otherwise, defines that a match level of [MatchLevelLayout](./matchlevel) should be used for the regions passed as parameters.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj layout  : regions   ]
;

id<CheckSettingsProtocol> target =  [ obj layout    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)layout 
 ``` 

 #### Parameters 
 ###### regions 
  
  Type:NSArray<[Region](./region)\> 
  
 An array of Region objects that defines rectangular areas in the checked image. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`matchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in images objectivec)(regions)`](#), [`checksettings.layoutregions (not yet available in images objectivec)(regions)`](#)., [`checksettings.contentregions (not yet available in images objectivec)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images objectivec)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### matchLevel method
Use this method to set the default match level (the type of matching) to use for this target when matching the captured image to the baseline image.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj matchLevel  : matchLevel   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)matchLevel:(MatchLevel)matchLevel 
 ``` 

 #### Parameters 
 ###### matchLevel 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [MatchLevelNone](./matchlevel) 
 *   [MatchLevelStrict](./matchlevel) 
 *   [MatchLevelLayout](./matchlevel) 
 *   [MatchLevelContent](./matchlevel) 
 *   [MatchLevelExact](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [\[Eyes matchLevel\]](../class_eyes/method-eyes-setmatchlevel-images-objectivec.html) or [\[Configuration matchLevel\]](../class_configuration/method-configuration-setmatchlevel-images-objectivec.html). You may only call this method once in a given chain. If you call this method, then you can't call the other match level methods. [\[ImagesCheckSettings strict\]](method-checksettings-strict-images-objectivec.html)[\[ImagesCheckSettings content\]](method-checksettings-content-images-objectivec.html)[\[ImagesCheckSettings layout\]](method-checksettings-layout-images-objectivec.html)[\[ImagesCheckSettings exact\]](method-checksettings-exact-images-objectivec.html)

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### region method
Requests that only a region within a selected i-frame should be matched.

#### Syntax 
 ##### Call syntax 
 ``` 
instancetype target =  [ obj region  : region   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)region:(Region *)region 
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region)\* 
  
 An object that defines a rectangular area in the window. 
  
  ###### An object that defines the region. 
  
 #### Return value 
Type: instancetype

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The parameter to the method specifies the region to be matched. You may only call this method once in a given chain. 
### strict method
If called without parameters, sets the match level for this target to [MatchLevelStrict](./matchlevel). Otherwise, defines that a match level of [MatchLevelStrict](./matchlevel) should be used for the regions passed as a parameters.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj strict  : regions   ]
;

id<CheckSettingsProtocol> target =  [ obj strict    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)strict 
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:NSArray<[Region](./region)\>
  
 One or more region definitions. 
  
 #### Return value 
Type: id`<CheckSettingsProtocol>`

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You can call this method in two ways - with parameters and without parameters. The meaning of the method, and the way it can be used is different in each case. When the method is called without parameters it sets the default match level for this target. When called with one or more regions as parameters it defines the match level for that region. The sections below provide some more details regarding how to use this method in each of these modes.

### Called without parameters

If this method is called without parameters then it sets the default match level for this target. This overrides the hard-coded default and the default match level defined by using [`matchLevel`](#setmatchlevel-method).

For a given target you may call only one of the following methods (without parameters) that set a target default match level:

*   [`matchLevel`](#matchlevel-method)
*   [`strict`](#strict-method)
*   [`content`](#content-method)
*   [`layout`](#layout-method)
*   [`exact`](#exact-method)

### Called with parameters

When the method is called with one or more parameters that define one or more regions, then these set the match level for those regions, overiding the defaults set for the target (by calling these methods without a parameter), set by [`matchLevel`](#setmatchlevel-method) and the hardcoded default match level.

You may define multiple regions that have an explicit match level by calling this method multiple times in a chain, or by passing the method multiple regions.

The region matchlevel methods [`strict(regions-method)`](#strict-method), [`layout(regions-method)`](#layout-method)., [`content(regions-method)`](#content-method). [`checksettings.strictregions (not yet available in images objectivec)(regions)`](#), [`checksettings.layoutregions (not yet available in images objectivec)(regions)`](#)., [`checksettings.contentregions (not yet available in images objectivec)(regions)`](#) should not overlap each other or the regions defined using [`ignore(regions-method)`](#ignore-method). [`checksettings.ignoreregions (not yet available in images objectivec)(regions)`](#). If they overlap each other, or regions that defined using the Test Manager then the results is undefined.

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### withStatusBar method
Instructs Eyes not to exclude the status bar in the checkpoint image (the default is to exlude it).
By default, on visual tests on mobile devices, Eyes excludes the status bar from the checkpoint image. If this method is called, then Eyes will not exclude the status bar from the checkpoint.

#### Syntax 
 ##### Call syntax 
 ``` 
id<CheckSettingsProtocol> target =  [ obj withStatusBar    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(id<CheckSettingsProtocol>)withStatusBar 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: id`<CheckSettingsProtocol>`