# StepInfo class
When a test terminates, the [close](./eyes#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults-method) class. Within the [TestResults](./testresults-method), there is an array of objects which have the properties defined by the class [StepInfo](#-method). Each element of this array describes information for one step in the test.The properties in this class are used to retrieve information for a given step in the test results.
You can access the array of objects with the step information using the [stepsInfo](./testresults#getstepsinfo-property) property. 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 


 
 ### apiUrls property
Use the object returned by this property to retrieve URLs for the baseline, checkpoint, and diff images. You can obtain these images using the REST API.

#### Syntax 
 ##### Call syntax 
 ``` 
ApiUrls* value = stepinfo.apiUrls
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) ApiUrls *apiUrls 
 ``` 
 
 Type:[ApiUrls](./apiurls)\* 
See [ApiUrls](./apiurls) for a detailed description of this object. 
 ### appUrls property
Use the object returned by this property to retrieve the URLs, and then you can use them to open the Test Manager in a browser preloaded with this step.

#### Syntax 
 ##### Call syntax 
 ``` 
AppUrls* value = stepinfo.appUrls
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) AppUrls *appUrls 
 ``` 
 
 Type:[AppUrls](./appurls)\* 
See [AppUrls](./appurls) for a detailed description of this object. 
 ### hasBaselineImage property
The value of this property is whether the baseline has a baseline image for this step.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value = stepinfo.hasBaselineImage
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) BOOL hasBaselineImage 
 ``` 
 
 Type:BOOL 
 ### isDifferent property
The value of this property is true if the checkpoint does not match the baseline image.

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value = stepinfo.isDifferent
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) BOOL isDifferent 
 ``` 
 
 Type:BOOL 
Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet). 
 ### name property
The value of this property is the name (tag) assigned to the step (in the check method).

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = stepinfo.name
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *name 
 ``` 
 
 Type:NSString\*