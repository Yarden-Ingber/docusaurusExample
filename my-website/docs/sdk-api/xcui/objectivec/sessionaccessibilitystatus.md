# SessionAccessibilityStatus class
Provides the overall result of an accessibility test.
Returned at then end of a test run as part of the [TestResults](./testresults).

For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### Import statement 
``` 
@import EyesXCUI
 
 ``` 


 
 ### level property
Use this property to retrieve the accessibility level under which conformance was tested.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityLevel value = obj.level
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) AccessibilityLevel level 
 ``` 
 
 Type:[AccessibilityLevel](./accessibilitylevel)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### status property
Use this property to retrieve the result of the accessibility test.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityStatus value = obj.status
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) AccessibilityStatus status 
 ``` 
 
 Type:[AccessibilityStatus](./accessibilitystatus)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### version property
Use this property to retrieve the accessibility guide version under which conformance was tested.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityGuidelinesVersion value = obj.version
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) AccessibilityGuidelinesVersion version 
 ``` 
 
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).