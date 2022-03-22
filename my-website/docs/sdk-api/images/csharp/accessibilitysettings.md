# AccessibilitySettings class
A class that is used to set up accessibility validation.

### Constructor  
### AccessibilitySettings method
Create an object that is used to set up accessibility validation.
Toset upaccessibility validation pass an object of this type to the [Configuration.SetAccessibilityValidation](./configuration#setaccessibilityvalidation-method) method.

#### Syntax 
 ``` 
AccessibilitySettings obj = new AccessibilitySettings(level, version);
 ``` 

 #### Parameters 
 ###### level 
  
 Type:[AccessibilityLevel](./accessibilitylevel) 
  
 The required accessibility level. 
  
  ###### version 
  
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
  
 The required accessibility guide version. 
  
 #### Return value 
Type: [AccessibilitySettings](./accessibilitysettings)

 #### Example 
C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .SetAccessibilityValidation(
                new AccessibilitySettings(
                    AccessibilityLevel.AA,
                    AccessibilityGuidelinesVersion.WCAG_2_1)
            )
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);
        

 
 ### GuidelinesVersion property
Use this property to set and retrieve the required accessibility guide version.

#### Syntax 
 ``` 
AccessibilityGuidelinesVersion value; // give relevant initial value
obj.GuidelinesVersion  = value;
value = obj.GuidelinesVersion
 ``` 
 
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
 ### Level property
Use this property to set and retrieve the required accessibility level.

#### Syntax 
 ``` 
AccessibilityLevel value; // give relevant initial value
obj.Level  = value;
value = obj.Level
 ``` 
 
 Type:[AccessibilityLevel](./accessibilitylevel)