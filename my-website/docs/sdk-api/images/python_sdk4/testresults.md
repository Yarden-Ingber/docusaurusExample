# TestResults class
Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](./eyes#close-method) method upon test completion.
 
 ### Import statement 
``` 
from applitools.images import TestResults
 
 ``` 
 
## Properties 
### accessibility_status property
Returns the overall result of the accessibility test

#### Syntax 
 ``` 
value = result.accessibility_status
 ``` 
 
 Type:[SessionAccessibilityStatus](./sessionaccessibilitystatus)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
### app_name property
Use this property to retrieve the application name.

#### Syntax 
 ``` 
value = result.app_name
 ``` 
 
 Type:Text 
The application name. 
### app_urls property
Use this property to retrieve an object with a set of URLs that you can use to access the Test Manager in a browser, preloaded with the results of this test.

#### Syntax 
 ``` 
value = result.app_urls
 ``` 
 
 Type:[SessionUrls](./sessionurls) 
 
### batch_id property
Use this property to retrieve the unique batch ID of the test batch.

#### Syntax 
 ``` 
value = result.batch_id
 ``` 
 
 Type:Text 
The batch ID. 
### batch_name property
Use this property to retrieve the batch name.

#### Syntax 
 ``` 
value = result.batch_name
 ``` 
 
 Type:Text 
The batch name. 
### branch_name property
Use this property to retrieve the branch name of the test.

#### Syntax 
 ``` 
value = result.branch_name
 ``` 
 
 Type:Text 
The branch name. 
### duration property
Use this property to retrieve the amount of time the test ran.

#### Syntax 
 ``` 
value = result.duration
 ``` 
 
 Type:int 
The number of seconds the test ran for. 
### host_app property
Use this property to retrieve the host application (browser) property of the test.

#### Syntax 
 ``` 
value = result.host_app
 ``` 
 
 Type:Text 
The name of the host application 
### host_display_size property
Use this property to retrieve the viewport size used to identify the baseline.

#### Syntax 
 ``` 
value = result.host_display_size
 ``` 
 
 Type:[RectangleSize](./rectanglesize) 
The host display size. 
### host_os property
Use this property to retrieve the host OS property of the test.

#### Syntax 
 ``` 
value = result.host_os
 ``` 
 
 Type:Text 
The Host OS. 
### id property
Use this property to retrieve the ID of the test.

#### Syntax 
 ``` 
value = result.id
 ``` 
 
 Type:Text 
### is_aborted property
Use this property to retrieve whether the test was aborted or not
Aborted means that [Eyes.abort](./eyes#abort-method) or [Eyes.abort\_if\_not\_closed](./eyes#abortifnotclosed-method) was/were called instead of [close](./eyes#close-method).

#### Syntax 
 ``` 
value = result.is_aborted
 ``` 
 
 Type:bool 
Use this property to retrieve True if the test was aborted. 
### is_different property
Indicates that at least one step was missing, or a mismatch.
A value of True means that for at least one step a baseline image was found for that step and the checkpoint image does not match that baseline image, A value of False means that for all steps, either the checkpoint image matched the baseline image or it is a new checkpoint image (there is no baseline image yet).

#### Syntax 
 ``` 
value = result.is_different
 ``` 
 
 Type:bool 
### is_new property
Use this property to retrieve whether this is a new test or not (i.e. no existing baseline was found for this test).

#### Syntax 
 ``` 
value = result.is_new
 ``` 
 
 Type:bool 
Use this property to retrieve true if this is a new test, false otherwise. 
### matches property
Use this property to retrieve the number of test steps where the checkpoint image matched the baseline image.

#### Syntax 
 ``` 
value = result.matches
 ``` 
 
 Type:int 
### mismatches property
Use this property to retrieve the number of test steps where the checkpoint image did not match the baseline image. This includes new steps (i.e. steps where a baseline corresponding to the checkpoint was not found). It does not include missing steps. You can obtain this value using the [missing](#getmissing-property) property.

#### Syntax 
 ``` 
value = result.mismatches
 ``` 
 
 Type:int 
### missing property
Use this property to retrieve the number of test steps where an image corresponding to the checkpoint image was not found in the baseline.

#### Syntax 
 ``` 
value = result.missing
 ``` 
 
 Type:int 
### name property
Use this property to retrieve the name of the test.

#### Syntax 
 ``` 
value = result.name
 ``` 
 
 Type:Text 
The name of the test. 
### started_at property
Use this property to retrieve the date and time the test started.

#### Syntax 
 ``` 
value = result.started_at
 ``` 
 
 Type:Text 
In ISO 8601 format. For example, '2018-07-31T08:06:41.3932844+00:00'. 
### status property
Use this property to retrieve a status that represents the results of the test.

#### Syntax 
 ``` 
value = result.status
 ``` 
 
 Type:[TestResultsStatus](./testresultsstatus) 
Use this property to retrieve one of the following enumerated values: 
### steps property
Use this property to retrieve the total number of steps in the result.

#### Syntax 
 ``` 
value = result.steps
 ``` 
 
 Type:int 
### steps_info property
Use this property to retrieve an array of objects with information on all steps in the test.

#### Syntax 
 ``` 
value = result.steps_info
 ``` 
 
 Type:List\[[StepInfo](./stepinfo)\] 
This is an array of [StepInfo](./stepinfo) objects. 
### url property
Use this property to retrieve a URL which, if opened in a browser, displays the results of this test in the Test Manager.

#### Syntax 
 ``` 
value = result.url
 ``` 
 
 Type:Text 
### delete method
Remove the test results from the server.

#### Syntax 
 ``` 
value = result.delete()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: None
  
