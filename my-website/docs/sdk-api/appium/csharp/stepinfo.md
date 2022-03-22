# StepInfo class
When a test terminates, the [Close](./eyes#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults-method) class. Within the [TestResults](./testresults-method), there is an array of objects which have the properties defined by the class [StepInfo](#-method). Each element of this array describes information for one step in the test.The properties in this class are used to retrieve information for a given step in the test results.
You can access the array of objects with the step information using the [StepsInfo](./testresults#getstepsinfo-property) property.
        

 
 ### ApiUrls property
Use the object returned by this property to retrieve URLs for the baseline, checkpoint, and diff images. You can obtain these images using the REST API.

#### Syntax 
 ``` 
ApiUrls value = stepinfo.ApiUrls;
 ``` 
 
 Type:[ApiUrls](./apiurls) 
See [ApiUrls](./apiurls) for a detailed description of this object. 
 ### AppUrls property
Use the object returned by this property to retrieve the URLs, and then you can use them to open the Test Manager in a browser preloaded with this step.

#### Syntax 
 ``` 
AppUrls value = stepinfo.AppUrls;
 ``` 
 
 Type:[AppUrls](./appurls) 
See [AppUrls](./appurls) for a detailed description of this object. 
 ### HasBaselineImage property
The value of this property is whether the baseline has a baseline image for this step.

#### Syntax 
 ``` 
bool value = stepinfo.HasBaselineImage;
 ``` 
 
 Type:bool 
 ### HasCheckpointImage property
Returns whether there is a checkpoint image for this step.

#### Syntax 
 ``` 
bool value = stepinfo.HasCheckpointImage;
 ``` 
 
 Type:bool 
 ### IsDifferent property
The value of this property is true if the checkpoint does not match the baseline image.

#### Syntax 
 ``` 
bool value = stepinfo.IsDifferent;
 ``` 
 
 Type:bool 
Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet). 
 ### Name property
The value of this property is the name (tag) assigned to the step (in the check method).

#### Syntax 
 ``` 
string value = stepinfo.Name;
 ``` 
 
 Type:string