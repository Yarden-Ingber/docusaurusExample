# appUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [close](./eyes#close-method) method.The properties of this object are used to retrieve information about each of the steps in the test results. Although there is no named class for this object, for convenience it is documented in a class-like style - see [appUrls](#).
 
 ### Require statement 
``` 
const {appUrls} = require('const EyesSDK = require('eyes.selenium'))');
 
 ``` 


 
 ### step property
The value of this property is a URI that when opened in a browser will display the Test Manager Test result page scrolled to the thumbnail for this step.

#### Syntax 
 ``` 
value = appurls.step;
 ``` 
 
 Type:string 
 ### stepEditor property
The value of this property is a URI, that when opened in a browser will display the Test Manager Step Editor page loaded with the results of this step.

#### Syntax 
 ``` 
value = appurls.stepEditor;
 ``` 
 
 Type:string