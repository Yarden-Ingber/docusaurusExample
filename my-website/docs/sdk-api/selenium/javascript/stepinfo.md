# StepInfo class
When a test terminates, the [close](./eyes#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults-method) class. Within the [TestResults](./testresults-method), there is an array of objects which have the properties defined by the class [StepInfo](#-method). Each element of this array describes information for one step in the test.The properties of this object are used to retrieve information for a given step in the test results. Although there is no named class for this object, for convenience, it is documented in a class-like style.
You can access the array of objects with the step information using the [stepsInfo](./testresults#getstepsinfo-property) property. 
 ### Require statement 
``` 
const {StepInfo} = require('const EyesSDK = require('eyes.selenium'))');
 
 ``` 


 
 ### apiUrls property
Use the object returned by this property to retrieve URLs for the baseline, checkpoint, and diff images. You can obtain these images using the REST API.

#### Syntax 
 ``` 
value = stepinfo.apiUrls;
 ``` 
 
 Type: 
See [apiUrls](./apiurls) for a detailed description of this object. 
 `{ baselineImage: string; currentImage: string; diffImage: string };` 
 
 ### hasBaselineImage property
The value of this property is whether the baseline has a baseline image for this step.

#### Syntax 
 ``` 
value = stepinfo.hasBaselineImage;
 ``` 
 
 Type:boolean 
 ### hasCheckpointImage property
Returns whether there is a checkpoint image for this step.

#### Syntax 
 ``` 
value = stepinfo.hasCheckpointImage;
 ``` 
 
 Type:boolean 
 ### isDifferent property
The value of this property is true if the checkpoint does not match the baseline image.

#### Syntax 
 ``` 
value = stepinfo.isDifferent;
 ``` 
 
 Type:boolean 
Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet). 
 ### name property
The value of this property is the name (tag) assigned to the step (in the check method).

#### Syntax 
 ``` 
value = stepinfo.name;
 ``` 
 
 Type:string