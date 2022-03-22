# StepInfoPlain class
When a test terminates, the [close](./eyes#close-method) method returns an object with methods/properties defined by the [TestResults](./testresults) class. Within the [TestResults](./testresults), there is an array of objects which have the properties defined by the class [StepInfo](./stepinfo). Each element of this array describes information for one step in the test.The properties in this type are used to retrieve information for a given step in the test results.
You can access the array of objects with the step information using the [getStepsInfo](./testresults#getstepsinfo-method) method.
        

 
 ### apiUrls property
Use the object returned by this method to retrieve URLs for the baseline, checkpoint, and diff images. You can obtain these images using the REST API.

#### Syntax 
 ``` 
value = stepinfo.apiUrls;
 ``` 
 
 Type:[ApiUrlsPlain](./apiurlsplain) 
See [ApiUrls](./apiurls) for a detailed description of this object. 
 ### appUrls property
Use the object returned by this property to retrieve the URLs, and then you can use them to open the Test Manager in a browser preloaded with this step.

#### Syntax 
 ``` 
value = stepinfo.appUrls;
 ``` 
 
 Type:[AppUrlsPlain](./appurlsplain) 
See [AppUrls](./appurls) for a detailed description of this object. 
 ### hasBaselineImage property
The value of this property is whether the baseline has a baseline image for this step.

#### Syntax 
 ``` 
value = stepinfo.hasBaselineImage;
 ``` 
 
 Type:boolean 
 ### isDifferent property
The value of this property is true if the checkpoint does not match the baseline image.

#### Syntax 
 ``` 
value = stepinfo.isDifferent;
 ``` 
 
 Type:boolean 
Returns true if a corresponding baseline image exists and the checkpoint image does not match that baseline image, Returns false if the checkpoint image matched the baseline image or if its a new checkpoint image (there is no baseline image yet). 
 ### name property
The value of this property is the name (tag) assigned to the step (in the check method).

#### Syntax 
 ``` 
value = stepinfo.name;
 ``` 
 
 Type:string