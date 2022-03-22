# ApiUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [\[Eyes close\]](../classes-gen/class_eyes/method-eyes-close-images-objectivec.html) method.The methods in this class are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.
 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 


 
 ### baselineImage property
The value of this property is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = apiurls.baselineImage
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *baselineImage 
 ``` 
 
 Type:NSString\* 
 ### diffImage property
The value of this property is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = apiurls.diffImage
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *diffImage 
 ``` 
 
 Type:NSString\*