# Target class
This class provides methods that are used to
Once you create a [SeleniumCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [SeleniumCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
from applitools.selenium import Target
 
 ``` 
 
### frame method
Configure [check](./eyes#check-method) to match an iframe in a window or another iframe.
Chain several calls to this method to navigate a hierarchical iframe tree. You can also chain a [region](#region-method) method to define that only a region in the frame should be matched and not the entire iframe.

#### Syntax 
 ``` 
eyes.check(Target.frame(frame_name_or_id))
eyes.check(Target.frame(frame_element))
eyes.check(Target.frame(frame_index))
eyes.check(Target.frame(frame_by_selector))
 ``` 
 
 FrameNameOrId

The type FrameNameOrId is defined as: Text.
        
 ####  Parameters 
 ###### frame\_name\_or\_id 
  
 Type:FrameNameOrId 
  
 The name or id of the frame element. 
  
###### Type definitions 
  
 FrameNameOrId 
  
 The type FrameNameOrId is defined as: Text. 
  
  ###### frame\_element 
  
 Type:AnyWebElement 
  
 The element object of the frame. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### frame\_index 
  
 Type:FrameIndex 
  
 A Selenium frame index. 
  
  ###### Type definitions 
  
 FrameIndex 
  
 The type FrameIndex is defined as: int. 
  
  ###### frame\_by\_selector 
  
 Type:BySelector 
  
 Any legal Selenium By request that refers to an iframe, passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
### region method
Configure [check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.check(Target.region(region))
eyes.check(Target.region(css_selector))
eyes.check(Target.region(element))
eyes.check(Target.region(by_selector))
 ``` 
 
 CssSelector

The type CssSelector is defined as: Text.
        
 ####  Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 The region to be checked. 
  
  ###### css\_selector 
  
 Type:CssSelector 
  
 Any legal CSS selector, for example .myClass 
  
  ###### Type definitions 
  
 CssSelector 
  
 The type CssSelector is defined as: Text. 
  
  ###### element 
  
 Type:AnyWebElement 
  
 An object which defines a region. 
  
  ###### Type definitions 
  
 AnyWebElement 
  
 The type AnyWebElement is defined as: Union\[EyesWebElement,WebElement\]. 
  
  ###### by\_selector 
  
 Type:BySelector 
  
 Any legal Selenium By request passed as a dictionary, for example \[By.TAG\_NAME, "p"\] 
  
  ###### Type definitions 
  
 BySelector 
  
 The type BySelector is defined as: List\[SeleniumBy,Text\]. 
  
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