# TestResultsStatus enum
This enum defines literals that define the possible test results for a single test. It is returned by the [status](./testresults#getstatus-property) property. 
###### - Passed 
 All steps in the test matched or are new. 
 ###### - Unresolved 
 At least one step in the test needs resolution. 
 ###### - Failed 
 At least one step in the test failed. 
 