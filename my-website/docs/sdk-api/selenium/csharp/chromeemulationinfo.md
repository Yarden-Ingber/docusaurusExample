# ChromeEmulationInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.

### Constructor 
###ChromeEmulationInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by emulating a device using Chrome mobile emulation.
Pass an instances of this class to [AddBrowser](./configuration#addbrowser-method) in order to configure the mobile device defined by the parameters to the method.

#### Syntax 
 ``` 
ChromeEmulationInfo obj = new ChromeEmulationInfo(deviceName, screenOrientation);

ChromeEmulationInfo obj = new ChromeEmulationInfo(deviceName);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, a value from the set of devices defined by [DeviceName](./devicename). 
  
  ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) \[Optional : default = ScreenOrientation.Portrait \] 
  
 If the device should be rendered in portrait (vertical) or landscape (horizontal) orientation. 
  
 #### Return value 
Type: [ChromeEmulationInfo](./chromeemulationinfo)
        
 ####  Remarks 
The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.
        

 
 ### DeviceName property
Use this property to set and retrieve the name of the device.

#### Syntax 
 ``` 
DeviceName value; // give relevant initial value
obj.DeviceName  = value;
value = obj.DeviceName
 ``` 
 
 Type:[DeviceName](./devicename) 
 ### ScreenOrientation property
Use this property to set and retrieve if the device is portrait or landscape

#### Syntax 
 ``` 
ScreenOrientation value; // give relevant initial value
obj.ScreenOrientation  = value;
value = obj.ScreenOrientation
 ``` 
 
 Type:[ScreenOrientation](./screenorientation)