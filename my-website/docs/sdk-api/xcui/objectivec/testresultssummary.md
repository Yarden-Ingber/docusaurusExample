# TestResultsSummary class
An object of this type is used to obtain all of the test results that were run using the [ClassicRunner](./classicrunner) runner.
This class is iterable. 
 ### Import statement 
``` 
@import EyesXCUI
 
 ``` 
 
### getAllResults method
Returns an array of [TestResults](./testresults) objects, one per test result.
The number of tests results is the number of tests run (calls to [openWithApplicationName](./eyes#open-method)) multiplied by the number of configured browsers and devices on the Ultrafast Grid.

#### Syntax 
 ##### Call syntax 
 ``` 
NSArray<TestResults *>* value =  [ obj getAllResults    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(NSArray<TestResults *> *)getAllResults 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: NSArray<[TestResults](./testresults) >