# ApiUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [Eyes.CloseAsync](./eyes#closeasync-method) or [Eyes.Close](./eyes#close-method) method.The methods in this class are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.


 
 ### BaselineImage property
The value of this property is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax 
 ``` 
string value = apiurls.BaselineImage;
 ``` 
 
 Type:string 
 ### CheckpointImage property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step.

#### Syntax 
 ``` 
string value = apiurls.CheckpointImage;
 ``` 
 
 Type:string 
 ### CheckpointImageThumbnail property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint thumbnail image of this step.

#### Syntax 
 ``` 
string value = apiurls.CheckpointImageThumbnail;
 ``` 
 
 Type:string 
 ### DiffImage property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax 
 ``` 
string value = apiurls.DiffImage;
 ``` 
 
 Type:string