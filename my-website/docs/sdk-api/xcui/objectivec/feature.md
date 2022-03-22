# Feature class
Optional flags for dealing with special use cases.
 
 ### Import statement 
``` 
@import EyesXCUI
 
 ``` 
 
### AUTO_APP_NAME method
If set, then the default application name is derived from the test application name.
By default, if the application name is not set explicitly then the default application 'Test App' is used. Set this feature so that the default application name will be derived from the name of the application running the test. Note that recomended practice is define the application name explicitly by passing it to the [\[Eyes openWithApplicationName\]](../class_eyes/method-eyes-open-xcui-objectivec.html) method or by using [\[Configuration appName\]](../class_configuration/method-configuration-setappname-xcui-objectivec.html). .

#### Syntax 
 ##### Call syntax 
 ``` 
Feature* value =  [ obj AUTO_APP_NAME    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(Feature *)AUTO_APP_NAME __attribute__((swift_name("Feature.AUTO_APP_NAME()"))) 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Feature](./feature)\*