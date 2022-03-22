# TestResults class
Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](./eyes#close-method) method upon test completion.
 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.TestResults;
 
 ``` 
 
### getAccessibilityStatus method
Returns the overall result of the accessibility test

#### Syntax 
 ``` 
SessionAccessibilityStatus value = result.getAccessibilityStatus();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [SessionAccessibilityStatus](./sessionaccessibilitystatus)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### getAppName method
Use this method to retrieve the application name.

#### Syntax 
 ``` 
String value = result.getAppName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String

The application name. 
### getMatches method
Use this method to retrieve the number of test steps where the checkpoint image matched the baseline image.

#### Syntax 
 ``` 
int value = result.getMatches();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getMismatches method
Use this method to retrieve the number of test steps where the checkpoint image did not match the baseline image. This includes new steps (i.e. steps where a baseline corresponding to the checkpoint was not found). It does not include missing steps. You can obtain this value using the [getMissing](#getmissing-method) method.

#### Syntax 
 ``` 
int value = result.getMismatches();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getMissing method
Use this method to retrieve the number of test steps where an image corresponding to the checkpoint image was not found in the baseline.

#### Syntax 
 ``` 
int value = result.getMissing();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getName method
Use this method to retrieve the name of the test.

#### Syntax 
 ``` 
String value = result.getName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String

The name of the test. 
### getStatus method
Use this method to retrieve a status that represents the results of the test.

#### Syntax 
 ``` 
TestResultsStatus value = result.getStatus();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestResultsStatus](./testresultsstatus)

Use this method to retrieve one of the following enumerated values:

*   TestResultsStatus.Passed
*   TestResultsStatus.Unresolved
*   TestResultsStatus.Failed

See [TestResultsStatus](./testresultsstatus) for details. 
### getSteps method
Use this method to retrieve the total number of steps in the result.

#### Syntax 
 ``` 
int value = result.getSteps();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getUrl method
Use this method to retrieve a URL which, if opened in a browser, displays the results of this test in the Test Manager.

#### Syntax 
 ``` 
String value = result.getUrl();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### isAborted method
Use this method to retrieve whether the test was aborted or not
Aborted means that [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) was/were called instead of [close](./eyes#close-method).

#### Syntax 
 ``` 
boolean value = result.isAborted();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Use this method to retrieve true if the test was aborted. 
### isDifferent method
Indicates that at least one step was missing, or a mismatch.
A value of true means that for at least one step a baseline image was found for that step and the checkpoint image does not match that baseline image, A value of false means that for all steps, either the checkpoint image matched the baseline image or it is a new checkpoint image (there is no baseline image yet).

#### Syntax 
 ``` 
boolean value = result.isDifferent();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### isNew method
Use this method to retrieve whether this is a new test or not (i.e. no existing baseline was found for this test).

#### Syntax 
 ``` 
boolean value = result.isNew();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Use this method to retrieve true if this is a new test, false otherwise.