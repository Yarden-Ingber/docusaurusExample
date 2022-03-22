# TestResults class
Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](./eyes#close-method) method upon test completion.
 
 ### Import statement 
``` 
@import EyesXCUI
 
 ``` 


 
 ### accessibilityStatus property
Returns the overall result of the accessibility test

#### Syntax 
 ##### Call syntax 
 ``` 
SessionAccessibilityStatus* value = result.accessibilityStatus
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) SessionAccessibilityStatus *accessibilityStatus 
 ``` 
 
 Type:[SessionAccessibilityStatus](./sessionaccessibilitystatus)\*

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### appName property
Use this property to retrieve the application name.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.appName
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *appName 
 ``` 
 
 Type:NSString\* 
The application name. 
 ### appUrls property
Use this property to retrieve an object with a set of URLs that you can use to access the Test Manager in a browser, preloaded with the results of this test.

#### Syntax 
 ##### Call syntax 
 ``` 
SessionUrls* value = result.appUrls
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) SessionUrls *appUrls 
 ``` 
 
 Type:[SessionUrls](./sessionurls)\* 
 
 ### batchId property
Use this property to retrieve the unique batch ID of the test batch.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.batchId
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *batchId 
 ``` 
 
 Type:NSString\* 
The batch ID. 
 ### batchName property
Use this property to retrieve the batch name.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.batchName
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *batchName 
 ``` 
 
 Type:NSString\* 
The batch name. 
 ### branchName property
Use this property to retrieve the branch name of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.branchName
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *branchName 
 ``` 
 
 Type:NSString\* 
The branch name. 
 ### duration property
Use this property to retrieve the amount of time the test ran.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = result.duration
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) NSInteger duration 
 ``` 
 
 Type:NSInteger 
The number of seconds the test ran for. 
 ### hostApp property
Use this property to retrieve the host application (browser) property of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.hostApp
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *hostApp 
 ``` 
 
 Type:NSString\* 
The name of the host application 
 ### hostDisplaySize property
Use this property to retrieve the viewport size used to identify the baseline.

#### Syntax 
 ##### Call syntax 
 ``` 
CGSize value = result.hostDisplaySize
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) CGSize hostDisplaySize 
 ``` 
 
 Type:CGSize 
The host display size. 
 ### hostOS property
Use this property to retrieve the host OS property of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.hostOS
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *hostOS 
 ``` 
 
 Type:NSString\* 
The Host OS. 
 ### isAborted property
Use this property to retrieve whether the test was aborted or not
Aborted means that [\[Eyes abortIfNotClosed\]](../class_eyes/method-eyes-abortifnotclosed-xcui-objectivec.html) was/were called instead of [close](./eyes#close-method).

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value = result.isAborted
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) BOOL isAborted 
 ``` 
 
 Type:BOOL 
Use this property to retrieve true if the test was aborted. 
 ### isDifferent property
Indicates that at least one step was missing, or a mismatch.
A value of true means that for at least one step a baseline image was found for that step and the checkpoint image does not match that baseline image, A value of false means that for all steps, either the checkpoint image matched the baseline image or it is a new checkpoint image (there is no baseline image yet).

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value = result.isDifferent
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) BOOL isDifferent 
 ``` 
 
 Type:BOOL 
 ### isNew property
Use this property to retrieve whether this is a new test or not (i.e. no existing baseline was found for this test).

#### Syntax 
 ##### Call syntax 
 ``` 
BOOL value = result.isNew
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) BOOL isNew 
 ``` 
 
 Type:BOOL 
Use this property to retrieve true if this is a new test, false otherwise. 
 ### matches property
Use this property to retrieve the number of test steps where the checkpoint image matched the baseline image.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = result.matches
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) NSInteger matches 
 ``` 
 
 Type:NSInteger 
 ### mismatches property
Use this property to retrieve the number of test steps where the checkpoint image did not match the baseline image. This includes new steps (i.e. steps where a baseline corresponding to the checkpoint was not found). It does not include missing steps. You can obtain this value using the [missing](#getmissing-property) property.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = result.mismatches
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) NSInteger mismatches 
 ``` 
 
 Type:NSInteger 
 ### missing property
Use this property to retrieve the number of test steps where an image corresponding to the checkpoint image was not found in the baseline.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = result.missing
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) NSInteger missing 
 ``` 
 
 Type:NSInteger 
 ### name property
Use this property to retrieve the name of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.name
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *name 
 ``` 
 
 Type:NSString\* 
The name of the test. 
 ### startedAt property
Use this property to retrieve the date and time the test started.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.startedAt
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *startedAt 
 ``` 
 
 Type:NSString\* 
In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'. 
 ### status property
Use this property to retrieve a status that represents the results of the test.

#### Syntax 
 ##### Call syntax 
 ``` 
TestResultStatus value = result.status
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, nonatomic) TestResultStatus status 
 ``` 
 
 Type:[TestResultStatus](./testresultsstatus) 
Use this property to retrieve one of the following enumerated values: 
 ### steps property
Use this property to retrieve the total number of steps in the result.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = result.steps
 ``` 
 
 ##### Declaration 
 ``` 
 (assign, readonly, nonatomic) NSInteger steps 
 ``` 
 
 Type:NSInteger 
 ### stepsInfo property
Use this property to retrieve an array of objects with information on all steps in the test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSArray<StepInfo *>* value = result.stepsInfo
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, copy, nonatomic) NSArray<StepInfo *> *stepsInfo 
 ``` 
 
 Type:NSArray<[StepInfo](./stepinfo) > 
This is an array of [StepInfo](./stepinfo) objects. 
 ### url property
Use this property to retrieve a URL which, if opened in a browser, displays the results of this test in the Test Manager.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = result.url
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *url 
 ``` 
 
 Type:NSString\*