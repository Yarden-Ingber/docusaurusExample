# Target class
This class provides methods that are used to define and configure the checkpoint target for the [check](./eyes#check-method) method.
Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
from applitools.images import Target
 
 ``` 
 
### image method
Provide the image, or source of the image, for this target.

#### Syntax 
 ``` 
eyes.Check(name,Target().image(image))
eyes.Check(name,Target().image(path))
 ``` 

 #### Parameters 
 ###### image 
  
 Type:Image 
  
 The checkpoint image as an object in PNG format. 
  
  ###### path 
  
 Type:Text 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### region method
Configure [check](./eyes#check-method) to match a region in the checkpoint image, instead of the entire image.

#### Syntax 
 ``` 
eyes.check(tag,Target().image(img).region(image, rect))
eyes.check(tag,Target().image(img).region(path, rect))
 ``` 

 #### Parameters 
 ###### image 
  
 Type:Image 
  
 The checkpoint image as an object in PNG format. 
  
  ###### rect 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
  ###### path 
  
 Type:Text 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
  ###### rect 
  
 Type:[Region](./region) 
  
 An object that defines a rectangular area in the window. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings)