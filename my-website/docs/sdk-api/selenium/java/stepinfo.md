# StepInfo class
When a test terminates, the [close](./eyes#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults-method) class. Within the [TestResults](./testresults-method), there is an array of objects which have the properties defined by the class [StepInfo](#-method). Each element of this array describes information for one step in the test.The properties in this class are used to retrieve information for a given step in the test results.
You can access the array of objects with the step information using the [getStepsInfo](./testresults#getstepsinfo-method) method. 
 ### Import statement 
``` 
import com.applitools.eyes.StepInfo;
 
 ``` 
 
### getApiUrls method
Use the object returned by this method to retrieve URLs for the baseline, checkpoint, and diff images. You can obtain these images using the REST API.

#### Syntax 
 ``` 
ApiUrls value = stepinfo.getApiUrls();
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
AppUrls value = stepinfo.getAppUrls();
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
boolean value = stepinfo.getHasBaselineImage();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getIsDifferent method
The value returned by this method is true if the checkpoint does not match the baseline image.

#### Syntax 
 ``` 
boolean value = stepinfo.getIsDifferent();
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
String value = stepinfo.getName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### isHasCheckpointImage method
Returns whether there is a checkpoint image for this step.

#### Syntax 
 ``` 
boolean value = stepinfo.isHasCheckpointImage();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean