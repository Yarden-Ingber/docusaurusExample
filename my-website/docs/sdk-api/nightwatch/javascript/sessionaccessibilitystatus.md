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
 
 Type: 
 `[AccessibilityLevel](./accessibilitylevel)|'AA'|'AAA'` 


 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### status property
Use this property to retrieve the result of the accessibility test.

#### Syntax 
 ``` 
value = obj.status;
 ``` 
 
 Type: 
 `[AccessibilityStatus](./accessibilitystatus)|'Failed'|'Passed'` 


 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### version property
Use this property to retrieve the accessibility guide version under which conformance was tested.

#### Syntax 
 ``` 
value = obj.version;
 ``` 
 
 Type: 
 `[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)|'WCAG_2_0'|'WCAG_2_1'` 


 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).