# AppUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [close](./eyes#close-method) method.The properties in this class are used to retrieve a URI that can be used in a browser to open the Test Manager on a page that displays information about a particular step.
 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 


 
 ### step property
The value of this property is a URI that when opened in a browser will display the Test Manager Test result page scrolled to the thumbnail for this step.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = appurls.step
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *step 
 ``` 
 
 Type:NSString\*