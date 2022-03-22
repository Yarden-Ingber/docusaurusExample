# AppUrls class
An object of this class is contained in the [StepInfo](./stepinfo) object, which is in itself an object in the [TestResults](./testresults) object returned by the [close](./eyes#close-method) method.The properties in this class are used to retrieve a URI that can be used in a browser to open the Test Manager on a page that displays information about a particular step.
 
### getStep method
The value returned by this method is a URI that when opened in a browser will display the Test Manager Test result page scrolled to the thumbnail for this step.

#### Syntax 
 ``` 
let value = appurls.getStep();
value = appurls.step;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getStepEditor method
The value returned by this method is a URI, that when opened in a browser will display the Test Manager Step Editor page loaded with the results of this step.

#### Syntax 
 ``` 
let value = appurls.getStepEditor();
value = appurls.stepEditor;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string