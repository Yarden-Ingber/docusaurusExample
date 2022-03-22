# ChromeEmulationInfo class
Objects of this type are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.

### Constructor 
### chromeEmulationInfo property
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by emulating a device using Chrome mobile emulation.
Pass an instances of this class to [addBrowser](./configuration#addbrowser-method) in order to configure the mobile device defined by the parameters to the method.

#### Syntax 
 ``` 
obj = { chromeEmulationInfo: value };
 ``` 
 
 Type: 
 `{ deviceName: [DeviceName](./devicename) | undefined; screenOrientation?: [ScreenOrientation](./screenorientation) | undefined; };` 


 #### Remarks 
The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.