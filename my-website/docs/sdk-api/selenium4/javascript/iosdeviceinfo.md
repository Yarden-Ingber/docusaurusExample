# IOSDeviceInfo class
Objects of this type are used to configure the Ultrafast Grid to render checkpoint images.

### Constructor 
### iosDeviceInfo property
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by running a Safari browser on an iOS simulator.

#### Syntax 
 ``` 
obj = { iosDeviceInfo: value };
 ``` 
 
 Type: 
 `{ deviceName: IosDeviceNamePlain; iosVersion?: IosVersionPlain; screenOrientation?: ScreenOrientationPlain; };` 
 
 IosDeviceNamePlain

This type allows passing strings instead of enumerated values, for the list of enum values see [IosDeviceName](./iosdevicename).

IosVersionPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [IosVersion](./iosversion).

ScreenOrientationPlain

This type allows passing strings instead of enumerated values, for the list of enum values see [ScreenOrientation](./screenorientation).