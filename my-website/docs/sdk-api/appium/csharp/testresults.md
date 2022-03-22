# TestResults class
Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [Close](./eyes#close-method) method upon test completion.
 
## Properties 
### AccessibilityStatus property
Returns the overall result of the accessibility test

#### Syntax 
 ``` 
SessionAccessibilityStatus value = result.AccessibilityStatus;
 ``` 
 
 Type:[SessionAccessibilityStatus](./sessionaccessibilitystatus)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### AppName property
Use this property to retrieve the application name.

#### Syntax 
 ``` 
string value = result.AppName;
 ``` 
 
 Type:string 
The application name. 
### AppUrls property
Use this property to retrieve an object with a set of URLs that you can use to access the Test Manager in a browser, preloaded with the results of this test.

#### Syntax 
 ``` 
SessionUrls value = result.AppUrls;
 ``` 
 
 Type:[SessionUrls](./sessionurls) 
 
### BatchId property
Use this property to retrieve the unique batch ID of the test batch.

#### Syntax 
 ``` 
string value = result.BatchId;
 ``` 
 
 Type:string 
The batch ID. 
### BatchName property
Use this property to retrieve the batch name.

#### Syntax 
 ``` 
string value = result.BatchName;
 ``` 
 
 Type:string 
The batch name. 
### BranchName property
Use this property to retrieve the branch name of the test.

#### Syntax 
 ``` 
string value = result.BranchName;
 ``` 
 
 Type:string 
The branch name. 
### Duration property
Use this property to retrieve the amount of time the test ran.

#### Syntax 
 ``` 
long value = result.Duration;
 ``` 
 
 Type:long 
The number of seconds the test ran for. 
### HostApp property
Use this property to retrieve the host application (browser) property of the test.

#### Syntax 
 ``` 
string value = result.HostApp;
 ``` 
 
 Type:string 
The name of the host application 
### HostDisplaySize property
Use this property to retrieve the viewport size used to identify the baseline.

#### Syntax 
 ``` 
RectangleSize value = result.HostDisplaySize;
 ``` 
 
 Type:[RectangleSize](./rectanglesize) 
The host display size. 
### HostOS property
Use this property to retrieve the host OS property of the test.

#### Syntax 
 ``` 
string value = result.HostOS;
 ``` 
 
 Type:string 
The Host OS. 
### Id property
Use this property to retrieve the ID of the test.

#### Syntax 
 ``` 
string value = result.Id;
 ``` 
 
 Type:string 
### IsAborted property
Use this property to retrieve whether the test was aborted or not
Aborted means that [Eyes.AbortAsync](./eyes#abortasync-method), [Eyes.Abort](./eyes#abort-method) or [Eyes.AbortIfNotClosed](./eyes#abortifnotclosed-method) was/were called instead of [Close](./eyes#close-method).

#### Syntax 
 ``` 
bool value = result.IsAborted;
 ``` 
 
 Type:bool 
Use this property to retrieve true if the test was aborted. 
### IsDifferent property
Indicates that at least one step was missing, or a mismatch.
A value of true means that for at least one step a baseline image was found for that step and the checkpoint image does not match that baseline image, A value of false means that for all steps, either the checkpoint image matched the baseline image or it is a new checkpoint image (there is no baseline image yet).

#### Syntax 
 ``` 
bool value = result.IsDifferent;
 ``` 
 
 Type:bool 
### IsNew property
Use this property to retrieve whether this is a new test or not (i.e. no existing baseline was found for this test).

#### Syntax 
 ``` 
bool value = result.IsNew;
 ``` 
 
 Type:bool 
Use this property to retrieve true if this is a new test, false otherwise. 
### Matches property
Use this property to retrieve the number of test steps where the checkpoint image matched the baseline image.

#### Syntax 
 ``` 
int value = result.Matches;
 ``` 
 
 Type:int 
### Mismatches property
Use this property to retrieve the number of test steps where the checkpoint image did not match the baseline image. This includes new steps (i.e. steps where a baseline corresponding to the checkpoint was not found). It does not include missing steps. You can obtain this value using the [Missing](#getmissing-property) property.

#### Syntax 
 ``` 
int value = result.Mismatches;
 ``` 
 
 Type:int 
### Missing property
Use this property to retrieve the number of test steps where an image corresponding to the checkpoint image was not found in the baseline.

#### Syntax 
 ``` 
int value = result.Missing;
 ``` 
 
 Type:int 
### Name property
Use this property to retrieve the name of the test.

#### Syntax 
 ``` 
string value = result.Name;
 ``` 
 
 Type:string 
The name of the test. 
### StartedAt property
Use this property to retrieve the date and time the test started.

#### Syntax 
 ``` 
DateTime value = result.StartedAt;
 ``` 
 
 Type:DateTime 
In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'. 
### Status property
Use this property to retrieve a status that represents the results of the test.

#### Syntax 
 ``` 
TestResultsStatus value = result.Status;
 ``` 
 
 Type:[TestResultsStatus](./testresultsstatus) 
Use this property to retrieve one of the following enumerated values: 
### Steps property
Use this property to retrieve the total number of steps in the result.

#### Syntax 
 ``` 
int value = result.Steps;
 ``` 
 
 Type:int 
### StepsInfo property
Use this property to retrieve an array of objects with information on all steps in the test.

#### Syntax 
 ``` 
StepInfo[] value = result.StepsInfo;
 ``` 
 
 Type:[StepInfo](./stepinfo)\[\] 
This is an array of [StepInfo](./stepinfo) objects. 
### Url property
Use this property to retrieve a URL which, if opened in a browser, displays the results of this test in the Test Manager.

#### Syntax 
 ``` 
string value = result.Url;
 ``` 
 
 Type:string 
### Delete method
Remove the test results from the server.

#### Syntax 
 ``` 
result.Delete();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void
  
