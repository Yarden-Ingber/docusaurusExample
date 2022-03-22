# TestResults class
Encapsulates the results of a visual test, including summary information and checkpoint-specific details. An object of this class is returned by the [close](./eyes#close-method) method upon test completion.
 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import TestResults
 
 ``` 


 
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
 ### status property
Use this property to retrieve a status that represents the results of the test.

#### Syntax 
 ``` 
value = result.status
 ``` 
 
 Type:Text 
Use this property to retrieve one of the following enumerated values: 
 ### steps property
Use this property to retrieve the total number of steps in the result.

#### Syntax 
 ``` 
value = result.steps
 ``` 
 
 Type:int 
 ### url property
Use this property to retrieve a URL which, if opened in a browser, displays the results of this test in the Test Manager.

#### Syntax 
 ``` 
value = result.url
 ``` 
 
 Type:Text