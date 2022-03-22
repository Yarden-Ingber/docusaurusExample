# Target class
This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [check](./eyes#check-method) method.
Once you create a [AppiumCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [AppiumCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
import com.applitools.eyes.appium.Target;
 
 ``` 
 
### region method
Configure [check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.check(Target.region(region))
eyes.check(Target.region(by))
eyes.check(Target.region(webElement))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 The region to be checked. 
  
  ###### by 
  
 Type:By 
  
 An element selector which is chosen using the Selenium By class. 
  
  ###### webElement 
  
 Type:WebElement 
  
 An object which defines a region. 
  
 #### Return value 
Type: [AppiumCheckSettings](./checksettings) 
### window method
Configure [check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.check(Target.window())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AppiumCheckSettings](./checksettings)