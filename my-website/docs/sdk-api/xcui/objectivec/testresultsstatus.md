# TestResultStatus enum
This enum defines literals that define the possible test results for a single test. It is returned by the [status](./testresults#getstatus-property) property. 
###### - TestResultStatusPassed 
 All steps in the test matched or are new. 
 ###### - TestResultStatusUnresolved 
 At least one step in the test needs resolution. 
 ###### - TestResultStatusFailed 
 At least one step in the test failed. 
 