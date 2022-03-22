# TestResultsSummary class
An object of this type is used to obtain all of the test results that were run using the [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner) runner.
This class is iterable. 
### getAllResults method
Returns an array of [TestResultContainer](./testresultcontainer) objects, one per test result.
The number of tests results is the number of tests run (calls to [open](./eyes#open-method)) multiplied by the number of configured browsers and devices on the Ultrafast Grid.

#### Syntax 
 ``` 
let value = obj.getAllResults();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResultContainer](./testresultcontainer)\[\]