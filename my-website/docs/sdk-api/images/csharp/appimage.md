# AppImage class
An object returned by check methods such as [Check](./eyes#check-method) to indicate if the check succeeded.


 
 ### IsMatch property
Use this property to check if the check passed or whether there may have been a mismatch.
This value returned by this property is typically used to decide if it may be useful to retry capturing the image and check it again. A return value of true means that there is no need to retry the checkpoint. A return value of false means that recapturing and rechecking the checkpoint may yield a more accurate result. See the return value description below for more details.

#### Syntax 
 ``` 
bool value = obj.IsMatch;
 ``` 
 
 Type:bool 
A return value of true indicates that the checkpoint matched, or is a new checkpoint. The meaning of a return value of false depends if this is the first checkpoint to return this value or not. For the first checkpoint that returns a value of false, the implication is that there was a mismatch. The test may choose to recapture the image and resend it (when using a check that supports this feature). Once one checkpoint has returned false, all the following checkpoints will also return false. This does not mean that the checkpoint mismatched, only that Eyes will only know the final status of the checkpoint at the end of the test. If required, the actual result of the checkpoint should be obtained from the [StepInfo](./stepinfo) object in the [TestResults](./testresults-method) returned by the [Close](./eyes#close-method) method.