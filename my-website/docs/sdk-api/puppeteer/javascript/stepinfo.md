# StepInfo class
When a test terminates, the [close](./eyes#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults-method) class. Within the [TestResults](./testresults-method), there is an array of objects which have the properties defined by the class [StepInfo](#-method). Each element of this array describes information for one step in the test.The properties in this class are used to retrieve information for a given step in the test results.
You can access the array of objects with the step information using the [getStepsInfo](./testresults#getstepsinfo-method) method. 
### getApiUrls method
Use the object returned by this method to retrieve URLs for the baseline, checkpoint, and diff images. You can obtain these images using the REST API.

#### Syntax 
 ``` 
let value = stepinfo.getApiUrls();
value = stepinfo.apiUrls;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ApiUrls](./apiurls)

See [ApiUrls](./apiurls) for a detailed description of this object. 
### getAppUrls method
Use the object returned by this method to retrieve the URLs, and then you can use them to open the Test Manager in a browser preloaded with this step.

#### Syntax 
 ``` 
let value = stepinfo.getAppUrls();
value = stepinfo.appUrls;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [AppUrls](./appurls)

See [AppUrls](./appurls) for a detailed description of this object. 
### getHasBaselineImage method
The value returned by this method is whether the baseline has a baseline image for this step.

#### Syntax 
 ``` 
let value = stepinfo.getHasBaselineImage();
value = stepinfo.hasBaselineImage;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getIsDifferent method
The value returned by this method is true if the checkpoint does not match the baseline image.

#### Syntax 
 ``` 
let value = stepinfo.getIsDifferent();
value = stepinfo.getIsDifferent;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet). 
### getName method
The value returned by this method is the name (tag) assigned to the step (in the check method).

#### Syntax 
 ``` 
let value = stepinfo.getName();
value = stepinfo.name;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string