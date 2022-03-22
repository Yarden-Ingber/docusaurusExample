# Target class
This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [Check](./eyes#check-method) method.
Once you create a [SeleniumCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [SeleniumCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
### Frame method
Configure [Check](./eyes#check-method) to match an iframe in a window or another iframe.
Chain several calls to this method to navigate a hierarchical iframe tree. You can also chain a [Region](#region-method) method to define that only a region in the frame should be matched and not the entire iframe.

#### Syntax 
 ``` 
eyes.Check(Target.Frame(by))
eyes.Check(Target.Frame(frameNameOrId))
eyes.Check(Target.Frame(index))
eyes.Check(Target.Frame(frameReference))
 ``` 

 #### Parameters 
 ###### by 
  
 Type:By 
  
 An element selector which is chosen using the Selenium By class. 
  
  ###### frameNameOrId 
  
 Type:string 
  
 The name or id of the frame element. 
  
  ###### index 
  
 Type:int 
  
 The index of the iframe (as in Selenium By Index). 
  
  ###### frameReference 
  
 Type:IWebElement 
  
 A reference to the frame element. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
### Region method
Configure [Check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.Check(Target.Region(rect))
eyes.Check(Target.Region(element))
eyes.Check(Target.Region(by))
 ``` 

 #### Parameters 
 ###### rect 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
  ###### element 
  
 Type:IWebElement 
  
 An object which defines a region. 
  
  ###### by 
  
 Type:By 
  
 An element selector which is chosen using the Selenium By class. 
  
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings) 
### Window method
Configure [Check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.Check(Target.Window())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [SeleniumCheckSettings](./checksettings)