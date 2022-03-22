# AccessibilitySettings class
A class that is used to set up accessibility validation.
 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.AccessibilitySettings;
 
 ``` 
### Constructor 
### AccessibilitySettings method
Create an object that is used to set up accessibility validation.
Toset upaccessibility validation pass an object of this type to the [Configuration.setAccessibilityValidation](./configuration#setaccessibilityvalidation-method) method.

#### Syntax 
 ``` 
AccessibilitySettings obj = new AccessibilitySettings(level, guidelinesVersion);
 ``` 

 #### Parameters 
 ###### level 
  
 Type:[AccessibilityLevel](./accessibilitylevel) 
  
 The required accessibility level. 
  
  ###### guidelinesVersion 
  
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
  
 The required accessibility guide version. 
  
 #### Return value 
Type: [AccessibilitySettings](./accessibilitysettings)

 #### Example 
Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
                .setAccessibilityValidation(
                        new AccessibilitySettings(
                            AccessibilityLevel.AA,
                            AccessibilityGuidelinesVersion.WCAG_2_1)
                )
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig); 
### getGuidelinesVersion method
Use this method to retrieve the required accessibility guide version.

#### Syntax 
 ``` 
AccessibilityGuidelinesVersion value = obj.getGuidelinesVersion();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
### getLevel method
Use this method to retrieve the required accessibility level.

#### Syntax 
 ``` 
AccessibilityLevel value = obj.getLevel();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AccessibilityLevel](./accessibilitylevel)