# BatchInfo class
Call the [Eyes.batch](./eyes#setbatch-property) property with an object of this class to configure the batch for one or more tests.
See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for details and an example. 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import BatchInfo
 
 ``` 
### Constructor 
### BatchInfo method
The constructor for the [BatchInfo](./batchinfo) class.
Create the object, set it up and assign it to the batch before the test starts using the [Eyes.batch](./eyes#setbatch-property) property. See [How to group tests into batches using the SDK](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html) for more details and an example.

#### Syntax 
 ``` 
batch_info = BatchInfo(name, started_at)

batch_info = BatchInfo(name)

batch_info = BatchInfo()
 ``` 

 #### Parameters 
 ###### name 
  
 Type:Text \[Optional : default = None \] 
  
 The name of the batch. If a `None` is passed then the name will be taken from the environment variable APPLITOOLS\_BATCH\_NAME. If the environment variable is not defined then the name of the first test is used as the batch name. 
  
  ###### started\_at 
  
 Type:datetime \[Optional : default = None \] 
  
 The date and time that will be displayed in the Test Manager as the batch start time. 
  
 #### Return value 
Type: [BatchInfo](./batchinfo)
        

 
 ### id property
Use this property to set and retrieve the unique id of the batch.
You need to set the id explicitly if you want to batch tests that are run at different times or in different platforms or processes. For more information see [Batching tests in a distributed environment](https://applitools.com/docs/topics/working-with-test-batches/batching-tests-in-a-distributed-environment.html)
#### Syntax 
 ``` 
batch_info.id  = value
value = batch_info.id
 ``` 
 
 Type:Text 
The unique id of the batch. If not passed, or passed as None, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then the value of the environment variable will be used as the id. If the environment variable is not defined then a unique internal id will be generated and used.
        
 ####  Remarks 
If the id is not set, and the environment variable APPLITOOLS\_BATCH\_ID is defined, then its value will be used as the id. If the environment variable is not defined, then an internal unique id will be generated and used. Since this value is unique for each test run, if you don't set the id explicitly you can only batch tests that run in the current test run. 
 ### name property
Use this property to set and retrieve the name of the batch.

#### Syntax 
 ``` 
batch_info.name  = value
value = batch_info.name
 ``` 
 
 Type:Text 
The name of the batch. 
 ### started_at property
Use this property to set and retrieve the date and time that will be displayed in the Test Manager as the start time of the batch.

#### Syntax 
 ``` 
batch_info.started_at  = value
value = batch_info.started_at
 ``` 
 
 Type:datetime 
The date and time that will be displayed in the Test Manager as the batch start time.