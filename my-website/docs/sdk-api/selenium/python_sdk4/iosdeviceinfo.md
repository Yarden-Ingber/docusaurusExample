# IosDeviceInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoint images.
 
 ### Import statement 
``` 
from applitools.selenium import IosDeviceInfo
 
 ``` 

### Constructor 
### IosDeviceInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by running a Safari browser on an iOS simulator.

#### Syntax 
 ``` 
obj = IosDeviceInfo(device_name, screen_orientation, ios_version, baseline_env_name)

obj = IosDeviceInfo(device_name, screen_orientation, ios_version)

obj = IosDeviceInfo(device_name, screen_orientation)

obj = IosDeviceInfo(device_name)
 ``` 

 #### Parameters 
 ###### device\_name 
  
 Type:[IosDeviceName](./iosdevicename) 
  
 One of the devices from the enumerated type of this parameter 
  
  ###### screen\_orientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.PORTRAIT \] 
  
 The orientation of the device (portait or landscape). If this parameter is not provided then the default is [ScreenOrientation.PORTRAIT](./screenorientation) 
  
  ###### ios\_version 
  
 Type:[IosVersion](./iosversion) \[Optional : default = None \] 
  
 The iOS version to use when rendering the checkpoint for this device. 
  
  ###### baseline\_env\_name 
  
 Type:Text \[Optional : default = None \] 
  
 The name of the baseline environment. 
  
 #### Return value 
Type: [IosDeviceInfo](./iosdeviceinfo)
        

 
 ### ios_version property
Use this property to set and retrieve the iOS version to use when rendering the checkpoint for this device.

#### Syntax 
 ``` 
obj.ios_version  = value
value = obj.ios_version
 ``` 
 
 Type:[IosVersion](./iosversion) 
 ### browser property
Use this property to retrieve and set the configured Browser.

#### Syntax 
 ``` 
value = obj.browser
 ``` 
 
 Type:Text 
 ### height property
Use this property to retrieve and set the configured viewport height.

#### Syntax 
 ``` 
value = obj.height
 ``` 
 
 Type:int 
 ### platform property
Use this property to retrieve and set the platform on which the UltrafastGrid rendered this test.

#### Syntax 
 ``` 
value = obj.platform
 ``` 
 
 Type:Text 
 ### viewport_size property
Use this property to retrieve and set the configured viewport size

#### Syntax 
 ``` 
value = obj.viewport_size
 ``` 
 
 Type:[RectangleSize](./rectanglesize) 
 ### width property
Use this property to retrieve and set the configured viewport width.

#### Syntax 
 ``` 
value = obj.width
 ``` 
 
 Type:int 
 ### device_name property
Use this property to retrieve and set the name of the device.

#### Syntax 
 ``` 
obj.device_name  = value
value = obj.device_name
 ``` 
 
 Type:[DeviceName](./devicename) 
 ### screen_orientation property
Use this property to retrieve and set the secreen orientation (portrait or landscape).

#### Syntax 
 ``` 
obj.screen_orientation  = value
value = obj.screen_orientation
 ``` 
 
 Type:[ScreenOrientation](./screenorientation)