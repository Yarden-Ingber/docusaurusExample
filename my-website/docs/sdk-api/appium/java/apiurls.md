# ApiUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [Eyes.closeAsync](./eyes#closeasync-method) or [Eyes.close](./eyes#close-method) method.The methods in this class are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.
 
 ### Import statement 
``` 
import com.applitools.eyes.StepInfo.ApiUrls;
 
 ``` 
 
### getBaselineImage method
The value returned by this method is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax 
 ``` 
String value = apiurls.getBaselineImage();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getCheckpointImage method
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint image of this step.

#### Syntax 
 ``` 
String value = apiurls.getCheckpointImage();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getCheckpointImageThumbnail method
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint thumbnail image of this step.

#### Syntax 
 ``` 
String value = apiurls.getCheckpointImageThumbnail();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getDiffImage method
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax 
 ``` 
String value = apiurls.getDiffImage();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String