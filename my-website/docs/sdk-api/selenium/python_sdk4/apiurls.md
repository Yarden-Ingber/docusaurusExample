# ApiUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [Eyes.close\_async](./eyes#closeasync-method) or [Eyes.close](./eyes#close-method) method.The methods in this class are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.


 
 ### baseline_image property
The value of this property is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax 
 ``` 
value = apiurls.baseline_image
 ``` 
 
 Type:Text 
 ### checkpoint_image property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step.

#### Syntax 
 ``` 
value = apiurls.checkpoint_image
 ``` 
 
 Type:Text 
 ### checkpoint_image_thumbnail property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint thumbnail image of this step.

#### Syntax 
 ``` 
value = apiurls.checkpoint_image_thumbnail
 ``` 
 
 Type:Text 
 ### diff_image property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax 
 ``` 
value = apiurls.diff_image
 ``` 
 
 Type:Text