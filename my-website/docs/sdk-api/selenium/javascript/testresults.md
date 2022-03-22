# TestResults class
Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](./eyes#close-method) method upon test completion.
 
 ### Require statement 
``` 
const {TestResults} = require('const EyesSDK = require('eyes.selenium'))');
 
 ``` 


 
 ### appUrls property
Use this property to retrieve an object with a set of URLs that you can use to access the Test Manager in a browser, preloaded with the results of this test.

#### Syntax 
 ``` 
value = result.appUrls;
 ``` 
 
 Type: 
 
 `{ batch: session };` 
 
 ### appname property
Use this property to retrieve the application name.

#### Syntax 
 ``` 
value = result.appname;
 ``` 
 
 Type:string 
The application name. 
 ### batchId property
Use this property to retrieve the unique batch ID of the test batch.

#### Syntax 
 ``` 
value = result.batchId;
 ``` 
 
 Type:string 
The batch ID. 
 ### batchName property
Use this property to retrieve the batch name.

#### Syntax 
 ``` 
value = result.batchName;
 ``` 
 
 Type:string 
The batch name. 
 ### branchName property
Use this property to retrieve the branch name of the test.

#### Syntax 
 ``` 
value = result.branchName;
 ``` 
 
 Type:string 
The branch name. 
 ### duration property
Use this property to retrieve the amount of time the test ran.

#### Syntax 
 ``` 
value = result.duration;
 ``` 
 
 Type:number 
The number of seconds the test ran for. 
 ### hostApp property
Use this property to retrieve the host application (browser) property of the test.

#### Syntax 
 ``` 
value = result.hostApp;
 ``` 
 
 Type:string 
The name of the host application 
 ### hostDisplaySize property
Use this property to retrieve the viewport size used to identify the baseline.

#### Syntax 
 ``` 
value = result.hostDisplaySize;
 ``` 
 
 Type: 
The host display size. 
 `{ width: number; height: number };` 
 
 ### hostOS property
Use this property to retrieve the host OS property of the test.

#### Syntax 
 ``` 
value = result.hostOS;
 ``` 
 
 Type:string 
The Host OS. 
 ### isAborted property
Use this property to retrieve whether the test was aborted or not
Aborted means that [Eyes.abortIfNotClosed](./eyes#abortifnotclosed-method) was/were called instead of [close](./eyes#close-method).

#### Syntax 
 ``` 
value = result.isAborted;
 ``` 
 
 Type:boolean 
Use this property to retrieve true if the test was aborted. 
 ### isDifferent property
Indicates that at least one step was missing, or a mismatch.
A value of true means that for at least one step a baseline image was found for that step and the checkpoint image does not match that baseline image, A value of false means that for all steps, either the checkpoint image matched the baseline image or it is a new checkpoint image (there is no baseline image yet).

#### Syntax 
 ``` 
value = result.isDifferent;
 ``` 
 
 Type:boolean 
 ### isnew property
Use this property to retrieve whether this is a new test or not (i.e. no existing baseline was found for this test).

#### Syntax 
 ``` 
value = result.isnew;
 ``` 
 
 Type:boolean 
Use this property to retrieve true if this is a new test, false otherwise. 
 ### matches property
Use this property to retrieve the number of test steps where the checkpoint image matched the baseline image.

#### Syntax 
 ``` 
value = result.matches;
 ``` 
 
 Type:number 
 ### mismatches property
Use this property to retrieve the number of test steps where the checkpoint image did not match the baseline image. This includes new steps (i.e. steps where a baseline corresponding to the checkpoint was not found). It does not include missing steps. You can obtain this value using the [missing](#getmissing-property) property.

#### Syntax 
 ``` 
value = result.mismatches;
 ``` 
 
 Type:number 
 ### missing property
Use this property to retrieve the number of test steps where an image corresponding to the checkpoint image was not found in the baseline.

#### Syntax 
 ``` 
value = result.missing;
 ``` 
 
 Type:number 
 ### name property
Use this property to retrieve the name of the test.

#### Syntax 
 ``` 
value = result.name;
 ``` 
 
 Type:string 
The name of the test. 
 ### startedAt property
Use this property to retrieve the date and time the test started.

#### Syntax 
 ``` 
value = result.startedAt;
 ``` 
 
 Type:string 
In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'. 
 ### status property
Use this property to retrieve a status that represents the results of the test.

#### Syntax 
 ``` 
value = result.status;
 ``` 
 
 Type:string 
Use this property to retrieve one of the following string values: 
 ### steps property
Use this property to retrieve the total number of steps in the result.

#### Syntax 
 ``` 
value = result.steps;
 ``` 
 
 Type:number 
 ### stepsInfo property
Use this property to retrieve an array of objects with information on all steps in the test.

#### Syntax 
 ``` 
value = result.stepsInfo;
 ``` 
 
 Type:[StepInfo](./stepinfo)\[\] 
This is an array of [StepInfo](./stepinfo) objects.