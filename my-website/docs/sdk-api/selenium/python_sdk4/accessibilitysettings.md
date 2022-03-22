# AccessibilitySettings class
A class that is used to set up accessibility validation.
 
 ### Import statement 
``` 
from applitools.selenium import AccessibilitySettings
 
 ``` 
### Constructor 
### AccessibilitySettings method
Create an object that is used to set up accessibility validation.
Toset upaccessibility validation pass an object of this type to the [Configuration.set\_accessibility\_validation](./configuration#setaccessibilityvalidation-method) method.

#### Syntax 
 ``` 
obj = AccessibilitySettings(level, guidelines_version)
 ``` 

 #### Parameters 
 ###### level 
  
 Type:[AccessibilityLevel](./accessibilitylevel) 
  
 The required accessibility level. 
  
  ###### guidelines\_version 
  
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
  
 The required accessibility guide version. 
  
 #### Return value 
Type: None
 #### Example 
Python

    # test suite setup  
        suite_config = (Configuration()  
         .set_accessibility_validation(
            AccessibilitySettings(AccessibilityLevel.AAA, AccessibilityGuidelinesVersion.WCAG_2_1))
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config)
        

 
 ### guidelines_version property
Use this property to set and retrieve the required accessibility guide version.

#### Syntax 
 ``` 
obj.guidelines_version  = value
value = obj.guidelines_version
 ``` 
 
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
The accessibility guide version. 
 ### level property
Use this property to set and retrieve the required accessibility level.

#### Syntax 
 ``` 
obj.level  = value
value = obj.level
 ``` 
 
 Type:[AccessibilityLevel](./accessibilitylevel) 
The accessibility level.