# Target class
This class provides methods that are used to define and configure the checkpoint target for the [checkWithTag](./eyes#check-method) method.
Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 
 
### image method
Provide the image, or source of the image, for this target.

#### Syntax 
 ##### Call syntax 
 ``` 
undefined
 ``` 
 
 ##### Declaration 
 ``` 
(ImagesCheckSettings *)image:(UIImage *)image 
 ``` 

 #### Parameters 
 ###### image 
  
 Type:UIImage\* 
  
 The checkpoint image as an object in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings)\*