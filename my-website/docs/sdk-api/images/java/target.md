# Target class
This class provides methods that are used to define and configure the checkpoint target for the [check](./eyes#check-method) method.
Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
import com.applitools.eyes.images.Target;
 
 ``` 
 
### image method
Provide the image, or source of the image, for this target.

#### Syntax 
 ``` 
eyes.check(Target.image(image))
eyes.check(Target.image(path))
 ``` 

 #### Parameters 
 ###### image 
  
 Type:BufferedImage 
  
 The checkpoint image as an object in PNG format. 
  
  ###### path 
  
 Type:String 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
 #### Return value 
Type: ICheckSettings