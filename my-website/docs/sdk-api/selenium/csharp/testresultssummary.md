# TestResultsSummary class
An object of this type is used to obtain all of the test results that were run using the [VisualGridRunner](./visualgridrunner) or [ClassicRunner](./classicrunner) runner.
This class is iterable. 
### GetAllResults method
Returns an array of [TestResultContainer](./testresultcontainer) objects, one per test result.
The number of tests results is the number of tests run (calls to [Open](./eyes#open-method)) multiplied by the number of configured browsers and devices on the Ultrafast Grid.

#### Syntax 
 ``` 
TestResultContainer[] value = obj.GetAllResults();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResultContainer](./testresultcontainer)\[\] 
### GetEnumerator method
You can use this enumerator to iterate over all the test results of this run.

#### Syntax 
 ``` 
IEnumerator<TestResultContainer> value = obj.GetEnumerator();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: IEnumerator<[TestResultContainer](./testresultcontainer)\>