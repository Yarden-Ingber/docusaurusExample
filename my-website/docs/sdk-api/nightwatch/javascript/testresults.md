# TestResults class

Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](./eyes#close-method) method upon test completion.
 
### delete method
Remove the test results from the server.

#### Syntax 
 ``` 
await result.delete();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: `Promise<void>`
### getAccessibilityStatus method
Returns the overall result of the accessibility test

#### Syntax 
 ``` 
let value = result.getAccessibilityStatus();
value = result.accessibilityStatus;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [TestAccessibilityStatus](./sessionaccessibilitystatus)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### getAppName method
Use this method to retrieve the application name.

#### Syntax 
 ``` 
let value = result.getAppName();
value = result.appName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The application name. 
### getAppUrls method
Use this method to retrieve an object with a set of URLs that you can use to access the Test Manager in a browser, preloaded with the results of this test.

#### Syntax 
 ``` 
let value = result.getAppUrls();
value = result.appUrls;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [SessionUrls](./sessionurls)

See [`SessionUrls`](https://applitools.com/docs/api/eyes-sdk/index-gen/class-sessionurls-nightwatch-javascript.html)

The returned object has two properties, both are strings in the form of a URL:

`batch`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results and all of its tests.

`session`

If you paste this URL into a browser then the browser will open the Test manager, displaying the batch results, with the focus on the test of this test result. 
### getBatchId method
Use this method to retrieve the unique batch ID of the test batch.

#### Syntax 
 ``` 
let value = result.getBatchId();
value = result.batchId;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The batch ID. 
### getBatchName method
Use this method to retrieve the batch name.

#### Syntax 
 ``` 
let value = result.getBatchName();
value = result.batchName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The batch name. 
### getBranchName method
Use this method to retrieve the branch name of the test.

#### Syntax 
 ``` 
let value = result.getBranchName();
value = result.branchName;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The branch name. 
### getDuration method
Use this method to retrieve the amount of time the test ran.

#### Syntax 
 ``` 
let value = result.getDuration();
value = result.duration;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number

The number of seconds the test ran for. 
### getHostApp method
Use this method to retrieve the host application (browser) property of the test.

#### Syntax 
 ``` 
let value = result.getHostApp();
value = result.hostApp;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The name of the host application 
### getHostDisplaySize method
Use this method to retrieve the viewport size used to identify the baseline.

#### Syntax 
 ``` 
let value = result.getHostDisplaySize();
value = result.hostDisplaySize;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RectangleSize](./rectanglesize)

The host display size. 
### getHostOS method
Use this method to retrieve the host OS property of the test.

#### Syntax 
 ``` 
let value = result.getHostOS();
value = result.hostOS;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The Host OS. 
### getId method
Use this method to retrieve the ID of the test.

#### Syntax 
 ``` 
let value = result.getId();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getIsAborted method
Use this method to retrieve whether the test was aborted or not
Aborted means that [Eyes.abort](./eyes#abort-method) was/were called instead of [close](./eyes#close-method).

#### Syntax 
 ``` 
let value = result.getIsAborted();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Use this method to retrieve true if the test was aborted. 
### getIsDifferent method
Indicates that at least one step was missing, or a mismatch.
A value of true means that for at least one step a baseline image was found for that step and the checkpoint image does not match that baseline image, A value of false means that for all steps, either the checkpoint image matched the baseline image or it is a new checkpoint image (there is no baseline image yet).

#### Syntax 
 ``` 
let value = result.getIsDifferent();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getIsNew method
Use this method to retrieve whether this is a new test or not (i.e. no existing baseline was found for this test).

#### Syntax 
 ``` 
let value = result.getIsNew();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean

Use this method to retrieve true if this is a new test, false otherwise. 
### getMatches method
Use this method to retrieve the number of test steps where the checkpoint image matched the baseline image.

#### Syntax 
 ``` 
let value = result.getMatches();
value = result.matches;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getMismatches method
Use this method to retrieve the number of test steps where the checkpoint image did not match the baseline image. This includes new steps (i.e. steps where a baseline corresponding to the checkpoint was not found). It does not include missing steps. You can obtain this value using the [getMissing](#getmissing-method) method.

#### Syntax 
 ``` 
let value = result.getMismatches();
value = result.mismatches;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getMissing method
Use this method to retrieve the number of test steps where an image corresponding to the checkpoint image was not found in the baseline.

#### Syntax 
 ``` 
let value = result.getMissing();
value = result.missing;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getName method
Use this method to retrieve the name of the test.

#### Syntax 
 ``` 
let value = result.getName();
value = result.name;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string

The name of the test. 
### getStartedAt method
Use this method to retrieve the date and time the test started.

#### Syntax 
 ``` 
let value = result.getStartedAt();
value = result.startedAt;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: Date

In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'. 
### getStatus method
Use this method to retrieve a status that represents the results of the test.

#### Syntax 
 ``` 
let value = result.getStatus();
value = result.status;
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
let value = result.getSteps();
value = result.steps;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: number 
### getStepsInfo method
Use this method to retrieve an array of objects with information on all steps in the test.

#### Syntax 
 ``` 
let value = result.getStepsInfo();
value = result.stepsInfo;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [StepInfo](./stepinfo)\[\]

This is an array of [StepInfo](./stepinfo) objects. 
### getUrl method
Use this method to retrieve a URL which, if opened in a browser, displays the results of this test in the Test Manager.

#### Syntax 
 ``` 
let value = result.getUrl();
value = result.url;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string