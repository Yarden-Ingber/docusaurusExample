# AccessibilitySettings class
A class that is used to set up accessibility validation.
 
 ### Import statement 
``` 
@import EyesImagesAppKit
 
 ``` 
### Constructor 
### initWithLevel method
Create an object that is used to set up accessibility validation.
Toset upaccessibility validation pass an object of this type to the [\[Configuration accessibilityValidation\]](../class_configuration/method-configuration-setaccessibilityvalidation-imagesappkit-objectivec.html) property.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilitySettings* obj = [[AccessibilitySettings alloc] initWithLevel  : level guidelinesVersion: guidelinesVersion   ];
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)initWithLevel:(AccessibilityLevel)level guidelinesVersion:(AccessibilityGuidelinesVersion)guidelinesVersion 
 ``` 

 #### Parameters 
 ###### level 
  
 Type:[AccessibilityLevel](./accessibilitylevel) 
  
 The required accessibility level. 
  
  ###### guidelinesVersion 
  
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
  
 The required accessibility guide version. 
  
 #### Return value 
Type: [AccessibilitySettings](./accessibilitysettings)\*

 
 ### guidelinesVersion property
Use this property to set and retrieve the required accessibility guide version.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityGuidelinesVersion value; // give relevant initial value
obj.guidelinesVersion  = value
value = obj.guidelinesVersion
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) AccessibilityGuidelinesVersion guidelinesVersion 
 ``` 
 
 Type:[AccessibilityGuidelinesVersion](./accessibilityguidelinesversion) 
The accessibility guide version. 
 ### level property
Use this property to set and retrieve the required accessibility level.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityLevel value; // give relevant initial value
obj.level  = value
value = obj.level
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) AccessibilityLevel level 
 ``` 
 
 Type:[AccessibilityLevel](./accessibilitylevel) 
The accessibility level.