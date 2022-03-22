# apiUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [Eyes.close](./eyes#close-method) method.The properties of this object are used to retrieve information about each of the steps in the test results. Although there is no named class for this object, for convenience it is documented in a class-like style.
 
 ### Require statement 
``` 
const {apiUrls} = require('const EyesSDK = require('eyes.selenium'))');
 
 ``` 


 
 ### baselineImage property
The value of this property is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax 
 ``` 
value = apiurls.baselineImage;
 ``` 
 
 Type:string 
 ### checkpointImage property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step.

#### Syntax 
 ``` 
value = apiurls.checkpointImage;
 ``` 
 
 Type:string 
 ### checkpointImageThumbnail property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint thumbnail image of this step.

#### Syntax 
 ``` 
value = apiurls.checkpointImageThumbnail;
 ``` 
 
 Type:string 
 ### diffImage property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax 
 ``` 
value = apiurls.diffImage;
 ``` 
 
 Type:string