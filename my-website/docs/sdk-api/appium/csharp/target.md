# Target class
This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [Check](./eyes#check-method) method.
Once you create a [CheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [CheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
### Region method
Configure [Check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.Check(Target.Region(rect))
 ``` 

 #### Parameters 
 ###### rect 
  
 Type:Rectangle 
  
 An object that defines a rectangular area in the window. 
  
 #### Return value 
Type: ICheckSettings 
### Window method
Configure [Check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.Check(Target.Window())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: ICheckSettings