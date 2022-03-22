# ApiUrlsPlain class
An object of this type is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [Eyes.close](./eyes#close-method) method.The methods in this type are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.


 
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