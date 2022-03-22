# Target class
This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [check](./eyes#check-method) method.
Once you create a [SeleniumCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [SeleniumCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
import com.applitools.eyes.selenium.fluent.Target;
 
 ``` 
 
### frame method
Configure [check](./eyes#check-method) to match an iframe in a window or another iframe.
Chain several calls to this method to navigate a hierarchical iframe tree. You can also chain a [region](#region-method) method to define that only a region in the frame should be matched and not the entire iframe.

#### Syntax 
 ``` 
eyes.check(Target.frame(by))
eyes.check(Target.frame(frameNameOrId))
eyes.check(Target.frame(index))
eyes.check(Target.frame(webElement))
 ``` 

 #### Parameters 
 ###### by 
  
 Type:By 
  
 An element selector which is chosen using the Selenium By class. 
  
  ###### frameNameOrId 
  
 Type:String 
  
 The name or id of the frame element. 
  
  ###### index 
  
 Type:int 
  
 The index of the iframe (as in Selenium By Index). 
  
  ###### webElement 
  
 Type:WebElement 
  
 A reference to the frame element. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
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
Type: [SeleniumCheckSettings](./checksettings) 
### window method
Configure [check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.check(Target.window())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)