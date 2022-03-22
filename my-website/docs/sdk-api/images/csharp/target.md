# Target class
This class provides methods that are used to define and configure the checkpoint target for the [Check](./eyes#check-method) method.
Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
### Image method
Provide the image, or source of the image, for this target.

#### Syntax 
 ``` 
eyes.Check(Target.Image(image))
eyes.Check(Target.Image(path))
 ``` 

 #### Parameters 
 ###### image 
  
 Type:Bitmap 
  
 The checkpoint image as an object in PNG format. 
  
  ###### path 
  
 Type:string 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### Url method
Provide the URI of an image to use as the checkpoint image.

#### Syntax 
 ``` 
eyes.Check(Target.Url(uri))
eyes.Check(Target.Url(uriString))
 ``` 

 #### Parameters 
 ###### uri 
  
 Type:Uri 
  
 The URI of the image that should be used for this checkpoint. 
  
  ###### uriString 
  
 Type:string 
  
 A string with the URL of the checkpoint image. The image must be in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings)