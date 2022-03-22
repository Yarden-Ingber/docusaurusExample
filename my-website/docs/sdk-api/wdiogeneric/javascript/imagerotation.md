# ImageRotation class
An object of this class represents the amount that an image should be rotated.

### Constructor 
### ImageRotation method
Create an object that defines how much an image should be rotated by.

#### Syntax 
 ``` 
let rotationObj = new ImageRotation(rotation);
 ``` 
 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270
 #### Parameters 
 ###### rotation 
  
 Type:ImageRotationPlain 
  
 The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation. 
  
  ###### Type definitions 
  
 ImageRotationPlain 
  
 The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
  
 #### Return value 
Type: [ImageRotation](./imagerotation) 
### getRotation method
Retrieve the amount the image should be rotated by.

#### Syntax 
 ``` 
let value = rotationObj.getRotation();
rotationObj.rotation = value;
value = rotationObj.rotation;
 ``` 
 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270
 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: ImageRotationPlain

The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation.

#### Type definitions

ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
### setRotation method
Use this method to set the amount the image should be rotated by.

#### Syntax 
 ``` 
rotationObj.setRotation(rotation);
rotationObj.rotation = value;
value = rotationObj.rotation;
 ``` 
 
 ImageRotationPlain

The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270
 #### Parameters 
 ###### rotation 
  
 Type:ImageRotationPlain 
  
 The amount by which the image should be rotated in degrees. A positive value indicates a clockwise rotation. 
  
  ###### Type definitions 
  
 ImageRotationPlain 
  
 The legal values that an image may be rotated by. This may have the following values: \-270|-180|-90|0|90|180|270 
  
 #### Return value 
Type: void