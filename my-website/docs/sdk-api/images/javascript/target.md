# Target class
This class provides methods that are used to define and configure the checkpoint target for the [check](./eyes#check-method) method.
Once you create a [ImagesCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [ImagesCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Require statement 
``` 
const {Target} = require('@applitools/eyes-images');
 
 ``` 
 
### base64 method
Provide the image as a base64 encoded string.

#### Syntax 
 ``` 
eyes.check(Target.base64(imageBase64));
 ``` 

 #### Parameters 
 ###### imageBase64 
  
 Type:string 
  
 The checkpoint image in PNG format, encoded in base64. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### buffer method
Provide the checkpoint image in an in-memory buffer.

#### Syntax 
 ``` 
eyes.check(Target.buffer(imageBuffer));
 ``` 

 #### Parameters 
 ###### imageBuffer 
  
 Type:Buffer 
  
 The checkpoint image as an object in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### image method
Provide the image, or source of the image, for this target.

#### Syntax 
 ``` 
eyes.check(Target.image(base64String));
eyes.check(Target.image(url));
eyes.check(Target.image(filePath));
eyes.check(Target.image(imageBuffer));
 ``` 

 #### Parameters 
 ###### base64String 
  
 Type:string 
  
 The checkpoint image in PNG format, encoded in base64. 
  
  ###### url 
  
 Type:string 
  
 A string with the URL of the checkpoint image. The image must be in PNG format. 
  
  ###### filePath 
  
 Type:string 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
  ###### imageBuffer 
  
 Type:Buffer 
  
 The checkpoint image as an object in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### path method
Provide the file system path to a file containing the checkpoint image.

#### Syntax 
 ``` 
eyes.check(Target.path(imagePath));
 ``` 

 #### Parameters 
 ###### imagePath 
  
 Type:string 
  
 A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### region method
Configure [check](./eyes#check-method) to match a region in the checkpoint image, instead of the entire image.

#### Syntax 
 ``` 
eyes.check(Target.region(base64String, rect));
eyes.check(Target.region(url, rect));
eyes.check(Target.region(filePath, rect));
eyes.check(Target.region(imageBuffer, rect));
 ``` 
 
 RegionObject

The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType:CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users.
        
 ####  Parameters 
 ###### base64String 
  
 Type:string 
  
 The checkpoint image in PNG format, encoded in base64. 
  
  ###### rect 
  
 Type: 
  
     Region|RegionObject 
  
  ###### An object that defines a rectangular area in the window. 
  
 #### Type definitions 
  
 RegionObject 
  
  ###### The type RegionObject is defined as: {left:number,top:number,width:number,height:number,coordinatesType:CoordinatesType|undefined} The field coordinatesType is for internal use only and should not be set by users. 
  
 url 
  
 Type:string 
  
  ###### A string with the URL of the checkpoint image. The image must be in PNG format. 
  
 filePath 
  
 Type:string 
  
  ###### A string with the file system path to the checkpoint image file. The image must be in PNG format. 
  
 imageBuffer 
  
 Type:Buffer 
  
  ###### The checkpoint image as an object in PNG format. 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings) 
### url method
Provide the URI of an image to use as the checkpoint image.

#### Syntax 
 ``` 
eyes.check(Target.url(imageUrl, imageSize));
eyes.check(Target.url(imageUrl));
 ``` 

 #### Parameters 
 ###### imageUrl 
  
 Type:string 
  
 A string with the URL of the checkpoint image. The image must be in PNG format. 
  
  ###### imageSize 
  
 Type:[RectangleSize](./rectanglesize) \[Optional\] 
  
 The size of the image pointed to by the URL. If not provided via this parameter, then the size must be passed using the method [imageSize](./checksettings#imagesize-method) 
  
 #### Return value 
Type: [ImagesCheckSettings](./checksettings)