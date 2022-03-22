# SessionAccessibilityStatus class
Provides the overall result of an accessibility test.
Returned at then end of a test run as part of the [TestResults](./testresults).

For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### Import statement 
``` 
import com.applitools.eyes.SessionAccessibilityStatus;
 
 ``` 
 
### getLevel method
Use this method to retrieve the accessibility level under which conformance was tested.

#### Syntax 
 ``` 
AccessibilityLevel value = obj.getLevel();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AccessibilityLevel](./accessibilitylevel)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### getStatus method
Use this method to retrieve the result of the accessibility test.

#### Syntax 
 ``` 
AccessibilityStatus value = obj.getStatus();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AccessibilityStatus](./accessibilitystatus)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### getVersion method
Use this method to retrieve the accessibility guide version under which conformance was tested.

#### Syntax 
 ``` 
AccessibilityGuidelinesVersion value = obj.getVersion();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).