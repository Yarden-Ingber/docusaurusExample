# TestResultsSummary class
An object of this type is used to obtain all of the test results that were run using the [ClassicRunner](./classicrunner) runner.
This class is iterable. 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.TestResultsSummary;
 
 ``` 
 
### getAllResults method
Returns an array of [TestResultContainer](./testresultcontainer) objects, one per test result.
The number of tests results is the number of tests run (calls to [open](./eyes#open-method)) multiplied by the number of configured browsers and devices on the Ultrafast Grid.

#### Syntax 
 ``` 
TestResultContainer[] value = obj.getAllResults();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResultContainer](./testresultcontainer)\[\] 
### iterator method
You can use this iterator to iterate over all the test results of this run.

#### Syntax 
 ``` 
Iterator<TestResultContainer> value = obj.iterator();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Iterator<[TestResultContainer](./testresultcontainer)\>