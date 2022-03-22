# AppUrlsPlain class
An object of this type is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [close](./eyes#close-method) method.The properties in this type are used to retrieve a URI that can be used in a browser to open the Test Manager on a page that displays information about a particular step.


 
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