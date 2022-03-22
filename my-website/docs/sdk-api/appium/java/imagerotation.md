# ImageRotation class
An object of this class represents the amount that an image should be rotated.
 
 ### Import statement 
``` 
import com.applitools.eyes.selenium.positioning.ImageRotation;
 
 ``` 
### Constructor 
### ImageRotation method
Create an object that defines how much an image should be rotated by.

#### Syntax 
 ``` 
ImageRotation rotationObj = new ImageRotation(rotation);
 ``` 

 #### Parameters 
 ###### rotation 
  
 Type:int 
  
 The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation. 
  
 #### Return value 
Type: [ImageRotation](./imagerotation) 
### getRotation method
Retrieve the amount the image should be rotated by.

#### Syntax 
 ``` 
int value = rotationObj.getRotation();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int

The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation.