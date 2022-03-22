# TestAccessibilityStatus class
Provides the overall result of an accessibility test.
Returned at then end of a test run as part of the [TestResults](./testresults).

For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).
        

 
 ### level property
Use this property to retrieve the accessibility level under which conformance was tested.

#### Syntax 
 ``` 
value = obj.level;
 ``` 
 
 Type:AccessibilityLevelPlain 
 AccessibilityLevelPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [AccessibilityLevel](./accessibilitylevel).
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### status property
Use this property to retrieve the result of the accessibility test.

#### Syntax 
 ``` 
value = obj.status;
 ``` 
 
 Type:AccessibilityStatusPlain 
 AccessibilityStatusPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [AccessibilityStatus](./accessibilitystatus).
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### version property
Use this property to retrieve the accessibility guide version under which conformance was tested.

#### Syntax 
 ``` 
value = obj.version;
 ``` 
 
 Type:AccessibilityGuidelinesVersionPlain 
 AccessibilityGuidelinesVersionPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion).
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).