# IosDeviceInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoint images.
 
 ### Import statement 
``` 
import com.applitools.eyes.visualgrid.model.IosDeviceInfo;
 
 ``` 
### Constructor 
 ### IosDeviceInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by running a Safari browser on an iOS simulator.

#### Syntax 
 ``` 
IosDeviceInfo obj = new IosDeviceInfo(deviceName);

IosDeviceInfo obj = new IosDeviceInfo(deviceName, screenOrientation);

IosDeviceInfo obj = new IosDeviceInfo(deviceName, version);

IosDeviceInfo obj = new IosDeviceInfo(deviceName, screenOrientation, version);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[IosDeviceName](./iosdevicename) 
  
 One of the devices from the enumerated type of this parameter 
  
  ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) 
  
 The orientation of the device (portait or landscape). 
  
  ###### version 
  
 Type:[IosVersion](./iosversion) 
  
 The iOS version to use when rendering the checkpoint for this device. 
  
 #### Return value 
Type: [IosDeviceInfo](./iosdeviceinfo) 
### getDeviceName method
Use this method to retrieve the name of the device.

#### Syntax 
 ``` 
String value = obj.getDeviceName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getScreenOrientation method
Use this method to retrieve the secreen orientation (portrait or landscape).

#### Syntax 
 ``` 
ScreenOrientation value = obj.getScreenOrientation();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ScreenOrientation](./screenorientation) 
### getVersion method
Use this method to retrieve the iOS version to use when rendering the checkpoint for this device.

#### Syntax 
 ``` 
IosVersion value = obj.getVersion();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [IosVersion](./iosversion)