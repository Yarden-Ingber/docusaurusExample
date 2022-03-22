# ChromeEmulationInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.
 
 ### Import statement 
``` 
from applitools.selenium import ChromeEmulationInfo
 
 ``` 

### Constructor 
###ChromeEmulationInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by emulating a device using Chrome mobile emulation.
Pass an instances of this class to [add\_browser](./configuration#addbrowser-method) in order to configure the mobile device defined by the parameters to the method.

#### Syntax 
 ``` 
obj = ChromeEmulationInfo(device_name, screen_orientation, baseline_env_name)

obj = ChromeEmulationInfo(device_name, screen_orientation)

obj = ChromeEmulationInfo(device_name)
 ``` 

 #### Parameters 
 ###### device\_name 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, a value from the set of devices defined by [DeviceName](./devicename). 
  
  ###### screen\_orientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.PORTRAIT \] 
  
 If the device should be rendered in portrait (vertical) or landscape (horizontal) orientation. 
  
  ###### baseline\_env\_name 
  
 Type:Text \[Optional : default = None \] 
  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 #### Return value 
Type: None

 #### Remarks 
The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.
        

 
 ### device_name property
Use this property to set and retrieve the name of the device.

#### Syntax 
 ``` 
obj.device_name  = value
value = obj.device_name
 ``` 
 
 Type:[DeviceName](./devicename) 
deviceName 
 ### screen_orientation property
Use this property to set and retrieve if the device is portrait or landscape

#### Syntax 
 ``` 
obj.screen_orientation  = value
value = obj.screen_orientation
 ``` 
 
 Type:[ScreenOrientation](./screenorientation) 
screenOrientation