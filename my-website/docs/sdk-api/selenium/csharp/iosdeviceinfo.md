# IosDeviceInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoint images.

### Constructor 
### IosDeviceInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by running a Safari browser on an iOS simulator.

#### Syntax 
 ``` 
IosDeviceInfo obj = new IosDeviceInfo(deviceName, screenOrientation, iosVersion);

IosDeviceInfo obj = new IosDeviceInfo(deviceName, screenOrientation);

IosDeviceInfo obj = new IosDeviceInfo(deviceName);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[IosDeviceName](./iosdevicename) 
  
 One of the devices from the enumerated type of this parameter 
  
  ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional : default = Applitools.VisualGrid.ScreenOrientation.Portrait \] 
  
 The orientation of the device (portait or landscape). If this parameter is not provided then the default is [ScreenOrientation.Portrait](./screenorientation) 
  
  ###### iosVersion 
  
 Type:[IosVersion](./iosversion)? \[Optional : default = null \] 
  
 The iOS version to use when rendering the checkpoint for this device. 
  
 #### Return value 
Type: [IosDeviceInfo](./iosdeviceinfo)
        

 
 ### DeviceName property
Use this property to retrieve and set the name of the device.

#### Syntax 
 ``` 
IosDeviceName value = obj.DeviceName;
 ``` 
 
 Type:[IosDeviceName](./iosdevicename) 
 ### ScreenOrientation property
Use this property to retrieve and set the secreen orientation (portrait or landscape).

#### Syntax 
 ``` 
ScreenOrientation value = obj.ScreenOrientation;
 ``` 
 
 Type:[ScreenOrientation](./screenorientation) 
 ### Version property
Use this property to set and retrieve the iOS version to use when rendering the checkpoint for this device.

#### Syntax 
 ``` 
IosVersion? value = obj.Version;
 ``` 
 
 Type:[IosVersion](./iosversion)? 
 ### Version property
Use this property to retrieve the iOS version to use when rendering the checkpoint for this device.

#### Syntax 
 ``` 
IosVersion? value = obj.Version;
 ``` 
 
 Type:[IosVersion](./iosversion)?