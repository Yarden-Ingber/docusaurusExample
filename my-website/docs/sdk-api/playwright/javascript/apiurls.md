# ApiUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [Eyes.close](./eyes#close-method) method.The methods in this class are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.
 
### getBaselineImage method
The value returned by this method is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax 
 ``` 
let value = apiurls.getBaselineImage();
value = apiurls.baselineImage;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getCheckpointImage method
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint image of this step.

#### Syntax 
 ``` 
let value = apiurls.getCheckpointImage();
value = apiurls.checkpointImage;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getCheckpointImageThumbnail method
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint thumbnail image of this step.

#### Syntax 
 ``` 
let value = apiurls.getCheckpointImageThumbnail();
value = apiurls.checkpointImageThumbnail;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getDiffImage method
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax 
 ``` 
let value = apiurls.getDiffImage();
value = apiurls.diffImage;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string